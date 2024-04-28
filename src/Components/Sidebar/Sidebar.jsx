import { Link } from 'react-router-dom';
import '../Styles/SliderBtn.css';
import { FaUserCircle } from 'react-icons/fa';
import { FaFileInvoice } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Sidebar = () => {
  return (
    <div>
      {/* sidebar start */}

      <div className="pr-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="navbar-start">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay hamburger"
          >
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                class="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-52 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {/* user */}
            <div className="rounded-full flex justify-center items-center mx-auto gap-5">
              <img
                className="rounded-full w-10"
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
              <h1 className="text-xl font-semibold">Dr. Jenny</h1>
            </div>

            <hr className="bg-gray-300 p-[0.5px] mt-5 mb-5" />
            {/* user */}

            <li>
              <Link to="/profile">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaUserCircle></FaUserCircle>
                  <a className="font-normal text-black">Profile</a>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/invoice">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaFileInvoice></FaFileInvoice>
                  <a className="font-normal text-black">Invoices</a>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/invoice">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaFileInvoice></FaFileInvoice>
                  <a className="font-normal text-black">Reports</a>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/invoice">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaFileInvoice></FaFileInvoice>
                  <a className="font-normal text-black">Branches</a>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/invoice">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaFileInvoice></FaFileInvoice>
                  <a className="font-normal text-black">Tests</a>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/invoice">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaFileInvoice></FaFileInvoice>
                  <a className="font-normal text-black">Cultures</a>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/invoice">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaFileInvoice></FaFileInvoice>
                  <a className="font-normal text-black">Culture Options</a>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/invoice">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaFileInvoice></FaFileInvoice>
                  <a className="font-normal text-black">Antibiotics</a>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/invoice">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaFileInvoice></FaFileInvoice>
                  <a className="font-normal text-black">Doctor</a>
                </div>
              </Link>
            </li>

            <li className=" dropdown ">
              <Link to="">
                <div className="flex justify-center mx-auto items-center gap-2 text-lg">
                  <FaFileInvoice></FaFileInvoice>
                  <a
                    className="font-normal text-black"
                    tabIndex={0}
                    role="button"
                  >
                    Pricelist
                  </a>
                  <IoIosArrowForward></IoIosArrowForward>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 mt-7 shadow bg-base-100 rounded-box w-52"
                  >
                    <Link to="/test">
                      <li>
                        <a className=" text-center ">Test</a>
                      </li>
                    </Link>


                    <Link to='/culture'>
                      <li>
                        <a className=" text-center ">Culture</a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* sidebar end */}
    </div>
  );
};

export default Sidebar;
