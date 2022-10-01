function introduction(name) // Print out the user's name using interpolation
{
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) // Print out the user's name and the language they're learning using interpolation.
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = "JavaScript") // Print out the user's name and the language they're learning using interpolation, if no language is provided use javascript as the default.
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}