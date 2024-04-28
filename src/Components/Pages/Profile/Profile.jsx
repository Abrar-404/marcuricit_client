import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleAddUsers = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const addusers = {
      email,
      name,
      password,
    };

    axios.post('http://localhost:5000/userData', addusers).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: `Welcome!`,
          text: `To Your Dashboard`,
          icon: 'success',
        });
        navigate('/');
      }
    });
  };

  return (
    <div>
      <div className="z-[1]">
        <Navbar></Navbar>
      </div>

      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content">
          <div className="card shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleAddUsers}>
              <div className="flex justify-center items-center gap-5 mx-auto lg:flex-row md:flex-col flex-col">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
