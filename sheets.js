var sheetName = 'POSTS';
var scriptProp = PropertiesService.getScriptProperties();

/**
 * Cria uma resposta JSON padronizada.
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Função principal para requisições GET.
 * Lê um ou todos os posts.
 */
function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    var id = e.parameter.id;

    var data = sheet.getDataRange().getValues();
    var headers = data.shift();

    var result = data.map(function(row) {
      var obj = {};
      headers.forEach(function(header, i) {
        obj[header] = row[i];
      });
      return obj;
    });

    if (id) {
      result = result.filter(function(item) {
        return String(item.id) === String(id);
      });
    }

    return createJsonResponse({ success: true, data: result });
  } catch (error) {
    return createJsonResponse({ success: false, message: error.message });
  }
}

/**
 * Função principal para requisições POST.
 * Roteia a ação para criar, atualizar ou deletar um post.
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    var requestData = JSON.parse(e.postData.contents);
    var action = requestData.action;
    var postData = requestData.data;

    switch (action) {
      case 'create':
        return createPost(sheet, postData);
      case 'update':
        return updatePost(sheet, postData);
      case 'delete':
        return deletePost(sheet, postData);
      default:
        return createJsonResponse({ success: false, message: 'Ação inválida.' });
    }
  } catch (error) {
    return createJsonResponse({ success: false, message: error.message });
  }
}

/**
 * Cria um novo post na planilha.
 */
function createPost(sheet, postData) {
  var newId = new Date().getTime().toString(); // ID único baseado no tempo
  var newRow = [
    newId,
    postData.title,
    postData.content,
    postData.description,
    new Date(), // Data de criação
    0, // Views iniciais
    0  // Comentários iniciais
  ];
  sheet.appendRow(newRow);
  return createJsonResponse({ success: true, message: 'Post criado com sucesso!', id: newId });
}

/**
 * Atualiza um post existente.
 */
function updatePost(sheet, postData) {
  var id = postData.id;
  if (!id) {
    return createJsonResponse({ success: false, message: 'ID do post é obrigatório para atualizar.' });
  }

  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var rowIndex = -1;

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      rowIndex = i + 1;
      break;
    }
  }

  if (rowIndex === -1) {
    return createJsonResponse({ success: false, message: 'Post não encontrado.' });
  }

  // Atualiza apenas os campos fornecidos
  headers.forEach(function(header, i) {
    if (postData.hasOwnProperty(header)) {
      sheet.getRange(rowIndex, i + 1).setValue(postData[header]);
    }
  });

  return createJsonResponse({ success: true, message: 'Post atualizado com sucesso!' });
}

/**
 * Deleta um post.
 */
function deletePost(sheet, postData) {
  var id = postData.id;
  if (!id) {
    return createJsonResponse({ success: false, message: 'ID do post é obrigatório para deletar.' });
  }

  var data = sheet.getDataRange().getValues();
  var rowIndex = -1;

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      rowIndex = i + 1;
      break;
    }
  }

  if (rowIndex === -1) {
    return createJsonResponse({ success: false, message: 'Post não encontrado.' });
  }

  sheet.deleteRow(rowIndex);
  return createJsonResponse({ success: true, message: 'Post deletado com sucesso!' });
}




// codigo da implantação:
// AKfycbwNAG8EYCqXav99Pp2Ye9tZiE6XTe9MJeE-aZ-wabqQgZn3DUiT3xld0yoYBnKMcBx1FA

// app da web
// https://script.google.com/macros/s/AKfycbwNAG8EYCqXav99Pp2Ye9tZiE6XTe9MJeE-aZ-wabqQgZn3DUiT3xld0yoYBnKMcBx1FA/exec

