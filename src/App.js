import React, { Component } from 'react'
import './App.css';
import { findProduct } from './_helpers';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import Contact from './views/Contact';
import ShopCart from './views/ShopCart';
import { Race } from './views/Race';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      deepCart: [],
      cart: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/shop')
      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }))

  }
  
  updateQuantity = (product, newQuantity) => {
    // var cart = [...this.state.cart];
    var originalQuantity = product.quantity;
    if (newQuantity > originalQuantity) {
      this.addToCart(product);
    }
    else {
      this.removeFromCart(product);
    }
    // this.setState({ cart })
  }
  
  removeFromCart = (product) => {
    var deepCart = [...this.state.deepCart];
    var cart = [...this.state.cart];

    for (let i = 0; i < deepCart.length; i++) {
      const item = deepCart[i];
      if (product.id === item.id) {
        let index = deepCart.indexOf(item);
        deepCart.splice(index, 1);
        this.setState({ deepCart });
        break;
      }
    }

    if (findProduct(cart, product)) {
      var newCart = [...cart];

      for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (item.id === product.id) {
          item.quantity--;

          if (item.quantity === 0) {
            let index = newCart.indexOf(item);
            newCart.splice(index, 1);
            break;
            // console.log(newCart);
          }
        }
      }
      this.setState({ cart: newCart }, () => console.log(this.state.cart));
      // console.log(this.state.cart)
    }
  }

  addToCart = (product) => {
    this.setState({ deepCart: this.state.deepCart.concat(product) })

    var obj = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      tax: product.tax,
      quantity: 1
    }

    if (findProduct(this.state.cart, obj)) {
      for (let i = 0; i < this.state.cart.length; i++) {
        const item = this.state.cart[i];
        if (item.id === obj.id) {
          item.quantity++;
          this.setState({ cart: this.state.cart })
        }
      }
    }
    else {
      this.setState({ cart: this.state.cart.concat(obj) })
    }
    
  };

  render() {
    return (
      <div>
        <header>
          <Navbar cart={this.state.cart} deepCart={this.state.deepCart} />
        </header>

        <main className="container">

          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/contact' render={() => <Contact />} />
            <Route exact path='/shop' render={() => <Shop addToCart={this.addToCart} products={this.state.products} />} />
            <Route path='/shop/cart' render={() => <ShopCart updateQuantity={this.updateQuantity} cart={this.state.cart} deepCart={this.state.deepCart} />} />
            <Route path="/typerace" render={() => <Race />} />
          </Switch>

        </main>

        <footer></footer>

      </div>
    )
  }
}