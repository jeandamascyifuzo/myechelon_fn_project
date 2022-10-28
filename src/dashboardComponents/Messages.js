import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { axiosRequest } from '../api/index';
import { ToastContainer } from "react-toastify";
import Notify from "../functions/Notify";
import { GiBookmarklet } from 'react-icons/gi'
import { getUser } from '../Utils/Common';
import SpinnerLoading from '../components/SpinnerLoading';
const Message_URL = "message"

const Messages = () => {
  const [deleMessageModel, setDeleMESSAGEModel] = useState(false);
  const [viewModel, setViewModel] = useState(false);
  const [loading, setLoading] = useState(false)
  const [Delete, setDelete] = useState(false)
  const [RowData, SetRowData] = useState([])
  const [Data, setData] = useState([]);
  const [id, setId] = useState("");
  const user = getUser()

  const removeDeleteModel = () => {
    let newState = !deleMessageModel;
    setDeleMESSAGEModel(newState);
  }

  const viewMessageModel = () => {
    let newState = !viewModel;
    setViewModel(newState);
  };

  //here we will get all Message
  const GetMessage = () => {
    axiosRequest.get(Message_URL)
      .then(response => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== 'SUCCESS') {
          setData(data)
        }
        else {
          setData(data)
        }
      })
      .catch(error => {
        if (error.code !== "ERR_NETWORK") {
          Notify(error.response.data.message, "error");
        }
        else {
          Notify(error.message, "error");
        }
      })
  }

  //handle Delete Function 
  const handleDelete = (e) => {
    e.preventDefault()
    const url = `message/${id}`
    setLoading(true)
    axiosRequest.delete(url)
      .then(response => {
        setLoading(false)
        const result = response.data;
        Notify(result.message, "success");
        const { status, message } = result;
        if (status !== 'SUCCESS') {
          GetMessage();
          setDeleMESSAGEModel(false)
        }
        else {
          console.log(message)
        }
      })
      .catch(error => {
        setLoading(false)
        if (error.code !== "ERR_NETWORK") {
          Notify(error.response.data.message, "error");
        }
        else {
          Notify(error.message, "error");
        }
      })
  }

  useEffect(() => {
    GetMessage();
  }, [])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* =========================== Start::  deleteMessageModel =============================== */}
      <div className={`min-h-full w-screen z-30 bg-gray-500 bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${deleMessageModel === true ? 'block' : 'hidden'}`}>
        <div className="bg-white w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h1 className='font-bold text-sm text-center w-11/12'>
              Delete {RowData.names}'s Message
            </h1>
            <hr className=' bg-primary border-b w-full' />
          </div>
          <div className="card-body">
            <form className=" px-8" >
              <div>
                <h2 className='text-base m-4'>Do you really want permanently delete <span className='italic text-black'>{RowData.names}</span> 's Message?</h2>
              </div>
              <div className="w-full flex justify-between">
                <button className='py-2 w-[40%] md:w-1/3 bg-transparent rounded border border-gray-800 font-sans text-sm' onClick={(e) => removeDeleteModel(e.preventDefault())}>Cancel</button>
                <button className='text-white py-2 w-[40%] md:w-1/3 bg-red-700 rounded' onClick={handleDelete}>remove</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  deleteMessageModel =============================== */}

      {/* =========================== Start::  viewMessageModel =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-gray-500 bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${viewModel === true ? 'block' : 'hidden'
          }`}
      >
        <div className="bg-white sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-gray-700 text-center w-11/12">
              <h6>Message from </h6>{RowData.names}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form>
              <div className="input my-3 h-32 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <textarea
                    type="text"
                    name="image"
                    value={RowData.message}
                    className="border pb-32 pt-2 rounded outline-none px-3 font-sans text-sm w-full"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center pt-4">
                <button className='py-2 w-[40%] md:w-1/3 bg-transparent rounded border border-gray-800 font-sans text-sm text-gray-900'
                  onClick={(e) => {
                    e.preventDefault();
                    setViewModel(false)
                  }}>Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  viewMessageModel =============================== */}
      <div className="bg-black pb-10 min-h-screen lg:ml-56 px-2  lg:px-10">
        <div className="md:px-22 pt-28">
          <div className="bg-[#191919] shadow-lg px-5 py-8 rounded-md w-full lg:w-full ">
            <div className="flex items-center justify-between pb-6">
              <div>
                <h2 className="font-sans text-xl text-white font-semibold px-1 hover:underline">Available Messages</h2>
              </div>
            </div>
            <div>
              <div className="-mx-12 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          className="font-lexend px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                          Name
                        </th>
                        <th
                          className="font-lexend p-6 border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                          email
                        </th>
                        <th
                          className="font-lexend px-5  border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                          Message
                        </th>
                        <th
                          className="font-lexend px-5  border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                          Telephone number
                        </th>
                        <th
                          className="font-lexend px-5  border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                          date
                        </th>
                        <th
                          className="font-lexend px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Data.map((item, index) => {
                        let rowTheme =
                          index % 2 !== 0
                            ? 'bg-gray-300'
                            : 'bg-white';
                        return (
                          <tr className={`${rowTheme} `} key={index}>
                            <td className="p-3 px-5 py-3 border-b border-gray-200 text-sm">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap font-bold font-sans">
                                    {item.names}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 border-b border-gray-200 text-sm">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap font-bold font-sans">
                                    {item.email}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-5 py-3 border-b border-gray-200 text-sm">
                              <p className="text-gray-900 whitespace-no-wrap line-clamp-3 font-bold font-sans">{item.message}</p>
                            </td>
                            <td className="p-3 border-b border-gray-200 text-sm">
                              <div className="flex items-center">
                                <div>
                                  <p className="px-4 text-gray-900 whitespace-no-wrap font-bold font-sans">
                                    {item.telephone}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 border-b border-gray-200 text-sm">
                              <div className="flex items-center">
                                <div>
                                  <p className="px-4 text-gray-900 whitespace-no-wrap font-bold font-sans">
                                    {item.createdAt}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-3 border-b border-gray-200 text-gray-500 cursor-pointer text-lg">
                              <div className='flex'>
                                <div className="cursor-pointer mr-2 text-gray-500" onClick={() => { viewMessageModel(SetRowData(item)) }}>
                                  <GiBookmarklet />
                                </div>
                                {user[0]?.isAdmin ? (
                                  <div className="cursor-pointer text-[#FF3D3D]" onClick={() => { removeDeleteModel(SetRowData(item), setId(item._id), setDelete(true)) }}>
                                    <FaTrash />
                                  </div>
                                ) : ""}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messages

