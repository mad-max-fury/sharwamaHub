import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import sharwamaHub from "../../api";
import {
  addToCart,
  getCartItems,
  getCartTotalAmount,
  removeFromCart,
  emptyCart,
} from "../../features/product/cartslice";
import {
  CartContainer,
  CartHeader,
  Items,
  Item,
  ItemImg,
  ItemInfo,
  ItemName,
  ItemPrice,
  AddRemove,
  Remove,
  Quantity,
  Add,
  CartFooter,
  CartTotal,
  CartButton,
  Wrap,
  FormContainer,
  FormHeader,
  FormTitle,
  Close,
  FormBody,
  FormRow,
  FormInput,
  FormFooter,
  FormButton,
} from "./styled";

const CartPreview = ({ isModalOpen, onClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCartItems);
  const cartTotalAmount = useSelector(getCartTotalAmount);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  return ReactDOM.createPortal(
    <>
      <Form
        showModal={showModal}
        setShowModal={setShowModal}
        amT={cartTotalAmount * 100}
      />
      <CartContainer isOpen={isModalOpen}>
        <CartHeader>Cart Items ({cart.length})</CartHeader>
        <Items>
          {[...cart].map((item) => (
            <Item key={item}>
              <ItemImg src={item?.image} />
              <ItemInfo>
                <ItemName>{item?.name}</ItemName>
                <ItemPrice> &#8358;{item.price}</ItemPrice>
              </ItemInfo>
              <AddRemove>
                <Remove onClick={() => handleRemove(item)}>-</Remove>
                <Quantity>{item?.quantity}</Quantity>
                <Add onClick={() => handleAdd(item)}>+</Add>
              </AddRemove>
            </Item>
          ))}
        </Items>
        <CartFooter>
          <CartTotal>Total: &#8358;{cartTotalAmount}</CartTotal>
          <CartButton onClick={() => setShowModal(true)}>Checkout</CartButton>
        </CartFooter>
      </CartContainer>
    </>,
    document.getElementById("portal")
  );
};

export { CartPreview };

const Form = ({ showModal, setShowModal, amT }) => {
  const cart = useSelector(getCartItems);
  const dispatch = useDispatch();

  // const publicKey = "pk_test_7c5122bd456a581f702dfbbb678e93cc7d9d073e";
  const publicKey = "";

  const amount = amT; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Order",
    onSuccess: (event) => handleSuccessPayement(event),
    onClose: (e) => console.log(e),
  };
  const handleSuccessPayement = async (e) => {
    const { reference, status, message } = e;
    try {
      const res = await sharwamaHub.post("/orders", {
        user: [
          {
            name,
            address: phone,
            phone,
          },
        ],
        orders: [...cart].map(({ id, quantity, price }) => {
          return { id, quantity, amount: quantity * price };
        }),
        transaction_id: reference,
      });
      const data = res.json();
      console.log(e);
      dispatch(emptyCart());
      setEmail(" ");
      setName(" ");
      setPhone(" ");
      setShowModal(!showModal);
    } catch {}
  };
  return (
    <Wrap showModal={showModal}>
      <FormContainer showModal={showModal}>
        <FormHeader>
          <FormTitle>Order Form</FormTitle>
          <Close onClick={() => setShowModal(false)} />
        </FormHeader>
        <FormBody>
          <FormRow>
            {/* <FormLabel>Name</FormLabel> */}
            <FormInput
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormRow>
          <FormRow>
            {/* <FormLabel>Email</FormLabel> */}
            <FormInput
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormRow>
          <FormRow>
            {/* <FormLabel>Phone</FormLabel> */}
            <FormInput
              type="number"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormRow>
        </FormBody>
        <FormFooter>
          <FormButton {...componentProps}>Order</FormButton>
        </FormFooter>
      </FormContainer>
    </Wrap>
  );
};
