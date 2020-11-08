import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import AuthContext from './context/AuthContext'
import Home from './components/Home';
import {
  BrowserRouter ,
  Route,Switch
} from "react-router-dom";
import {useMemo,useState,useEffect} from 'react'
import LoginContainer from './containers/LoginContainer';
import Logout from './components/Logout'
import {ProtectedRoute} from './ProtectedRoute'

function App(props) {
  const [isAuthenticated, setAuth] = useState(false);
  // useMemo(()=>{setAuth(isAuthenticated)},[isAuthenticated]);
  // console.log(isAuthenticated)
  useEffect(() => { }, [])


  return (
    <>
      <Header></Header>
      <BrowserRouter >
      { isAuthenticated ? <Logout type="button"  setAuth={setAuth} > </Logout> : null}
              <Switch>
                <Route  path = "/"  exact > <LoginContainer setAuth={setAuth} /> </Route>
                <Route  path = "/home"  exact > <Home /> </Route>
                {/* <ProtectedRoute isAuthenticated={isAuthenticated} path ="/home" component={Home} > </ProtectedRoute> */}
            </Switch>
          </BrowserRouter>
        <Footer></Footer>
        
    {/* </AuthContext.Provider> */}
      
</>
  );
}

export default App;
