for (let step = 1; step < 21; step++) {
  if(step % 15 == 0) {
    console.log('FizzBuzz')
  } else if(step % 5 == 0) {
    console.log('Buzz')
  } else if(step % 3 == 0) {
    console.log('Fizz')
  } else {
    console.log(step)
  }
}
