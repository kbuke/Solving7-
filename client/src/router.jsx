import { createBrowserRouter } from "react-router";

import App from "./App";
import { LoginPg } from "./Pages/LoginPg/LoginPg";
import { AdminDashboard } from "./Pages/AdminDashboard/AdminDashboard";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // Create object with path and element keys 

            {
                path: "login",
                element: <LoginPg />
            },

            {
                path: "admin",
                element: <AdminDashboard />
            }
        ]
    }
])