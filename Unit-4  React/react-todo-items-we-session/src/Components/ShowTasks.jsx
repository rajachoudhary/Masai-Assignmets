const ShowTasks = (props)=>{
  console.log(props)
 return(
   <ol style={{display:"flex", justifyContent:"center",border:"2px solid black",width:"200px",margin:"auto"}}>
   <li style={{padding:"2px",margin:"0 20px"}}>{props.title}</li>
   <li style={{padding:"2px",margin:"0 20px"}}>{props.status? false:"False"}</li>
   </ol>
 )
}
export  default ShowTasks