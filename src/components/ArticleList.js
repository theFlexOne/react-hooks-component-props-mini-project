import Article from './Article'

const ArticleList = ({posts}) => {
  return ( 
    <main>
      {posts.map(({id, title, date, preview, minutes}) => {
        return <Article 
          key={id} 
          title={title} 
          date={date}
          preview={preview}
          minutes={minutes}
           />
      })}
    </main>
   );
}
 
export default ArticleList;