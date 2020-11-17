  // src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import Context from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

// class Cars extends React.Component {
//   render() {
//     const { cars: { red, blue, yellow }, moveCar } = this.context;

//     return (
//       <div>
//         <div>
//           <img
//             className={red ? 'car-right' : 'car-left'}
//             src={carRed}
//             alt="red car"
//           />
//           <button
//             onClick={() => moveCar('red', !red)}
//             type="button"
//           >
//             Move
//           </button>
//         </div>
//         <div>
//           <img
//             className={blue ? 'car-right' : 'car-left'}
//             src={carBlue}
//             alt="blue car"
//           />
//           <button
//             onClick={() => moveCar('blue', !blue)}
//             type="button"
//           >
//             Move
//           </button>
//         </div>
//         <div>
//           <img
//             className={yellow ? 'car-right' : 'car-left'}
//             src={carYellow}
//             alt="yellow car"
//           />
//           <button
//             onClick={() => moveCar('yellow', !yellow)}
//             type="button"
//           >
//             Move
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

function Cars() {
  return (
    <Context.Consumer>
      {({ cars: { red, blue, yellow }, moveCar }) => (
        <div>
          <div>
            <img
              className={red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              onClick={() => moveCar('red', !red)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={blue ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button
              onClick={() => moveCar('blue', !blue)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button
              onClick={() => moveCar('yellow', !yellow)}
              type="button"
            >
              Move
            </button>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func,
  car: PropTypes.shape({
    blue: PropTypes.bool.isRequired,
    red: PropTypes.bool.isRequired,
    yellow: PropTypes.bool.isRequired,
  }),
};

// Cars.contextType = Context;

export default Cars;
