const InvoiceForm = () => {
  return (
    <div>
      <div className="hero min-h-screen w-full">
        <div className="hero-content">
          <div className="card shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="flex justify-center items-center mx-auto lg:flex-row md:flex-col flex-col gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Your First Name"
                    className={`input input-bordered ${
                      firstNameError ? 'input-error' : ''
                    }`}
                    value={firstName}
                    onChange={e =>
                      handleInputChange(e, setFirstName, setFirstNameError)
                    }
                  />
                  {firstName && !firstNameError && (
                    <p className="text-green-500">Looks Good</p>
                  )}
                  {firstNameError && (
                    <p className="text-red-500">
                      Please enter your first name.
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Your Last Name"
                    className={`input input-bordered ${
                      lastNameError ? 'input-error' : ''
                    }`}
                    value={lastName}
                    onChange={e =>
                      handleInputChange(e, setLastName, setLastNameError)
                    }
                  />
                  {lastName && !lastNameError && (
                    <p className="text-green-500">Looks Good</p>
                  )}
                  {lastNameError && (
                    <p className="text-red-500">Please enter your last name.</p>
                  )}
                </div>
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
                  onChange={e => handleInputChange(e, setEmail, setEmailError)}
                />
                {email && !emailError && (
                  <p className="text-green-500">Looks Good</p>
                )}
                {emailError && (
                  <p className="text-red-500">
                    Please enter a valid email address.
                  </p>
                )}
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
                  onChange={e =>
                    handleInputChange(e, setPassword, setPasswordError)
                  }
                />
                {password && !passwordError && (
                  <p className="text-green-500">Looks Good</p>
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

export default InvoiceForm;