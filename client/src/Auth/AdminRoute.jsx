import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function AdminRoute() {
    const { user, loading } = useAuth()

    const context = useOutletContext()

    if (loading) return null // or spinner

    return user ? (
        <Outlet context={context} />
    ) : (
        <Navigate to="/login" replace />
    )
}