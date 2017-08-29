import React, { Component } from 'react';

class Title extends Component {

  render() {
    return (
      <section className="interior-page-title valign-wrapper">
      <h1 className="center light valign">{this.props.title}</h1>
      </section>
    );
  }

}

export default Title;
