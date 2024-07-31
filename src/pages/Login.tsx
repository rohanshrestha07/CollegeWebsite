// import LoginComponent from "../components/input/LoginComponent";
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <div className="h-screen w-screen bg-slate-300">
//       <div className="flex grid-flow-row h-full bg-[url(./assets/loginBackground.png)] bg-no-repeat bg-cover pl-36 bg-center ">
//         <div className=" w-96 pt-10 pb-16 bg-slate-400 border border-gray-800 rounded-xl p-8 mt-24 ml-20 h-fit shadow-2xl ">
//           <h1 className="text-center text-5xl font-bold mb-12 text-black">
//             Login
//           </h1>
//           <LoginComponent placeholder="Username"></LoginComponent>
//           <LoginComponent
//             placeholder="Password"
//             type="password"
//           ></LoginComponent>
//           <div className="grid grid-flow-col mt-1">
//             <input className="bg-white ml-1 " type="checkbox" />
//             <label className="pr-5  text-black" htmlFor="#">
//               Remember Me
//             </label>
//             <Link className="pl-5 pr-1 underline text-black" to={"/forgotpassword"}>
//               Forget Password?
//             </Link>
//           </div>
//           <div className="mt-8 flex items-center justify-center border border-[#D14F2B]/5 text-white hover:bg-[#7f5ccb] rounded-3xl bg-[#6D2DF6]/90 mx-1">
//             <button type="submit" className=" font-semibold hover:font-semibold text-xl p-2 px-10 rounded-xl ">
//               Login
//             </button>
//             <LoginComponent placeholder="Username"></LoginComponent>
//             <LoginComponent
//               placeholder="Password"
//               type="password"
//             ></LoginComponent>
//             <div className="w-full flex column gap-5">
//               <div className=" w-full">
//                 <input className="bg-white" type="checkbox" />
//                 <label className="text-black p-1" htmlFor="#">
//                   Remember Me
//                 </label>
//               </div>
//               <div className="w-full ">
//                 <a className="underline float-right text-black" href="#">
//                   Forget Password?
//                 </a>
//               </div>
//             </div>
//             <div className="mt-6 flex items-center justify-center border border-[#D14F2B]/5 text-white hover:bg-[#7f5ccb] rounded-3xl bg-[#6D2DF6]/90 mx-1">
//               <button className=" font-semibold hover:font-semibold text-xl p-2 px-10 rounded-xl ">
//                 Login
//               </button>
//             </div>
//             <div className="flex items-center justify-center mt-6 font-normal">
//               <span>Don't have an account?</span>
//               <Link
//                 className="ml-2 underline text-black font-semibold"
//                 to="/register"
//               >
//                 Register
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center justify-center mt-2 font-normal">
//             <span>Don't have an account?</span>
//             <Link className="ml-2 underline text-black font-semibold" to="/register">
//               Register
//             </Link>
//           </div>
//         </div>
//         {/* login illustration */}
//         <div className=" h-3/5 w-2/4 ml-32 mt-24 px-10">
//           <img className="w-full h-full rounded-3xl"  src="/assets/designlogin.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }
import LoginComponent from "../components/input/LoginComponent";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-screen w-full bg-[#C4DFF2]">
      <div className="container mx-auto">
        <div className="grid gap-5 grid-cols-2 h-full pt-20">
          <div className="w-2/3 bg-gradient-to-br from-[#C1DCEE] to-[#ffffff] rounded-xl p-8 mx-auto shadow-2xl">
            <h1 className="text-center text-5xl font-bold mb-12 text-[#6A2DE9]">
              Login
            </h1>
            <LoginComponent placeholder="Username"></LoginComponent>
            <LoginComponent
              placeholder="Password"
              type="password"
            ></LoginComponent>
            <div className="w-full flex column gap-5">
              <div className=" w-full">
                <input className="bg-white" type="checkbox" />
                <label className="text-black p-1" htmlFor="#">
                  Remember Me
                </label>
              </div>
              <div className="w-full ">
                <Link to={"/forgotPassword"} className="underline float-right text-black">
                  Forget Password?
                </Link>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center border border-[#D14F2B]/5 text-white hover:bg-[#7f5ccb] rounded-3xl bg-[#6D2DF6]/90 mx-1">
              <button className=" font-semibold hover:font-semibold text-xl p-2 px-10 rounded-xl ">
                Login
              </button>
            </div>
            <div className="flex items-center justify-center mt-6 font-normal">
              <span>Don't have an account?</span>
              <Link
                className="ml-2 underline text-black font-semibold"
                to="/register"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="my-auto mx-auto pl-10">
            <img src="/assets/designlogin.png" alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}