import "./App.css";
import image from "./logo192.png";
import { Component } from "react";

const images = [
  {
    scr: "https://images.unsplash.com/photo-1673232141234-889ed2cf341c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
    name: "Night View of the City",
  },
  {
    scr: "https://images.unsplash.com/photo-1673247248053-45d9398b5853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Winter Bridge",
  },
  {
    scr: "https://images.unsplash.com/photo-1673248738655-289ca8cb3a6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Hall way",
  },
  {
    scr: "https://images.unsplash.com/photo-1673209377892-222ee5e19e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "iceberg",
  },
  {
    scr: "https://images.unsplash.com/photo-1673250367795-1f8ea37a780c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
    name: "Busy Street",
  },
  {
    scr: "https://images.unsplash.com/photo-1672795170458-f8893f39a0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Colosseum",
  },
  {
    scr: "https://images.unsplash.com/photo-1673194277089-796008e9cc30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Beuty of architecture",
  },
  {
    scr: "https://images.unsplash.com/photo-1672955189130-d1cf15cac547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
    name: "Bridge",
  },
  {
    scr: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Friendship",
  },
  {
    scr: "https://images.unsplash.com/photo-1671725501835-afb7bd1f21ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Husband Material",
  },
  {
    scr: "https://images.unsplash.com/photo-1672913404066-2dd7a44d96ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Top view",
  },
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  add() {
    this.setState({ count: (this.state.count + 1) % images.length });
  }
  sub() {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? images.length - 1 : count });
  }
  
  render() {
    return (
      <div className="container">
        <div className="image-container">
          <img
            src={images[this.state.count].scr}
            alt={images[this.state.count].name}
          />
          <p> {this.state.count} {images[this.state.count].name}</p>
        </div>
        <div className="functionality">
          <button onClick={this.sub.bind(this)}>&lang;</button>
          <span>{this.state.count}</span>
          <button onClick={this.add.bind(this)}>&rang;</button>
        </div>
        <div className="imageCards">
        {
        images.map((image,index) => {
           return <div className="card">
              <img src={image.scr} alt={image.name}/>
              <p> {index} {image.name}</p>
            </div>
            })}
        </div>
      </div>
    );
  }
}
