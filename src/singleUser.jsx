import { useParams, Link } from "react-router-dom"


const SingleUser = ({users}) => {
   const params = useParams()
   const id = params.id*1
  
   const user = users.find((user) =>{
    return user.id === id
   })
   if(!user){
    return null
   }
   return(
    <>
    <div className="single">
    <h1> {user.name} </h1>
    </div>
    <hr/ >

    <div className="singleUser">
      
        <h2>
        <p> My Email: {user.email} </p>
        <p> My Phone Number: {user.phone}</p>
        <p> My Website: {user.website} </p>
        <p> My Company Name: {user.company.name}</p>
        <p> What My Company Is About: {user.company.bs}</p>
        </h2>
        <Link to='/Users'>Lets Check Out All Users! </Link>



    </div>
    </>
   )
}
export default SingleUser