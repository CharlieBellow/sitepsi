// Esta linha importa o middleware padrão do NextAuth, que faz a mágica.
export { default } from "next-auth/middleware"

// O 'matcher' diz ao middleware QUAIS rotas ele deve proteger.
// Qualquer tentativa de acessar uma rota que comece com '/scvd'
// exigirá que o usuário esteja logado.
export const config = {
  matcher: ["/scvd/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
