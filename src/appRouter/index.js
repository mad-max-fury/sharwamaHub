import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthLayout, DashBoardLayout } from "../layout";
import { authRoutes, dashBoardRoutes, RequireAuth } from "./routes";
import { AnimatePresence } from "framer-motion";
import { NotFound } from "../pages";

export const AppRouter = ({ showModal, setShowModal }) => {
  return (
    <Router>
      {/* Auth Routes */}
      <AnimatePresence exitBeforeEnter>
        <Routes>
          {authRoutes.map((route) => (
            <Route
              exact
              key={route.name}
              {...route}
              element={
                <AuthLayout showModal={showModal} SetShowModal={setShowModal}>
                  {route.element}
                </AuthLayout>
              }
            />
          ))}

          {dashBoardRoutes.map((route) => (
            <Route
              exact
              key={route.name}
              {...route}
              element={
                <RequireAuth>
                  <DashBoardLayout
                    showModal={showModal}
                    SetShowModal={setShowModal}
                  >
                    {route.element}
                  </DashBoardLayout>
                </RequireAuth>
              }
            />
          ))}

          <Route path="*" exact element={<div> NotFound</div>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};
