import CardBlog from "@/components/CardBlog"
import Grid from "@/components/Grid"

export default function Content() {
  return (
    <main className="space-y-8 pt-8">
      <Grid title="Blog">
        <>
          <CardBlog />
          
    
        </>
      </Grid>
      {/* esse component vai receber um children: react node pra poder passar card de blog e de videos */}
      <Grid title="Videos" />
    </main>
  )
}
