export function kebabCase(str: string) {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join("-")
}

export function titleCase(str: string) {
    const lowerCaseWords = /\b(?:and|but|to|by|the|a|an|or|for|nor|on|at|with|of)\b/
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((word, index) => {
            if (index === 0 || !lowerCaseWords.test(word.toLowerCase())) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            }
            return word.toLowerCase()
        })
        .join(" ")
}