import React, { Component } from 'react';



export default class Sidebar extends Component {
  render() {
    var buttondiv = {
      marginTop: '-400px',
      marginLeft: '30px',
      width: '300px',
      height: '400px',
      border: 'grey solid 2px',
      borderRadius: '4px',
      backgroundColor: 'lightgoldenrodyellow'
    };
    var button = {
      marginLeft: '50px',
      marginTop: '50px',
      marginBottom: '10px',
      borderRadius: '5px',
      width: '200px',
      height: '50px',
      textDecoration: 'none',
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
      fontSize: '17px'
    };
    return (
      <div  className="Sidebar" style={buttondiv}>
        <form action="/upload">
          <input type="submit" style={button} value="Upload your bot" />
        </form>
        <form action="/upload">
          <input type="submit" style={button} value="Edit your bot" />
        </form>
      </div>


    );
  }
}


