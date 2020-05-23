import React from "react";

import Contact from "./Contact";

class Contacts extends React.Component {
  render() {
    const headers = {
      name: "Nome",
      phone: "Telefone",
      country: "País",
      admissionDate: "Admissão",
      company: "Empresa",
      department: "Departamento",
    };

    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <Contact data={headers} />
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Contacts;
