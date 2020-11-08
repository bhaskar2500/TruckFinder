import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

function Logout(props) {
    console.log('logout entered')

    function handleLogout(e){
        axios.get("http://localhost:8080/logout").then(i=>console.log(i));
        console.log(props)
        props.setAuth(false)
        props.history.push('/');
        // window.location.reload("api/logout");
    }
    return (
        <div style={{'position':'absolute','right':'100px','top':'15px',"zIndex": "2000"}}>
        <Button variant="contained"  color="primary" onClick={(e)=>handleLogout(e)} > Logout </Button>   
        Hi {props.user}
        </div>
    )
}
  
export default withRouter(Logout);