function getElementWidth (content, padding, border) {
 
 const contentTotal = parseFloat(content);
 const paddingTotal = parseFloat(padding);
 const borderTotal = parseFloat(border);

 return contentTotal + (paddingTotal * 2) + (borderTotal *2);
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
