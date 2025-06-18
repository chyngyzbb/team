import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setError, setLoading, setUser } from "../../store/slice/authSlice";
import { login, register } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import styles from "./Exit.module.scss";


const Exit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isregister, setIsregister] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      if (isregister) {
        console.log("register");
        const res = await register(email, password);
        dispatch(setUser(res.user.email));
        navigate("/home");
        // console.log(res);
      } else {
        console.log("login");
        const res = await login(email, password);
        navigate("/home");
        dispatch(setUser(res.user.email));
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        dispatch(setError(error.message));
      } else {
        console.error("Unknown error:", error);
      }
    }
  };
  useEffect(() => {}, [dispatch]);

  return (
    <>
      <div className={styles.root}>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          style={{ padding: "10px" }}
          onClick={() => setIsregister(!isregister)}
        >
          Алмаштыруу
        </button>
        <h1>{isregister ? "Register" : "Login"}</h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto"
          style={{
            textAlign: "center",
            background: "black",
            padding: "20px 50px",
            borderRadius: "5px",
          }}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              required
            />
          </div>

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5"></div>
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>
          </div>
          <button
            type="submit"
            style={{ padding: "4px 10px" }}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isregister ? "Register" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Exit;
