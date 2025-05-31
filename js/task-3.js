// function getElementWidth(content, padding, border) {
//   const contentWidth = parseFloat(content);
//   const paddingWidth = parseFloat(padding) * 2;
//   const borderWidth = parseFloat(border) * 2;

//   return contentWidth + paddingWidth + borderWidth;
// }



// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// function checkForSpam(message) {
//   const lowerMessage = message.toLowerCase();
//   return lowerMessage.includes("spam") || lowerMessage.includes("sale");
// }


// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true



function filterArray(numbers, value) {
  if (!Array.isArray(numbers)) return [];
  const result = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number" && numbers[i] > value) {
      result.push(numbers[i]);
    }
  }
  
  return result;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]