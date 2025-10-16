
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { AuthContext } from '../Context/AuthContext';

const Register = () => {
  const {createUser} = use(AuthContext)
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)
  const [showC, setShowC] = useState(false)
 
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
 const handleRegister=(e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value

    


    if(password.length<6){
       setError("Password must be 6 degit")
       return
    }else if(password !== confirmPassword){
      setError("password did not match")
      return
    }else if (!passwordRegex.test(password)) {
      setError("✅One Capital, One Small, one num, one character");
      return
    }
    setError('')

    console.log(email, password, confirmPassword);

    createUser(email, password)
    .then(result => {
        console.log(result.user);
        e.target.reset()
          navigate(location.state || "/"
            )
    }).catch(error=>{
        setError(error.message);
    })
 

 }

    return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Register</h1>

      <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name field  */}
          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Name" />
            {/* email field  */}
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />

           {/* password field  */}
       
<div >
     <label className="label">Password</label>
          <input type={show?"text":"password"} className="input focus:outline-none focus:ring-2 relative" name="password" placeholder="Password" />
          <span onClick={()=>setShow(!show)} className=' absolute z-1 right-15 top-64'>click</span>

</div>

          <label className="label">ConfirmPassword</label>
          <input type={showC?"text":"password"}  className="input " name="confirmPassword" placeholder="Password" />
           <span onClick={()=>setShowC(!showC)} className=' absolute z-1 right-15 top-83'>click</span>
          {
            error&&<p className='text-red-500'>{error}</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      <p>Already Have an Account Please <Link className='text-blue-500 hover:text-blue-800' to="/login">Login</Link> </p>
      </div>
    </div>

    );
};

export default Register;