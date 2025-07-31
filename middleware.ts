import { auth } from "./auth"

export default auth

// Proteja as rotas que você precisa
export const config = {
  matcher: ["/scvd/:path*"],
}
