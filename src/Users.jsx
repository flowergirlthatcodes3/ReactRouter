import { Link } from "react-router-dom"

const Users = ({users}) => {
    return (
    <>
        <div className="all">
        <h1> All Users </h1>
        </div>
        
        <div className="allUsers">
           
            <ul>
                {
                    users.map((user) => {
                        return( 
                        <h2>
                            <li key={user.id}>
                                <Link to={`/users/${user.id}`}>{user.name}</Link>
                            </li>
                            </h2>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}
export default Users