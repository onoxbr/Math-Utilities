function abbreviateNumber(number, precision=2) {
    const suffsFromZeros = { 0:'', 3:'k', 6:'M', 9:'B', 12:'T', 15:'Qa', 18:'Qi', 21:'Sx' }
    const { length } = number.toString()
    const lengthThird = length%3
    const divDigits = length-(lengthThird || lengthThird+3)
    const calc = ''+(number/(10**divDigits)).toFixed(precision)
  
    return number < 1000 ? ''+number : (calc.indexOf('.') === calc.length-3 ? calc.replace(/\.00/, '') : calc)+suffsFromZeros[divDigits]
  }

function separateNumber(number){
    const n = number
    n.toLocaleString()
}


module.exports = {
    version: require("../package.json").version,

    /**
     * This function fetches data from a key in the database. (alias: .get())
     * @param {key} input any string as a key. Also allows for dot notation following the key.
     * @param {options} [input={ target: null }] Any options to be added to the request.
     * @returns {data} the data requested.
     */

    ab: abbreviateNumber,
    separate: separateNumber,

}