import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../../../colors";
import * as ReactDOM from "react-dom";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import sharwamaHub from "../../../../../api";
import { getToken } from "../../../../../features/auth/loginslice";

const CreateCate = ({ showCreateModal, setShowCreateModal }) => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log(token);
      console.log(data);
      const res = await sharwamaHub.post("/api/v1/categories", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Wrap showCreateModal={showCreateModal}>
        <FormContainer
          showCreateModal={showCreateModal}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormHeader>
            <FormTitle>Add Category</FormTitle>
            <Close onClick={() => setShowCreateModal(false)} />
          </FormHeader>
          <FormBody>
            <FormRow>
              <FormInput
                type="text"
                value={categoryName}
                name="title"
                {...register("title", { required: true })}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Name of category"
              />
            </FormRow>
          </FormBody>
          <FormFooter>
            <FormButton type="submit" disabled={categoryName === ""}>
              {isSubmitting ? "creating" : "Create"}
            </FormButton>
          </FormFooter>
        </FormContainer>
      </Wrap>
    </>
  );
};

export { CreateCate };

const Wrap = styled.main`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0%;
  left: 0%;

  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);

  ${({ showCreateModal }) =>
    !showCreateModal &&
    `
    transition: all 0.3s ease-in-out;
    opacity:0;
    z-index:-20;
    transform: scale(0);
  
    `}
`;
const FormContainer = styled.form`
  width: 30vw;
  border-radius: 10px;
  height: fit-content;
  background: #fff;
  margin: auto;
  box-shadow: 0 0 5px #000;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  transition-delay: 0.3s;
  padding: 2rem 1rem;

  ${({ showCreateModal }) =>
    !showCreateModal &&
    `
  transition-delay: 0.3s;

    transition: all 0.3s ease-in-out;
    transform: scale(0);
 
    `}
  @media (max-width: 768px) {
    width: 90vw;
    height: fit-content;
  }
`;
const FormTitle = styled.div`
  font-weight: 700;
  font-size: clamp(1.5rem, 0.8vw, 2.5rem);
  color: #333;
  text-transform: uppercase;
`;
const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
`;
const FormInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  padding-left: 0.8rem;
`;
const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
const Close = styled(IoMdClose)`
  position: absolute;
  top: -70%;
  right: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1.5rem;
  height: 2rem;
  width: 2rem;
  &:hover {
    color: ${colors.primary};
  }
`;
const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #f5f5f5;
`;
const ImageWrap = styled.div`
  height: clamp(10rem, 10vw, 10rem);
  width: 100%;
  border: 2px solid #f5f5f5;
  border-radius: 8px 8px 0px 0px;
  display: flex;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
`;
const AddImageWrap = styled.div`
  & > input {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  gap: 1rem;
  & h4 {
    margin: 0;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.3rem;
  }
  & span {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: ${colors.primary};
    margin: 1rem 0;
  }
`;

const AddImage = styled.div``;
