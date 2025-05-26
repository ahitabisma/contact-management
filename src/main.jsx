import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import DashboardLayout from "./components/DashboardLayout";
import { HelmetProvider } from "react-helmet-async";
import Profile from "./components/User/Profile";
import Logout from "./components/User/Logout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="users">
              <Route path="profile" element={<Profile />} />
              <Route path="logout" element={<Logout />} />
            </Route>

            {/* <Route path="contacts">
              <Route index element={<ContactList />} />
              <Route path="create" element={<ContactCreate />} />
              <Route path=":id">
                <Route index element={<ContactDetail />} />
                <Route path="edit" element={<ContactEdit />} />
                <Route path="addresses">
                  <Route path="create" element={<AddressCreate />} />
                  <Route path=":addressId/edit" element={<AddressEdit />} />
                </Route>
              </Route>
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
