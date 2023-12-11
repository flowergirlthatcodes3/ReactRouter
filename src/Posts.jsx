import { Link } from 'react-router-dom'

const Posts = ({posts}) => {
    return(
        <>
        <div className="allP"> 
         <h1> All Posts </h1> 
         </div>
        
        
        <div className="allPost">
          
            <ul>
                {
                    posts.map((post) =>{
                        return(
                            <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )

}
export default Posts