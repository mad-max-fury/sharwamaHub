import styled from "styled-components";
import { colors } from "../../colors";
import { IoMdClose } from "react-icons/io";
import { PaystackButton } from "react-paystack";

export const CartContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  min-height: calc(100vh - 80px);
  width: 65%;
  max-width: 350px;
  min-width: ${(props) => (props.isOpen ? "280px" : "0")};
  background-color: ${colors.white};
  width: ${(props) => (props.isOpen ? "65%" : "0")};
  height: ${(props) => props.isOpen && "fit-content"};
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(props) => (props.isOpen ? "1.5rem 1rem" : "0")};
  transform: ${({ isOpen }) =>
    isOpen
      ? `translateX(0)

    `
      : "translateX(100%)"};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2),
    -1px -0.5rem 1rem rgba(255, 255, 255, 0.1);
  z-index: 39;
`;
export const CartHeader = styled.div`
  font-weight: 700;
  padding: 1rem 0;
  width: 100%;
  border-bottom: 1px solid grey;
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  gap: 1rem;
  padding: 0.4rem 0;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;
export const ItemImg = styled.img`
  width: clamp(3rem, 3vw, 5rem);
  height: clamp(3rem, 3vw, 5rem);
`;
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ItemName = styled.div`
  font-weight: 400;
  font-size: clamp(0.9rem, 0.8vw, 1.4rem);
`;
export const ItemPrice = styled.div`
  font-weight: 400;
  font-size: clamp(0.9rem, 0.8vw, 1.3rem);
  color: ${colors.secondary};
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 0;
  border-top: 1px solid grey;
  align-self: flex-end;
`;
export const CartTotal = styled.div`
  font-weight: 700;
  font-size: clamp(1.2rem, 1vw, 1.6rem);
  margin: 0.5rem 0;
`;
export const CartButton = styled.div`
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
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: green;
  }
`;

export const AddRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  justify-self: end;
  margin: 0 auto;
  gap: 0.5rem;
`;
export const Remove = styled.div`
  font-weight: 700;
  font-size: clamp(1.4rem, 0.8vw, 1.4rem);
  color: ${colors.secondary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
`;
export const Quantity = styled.div`
  font-weight: 700;
  font-size: clamp(1.2rem, 0.8vw, 1.4rem);
  color: ${colors.secondary};
`;
export const Add = styled.div`
  font-weight: 700;
  font-size: clamp(1.4rem, 0.8vw, 1.4rem);
  color: ${colors.secondary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }
`;

export const Wrap = styled.main`
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
export const FormContainer = styled.div`
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
export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const FormTitle = styled.div`
  font-weight: 700;
  font-size: clamp(1.5rem, 0.8vw, 2.5rem);
  color: #333;
  text-transform: uppercase;
`;
export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
`;
export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #f5f5f5;
`;
export const FormLabel = styled.div`
  font-weight: 700;
  font-size: clamp(0.9rem, 0.8vw, 1.4rem);
  color: #333;
  text-transform: uppercase;
  width: 8rem;
  background-color: #f5f5f5;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px 0 0 16px;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  padding-left: 0.8rem;
`;
export const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const FormButton = styled(PaystackButton)`
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
export const FormButton2 = styled.button`
  font-weight: 700;
  font-size: clamp(0.9rem, 0.8vw, 1.4rem);
  width: 100%;
  height: clamp(3rem, 3.5vw, 3.5rem);
  background-color: #adadad;
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
`;
export const Close = styled(IoMdClose)`
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
