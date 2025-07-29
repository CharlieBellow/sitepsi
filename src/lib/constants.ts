export const navLinksPublic = [
  { href: "/", label: "Início" },
  { href: "/scvd", label: "Autenticação" },
  { href: "/blog", label: "Blog" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre mim" },
  { href: "/404", label: "404 - Jogo" },
  { href: "/contato", label: "Contato" },
]
export const navLinksPrivate = [
  { href: "/", label: "Início" },
  { href: "/scvd", label: "Autenticação" },
  { href: "/scvd/posts", label: "Posts List" },
  { href: "/scvd/create", label: "Criar Post" },
  { href: "/sobre", label: "Sobre mim" },
  { href: "/404", label: "404 - Jogo" },
  { href: "/contato", label: "Contato" },
]

export type NavLink = { href: string; label: string }[]
// export type NavLink = typeof navLinks[number]["href" | "label"]