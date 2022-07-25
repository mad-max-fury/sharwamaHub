import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getError,
  getIsLoggedIn,
  getToken,
  setCredentials,
} from "../../features/auth/loginslice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { apiSlice } from "../../api/apislice";
import sharwamaHub from "../../api";

const Login = () => {
  const dispatch = useDispatch();
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [login, { isLoading }] = useLoginMutation();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const error = useSelector(getError);
  const token = useSelector(getToken);

  const onSubmit = async (data) => {
    // dispatch(authAsync(data));
    try {
      // Set CSRF Cookie
      await sharwamaHub.get("/sanctum/csrf-cookie");
      // Hist login endpoint with user credentials
      const newData = await sharwamaHub.post("/api/v1/login", data);
      // pull access token from return value
      const { access_token } = newData.data;
      // Hit user endpoint with access token
      const newUser = await sharwamaHub.get("/api/v1/user", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log(newUser.data);

      // set user to redux store
        dispatch(setCredentials({ ...newUser.data, email }));
        navigate("/dashboard");
    } catch {}
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {error && <p>{error}</p>}
        <h1>Admin Login</h1>
        <FormInputWraps>
          <FormRow>
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>username is required</span>}
          </FormRow>
          <FormRow>
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
              required
            />
            {errors.password && <span>password is required</span>}
          </FormRow>

          <FormButton type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </FormButton>
        </FormInputWraps>
      </Form>
    </Main>
  );
};

export { Login };

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
const FormInputWraps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4rem;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #f5f5f5;
`;
const FormInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  padding-left: 0.8rem;
`;
const FormButton = styled.button`
  font-weight: 700;
  font-size: clamp(0.9rem, 0.8vw, 1.4rem);
  width: 100%;
  height: clamp(3rem, 3.5vw, 3.5rem);
  background-color: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: 0;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: green;
  }
`;
