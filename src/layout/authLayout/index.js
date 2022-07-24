import { Footer, Navbar } from "../../components";

const AuthLayout = ({ children, showModal, setShowModal }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export { AuthLayout };
