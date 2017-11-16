 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


export default class Search extends Component {

  render() { 
    var search = {
      width: '20px',
      height: '16px'
    }
    return (
      <div >
       <nav className="navbar navbar-inverse">
       <div className="container-fluid">
         
         <ul className="nav navbar-nav">
           <li className="active"><a href="#">Home</a></li>
           <li><a href="/upload">Upload</a></li>
         </ul>
         <form className="navbar-form navbar-left">
         <div className="input-group">
           <input type="text" className="form-control" placeholder="Search"> 
           <div className="input-group-btn">
             <button  className="btn btn-default" type="submit">
             <img style={search} src="img/searchicon.png" alt="" />
             </button>
           </div></input>
         </div>
       </form>
       <div className="navbar-header">
           <a className="navbar-brand" href="#">BOT STORE</a>
        </div>
       </div>
     </nav>
   </div>
    );
  }
}


