import { Navigate } from "react-router-dom";
import { isUserLoggedIn } from '../util/AuthenticationService';

export const ProtectedRoute = ({ children }) => {
    //protege para que não tenha acesso pela url sem auteticação.
    if (!isUserLoggedIn()) {
        // user is not authenticated
        return <Navigate to="/" />;
    }
    
    return children;
};
