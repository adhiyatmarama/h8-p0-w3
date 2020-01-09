function angkaPalindrome(num) {
    var rem, temp, final = 0;
      var number = num+1;
    temp = number;
      while(number>0){
          rem = number%10;
          number = parseInt(number/10);
          final = final*10+rem;
    }
    while(temp != final){
      var rem, final = 0;
      number = temp + 1;
      temp = number;
      while(number>0){
              rem = number%10;
              number = parseInt(number/10);
              final = final*10+rem;
      }
    }
    var answer = final;
    return answer;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001