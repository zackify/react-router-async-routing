import React from 'react';

export default loader =>
  class Preload extends React.Component {
    componentDidMount() {
      loader({ path: this.props.path });
    }

    render() {
      return null;
    }
  };
