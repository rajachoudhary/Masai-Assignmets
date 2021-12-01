import {useState,useRef} from "react";
import React from "react"
const Form = ()=> {
    const [formState,setFormState] = useState({
        name:"",
        gender:"",
        role:"",
        maritalStatus:false,
        image:null
    });

    const imgRef = useRef(null)
    const handleImageChange = (e)=> {
        const file = e.target.files[0]
        setFormState({...formState, image:file})
        // console.log(file)
    }
    const handleFormUpdate = (e) => {
        let {name,value,type,checked} = e.target
        const val = type === "checkbox" ? checked:value 
        setFormState({...formState,[name]:val})
        console.log(formState)
    };
    const handleSubmit = (e)=> {
        e.preventDefault()
    }
 return(
     <>
     <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input value={formState.name} placeholder="Name" name="name" onChange={handleFormUpdate} />
        </div>
        <div>
            <label>Gender</label>
            <select value={formState.gender} name="gender" onChange={handleFormUpdate}>
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>
        </div>
        <div>
            <label>Role</label>
            <select value={formState.role} name="role" onChange={handleFormUpdate}>
            <option value="">Select your role</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            </select>
        </div>
        <div>
            <label> Marital status</label>
            <div>
            <input type="checkbox" checked={formState.maritalStatus}  name="maritalStatus" onChange={handleFormUpdate}/>
            <label>Married</label>
            </div>
        </div>
        <div>
            <label>Choose an Image</label>
            <input ref={imgRef}  onChange={ handleImageChange} type="file"/>
        </div> 
        <div>
            <input type="Submit"/>
        </div>
     </form>
     </>
 )
}
export default Form;