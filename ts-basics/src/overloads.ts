function getArray<T>(...args: T[]): T[]
function getArray<T>(args: T): undefined
function getArray(args: number): undefined[]

function getArray(...args) {
  if (args.length === 1 && typeof args[0] === 'number') {
    return new Array(args[0])
  } else if (args.length > 1) {
    return Array.from(args);
  }
}

console.log(getArray(5)) //?
console.log(getArray('a', 'b', 'c')) //?
console.log(getArray('A'))