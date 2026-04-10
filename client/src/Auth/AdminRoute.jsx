import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function AdminRoute() {
    const { user, loading } = useAuth()

    if (loading) return null // or spinner

    return user ? <Outlet /> : <Navigate to="/login" replace />
}