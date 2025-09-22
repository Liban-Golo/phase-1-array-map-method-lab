const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




function titleCased() {
  return tutorials.map(title => {
    let result = "";
    let capitalizeNext = true;

    for (let letter of title) {  
      if (letter === " ") {
        result += letter;
        capitalizeNext = true;
      } else if (capitalizeNext) {
        result += letter.toUpperCase();
        capitalizeNext = false;
      } else {
        result += letter;
      }
    }

    return result;
  });
}


