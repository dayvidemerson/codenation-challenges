import React from "react";

import Contact from "./Contact";

class Contacts extends React.Component {
  render() {
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <Contact
            name="Nome"
            phone="Telefone"
            country="País"
            admissionDate="Admissão"
            company="Empresa"
            department="Departamento"
          />
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Contacts;
