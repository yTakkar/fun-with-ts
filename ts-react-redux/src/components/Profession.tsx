import React from 'react'
import { AppState } from '../types/reducers'
import { connect } from 'react-redux';
import professionAction from '../actions/profession'
import { ProfessionState } from '../types/reducers/profession';
import { ProfessionActionCreator } from '../types/actions';

interface IProps extends ProfessionState {
  professionAction: ProfessionActionCreator
}

const Profession: React.FC<IProps> = props => {
  const updateProfession = () => {
    props.professionAction('updateProfession', 'designation', 'company', 'location')
  }

  return (
    <div>
      <h2>PROFESSION:</h2>
      <div>Desgination: {props.designation}</div>
      <div>Company: {props.company}</div>
      <div>Location: {props.location}</div>
      <br/>

      <div>
        <button onClick={updateProfession} >Update Profession</button>
      </div>
    </div>
  )
}

const selector = (state: AppState) => {
  const { profession } = state;
  return { ...profession }
}

export default connect(selector, { professionAction })(Profession)