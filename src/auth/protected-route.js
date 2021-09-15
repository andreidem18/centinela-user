import { Route, Redirect } from "react-router-dom";
import { useAuth } from "hooks";

export const ProtectedRoute = ({ children, ...props}) => {

    const { loginError } = useAuth();

    return (
        <Route 
            {...props} 
            render = { () => 
                !localStorage.getItem('token') || loginError === 'Error de autenticación' ? (
                    <Redirect to="/login"/>
                ) : (
                    children
                )
            }
        />
    )
}