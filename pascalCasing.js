function toUnderscore(s) {
  if (s == null) return "null"; 
  s = s.toString(); 
  
  if (s.length < 2) return s.toLowerCase(); 
  
  let result = [s[0].toLowerCase()]; 
  
  for (let i = 1; i < s.length; i++) {
    if (/[A-Z]/.test(s[i])) {
      result.push('_', s[i].toLowerCase()); 
    } else {
      result.push(s[i]); 
    }
  }
  
  return result.join('');
}

console.log(toUnderscore("A123aaa123AAA123"));
console.log(toUnderscore("AAA"));
console.log(toUnderscore("TestController"));
console.log(toUnderscore("ThisIsBeautifulDay"));
console.log(toUnderscore("Am7Days", "am7_days", "Am7Days "));
console.log(toUnderscore("My3CodeIs4TimesBetter"));
console.log(toUnderscore("5"));
