export const myBirthDate = "1994-01-16"
export const utilsInformations = {
  age: {
    getAge: (birthDate: string): number => {
      const today = new Date()
      const birth = new Date(birthDate)
      let age = today.getFullYear() - birth.getFullYear()
      const monthDiff = today.getMonth() - birth.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--
      }
      return age
    },
  },
  name: "Charlie",
  fullName: "Charlie Bellow de Oliveira Pimentel Silva",
  crpProfession: "Psicólogo - CRP 15/5997",
  contact: {
    phone: "+5582996008552",
    email: "charlieb.psicologo@gmail.com",
  },
}

export const socialMediaLinks = [
  { label: "whatsapp", href: "https://wa.me/+5582996008552" },
  { label: "instagram", href: "https://www.instagram.com/mestrecharliepsi/" },
  {
    label: "crp",
    href: "http://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf",
  },
  { label: "youtube", href: "https://www.youtube.com/@MestreCharliePsi" },
]