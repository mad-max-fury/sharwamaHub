import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { AppRouter } from "./appRouter";

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <Container>
      <Helmet>
        <title>SharwarmHub</title>
      </Helmet>
      <AppRouter showModal={showModal} SetShowModal={setShowModal} />
    </Container>
  );
}

export default App;

const Container = styled.div``;
