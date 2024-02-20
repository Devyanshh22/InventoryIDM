import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminHome from "./pages/AdminHome";
import AdminDevicePage from "./pages/AdminDevicePage";
import AdminUserPage from "./pages/AdminUserPage";
import AdminChangePassword from "./pages/AdminChangePassword";
import ResetPassword from "./pages/ResetPassword";
import AddDevice from "./pages/AddDevice";
import EditDevice from "./pages/EditDevice";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/admin-device-page":
        title = "";
        metaDescription = "";
        break;
      case "/admin-user-page":
        title = "";
        metaDescription = "";
        break;
      case "/admin-change-password":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/add-device":
        title = "";
        metaDescription = "";
        break;
      case "/edit-device":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home-page" element={<AdminHome />} />
      <Route path="/admin-device-page" element={<AdminDevicePage />} />
      <Route path="/admin-user-page" element={<AdminUserPage />} />
      <Route path="/admin-change-password" element={<AdminChangePassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/add-device" element={<AddDevice />} />
      <Route path="/edit-device" element={<EditDevice />} />
    </Routes>
  );
}
export default App;
