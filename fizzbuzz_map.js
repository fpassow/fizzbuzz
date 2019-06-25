
const MAX = 100

const modReplacer = (modulus, newValue)=>{
    return (x)=>(
        ((typeof x === 'number') && !(x%modulus)) ? newValue : x
    )
}

new Array(MAX + 1).fill(0)
    .map((dummy, i)=>(i))
    .slice(1)
    .map(modReplacer(15, 'FizzBuzz'))
    .map(modReplacer(3, 'Fizz'))
    .map(modReplacer(5, 'Buzz'))
    .join('\n')

