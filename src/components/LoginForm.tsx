import { Link } from "react-router-dom";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
// import MyfetchMiddleWare from "../utils/api";
import "./loginform.css";
import { useState } from "react";
import Loader from "../utils/LoginLoader";
import { loginValidationSchema } from "../utils/validationSchema";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks";
import { userLogin } from "../app/Slice/userSlice";

interface LoginFormProps {
  checkLogin: any;
}
const LoginForm: React.FC<LoginFormProps> = ({ checkLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = async (values: any, actions: any) => {
    setErrorMessage("");
    setIsLoading(true);
    try {
      if (values) {
        // const userData = {
        //   method: "POST",
        //   endPoint: "api/users/login",
        //   options: { data: { ...values } },
        // };
        const user = await dispatch(userLogin(values));
        // console.log(user)
        if (user.payload.id) {
          actions.resetForm();
          checkLogin();
          setIsLoading(false);
        }
      } else {
        console.log(Error);
      }
    } catch (error: any) {
      setErrorMessage("Invalid Credentials");
    }
  };

  return (
    <div className="loginPage">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <>
            <div className="background">
              <div className="shape"></div>
              <div className="shape"></div>
            </div>
            <form noValidate onSubmit={handleSubmit}>
              <h3>Login Here</h3>
              <label style={{ visibility: "hidden" }} htmlFor="name">
                Email Address
              </label>
              <input
                required
                id="name"
                name="name"
                autoComplete="name"
                style={{ visibility: "hidden" }}
              />
              <div className=" errors" style={{ visibility: "hidden" }}>
                {/* {errors.name && touched.name ? (
                <span className="text-red-500">{errors.name}</span>
              ): null} */}
                {errorMessage}
              </div>
              <label htmlFor="email">Email Address</label>
              <input
                required
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isLoading ? true : false}
              />
              <div className=" errors">
                {errors.email && touched.email ? (
                  <span className="text-red-500">{errors.email}</span>
                ) : null}
              </div>
              <label htmlFor="password">Password</label>
              <input
                required
                name="password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isLoading ? true : false}
              />
              <div className=" errors">
                {errors.password && touched.password ? (
                  <span className="text-red-500">{errors.password}</span>
                ) : null}
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? <Loader /> : "Login"}
              </Button>
              <Grid container>
                <Grid item>
                  <div className="social">
                    <span className="formtext">Create new account</span>
                    <Link to="/register">
                      <div className="fb">
                        <i className="fab fa-facebook"></i>Register
                      </div>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </form>
          </>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
