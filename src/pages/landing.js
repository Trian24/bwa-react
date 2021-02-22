import React, { Component } from 'react';
import Header from 'parts/header';

class landing extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}

export default landing;