import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Message = () => {
  const api = "https://680dcc8ec47cb8074d913800.mockapi.io/message";
  const [message, setMessage] = useState([]);
  const user = useSelector((state) => state.auth.user);

  async function getMessage() {
    const res = await axios.get(api);
    setMessage(res.data);
  }
  const myMessage = message.filter((el) => el.recipient === user);

  useEffect(() => {
    getMessage();
  }, []);
  console.log(user);

  return (
    <div className="container" style={{display:"flex",flexDirection:"column",gap:"10px",padding:"30px 0"}}>
      {myMessage.map((el) => (
        <div className="flex items-start gap-2.5">
          <img
            className="w-8 h-8 rounded-full"
            src="data:image/jpeg;base64,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"
            alt="Jese image"
          />
          <div style={{padding:"10px"}} className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {el.sender}
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {el.date}
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              {el.message}
            </p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Delivered
            </span>
          </div>
          <button
            id="dropdownMenuIconButton"
            data-dropdown-toggle="dropdownDots"
            data-dropdown-placement="bottom-start"
            className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 4 15"
            >
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </button>
          <div
            id="dropdownDots"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Reply
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Forward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Copy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}

      {/* <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
        </div>
    </div>
</div> */}
    </div>
  );
};

export default Message;
