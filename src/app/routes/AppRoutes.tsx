import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import DashboardPage from "../../pages/dashboard/DashboardPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../../pages/login/LoginPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Route Declaration */}
                <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
                <Route path="/login" element={<LoginPage></LoginPage>} />

                {/* Private route Call */}
                <Route element={<PrivateRoute />} >
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Route>

                {/* Another all route page convert dashboard page */}
                <Route path="*" element={<Navigate to={'/dashboard'} replace />} />
            </Routes>

        </BrowserRouter >
    );
};

export default AppRoutes;