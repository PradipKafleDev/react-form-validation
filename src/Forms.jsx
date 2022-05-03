import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Forms.css'

const Forms = () => {
    const initialvalues={
        firstname:"",
        lastname:"",
        email: "",
        password:""
    }
    const[formValues,setFormvalues]= useState(initialvalues);
    const[errors,setErrors]= useState({});
    const[isSubmit, setIsSubmit] =useState(false);
    
    const handleChange=(e)=>{
       const name = e.target.name;
       const value=e.target.value;
        setFormvalues({...formValues, [name]:value});
        console.log(formValues);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validate(formValues))
        setIsSubmit(true)
       
    }
    useEffect=(()=>{
        console.log(errors)
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(formValues)
        }

    },[errors])

    const validate =(values)=>{
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.firstname){
            error.firstname ="✶required"
        }
        if(!values.lastname){
            error.lastname ="✶required"
        }
        if(!values.email){
            error.email ="✶required"
        }else if(!regex.test(values.email)){
           error.email="This is not a valid email format!"

        }
        if(!values.password){
            error.password ="✶required"
        }else if(values.password<4){
            error.password="Password must be more than 4 character"
        }
        return error;
    }









  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
     <div class="form">
<div class="title">Welcome</div>
<div class="subtitle">Let's create your account!</div>
{/* ========================== */}
<div class="input-container">
 <p>{errors.firstname}</p>   
    <label  className='label'>Firstname</label>
  <input id="firstname" name="firstname"  autoComplete="off" type="text" class='input' 
  value={formValues.firstname}
  onChange={handleChange}

   />
  
 
</div>
{/* ================================= */}
<div class="input-container">
 <p>{errors.lastname}</p>   <label className='label'>Lastname</label>
  <input id="lastname" name="lastname"  autoComplete="off"  type="text" class='input' 
  value={formValues.lastname}
  onChange={handleChange} />
  
</div>
{/* ============================= */}

<div class="input-container">
 <p>{errors.email}</p>   <label className='label'>Email</label>
  <input autoComplete="off" id="email"  name="email" type="text" class='input' 
  value={formValues.email}
  onChange={handleChange} />
 
</div>
{/* =============================== */}
<div class="input-container">
 <p>{errors.password}</p>   <label className='label'>Password</label>
  <input autoComplete="off" id="password"  name="password" type="text" class='input' value={formValues.password}
  onChange={handleChange} />
 
</div>
{/* ================================== */}
<button class="submit" type="submit">submit</button>

</div>
  
      </form>
     
       
    </div>
  )
}

export default Forms