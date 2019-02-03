import React from 'react'

interface IProps {
  name: string,
  greeting?: string
}

const Name: React.FC<IProps> = props => {
  return <h1>{props.greeting} I'm {props.name}</h1>
}

Name.defaultProps = {
  greeting: 'Hello'
}

export default Name