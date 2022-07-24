import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../../../colors";
import * as ReactDOM from "react-dom";
import { IoMdAdd, IoMdClose } from "react-icons/io";

import axios from "axios";

const AddProduct = ({ showModal, setShowModal }) => {
  const fileRef = useRef();
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = async (e) => {
    setImg(e.target.files[0]);
    const fd = new FormData();
    fd.append("image", e.target.files[0], e.target.files[0].name);
    const res = await axios.post(
      "https://shawarmahub-api.herokuapp.com/upload",
      fd,
      {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(percentCompleted);
        },
      }
    );
    const { data } = res;
    console.log(data.path);
  };
  useEffect(() => {
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
      };
      reader.readAsDataURL(img);
    } else {
      setPreview(null);
    }
  }, [img]);
  const root = ReactDOM.createRoot(document.getElementById("addportal"));
  return root.render(
    <>
      <Wrap showModal={showModal}>
        <FormContainer showModal={showModal}>
          <FormHeader>
            <FormTitle>Add Project</FormTitle>
            <Close onClick={() => setShowModal(false)} />
          </FormHeader>
          <FormBody>
            <ImageWrap>
              {preview ? (
                <Image src={preview} alt="alt image" />
              ) : (
                <>
                  <AddImageWrap>
                    <input
                      type="file"
                      ref={fileRef}
                      accept={"image/*"}
                      style={{ display: "none" }}
                      onChange={handleImage}
                    />
                    <AddImage onClick={() => fileRef.current.click()}>
                      <span>
                        <IoMdAdd size={40} />
                      </span>
                      <h4>Add Photo</h4>
                    </AddImage>
                  </AddImageWrap>
                </>
              )}
            </ImageWrap>
            <FormRow>
              <FormInput type="text" placeholder="Name of product" />
            </FormRow>
            <FormRow>
              <FormInput type="text" placeholder="Product description" />
            </FormRow>
            <FormRow>
              <FormInput type="number" placeholder="price for product" />
            </FormRow>
            <FormRow>
              <FormInput type="text" placeholder="name of category" />
            </FormRow>
          </FormBody>
          <FormFooter>
            <FormButton>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </Wrap>
    </>
  );
};

export { AddProduct };

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

  ${({ showModal }) =>
    !showModal &&
    `
    transition: all 0.3s ease-in-out;
    opacity:0;
    z-index:-20;
    transform: scale(0);
  
    `}
`;
const FormContainer = styled.div`
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

  ${({ showModal }) =>
    !showModal &&
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
