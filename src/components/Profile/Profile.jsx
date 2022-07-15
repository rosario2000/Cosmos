import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {

    const {user} = useAuth0();
    const {name,picture,email} = user;
    console.log(user);

    return ( 
        <div className="prof">
            <h1>{name}</h1>
             <div className="pp">
                <img src={picture} alt="pic"/>
             </div>
             <p>{email}</p>
        </div>
     );
}
 
export default Profile;