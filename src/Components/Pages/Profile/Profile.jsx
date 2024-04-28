// import axios from 'axios';
// import Navbar from '../../Navbar/Navbar';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();

//   const handleAddUsers = e => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     const addusers = {
//       email,
//       name,
//       password,
//     };

//     axios.post('http://localhost:5000/userData', addusers).then(res => {
//       console.log(res.data);
//       if (res.data.insertedId) {
//         Swal.fire({
//           title: `Welcome!`,
//           text: `To Your Dashboard`,
//           icon: 'success',
//         });
//         navigate('/');
//       }
//     });
//   };

//   return (
//     <div>
//       <div className="z-[1]">
//         <Navbar></Navbar>
//       </div>

//       <div className="hero min-h-screen w-full bg-base-200">
//         <div className="hero-content">
//           <div className="card shadow-2xl bg-base-100">
//             <form className="card-body" onSubmit={handleAddUsers}>
//               <div className="flex justify-center items-center gap-5 mx-auto lg:flex-row md:flex-col flex-col">
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Name</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Email</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleInputChange = (e, setValue) => {
    const value = e.target.value.trim();
    setValue(value);
    if (setValue === setName) {
      setNameError(value === '');
    } else if (setValue === setEmail) {
      setEmailError(!/\S+@\S+\.\S+/.test(value));
    } else if (setValue === setPassword) {
      setPasswordError(value === '');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Check for empty fields
    setNameError(name === '');
    setEmailError(!/\S+@\S+\.\S+/.test(email));
    setPasswordError(password === '');

    // Check if any error exists
    if (nameError || emailError || passwordError) {
      return;
    }

    // Form data
    const userData = {
      name,
      email,
      password,
    };

    // Simulate sending data to the server
    axios
      .post('http://localhost:5000/userData', userData)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: 'Welcome!',
            text: 'To Your Dashboard',
            icon: 'success',
          });
          navigate('/');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div className="z-[1]">
        <Navbar></Navbar>
      </div>

      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content">
          <div className="card shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="flex justify-center items-center mx-auto lg:flex-row md:flex-col flex-col gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={`input input-bordered ${
                      nameError ? 'input-error' : ''
                    }`}
                    value={name}
                    onChange={e => handleInputChange(e, setName)}
                  />
                  {name && !nameError && (
                    <p className="text-green-500">Green text if typed</p>
                  )}
                  {nameError && (
                    <p className="text-red-500">Please enter your name.</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`input input-bordered ${
                      emailError ? 'input-error' : ''
                    }`}
                    value={email}
                    onChange={e => handleInputChange(e, setEmail)}
                  />
                  {email && !emailError && (
                    <p className="text-green-500">Green text if typed</p>
                  )}
                  {emailError && (
                    <p className="text-red-500">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`input input-bordered ${
                    passwordError ? 'input-error' : ''
                  }`}
                  value={password}
                  onChange={e => handleInputChange(e, setPassword)}
                />
                {password && !passwordError && (
                  <p className="text-green-500">Green text if typed</p>
                )}
                {passwordError && (
                  <p className="text-red-500">Please enter your password.</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
