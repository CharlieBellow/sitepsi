"use client"

import { useCallback } from "react"

import { CharacterCount } from "@tiptap/extension-character-count"
import { Link } from "@tiptap/extension-link"
import { Placeholder } from "@tiptap/extension-placeholder"
import { Subscript } from "@tiptap/extension-subscript"
import { Superscript } from "@tiptap/extension-superscript"
import { TextAlign } from "@tiptap/extension-text-align"
import { Underline } from "@tiptap/extension-underline"
import { EditorContent, EditorOptions, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Italic,
  Link2,
  List,
  ListOrdered,
  Redo,
  Strikethrough,
  UnderlineIcon,
  Undo,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type TipTapTextEditorProps = Partial<EditorOptions> & {
  limitCharacters?: number
  placeholder?: string
}

export function TipTapTextEditor({
  placeholder,
  limitCharacters,
  ...props
}: TipTapTextEditorProps) {
  const editor = useEditor({
    ...props,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      CharacterCount.configure({
        limit: limitCharacters,
      }),
      Superscript,
      Subscript,
      Placeholder.configure({
        placeholder: placeholder ?? "Comece a escrever...",
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: cn("underline text-primary-blue"),
        },
        defaultProtocol: "https",
        protocols: ["http", "https", "mailto", "tel"],
        isAllowedUri: (url, ctx) =>
          ctx.defaultValidate(url) && !url.startsWith("./"),
      }),
    ],
    editorProps: {
      attributes: {
        class: "prose-sm prose-neutral md:prose-base",
      },
    },
  })

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run()

      return
    }

    // update link
    try {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run()
    } catch (e) {
      alert(`URL inválida ${e}`)
    }
  }, [editor])

  if (!editor) return null
  return (
    <div className="m-0">
      <div className="flex-wrap items-center gap-4 p-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 font-medium">
            Título <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-3">
            <Button
              className={cn(
                "w-fit h-fit p-2 rounded-md text-2xl font-extrabold",
                {
                  "bg-tertiary-1/50": editor.isActive("heading", {
                    level: 1,
                  }),
                }
              )}
              onClick={() =>
                editor.chain().focus().setHeading({ level: 1 }).run()
              }
            >
              Título 1
            </Button>

            <Button
              className={cn(
                "w-fit h-fit p-2 rounded-md text-xl font-extrabold",
                {
                  "bg-tertiary-1/50": editor.isActive("heading", {
                    level: 2,
                  }),
                }
              )}
              onClick={() =>
                editor.chain().focus().setHeading({ level: 2 }).run()
              }
            >
              Título 2
            </Button>

            <Button
              className={cn("w-fit h-fit p-2 rounded-md", {
                "bg-tertiary-1/50": editor.isActive("heading", {
                  level: 3,
                }),
              })}
              onClick={() =>
                editor.chain().focus().setHeading({ level: 3 }).run()
              }
            >
              Título 3
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>

        <hr aria-orientation="vertical" className="h-6 w-px bg-zinc-300" />

        <Button
          className={cn("w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive("bold"),
          })}
          onClick={() => {
            editor.chain().focus().toggleBold().run()
          }}
        >
          <Bold size={16} />
        </Button>
        <Button
          className={cn("hidden md:block w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive("italic"),
          })}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </Button>

        <Button
          className={cn("hidden md:block w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive("underline"),
          })}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon size={16} />
        </Button>

        <Button
          className={cn("hidden md:block w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive("strike"),
          })}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough size={16} />
        </Button>

        <hr aria-orientation="vertical" className="h-6 w-px bg-zinc-300" />

        <Button
          className={cn("w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive("bulletList"),
          })}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </Button>

        <Button
          className={cn("w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive("orderedList"),
          })}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={16} />
        </Button>
        <Button
          className={cn("w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive("link"),
          })}
          onClick={() => {
            setLink()
          }}
        >
          <Link2 size={16} />
        </Button>

        <hr aria-orientation="vertical" className="h-6 w-px bg-zinc-300" />

        <Button
          className={cn("hidden md:block w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive({
              textAlign: "left",
            }),
          })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft size={16} />
        </Button>

        <Button
          className={cn("w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive({
              textAlign: "center",
            }),
          })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter size={16} />
        </Button>

        <Button
          className={cn("hidden md:block w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive({
              textAlign: "right",
            }),
          })}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight size={16} />
        </Button>

        <Button
          className={cn("w-fit h-fit p-2 rounded-md", {
            "bg-tertiary-1/50": editor.isActive({
              textAlign: "justify",
            }),
          })}
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        >
          <AlignJustify size={16} />
        </Button>

        <hr aria-orientation="vertical" className="h-6 w-px bg-zinc-300" />

        <Button
          className={cn("w-fit h-fit p-2 rounded-md")}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo size={16} />
        </Button>

        <Button
          className={cn("w-fit h-fit p-2 rounded-md")}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo size={16} />
        </Button>
      </div>

      <div className="grid min-h-[150px] px-2 py-4">
        <EditorContent
          editor={editor}
          className="rounded border border-zinc-300 px-4 py-2"
        />

        {limitCharacters && (
          <div className="overflow-x-scroll pt-2 text-xs text-zinc-500">
            {editor.storage.characterCount.characters()}/{limitCharacters}{" "}
            carácteres
            <br />
            {editor.storage.characterCount.words()} palavras
          </div>
        )}
      </div>
    </div>
  )
}
