import React, { Component } from "react";
import Sidenav from '../../../structures/sidenav';
import Navbar from '../../../structures/dynamicsComponents/navbar';

class ElicitacaoNav extends Component {
  render() {
    const artefatos = [
      { pathname: "/elicitacao", link: "Bio" },
      { pathname: "/prototipo", link: "Prototipo" },
      { pathname: "/analiseprotocolo", link: "Análise de Protocolo"},
      { pathname: "/analisediscurso", link: "Análise de Discurso"}
    ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={artefatos} />
      </div>
    );
  }
}

export default ElicitacaoNav;
