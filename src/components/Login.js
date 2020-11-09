import React from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Box from "@material-ui/core/Box";
import style from './modules.css'
import truck from './truck.svg'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'

import CardContent from '@material-ui/core/CardContent'

import {useHistory} from 'react-router-dom';

import {useState} from 'react'

function Login(props) {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(true);

    
    function handleLoginClick(e){

        // e.preventDefault();
        props.sendLogin(userName,password).then((data)=>{ // console.log(history)
            console.log(data)
            if(data.isAuthenticated){
                history.push('/home');
            }
            props.setAuth(data.isAuthenticated);
        // props.showLogout();
        });
    }

    return (
        <div >
            <div style={{overflow:"hidden", backgroundImage : `url(${truck})` , backgroundPositionX:-250 ,backgroundBlendMode:"luminosity",backgroundColor:'rgba(0, 0, 0, 0.7)'} }  >
                
            <Grid   container direction="row" justify="center" alignItems="center" >
                <Box display="flex" justifyContent="center"  alignItems="center" minHeight="100vh" minWidth="200vh" >
                    <Card xs className={style.loginCard} style={{width:"400px"}} elevation={24}>
                        {/* <CardHeader disableTypography={true}  title="New User .Click on Register." > */}
                        {/* </CardHeader> */}
                            <Button style={{"margin":"10px"}} variant={register?"contained":"text"}  color="primary" onClick={(e)=>setRegister(true)} > Register </Button>   
                            <Button style={{"margin":"10px"}}  variant={!register?"contained":"text"}  color="primary" onClick={(e)=>setRegister(false)} > Login </Button>   

                        <CardContent>
                        <FormGroup >
                            <FormControl><TextField  fullWidth={true}  value={userName} onChange={(e)=> setUserName(e.target.value)}  placeholder="Username" style={{"display":"block","padding":"10px"}}></TextField></FormControl>  
                            <FormControl> <TextField  fullWidth={true} value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password" style={{"display":"block","padding":"10px"}} ></TextField></FormControl>  
                            <FormControl> {register ? <TextField  fullWidth={true}  onChange={(e)=> setPassword(e.target.value)} placeholder="Confirm Password" type="password" style={{"display":"block","padding":"10px"}} ></TextField> : null} </FormControl>  
                            <FormControl><Button variant="contained"  color="primary" onClick={(e)=>handleLoginClick(e)} fullWidth={true}>{ register ? "Register" : "Login" }</Button>   </FormControl>
                            </FormGroup>
                        </CardContent>
                    </Card>
                    
                </Box>
            </Grid>
            </div>
        </div>
        )
}
export default Login;