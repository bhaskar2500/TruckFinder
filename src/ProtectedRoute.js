import {Route,Redirect } from 'react-router-dom'
export const ProtectedRoute = ({ isAuthenticated, ...props }) => {
     console.log('PROTECTED ROUTE',isAuthenticated);
    const val =  isAuthenticated  ? <Route {...props} >  </Route>  : <Redirect to="/"/>;
    console.log(val);
     return val;
}