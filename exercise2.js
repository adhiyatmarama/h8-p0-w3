function balikString(str){
  var answer = '';
  for(var i = str.length-1; i >= 0; i--){
      answer += str[i]
  }
  return answer;
}

//Test Case
console.log(balikString("hello world!"));
console.log(balikString("Adhiyatma"));