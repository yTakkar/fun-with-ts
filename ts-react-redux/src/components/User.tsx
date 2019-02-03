import React from 'react'
import { connect } from 'react-redux';
import { AppState } from '../types/reducers';
import types from '../store/action_types';
import { Dispatch } from 'redux';

interface IProps {
  name: string,
  location?: {
    city: string,
    country: string
  },
  optional?: string,
  dispatch: Dispatch
}

class User extends React.PureComponent<IProps> {
  static defaultProps = {
    optional: 'rjb32ojb'
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.dispatch({ type: types.USER_SUCCESS, payload: { value: e.target.value } })
  }
  
  render() {
    return (
      <div>
        <input value={this.props.name} onChange={this.onChange} />
        <h3>{this.props.name}</h3>
        <span>{this.props.optional}</span>
      </div>
    )
  }
}

const selector = (state: AppState) => {
  const { user } = state;
  const { name, location } = user;
  return { name, location }
}

export default connect(selector)(User)