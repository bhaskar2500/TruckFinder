import axios from 'axios';

export const sendLogin = (userName,password)=> (dispatch) =>{

    const data = {'Authorization':'Basic '+window.btoa(userName+":"+password)};

    return axios.get("https://truck-finder-backend.herokuapp.com/login/basic",{headers:data}).then((i)=>
    {
        console.log(i);
        return dispatch({
            type:'LOGIN_USER'
            ,isAuthenticated: true
        });
    }).catch((err)=>{
        console.log('error');
        return dispatch({
            type:'LOGIN_USER'
            ,isAuthenticated: false
        });
    });

}

export const isLoggedIn = ()=> (dispatch) =>{
    return dispatch({
        type:'IS_LOGIN'
        ,isAuthenticated: false
    });

}