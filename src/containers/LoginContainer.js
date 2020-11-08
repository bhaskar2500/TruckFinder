import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Login from '../components/Login';
import {sendLogin,isLoggedIn} from '../actions/LoginActions.js'
import Button from '@material-ui/core/Button'
const LoginContainer = function (props) {
        
    return (
        <div>

            <Login register={true} setAuth={props.setAuth} sendLogin={props.sendLogin} isAuthenticated = {props.isAuthenticated} showLogout= {props.showLogout} ></Login>
            
        </div>
    )

}
function mapStateToProps(state){
    return {
        userName:state.userName
        ,isAuthenticated: state.isAuthenticated
    }
}
function mapDispatchToProps(dispatch){
    return {
        ...bindActionCreators({sendLogin,isLoggedIn},dispatch)
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)