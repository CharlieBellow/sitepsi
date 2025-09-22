export const navLinksPublic = [
  { href: "/", label: "Início" },
  // { href: "/scvd", label: "Auth" },
  { href: "/404", label: "Jogo" },
  { href: "/blog", label: "Blog" },
  { href: "/meusservicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
  { href: "/sobre", label: "Sobre mim" },
  // { href: "/bemvindo", label: "Bem-vindo" },
]
export const navLinksPrivate = [
  { href: "/", label: "Início" },
  // { href: "/scvd", label: "Auth" },
  { href: "/scvd/posts", label: "Posts List" },
  { href: "/scvd/create", label: "Criar Post" },
  { href: "/sobre", label: "Sobre mim" },
  { href: "/404", label: "Jogo" },
  { href: "/contato", label: "Contato" },
]

export type NavLink = { href: string; label: string }[]
// export type NavLink = typeof navLinks[number]["href" | "label"]