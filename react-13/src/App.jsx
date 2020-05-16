import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

import contacts from "./data/data.json";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      order: "name",
      contacts: [],
    };
  }

  componentDidMount() {
    this.handleChangeOrder(this.state.order);
  }

  handleChangeText = (text) => {
    this.setState({
      text: text,
      contacts: contacts.filter((contact) => {
        return (
          contact.name.startsWith(text) ||
          contact.country.startsWith(text) ||
          contact.company.startsWith(text) ||
          contact.department.startsWith(text)
        );
      }),
    });
  };

  handleChangeOrder = (order) => {
    this.setState({
      order: order,
      contacts: contacts.sort((a, b) => {
        if (a[order] > b[order]) return 1;
        if (a[order] < b[order]) return -1;
        return 0;
      }),
    });
  };

  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Filters
          order={this.state.order}
          handleChangeText={this.handleChangeText}
          handleChangeOrder={this.handleChangeOrder}
        />

        <Contacts>
            {this.state.contacts.map((contact) => {
            return (
              <Contact
                key={contact.id}
                avatar={contact.avatar}
                name={contact.name}
                phone={contact.phone}
                country={contact.country}
                admissionDate={contact.admissionDate}
                company={contact.company}
                department={contact.department}
              />
            );
          })}
        </Contacts>
      </React.Fragment>
    );
  }
}

export default App;
