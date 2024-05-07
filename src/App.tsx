import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import HomePage from "./Pages/HomePage";
import { getProducts } from "./app/Slice/productsSlice";
import { useAppDispatch } from "./hooks";

const App = () => {


  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = async () => {
    const token = localStorage.getItem("token");
    if (token !== null && token !== "null") {
      setIsLogin(true);
      dispatch(getProducts());
    } else {
      setIsLogin(false);
      dispatch(getProducts());
    }
  };
  useEffect(() => {
    checkLogin();
  });

  return (
    <div className="sedan-regular">
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm checkLogin={checkLogin} />} />
            <Route path="/register" element={<RegisterForm />} />
            {/* <Route path="/ticket" element={<TicketForm/>} /> */}
            <Route path="/" element={<HomePage isLogin={isLogin} setIsLogin={setIsLogin} />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
