import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import DashboardLayout from "./components/DashboardLayout";
import Profile from "./components/User/Profile";
import Logout from "./components/User/Logout";
import List from "./components/Contact/List";
import Create from "./components/Contact/Create";
import Detail from "./components/Contact/Detail";
import Edit from "./components/Contact/Edit";
import AddressCreate from "./components/Address/Create";
import AddressEdit from "./components/Address/Edit";
import { RequireAuth } from "./middlewares/require-auth";
import { Guest } from "./middlewares/guest";
import "./assets/css/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Guest>
              <Layout />
            </Guest>
          }
        >
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>

        <Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <DashboardLayout />
              </RequireAuth>
            }
          >
            <Route path="users">
              <Route path="profile" element={<Profile />} />
              <Route path="logout" element={<Logout />} />
            </Route>

            <Route path="contacts">
              <Route index element={<List />} />
              <Route path="create" element={<Create />} />
              <Route path=":id">
                <Route index element={<Detail />} />
                <Route path="edit" element={<Edit />} />
                <Route path="addresses">
                  <Route path="create" element={<AddressCreate />} />
                  <Route path=":addressId/edit" element={<AddressEdit />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
