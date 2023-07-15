// reverse word in a string

const str = 'I love you'

function revWords(str) {
    const arr = str.split(' ')
    
    const revWordsArray = arr.map(element => {
        return element.split('').reverse().join('')
    })

    return revWordsArray.join(' ')
}

console.log(revWords(str))