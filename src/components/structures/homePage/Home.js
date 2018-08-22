import React, { Component } from "react";
import Sidenav from "../sidenav";
import ImageSection from "../../paralax/image-section";
import TextSection from "../../paralax/text-section";
import Members from "./members";
import ImportTools from "./importTools";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: null };
  }

  render() {
    const members = [
      {
        img: "amanda.jpeg",
        name: "Amanda Muniz",
        git: "@AmandaMuniz",
        email: "amymuniiz@gmail.com"
      },
      {
        img: "bruno.jpeg",
        name: "Bruno Dantas",
        git: "@brunooliveiradantas",
        email: "oliveiradantas96@gmail.com"
      },
      {
        img: "calebe.jpeg",
        name: "Calebe Rios",
        git: "@caleberios",
        email: "calebersmendes@gmail.com"
      },
      {
        img: "indiara.jpeg",
        name: "Indiara Duarte",
        git: "@inddiara",
        email: "indiara96d@gmail.com"
      },
      {
        img: "isaque.jpeg",
        name: "Isaque Alves",
        git: "@alvesisaque",
        email: "isaquealvesdl@gmail.com"
      },
      {
        img: "joao.jpg",
        name: "João Vitor",
        git: "@joaovitor3",
        email: "joaovytor0@gmail.com"
      },
      {
        img: "luciana.jpeg",
        name: "Luciana",
        git: "@lucianaribeiro",
        email: "albuquerqueluciana54@gmail.com"
      },
      {
        img: "martha.jpg",
        name: "Martha Dantas",
        git: "@MarthaDs",
        email: "marthadntas@gmail.com"
      },
      {
        img: "vitor.jpeg",
        name: "Vitor Cardoso",
        git: "@vitorcx",
        email: "vitorcx010@gmail.com"
      }
    ];

    const tools = [
      { name: "Drive" },
      { name: "GitHub" },
      { name: "Hangouts" },
      { name: "Telegram" },
      { name: "ZenHub" }
    ];

    return (
      <div>
        <Sidenav />
        <ImageSection
          source="img1.jpg"
          content="Arquitetura e Desenho de Software"
          subcontent="2018/2"
          height="100vh"
          border={true}
        />
        <TextSection title="Bio" theme="dark">
          <p>
            Wiki destinada a disciplina de Arquitetura e Desenho de Software
            pelos alunos da UnB.
          </p>
          <p>
            Desenho de software, ou Projeto de software, é o processo de
            transformar os requisitos numa forma apropriada, quer dizer, que
            ajuda o programador na codificação do software e na implementação.
            Essa forma apropriada engloba as atividades de concepção,
            especificação e de prototipação das partes "externas" e "internas"
            do software. A parte externa compreende o modelo conceitual da
            aplicação e a interface de usuário. A parte interna compreende a
            arquitetura de componentes de software e os algoritmos e estruturas
            de dados que implementam estes componentes.
          </p>
          <p>
            Arquitetura de Software é a definição dos elementos arquiteturais,
            como eles conversam entre si, os padrões utilizados e as suas
            restrições. A linha entre design e arquitetura de software é tênue,
            pois a arquitetura pode ser vista como um aspecto do design que se
            concentra em alguns recursos específicos.
          </p>
        </TextSection>
        <ImageSection
          source="img3.jpeg"
          content=""
          height="40vh"
          border={false}
        />
        <TextSection title="Conheça a Equipe" theme="light">
          <div className="members-list">
            {members.map(member => {
              return (
                <Members
                  img={member.img}
                  name={member.name}
                  git={member.git}
                  email={member.email}
                />
              );
            })}
          </div>
        </TextSection>
        <ImageSection
          source="img4.jpg"
          height="40vh"
          border={false}
          filter="grayscale(55%)"
        />
        <TextSection title="Ferramentas" theme="dark">
          <div className="tools-list">
            {tools.map(tool => {
              return <ImportTools name={tool.name} />;
            })}
          </div>
        </TextSection>
        <ImageSection source="img2.jpg" content="" height="100vh" />
      </div>
    );
  }
}
export default Home;
