import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

import { URL } from "./constants";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.contacts = [];

    this.state = {
      text: "",
      order: "name",
      contacts: [],
    };
  }

  async componentDidMount() {
    this.contacts = await fetch(URL)
      .then((resp) => resp.json())
      .then((data) => data);

    this.setState({ contacts: this.contacts });

    this.handleChangeOrder(this.state.order);
  }

  handleChangeText = (text) => {
    this.setState({
      text: text,
      contacts: this.contacts.filter((contact) => {
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
      contacts: this.contacts.sort((a, b) => {
        if (a[order] > b[order]) return 1;
        if (a[order] < b[order]) return -1;
        return 0;
      }),
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="app" data-testid="app">
          <Topbar />

          <Filters
            order={this.state.order}
            handleChangeText={this.handleChangeText}
            handleChangeOrder={this.handleChangeOrder}
          />

          <Contacts>
            {this.state.contacts.map((contact) => {
              return <Contact key={contact.id} data={contact} />;
            })}
          </Contacts>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
