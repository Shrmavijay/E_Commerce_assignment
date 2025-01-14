import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import "./registrationform.css";
import { useState } from "react";
import Loader from "../utils/LoginLoader";
import { registrationValidationSchema } from "../utils/validationSchema";
import { useAppDispatch } from "../hooks";
import { userRegister } from "../app/Slice/userSlice";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = async (
    values: any,
    actions: { resetForm: () => void }
  ) => {
    setIsLoading(true);
    if (values) {
      const user = await dispatch(userRegister(values));
      if(user.payload.id){
        actions.resetForm();
        navigate("/")
        setIsLoading(false)
      }

    } else {
    }
  };

  return (
    <div className="registrationPage">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registrationValidationSchema}
        onSubmit={handleRegister}
      >
        {({ errors, touched, handleSubmit, handleChange, handleBlur }) => {
          return (
            <>
              <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
              </div>
              <form noValidate onSubmit={handleSubmit}>
                <h3>Create Account</h3>
                <label htmlFor="name">Name</label>
                <input
                  required
                  id="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isLoading ? true : false}
                />
                <div className=" errors">
                  {errors.name && touched.name ? (
                    <span className="text-red-500">{errors.name}</span>
                  ) : null}
                </div>
                <label htmlFor="email">Email Address</label>
                <input
                  required
                  id="email"
                  name="email"
                  autoComplete="email"
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
                <label htmlFor="confirmPassword">confirmPassword</label>
                <input
                  required
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isLoading ? true : false}
                />
                <div className=" errors">
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <span className="text-red-500">
                      {errors.confirmPassword}
                    </span>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {isLoading ? <Loader /> : "Sign Up"}
                </Button>
                <Grid item>
                  <div className="social">
                    <span className="formtext">Already have an account?</span>
                    <Link to="/">
                      <div className="fb">
                        <i className="fab fa-facebook"></i>Login
                      </div>
                    </Link>
                  </div>
                </Grid>
              </form>
            </>
          );
        }}
      </Formik>
    </div>
  );
}
