import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children, ...props}) => {

    return (
        <Route 
            {...props} 
            render = { () => 
                !localStorage.getItem('token') ? (
                    <Redirect to="/login"/>
                ) : (
                    !localStorage.getItem('profile') ? (
                        <Redirect to="/perfiles" />
                    ) : children
                )
            }
        />
    )
}