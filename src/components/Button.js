import  React, { Component} from "react";

const Button = props => {
    return(
        <div style={styles.button}>
        {props.title}
        </div>
    )
}

export default Button
const styles ={
    button:{
        display: 'flex', backgroundColor: '#2CA64E', padding: 16, color: '#fff', borderRadius: 10
    }
}