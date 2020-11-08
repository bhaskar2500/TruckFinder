import React from 'react'
import Logout from './Logout';
import {useHistory} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'


export default function Header(props) {
    const history = useHistory();
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar style={{ backgroundColor: '#000' }}>
                    <div style={{ cursor : 'pointer' }} onClick={()=>{history.push('/home')}}>
                        Truck Service
                    </div>
                    
                </Toolbar>
            </AppBar>       
        </div>
    )
}
