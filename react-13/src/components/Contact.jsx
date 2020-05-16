import React from "react";

import "./Contact.scss";

class Contact extends React.Component {
  render() {
    const formatDate = date => {
      return date ? new Date(date).toLocaleDateString('pt-br') : '';
    }
    
    const emptyValue = "-----";
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          { this.props.avatar ? <img src={this.props.avatar} alt={this.props.name} /> : null }
        </span>
        <span className="contact__data">{this.props.name || emptyValue}</span>
        <span className="contact__data">{this.props.phone || emptyValue}</span>
        <span className="contact__data">{this.props.country || emptyValue}</span>
        <span className="contact__data">
          {formatDate(this.props.admissionDate) || emptyValue}
        </span>
        <span className="contact__data">
          {this.props.company || emptyValue}
        </span>
        <span className="contact__data">
          {this.props.department || emptyValue}
        </span>
      </article>
    );
  }
}

export default Contact;
