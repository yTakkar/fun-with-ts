import React from 'react'

const GenericFn = <T>(arg: T) :T => {
  return arg
}

GenericFn<string>('Hello')
GenericFn(2)

const GenericFnArray = <T>(array: T[]) :number => {
  return array.length
}

GenericFnArray(['a', 'b', 'c']) // error
GenericFnArray([1,2,3])

const identity = <T>(arg: T) :T => arg
let myIdentity: <T>(arg: T) => T = identity;
myIdentity('a')

interface GenericType {
  <T>(arg: T): T
}
let gen1 :GenericType = identity
gen1('a')

interface UIDInterace {
  name: string
}

const withUID = <T extends UIDInterace>(obj: T): T => {
  return {...obj, uid: Math.random()}
}

const a = withUID({name: 'Faiyaz'})

interface Aa<T=string> {
  name: T
}

const objA: Aa = {name: 'string'}
const objB: Aa<number> = { name: 12 }

// WITH GENERICS
interface FunctionalComponentInterface<P = {}>{
  (props: P):P,
  displayName?:string
} 

interface Props {
  name: string,
  age: number
}

const FunctionalComponent:FunctionalComponentInterface<Props> = (props) => {
  return props;
}

FunctionalComponent.displayName = 'dd'

FunctionalComponent({ name: 'faiyaz', age: 18 })

type IFCCC<P> = {
  (props: P): P,
  defaultProps?: Function
}

interface PPP {
  value: string
}

const F: IFCCC<PPP> = props => {
  return props
}

F({ value: 'f' })

// WITHOUT GENERICS
interface FCI {
  (props: {
    name: string,
    age: number
  }): string,
  displayName?: string
}

const FC:FCI = (props) => {
  return props.name
}

FC({ name: 'faiyaz', age: 18 })
FC.displayName = 'dd'

// NOW, EVERYTIME I HAVE TO CREATE FUNCTIONS LIKE THESE, WOULD HAVE TO RE-WRITE FCI INTERFACE
// EXAMPLE REACT'S FUNCTIONAL COMPONENT
// EVERYTIME YOU WANT TO USE FUNCTIONAL COMPONENT OF REACT IN TYPESCRIPT, YOU WOULD ALWAYS HAVE TO WRITE AN INTERFACE
// WITH DEFAULTPROPS, PROPTYPES, ... 
// BUT WITH GENERICS, REACT SAYS I GOT DEFAULTPROPS, PROPTYPES DEFINED IN MY INTERFACE, JUST PROVIDE ME PROPS 
// OBJECT/INTERFACE AND TS WON'T THROW WARNING