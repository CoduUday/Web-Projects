let fac=6
let factoriyal=1
for (let n = 1; n <= fac; n++) {
    factoriyal=factoriyal*n
}
console.log(factoriyal);

function multiply(a,b) {
    return a*b
}

arr=Array.from(`${fac}`)
for (let n = 1; n < fac; n++) {
    arr.unshift(`${n}`)
}
arr.sort()
let factorial=arr.reduce(multiply)
console.log(factorial)