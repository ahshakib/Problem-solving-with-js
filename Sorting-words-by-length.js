// sorting words by lengths in a string

const str = 'I am a fullstack web developer'

function sortWords(str) {
    const arr = str.split(' ')

    arr.sort((a, b) => {
        return a.length - b.length
    })

    return arr.join(' ')
}

console.log(sortWords(str))