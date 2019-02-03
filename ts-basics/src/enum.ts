enum ResponseFN {
  UP = 'up',
  DOWN = 'down'
}

const responseFn = (direction: ResponseFN): void => {
  console.log(direction)
}

responseFn(ResponseFN.UP)
