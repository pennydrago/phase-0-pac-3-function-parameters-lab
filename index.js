// Function with one parameter

function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// Function with two parameters

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Function with optional parameter

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}