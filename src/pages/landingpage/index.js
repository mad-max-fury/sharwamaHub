import React, { useState, CSSProperties, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import sharwamaHub from "../../api";
import { colors } from "../../colors";
import {
  GoToTop,
  HeroSection,
  HowItWorks,
  Newsletter,
  OrderNow,
  Showcase,
} from "../../components";
const LandingPage = () => {
  //fetching data from the api
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await sharwamaHub.get("/products");
    const data = response.data;
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            width: "100%",
          }}
        >
          <PuffLoader
            color={colors.primary}
            loading={loading}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              borderColor: "red",
            }}
            size={150}
          />
        </div>
      ) : (
        <>
          <HeroSection />
          <HowItWorks />
          <Showcase />
          <OrderNow />
          <Newsletter />
          <GoToTop />
        </>
      )}
    </>
  );
};

export { LandingPage };
