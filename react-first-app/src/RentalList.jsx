import propTypes from 'prop-types'
import './Csproperty.css';
export default function ({name, rating, price})
{
    // const styles={color:"red",TextDecoration:"line-through"};
    return <div className="Csproperty"> 
       <h2>{name}</h2>
      <h3>${price} a night</h3>
      <h4>{rating}⭐️</h4>
        </div>
  }
  RentalList.propTypes={
    name:PropTypes.string,
    rating:PropTypes.number,
    price:PropTypes.number
  };