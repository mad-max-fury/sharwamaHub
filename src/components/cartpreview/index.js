import axios from "axios";
import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
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
  FormButton2,
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
            <Item key={item?.id}>
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
          <CartButton
            onClick={
              cartTotalAmount === 0
                ? () => toast.info("please add an item")
                : () => setShowModal(true)
            }
          >
            Checkout
          </CartButton>
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

  // const publicKey = "pk_live_808e494a7ea9e5fdfaaadc814781a2e18a92f152";

  const amount = amT; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [makingReq, setMakingReq] = useState(false);
  const componentProps = {
    email,
    amount,
    metadata: {
      name: username,
      phone,
    },
    publicKey,
    text: "Order",
    onSuccess: (event) => handleSuccessPayement(event),
    onClose: (e) => console.log(e),
  };
  const initiateWhatsApp = (id) => {
    let message = `Hello, I have placed an order with the following items:`;
    cart.forEach((item) => {
      message += `
      ${item.name} - ${item.quantity}qty - ₦${item.price * item.quantity}`;
    });
    message += `
    *Total*: ${amT / 100}
    *Name*: ${username}
    *Address*: ${address}
    *Phone*: ${phone}
    *Email*: ${email}
    *OrderId*: ${id}
    `;
    const url = `https://wa.me/2349160359650?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_self");
    dispatch(emptyCart());
  };
  const handleSuccessPayement = async (e) => {
    const { reference } = e;
    toast.loading("verifying payment");
    setMakingReq(true);
    try {
      const res = await axios.post(
        "https://api.sharwamahub.com/api/v1/orders",
        {
          transaction_id: reference,
          orders: [...cart].map(({ id, name, quantity, price, image }) => {
            return {
              name,
              quantity,
              amount: quantity * price,
              photo: image,
            };
          }),
          user: {
            name: username,
            address,
            phonenumber: `+234${phone.substring(1, phone.length)}`,
          },
          photo: null,
        }
      );
      setEmail("");
      setName("");
      setAddress("");
      setPhone("");
      setShowModal(!showModal);
      setMakingReq(false);
      toast.dismiss();
      toast.success(res?.data?.message + ", check your message for details");
      initiateWhatsApp(reference);
    } catch {
      setMakingReq(false);
      toast.dismiss();
      alert(`here is your transaction id ${reference}`);
    }
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
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </FormRow>
          <FormRow>
            {/* <FormLabel>Email</FormLabel> */}
            <FormInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormRow>
          <FormRow>
            {/* <FormLabel>Name</FormLabel> */}
            <FormInput
              type="text"
              placeholder="enter delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormRow>
          <FormRow>
            {/* <FormLabel>Phone</FormLabel> */}
            <FormInput
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormRow>
        </FormBody>
        <FormFooter>
          {makingReq ? (
            <FormButton2 disabled>Processing...</FormButton2>
          ) : (
            <FormButton {...componentProps}>Order</FormButton>
          )}
        </FormFooter>
      </FormContainer>
    </Wrap>
  );
};
