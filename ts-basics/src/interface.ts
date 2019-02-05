console.log('Hello from TypeScript')

const Person = (name: string = 'Faiyaz', ...rest: any[]): string => `Hello, ${name}!`
console.log(Person())

interface HumanLocation {
  cities: Array<string>, // string[]
  address: [string, number],
}

interface BasicHumanInfo {
  name: {
    firstName: string,
    lastName: string
  }
}

interface Human extends BasicHumanInfo, HumanLocation {
  isMarried: boolean,
  nothing1: null,
  nothing2: undefined
}

const obj: BasicHumanInfo = {
  name: {
    firstName: 'f',
    lastName: 'fd'
  },
}

const Human = (): Human => ({
  name: {
    firstName: 'Faiyaz',
    lastName: 'Shaikh'
  },
  cities: ['Mumbai', 'Allahabad'],
  address: ['dharavi', 400017],
  isMarried: false,
  nothing1: null,
  nothing2: undefined
})

interface Fn {
  (arg: any[]): void
}

const fn: Fn = (arg) => {
  console.log(arg)
}

fn(['dd'])

// INDEXING
interface User {
  name: string,
  age: number,
  city: string,
  // [u: string]: string
}

const user: User = {
  name: 'faiyaz',
  age: 20,
  city: 'mumbai'
}

Object.keys(user).map(u => {
  console.log(u, (user as any)[u])
  console.log(u, (<any>user)[u])
})

interface Ifn {
  (arg: 'a' | 'b'): void
}

const Random: Ifn = arg => {}
Random('a')

const RR = (arg: string | number) => {}
RR('a')
RR('5')

// UNION TYPES
type Shape = 
  { kind: 'circle', radius: number } |
  { kind: 'square', size: number } |
  { kind: 'rectangle', w: number, h: number }

const getArea = (shape: Shape) => {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.size * 2
    case 'rectangle':
      return shape.w * shape.h
  }
  throw new Error('Invalid shape')
}

getArea({ kind: 'circle', radius: 6 })