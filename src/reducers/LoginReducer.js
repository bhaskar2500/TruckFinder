const initState = {
    isAuthenticated : false
}
export default function rootReducer(state=initState ,action){

    switch(action.type){
        case('LOGIN_USER'):
            return {...state,isAuthenticated:action.isAuthenticated}
        case('IS_LOGIN'):
            return {...state,isAuthenticated:action.isAuthenticated}
        default:
            return state;

    }
}