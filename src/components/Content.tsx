import CardBlog from "@/components/CardBlog"
import Grid from "@/components/Grid"



export default function Content() {
  return (
    <main className="grid grid-cols-1 pt-10 h-full ">
      <Grid title="Blog">
       {/* declarar uma variável e fazer um map aqui.. exibisndo apenas as 6 primeiras ocorrências */}
        <div className="grid grid-cols-3 w-full justify-start gap-4">
        

          <CardBlog title="BlogBlogBlogBlogBlogBlogBlogBlogBlogBlog" description=" Acesse nosso blog e fique por dentro de tudo que acontece no mundo da psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia.">
          </CardBlog>
      
       

          <CardBlog title="BlogBlogBlogBlogBlogBlogBlogBlogBlogBlog" description=" Acesse nosso blog e fique por dentro de tudo que acontece no mundo da psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia.">
          </CardBlog>
       
        

          <CardBlog title="BlogBlogBlogBlogBlogBlogBlogBlogBlogBlog" description=" Acesse nosso blog e fique por dentro de tudo que acontece no mundo da psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia.">
            </CardBlog>

     
          
          
             <CardBlog title="BlogBlogBlogBlogBlogBlogBlogBlogBlogBlog" description=" Acesse nosso blog e fique por dentro de tudo que acontece no mundo da psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia psicologia.">
          </CardBlog>
         
        </div>
      </Grid>
      {/* esse component vai receber um children: react node pra poder passar card de blog e de videos */}
      <Grid title="Videos" />
    </main>
  )
}
