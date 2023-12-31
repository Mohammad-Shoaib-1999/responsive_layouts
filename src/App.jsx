import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import {
  RegisterPage,
  LoginPage,
  VerifyOtpPage,
  HomePage,
  // ProfilePage,
  // CheckoutPage,
  // PaymentPage,
  // OrderSuccessPage,
  // OrderDetailsPage,
  // TrackOrderPage,
} from "./routes/Routes";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";

// import {
//   AdminDashboardPage,
//   AdminCreateProduct,
//   AdminAllCoupouns,
//   AdminAllRefunds,
//   AdminOrderDetails,
//   AdminSettings,
//   AdminDashboardUsers,
//   AdminDashboardProducts,
// } from "./routes/AdminRoutes";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { loadUser } from "./redux/actions/user";
import Store from "./redux/store";
// import axios from "axios";
// import { server } from "./server";
// import { useSelector } from "react-redux";


function App() {
  
  useEffect(() => {
    Store.dispatch(loadUser()); 
    console.count();
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify" element={<VerifyOtpPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </HashRouter>
  );
}

export default App;
