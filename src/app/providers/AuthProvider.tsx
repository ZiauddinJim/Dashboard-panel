import { createContext, useMemo, useState } from "react";

// User type: logged-in user or null
type User = { id: number; email: string } | null;

// Auth context type
type AuthCtx = {
    user: User;
    token: string | null;
    login: (payload: { id: number; email: string; token: string }) => void;
    logout: () => void;
};

// Create Auth context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthCtx | null>(null);

// Auth provider component
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Token state (from localStorage)
    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem("token")
    );

    // User state (from localStorage)
    const [user, setUser] = useState<User>(() => {
        const raw = localStorage.getItem("user");
        return raw ? (JSON.parse(raw) as User) : null;
    });

    // Login function
    const login = (payload: { id: number; email: string; token: string }) => {
        setToken(payload.token);
        setUser({ id: payload.id, email: payload.email });
        localStorage.setItem("token", payload.token);
        localStorage.setItem("user", JSON.stringify({ id: payload.id, email: payload.email }));
    };

    // Logout function
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    // Memoize context value
    const value = useMemo(() => ({ user, token, login, logout }), [user, token]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
