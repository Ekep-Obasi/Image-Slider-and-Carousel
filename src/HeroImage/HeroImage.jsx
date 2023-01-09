import { Component } from "react";
import './HeroImage'

export default class HeroImage extends Component{
  render() {
    return(
      <div className="image-container">
      <img src={this.props.scr} alt={this.props.name} />
      <p>{this.props.name}</p>
    </div>
    );
  }
}