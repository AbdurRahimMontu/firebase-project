
import React, { use } from 'react';
import { Link } from 'react-router';

import { AuthContext } from '../Context/AuthContext';

const Register = () => {
  const {createUser} = use(AuthContext)
 

 const handleRegister=(e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password);

    createUser(email, password)
    .then(result => {
        console.log(result.user);
        e.target.reset()
    }).catch(error=>{
        console.log(error.message);
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
          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" />
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