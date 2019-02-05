import React from 'react'
import { connect } from 'react-redux';
import { AppState } from '../types/reducers';
import userAction from '../actions/user'
import { UserActionCreator } from '../types/actions';

interface IProps {
  name: string,
  optional?: string,
  userAction: UserActionCreator
}

class User extends React.PureComponent<IProps> {
  static defaultProps = {
    optional: 'rjb32ojb'
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.userAction('updateName', e.target.value)
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
  const { name } = user;
  return { name }
}

export default connect(selector, { userAction })(User)