import Navbar from '../Navbar/Navbar';

const InvoiceForm = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shadow-2xl bg-base-100">
            <h1 className="text-center pt-5 pb-5 bg-blue-700 text-white font-semibold rounded-lg">
              Patient Info
            </h1>
            <form className="card-body">
              <div className="flex justify-center items-center mx-auto gap-5 lg:flex-row md:flex-col flex-col">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
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
                    placeholder="Enter your email address"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Code</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your code"
                    name="code"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Birth Date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mx-auto gap-5 lg:flex-row md:flex-col flex-col">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Address Here"
                    name="address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your phone number here"
                    name="phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your gender here"
                    name="gender"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Doctor Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Appointed Doctor"
                    name="doctor"
                    className="input input-bordered"
                    required
                  />
                </div>
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

export default InvoiceForm;
