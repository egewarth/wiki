import React, { Component } from "react";
import Navbar from "./navbar";
import Content from "./content";

class Dynamics extends Component {
  render() {
    return (
      <div>
        <Navbar activities={[ {'pathname' : '/', 'link': 'Atividade 1' }, {'pathname' : '/', 'link': 'Atividade 2' }, {'pathname' : '/', 'link': 'Atividade 3' }]} />
        <Content />
      </div>
    );
  }
}

export default Dynamics;
