import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
