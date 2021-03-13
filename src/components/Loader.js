import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
  return (
      <div>
        <Spinner radius={20} color={"#fff"} stroke={2} visible={true} />
      </div>
    );
  }
}