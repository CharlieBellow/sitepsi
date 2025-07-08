'use client'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

type QuillEditorProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  errorMessage?: string
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],

     [{ 'color': [] }, { 'background': [[],'red', '#cce0f5', '#A3DDCB'] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
    ['link', 'image'],
    ['clean'],
  ],
}

const QuillEditor = ({
  value,
  onChange,
  placeholder,
  errorMessage,
}: QuillEditorProps) => {

  return (
    <div>
      <ReactQuill
        theme={'snow'}
        modules={modules}
        value={value}
        className='h-40 bg-white text-black rounded-lg shadow-md '
        onChange={onChange}
        placeholder={placeholder}
      />
      {errorMessage && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  )
}

export default QuillEditor