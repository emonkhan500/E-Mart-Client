import "animate.css";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import signinAnimation from "../../public/SignIn.json";
import useAxiosPublic from "../Axios/useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(email, pass);

    login(email, pass)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Login Successful !");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          time: result.user?.metadata?.creationTime,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          Swal.fire(`Welcome ${result.user.displayName}`);
          console.log(result.user);
          navigate(location?.state ? location?.state : "/");
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div className="flex  items-center py-6 md:py-10 lg:py-16 justify-center ">
      <div className=" lg:w-full lg:max-w-7xl flex flex-col-reverse md:flex-row bg-white rounded-lg  ">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-primary-green bg-opacity-5">
          <h2 className="animate__animated animate__bounceIn animate__slow text-3xl font-bold text-primary-green lg:mt-8 mb-2">
            Welcome back!
          </h2>
          <p className="text-primary-text text-lg font-semibold">
            Experience The Best E-Commerce Platform !
          </p>
          <form onSubmit={handleLogin} className="mt-6">
            <div className="mb-4 animate__animated animate__lightSpeedInLeft animate__slow">
              <label
                className="text-primary-text block  text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg text-primary-gray focus:outline-none focus:border-primary-green"
              />
            </div>
            <div className="mb-4 animate__animated animate__lightSpeedInRight animate__slow">
              <label
                className=" text-primary-text block  text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="pass"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-primary-gray focus:outline-none focus:border-primary-green"
              />
            </div>
            <div className="flex items-center justify-between mb-4 animate__animated animate__lightSpeedInLeft animate__slow">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-primary-green"
                />
                <span className="ml-2 text-sm text-primary-text">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-primary-green hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="animate__animated animate__lightSpeedInRight w-full text-primary-text font-bold py-2 px-4 rounded-lg border border-primary-green shadow-md hover:bg-primary-green hover:text-white hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="animate__animated animate__lightSpeedInLeft animate__slow mt-4 w-full text-primary-text font-bold py-2 px-4 rounded-lg border border-primary-green shadow-md hover:bg-primary-green hover:text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <FaGoogle className="mr-3 text-primary-green hover:text-black" />
            Sign In with Google
          </button>
          <p className="text-primary-text mt-6 text-center font-bold">
            Don’t have an account?{"  "}
            <Link to="/signup" className="font-bold text-primary-green">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Lottie Animation Section */}
        <div className="animate__animated animate__bounceIn animate__slow w-full md:w-1/2  p-6 lg:p-10 bg-primary-green bg-opacity-5">
          <Lottie
            animationData={signinAnimation}
            className="w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
