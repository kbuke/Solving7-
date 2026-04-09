import { createBrowserRouter } from "react-router";

import App from "./App";
import { LoginPg } from "./Pages/LoginPg/LoginPg";
import { AdminDashboard } from "./Pages/AdminDashboard/AdminDashboard";
import { PublicLayout } from "./Layout/PublicLayout";
import { HomePg } from "./Pages/HomePg/HomePg";
import { ContactPg } from "./Pages/ContactPg/ContactPg";
import { SustainablePg } from "./Pages/SustainablePg/SustainablePg";
import { PillarsPg } from "./Pages/PillarsPg/PillarsPg";
import { ProductsPg } from "./Pages/ProductsPg/ProductsPg";
import { SpecificPillarPage } from "./Pages/SpecificPillarPg/SpecificPillarPg";
import { SpecificProductsPage } from "./Pages/SpecificProductsPage/SpecificProductsPage";
import { PgNotFound } from "./Pages/404/PgNotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // Create object with path and element keys 
            {
                element: <PublicLayout />,
                children: [
                    {index: true, element: <HomePg />},
                    {path: "contact", element: <ContactPg />},
                    {path: "sustainable", element: <SustainablePg />},
                    {path: "pillars", element: <PillarsPg />},
                    {path: "pillars/:id", element: <SpecificPillarPage />},
                    {path: "products", element: <ProductsPg />},
                    {path: "products/:id", element: <SpecificProductsPage />},
                    {path: "*", element: <PgNotFound />}
                ]
            },

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