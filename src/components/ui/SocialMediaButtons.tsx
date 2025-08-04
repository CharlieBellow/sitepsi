import { Button } from "@/src/components/ui"
import Link from "next/link"
import { socialMediaLinks } from "../../../Utils/utilsInformations"

type SocialMediaLinksType = typeof socialMediaLinks

interface SocialMediaButtonsProps {
  socialMediaLinks: SocialMediaLinksType
}
export default function SocialMediaButtons({ socialMediaLinks }: SocialMediaButtonsProps) {
  return (
    <div className='flex flex-col lg:flex-row gap-4 reen items-center justify-center py-8'>
      <Link target='_blank' href={socialMediaLinks[0].href} title={socialMediaLinks[0].label}>
        <Button>Entrar em contato</Button>
      </Link>
      <Link target='_blank' href={socialMediaLinks[0].href} title={socialMediaLinks[0].label}>
        <Button>Fazer agendamento</Button>
      </Link>
      <Link target='_blank' href={socialMediaLinks[1].href} title={socialMediaLinks[1].label}>
        <Button>Instagram @mestrecharliepsi</Button>
      </Link>
      <Link target='_blank' href={socialMediaLinks[2].href} title={socialMediaLinks[2].label}>
        <Button>Código de ética do Psicólogo</Button>
      </Link>
      <Link target='_blank' href={socialMediaLinks[3].href} title={socialMediaLinks[3].label}>
        <Button>Canal no YouTube</Button>
      </Link>
    </div>
  )
}
