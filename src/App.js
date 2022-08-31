import { useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { AppRouter } from "./appRouter";

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <Container>
      <Helmet>
        <title>SharwarmHub</title>
      </Helmet>
      <ToastContainer />
      <AppRouter showModal={showModal} SetShowModal={setShowModal} />
    </Container>
  );
}

export default App;

const Container = styled.div``;
