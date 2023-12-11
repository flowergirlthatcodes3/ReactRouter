import { useParams, Link } from "react-router-dom"


const SinglePost = ({posts}) => {
   const params = useParams()
   const id = params.id*1
  
   const singlePost = posts.find((post) =>{
    return post.id === id
   })
   if(!SinglePost){
    return null
   }
   return(
    <>
    <div className="singleP">
        <h1> {singlePost.title} </h1>
        <hr/ >
        </div>


    <div className="singlePost">
        
        <h2> 
            {singlePost.body}
        
        </h2>
        <Link to='/Posts'>Lets Check Out All Posts! </Link>



    </div>
    </>
   )
}
export default SinglePost