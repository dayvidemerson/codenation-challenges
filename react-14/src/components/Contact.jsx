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
          { this.props.data.avatar ? <img src={this.props.data.avatar} alt={this.props.data.name} /> : null }
        </span>
        <span className="contact__data" data-testid="contact-name">{this.props.data.name || emptyValue}</span>
        <span className="contact__data" data-testid="contact-phone">{this.props.data.phone || emptyValue}</span>
        <span className="contact__data" data-testid="contact-country">{this.props.data.country || emptyValue}</span>
        <span className="contact__data" data-testid="contact-date">
          {formatDate(this.props.data.admissionDate) || emptyValue}
        </span>
        <span className="contact__data" data-testid="contact-company">
          {this.props.data.company || emptyValue}
        </span>
        <span className="contact__data">
          {this.props.data.department || emptyValue}
        </span>
      </article>
    );
  }
}

export default Contact;
