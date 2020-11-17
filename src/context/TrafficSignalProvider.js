import React from 'react';
import Context from './TrafficSignalContext';

class TrafficSignalProvider extends React.Component {
  constructor() {
    super()
    this.state = { signal: { color: 'red' } }

    this.changeSignal = this.changeSignal.bind(this)
  }

  changeSignal(color) {
    this.setState({ signal: { color } });
  }

  render() {
    const value = {
      ...this.state,
      changeSignal: this.changeSignal,
    }

    const { children } = this.props;

    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    );
  }
}

export default TrafficSignalProvider;
