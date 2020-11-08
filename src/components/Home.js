import Map from './Map'
import React from 'react'
// import { connect} from 'react-redux'
// import {bindActionCreators,} from 'redux'
import CustomizedTables from './DataTable'

function Home(props) {
    return (
        
        <div style={{"margin-top":"100px"}}>
            {/* <CustomizedTables></CustomizedTables> */}
            <CustomizedTables></CustomizedTables>
        </div>
    )
}


export default Home