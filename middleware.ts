import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"


export async function middleware(req: NextRequest){
  // A função getToken decodifica o cookie de sessão (JWT).
  // É crucial que o 'secret' aqui seja EXATAMENTE o mesmo do seu arquivo route.ts.
  const token = await getToken({ req, secret: process.env.AUTH_SECRET })
  const { pathname } = req.nextUrl

  // CASO 1: O usuário NÃO está logado (não tem token).
  if (!token) {
    // Se ele já está na página de login (/scvd), não faça nada. Deixe-o em paz.
    if (pathname === "/scvd") {
      return NextResponse.next()
    }
    // Se ele tentar acessar qualquer outra página privada, redirecione-o para o login.
    const url = req.nextUrl.clone()
    url.pathname = "/scvd"
    return NextResponse.redirect(url)
  }

  // CASO 2: O usuário JÁ está logado (tem token).
  if (token) {
    // Se ele tentar acessar a página de login (/scvd), redirecione-o para a área principal do painel.
    // Isso evita que um usuário logado veja a página de login novamente.
    if (pathname === "/scvd") {
      const url = req.nextUrl.clone()
      url.pathname = "/scvd/posts"
      return NextResponse.redirect(url)
    }
  }
  // Se nenhum dos casos acima se aplicar (ex: usuário logado acessando /scvd/posts),
  // permite que a requisição continue normalmente.
  return NextResponse.next()
}

// O 'matcher' diz ao middleware em quais rotas ele deve ser executado.
// Isso evita que ele rode em rotas públicas, de API, ou de arquivos estáticos.
export const config = {
  matcher: ["/scvd/:path*"],
}
