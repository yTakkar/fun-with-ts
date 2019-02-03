import React from 'react'
import { ProfessionState, AppState } from '../types/reducers'
import { connect } from 'react-redux';

interface IProps extends ProfessionState {}

const Profession: React.FC<IProps> = props => {
  return (
    <div>
      <h2>PROFESSION:</h2>
      <div>Desgination: {props.designation}</div>
      <div>Company: {props.company}</div>
      <div>Location: {props.location}</div>
    </div>
  )
}

const selector = (state: AppState) => {
  const { profession } = state;
  return { ...profession }
}

export default connect(selector)(Profession)