import React, { useEffect, useState } from 'react'
import { FiEyeOff } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import axiosRequest from '../api/index'
import { removeUserSession } from '../Utils/Common';
import Notify from '../functions/Notify';
import { useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const ChangePassword = () => {

  const [updateTeamModel, setUpdateTeamModel] = useState(false);
  const [loading, setLoading] = useState(false)
  const [RowData, SetRowData] = useState([])
  const [Data, setData] = useState([]);
  const [id, setId] = useState("");

  const navigate = useNavigate()

  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("")
  const [ confirmPasword, setConfirmPassword ] = useState("")
  const tooglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    const response = axiosRequest.get(`team/${id}`)
    setPassword(response.data)
  }, [id])

let _id = window.location.href.split('/')[6]

  const handleUpdate = (e) => {
    e.preventDefault()
    const url = `team/change/password/${_id}`
    setLoading(true)
    try{
      const response = axiosRequest.put(url, {
      password,
      confirmPasword
    })
     setPassword(response.data)
     setConfirmPassword(response.data)
      // removeUserSession()
      // navigate("/login")


      // .then(response => {
      //   setLoading(false)
      //   const result = response.data;
      //   Notify(result.message, "success");
      //   const { status, message } = result;
      //   if (status !== 'SUCCESS') {
      //     GetPortifolio();
      //     setUpdatePortfolioModel(false)
      //   }
      //   else {
      //     console.log(message)
      //   }
      // })
  // }catch(error => {
  //       setLoading(false)
  //       if (error.code !== "ERR_NETWORK") {
  //         Notify(error.response.data.message, "error");
  //       }
  //       else {
  //         Notify(error.message, "error");
  //       }
  //     })
    } catch (error) {
      console.log(error.response.data);
    }
  }
  

  return (
    <section className="bg-black lg:ml-20">
      <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="py-10 sm:py-8 ">
          <div className="w-full bg-[#191919] p-6 rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8 justify-center text-center items-center">
            <form>
              <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-2  ">
                <MdLockOutline className="text-gray-400 mr-2 " />
                <input
                  placeholder="Password"
                  type={passwordShown ? 'text' : 'password'}
                  className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
                  value={password}
                  onChange={(e) => {
                  setPassword(e.target.value);
                 }}
                />
                <div className="text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}">
                  {passwordShown ? (
                    <FaRegEye onClick={tooglePassword} />
                  ) : (
                    <FiEyeOff onClick={tooglePassword} />
                  )}
                </div>
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-2  ">
                <MdLockOutline className="text-gray-400 mr-2 " />
                <input
                  placeholder="Password"
                  type={passwordShown ? 'text' : 'password'}
                  className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
                  value={confirmPasword}
                 onChange={(e) => {
                   setConfirmPassword(e.target.value);
                 }}
                />
                <div className="text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}">
                  {passwordShown ? (
                    <FaRegEye onClick={tooglePassword} />
                  ) : (
                    <FiEyeOff onClick={tooglePassword} />
                  )}
                </div>
              </div>
              <div className="w-full justify-center">
                {loading ? (
                  <Button variant="dark" disabled className="w-[40%] md:w-1/2">
                    <Spinner
                      as="span"
                      variant="light"
                      size="sm"
                      role="status"
                      aria-hidden="false"
                      animation="border" />
                    Processing...
                  </Button>
                ) : (
                  <button
                    className="py-2 w-[40%] md:w-1/3 rounded  bg-gray-300 hover:bg-transparent border border-gray-800 hover:text-black hover:bg-white focus:ring-4 focus:outline-none"
                    onClick={handleUpdate}
                  >
                    Confirm
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    // <section className="bg-black lg:ml-20">
    //   <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //     <div className="w-full bg-[#191919] p-6 rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8 justify-center text-center items-center">
    //       <h2 className="mb-1 text-xltext-center leading-tight tracking-tight text-white md:text-2xl font-bold font-lexend">
    //         Change Password
    //       </h2>
    //       <form className="mt-4 px-16 space-y-4 lg:mt-5 md:space-y-5" action="#">
    //         <div className="bg-gray-100 px-44 w-64 p-2 flex items-center rounded mb-2 justify-center text-center ">
    //           <MdLockOutline className="text-gray-400 mr-2 " />
    //           <input
    //             placeholder="New Password"
    //             type={passwordShown ? 'text' : 'password'}
    //             className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
    //             value={password}
    //             onChange={(e) => {
    //               setPassword(e.target.value);
    //             }}
    //           />
    //           <div className="text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}">
    //             {passwordShown ? (
    //               <FaRegEye onClick={tooglePassword} />
    //             ) : (
    //               <FiEyeOff onClick={tooglePassword} />
    //             )}
    //           </div>
    //         </div>
    //         <div className="w-full justify-center">
    //           <input
    //             type="submit"
    //             className="border-2 w-1/2 py-2 inline-block rounded-full md:font-semibold sm:mt-2 sm:font-medium text-white"
    //             value={"Confirm"}
    //             onClick={handleUpdate}
    //           >
    //           </input>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </section>
  )
}

export default ChangePassword
