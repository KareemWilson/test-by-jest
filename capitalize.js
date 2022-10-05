const capitalize = (str) => {
    const Str = str.charAt(0).toUpperCase() + str.slice(1)
    return Str
}

module.exports = capitalize