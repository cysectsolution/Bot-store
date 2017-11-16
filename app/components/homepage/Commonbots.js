import React, { Component } from 'react';
import Input from 'muicss/lib/react/input';
'bootstrap/dist/css/bootstrap.min.css';

export default class Commonbots extends Component {
  render() {
    var commonbots = {
      width: '800px',
      height: 'auto',
      marginLeft: '350px',
      marginTop: '10px',
      backgroundColor: 'lightgoldenrodyellow',
      textAlign: 'center'
    };
    var bot = {
      textAlign: 'left',
      color: '#000',
      fontSize: '20px'
    };
    var icon = {
      border: 'black solid 3px',
      borderRadius: '10px',
      width: '220px',
      height: '200px'
    };
    var botdetails = {
      marginLeft: '120px',
      marginTop: '-70px'
    };
    return (
      <div className="head text-center">
        <h1>Commonly Searched Bots</h1>
        <div className="col-md-4 product simpleCart_shelfItem text-center">
          <a href="single.html"><img style={icon} src="img/bs.jpeg" alt="" /></a>
          <div class="mask">
            <a href="single.html">Bot Store</a>
          </div>
          <a className="product_name" href="single.html">A bot to help you find other bots.</a>
          <p><a className="item_add" href="#"><i></i> <span className="item_price">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span></span></a></p>
        </div>
        <div className="col-md-4 product simpleCart_shelfItem text-center">
          <a href="single.html"><img style={icon} src="img/gta5.jpg" alt="" /></a>
          <div class="mask">
            <a href="single.html">Bot Store</a>
          </div>
          <a className="product_name" href="single.html">Play GTA 5 on this bot.</a>
          <p><a className="item_add" href="#"><i></i> <span className="item_price">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star "></span></span></a></p>
        </div>
        <div className="col-md-4 product simpleCart_shelfItem text-center">
          <a href="single.html"><img style={icon} src="img/tico.png" alt="" /></a>
          <div class="mask">
            <a href="single.html">Art Bot</a>
          </div>
          <a className="product_name" href="single.html">Find all creative designs here</a>
          <p><a className="item_add" href="#"><i></i> <span className="item_price">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></span></a></p>
        </div>
        <div className="col-md-4 product simpleCart_shelfItem text-center">
          <a href="single.html"><img style={icon} src="img/bible.jpg" alt="" /></a>
          <div class="mask">
            <a href="single.html">Bible bot</a>
          </div>
          <a className="product_name" href="single.html">Search for bible verses</a>
          <p><a className="item_add" href="#"><i></i> <span className="item_price">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span></span></a></p>
        </div>
        <div className="col-md-4 product simpleCart_shelfItem text-center">
          <a href="single.html"><img style={icon} src="img/cartoon.jpg" alt="" /></a>
          <div class="mask">
            <a href="single.html">Cartoon Network</a>
          </div>
          <a className="product_name" href="single.html">Watch your favorite cartoons here.</a>
          <p><a className="item_add" href="#"><i></i> <span className="item_price">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></span></a></p>
        </div>
        <div className="col-md-4 product simpleCart_shelfItem text-center">
          <a href="single.html"><img style={icon} src="img/sports.jpg" alt="" /></a>
          <div class="mask">
            <a href="single.html">Sports</a>
          </div>
          <a className="product_name" href="single.html">Get to know what happens in the sports world.</a>
          <p><a className="item_add" href="#"><i></i> <span className="item_price">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span></span></a></p>
        </div>
        <div className="col-md-4 product simpleCart_shelfItem text-center">
          <a href="single.html"><img style={icon} src="img/janta.png" alt="" /></a>
          <div class="mask">
            <a href="single.html">Janta bot</a>
          </div>
          <a className="product_name" href="single.html">Find nearby handy men</a>
          <p><a className="item_add" href="#"><i></i> <span className="item_price">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span></span></a></p>
        </div>
        
      </div>
    );
  }
}


