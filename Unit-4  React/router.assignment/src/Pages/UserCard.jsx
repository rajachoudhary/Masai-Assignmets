 export const Usercard = ({firstName,lastName,email,profile}) =>{
    return(
        <div style={{margin:"auto",width:"300px"}}>
            <h3>{firstName + " " + lastName}</h3>
            <img src={profile} alt="profile" />
            <h4 >{email}</h4>
        </div>
    )
}