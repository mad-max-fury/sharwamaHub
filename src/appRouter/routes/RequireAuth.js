import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken } from "../../features/auth/loginslice";

const RequireAuth = ({ children }) => {
  const token = useSelector(getToken);
  let location = useLocation();
  // const { sign_in } = state.auth ? state?.auth : null;
  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    return (
      <>
        <Navigate to="/admin/auth/signin" state={{ from: location }} replace />
        {toast("You must be logged in to Access your Dashboad", {
          position: "top-center",
        })}
      </>
    );
  }

  return children;
};

export { RequireAuth };
