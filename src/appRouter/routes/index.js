import { LandingPage, Login, Shop } from "../../pages";
import { RequireAuth } from "./RequireAuth";
import { RiDashboardFill } from "react-icons/ri";
import { FaLayerGroup } from "react-icons/fa";
import { MdGrading } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { MdOutlineLogout } from "react-icons/md";
import { Orders, OverviewPage, Products } from "../../pages/dashboard";

const authRoutes = [
  { name: "shop", path: "/shop", element: <Shop /> },
  { name: "signIn", path: "/Admin/auth/signin", element: <Login /> },
  { name: "home", path: "/", element: <LandingPage /> },
];

const dashBoardRoutes = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: <RiDashboardFill size={25} />,
    element: <OverviewPage />,
  },
  {
    name: "Products",
    path: "/dashboard/products",
    icon: <FaLayerGroup size={25} />,
    element: <Products />,
  },
  {
    name: "Orders",
    path: "/dashboard/orders",
    icon: <MdGrading size={25} />,
    element: <Orders />,
  },
];
export { authRoutes, dashBoardRoutes, RequireAuth };
