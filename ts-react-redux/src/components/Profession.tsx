import React from 'react'
import { AppState } from '../types/reducers'
import { connect } from 'react-redux';
import professionAction from '../actions/profession'
import { ProfessionState } from '../types/reducers/profession';
import { Profession as P } from '../types/actions';

interface IProps extends ProfessionState {
  professionAction: P.ActionCreator
}

const Profession: React.FC<IProps> = props => {

  const doAction = props.professionAction('profession')

  const updateProfession = () => doAction.updateProfession('designation', 'company', 'location')

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