// count duplicate elements in an array and return an object that will contain which element how many times.

const str = ['abc','bc','ad','abc','bc','ad','bc']

function countElement(str) {
    const obj = {}
    
    str.forEach(item => {
        obj[item] = (obj[item] || 0) + 1
    })

    return obj
}

console.log(countElement(str))
