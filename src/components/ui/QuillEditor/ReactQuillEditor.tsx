import dynamic from "next/dynamic";

const ReactQuillEditor = dynamic(
    () =>
        import('./QuillEditor'),
    {ssr: false}
)

export default ReactQuillEditor