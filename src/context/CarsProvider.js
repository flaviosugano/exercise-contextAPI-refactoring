import React from 'react';
import Context from './CarsContext';

class CarsProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({ cars: { ...this.state.cars, [car]: side } })
  }

  render() {
    const value = { 
      ...this.state,
      moveCar: this.moveCar,
    }

    const { children } = this.props;

    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    );
  }
}

export default CarsProvider;
