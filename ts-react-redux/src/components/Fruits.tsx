import React from 'react'
import { FruitsState, AppState } from '../types/reducers';
import { connect } from 'react-redux';
import { totalPriceSelector } from '../store/selector';

interface IProps extends FruitsState {
  totalPrice: number,
}

const Fruits: React.FC<IProps> = props => {
  return (
    <div>
      <h2>FRUITS:</h2>
      <h5>Total Price: {props.totalPrice}</h5>
      <ul>
        {props.bucket.map(item => (
          <li key={item.name}>{item.name}: {item.price}</li>
        ))}
      </ul>
    </div>
  )
}

const selector = (state: AppState) => {
  const { fruits } = state;
  return { 
    ...fruits,
    totalPrice: totalPriceSelector(fruits)
  }
}

export default connect(selector)(Fruits)