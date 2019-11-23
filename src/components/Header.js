import React from "react";

const Header = props => {
    return(
      <div style={styles.topText}>{props.title}</div>
    )
}

export default Header

const styles = {
    topText:{
        alignSelf: 'center', 
        marginTop: 80, 
        borderStyle: 'solid', 
        borderWidth: 5, 
        maxWidth: 50, 
        color: '#fff', 
        justifyContent: 'center',
         padding: 10, 
         fontWeight: 'bold'
        }
}

