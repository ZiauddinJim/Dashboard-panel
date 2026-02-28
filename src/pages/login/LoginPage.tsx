import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { LoginApi } from "../../api/auth.api";
import { LuEye, LuEyeOff } from "react-icons/lu";

type FormValues = {
    email: string;
    password: string;
};
const LoginPage = () => {
    const nav = useNavigate();
    const { login, token } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>();

    if (token) return <Navigate to="/dashboard" replace />;

    const onSubmit = async (data: FormValues) => {
        setError(null);
        try {
            const res = await LoginApi(data);
            login(res);
            nav("/dashboard", { replace: true });
        } catch (err: any) {
            setError(err?.response?.data?.message ?? "Invalid credentials");
        }
    };
    return (
        <div className="min-h-screen bg-[#f5f7f7] flex items-center justify-center p-4">
            <div className="w-full max-w-md p-6 rounded-2xl bg-white shadow-sm border border-black/5">

                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-black/90">
                        Welcome back Donezo
                    </h1>
                    <p className="text-sm text-black/50">
                        Login to access your dashboard
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-black/80">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2 relative">
                        <label className="text-sm font-medium text-black/80">
                            Password </label>

                        <div className="relative">
                            <input type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="h-11 w-full rounded-xl border border-black/10 px-4 pr-12 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
                                {...register("password", { required: "Password is required" })} />

                            {/* Eye Icon */}
                            <span onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-black/50"
                            >{showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
                            </span>
                        </div>

                        {errors.password && (
                            <p className="text-sm text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {error && (<p className="text-sm text-red-600">{error}</p>)}

                    <button type="submit" disabled={isSubmitting}
                        className="w-full h-11 rounded-full font-bold
                                bg-emerald-700 text-white text-sm
                                transition-all duration-300 ease-in-out
                                hover:bg-emerald-900 hover:shadow-lg
                                active:scale-95 disabled:opacity-50 disabled:pointer-events-none
                                flex items-center justify-center gap-2">
                        {isSubmitting ? (
                            <><span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                Signing in...</>) : ("Sign in")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

