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
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
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
        onChange={onChange}
        placeholder={placeholder}
      />
      {errorMessage && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  )
}

export default QuillEditor