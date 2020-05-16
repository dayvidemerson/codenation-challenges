import React from "react";

import "./Filters.scss";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              ref={this.textInput}
              placeholder="Pesquisar"
            />

            <button
              className="filters__search__icon"
              onClick={() =>
                this.props.handleChangeText(this.textInput.current.value)
              }
            >
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className={
              "filters__item" +
              (this.props.order === "name" ? " is-selected" : "")
            }
            onClick={() => this.props.handleChangeOrder("name")}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button
            className={
              "filters__item" +
              (this.props.order === "country" ? " is-selected" : "")
            }
            onClick={() => this.props.handleChangeOrder("country")}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button
            className={
              "filters__item" +
              (this.props.order === "company" ? " is-selected" : "")
            }
            onClick={() => this.props.handleChangeOrder("company")}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button
            className={
              "filters__item" +
              (this.props.order === "department" ? " is-selected" : "")
            }
            onClick={() => this.props.handleChangeOrder("department")}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button
            className={
              "filters__item" +
              (this.props.order === "admissionDate" ? " is-selected" : "")
            }
            onClick={() => this.props.handleChangeOrder("admissionDate")}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
