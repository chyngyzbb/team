import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUser } from "../../store/slice/authSlice";
import { login, register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user=useSelector((state)=>state.auth.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isregister, setIsregister] = useState(false);


// console.log(state);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      if (isregister) {
        const res = await register(email, password);
        dispatch(setUser(res.user.email));
        navigate("/home");
        // console.log(res);
      } else {
        const res = await login(email, password);
        //    console.log(res);
        dispatch(setUser(res.user.email));
        navigate("/home");
      }
    } catch (err: any) {
      dispatch(setError(err.message));
    }
  };

  return (
    <div>
    <h1>{user}</h1>
      <button onClick={() => setIsregister(!isregister)}>Алмаштыруу</button>
      <h1>{isregister ? "Катталуу" : "Логин"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isregister ? "Катталуу" : "Логин"}</button>
      </form>
    </div>
  );
};

export default Profile;
