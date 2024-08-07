import axios from "axios";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Signup = () => {
  const location =useLocation()
  const navigate =useNavigate()
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('signup succesfully');
        navigate(from,{replace:true})
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    })
    .catch((err)=>{
      if(err.response){
      console.log(err)
      toast.error("error : "+ err.response.data.message)
      
      }
    })
};
return (
  <>
    <div className="border flex justify-center items-center h-screen">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            {/* name */}
            <div className="mt-4 space-y-2">
              <span> fullname</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Fullname"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span> Email</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span> Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}
            <div className="flex justify-around  mt-4 ">
              <button className="bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-xl">
                Have Account{" "}
                <span
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="text-blue-500 cursor-pointer underline"
                >
                  login
                </span>
              </p>
              <Login />
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
);
}
export default Signup
