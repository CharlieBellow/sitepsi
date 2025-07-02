import CardBlog from "@/components/CardBlog"
import Grid from "@/components/Grid"



export default function Content() {
  return (
    <main className="grid grid-cols-1 pt-10">
      <Grid title="Blog">
        {/* ajeitar o grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="">

          <CardBlog title="BlogBlogBlogBlogBlogBlogBlogBlogBlogBlog" description=" Acesse nosso blog e fique por dentro de tudo que acontece no mundo da psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia.">
          </CardBlog>
          </div>
          <div>

          <CardBlog title="BlogBlogBlogBlogBlogBlogBlogBlogBlogBlog" description=" Acesse nosso blog e fique por dentro de tudo que acontece no mundo da psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia.">
          </CardBlog>
          </div>
          <div>

          <CardBlog title="BlogBlogBlogBlogBlogBlogBlogBlogBlogBlog" description=" Acesse nosso blog e fique por dentro de tudo que acontece no mundo da psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia.">
          </CardBlog>
     
          
          </div>
         
        </div>
      </Grid>
      {/* esse component vai receber um children: react node pra poder passar card de blog e de videos */}
      <Grid title="Videos" />
    </main>
  )
}
