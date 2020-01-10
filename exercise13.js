function targetTerdekat(arr) {
  var hasil = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i] == 'o'){
      for(var j=i+1; j<arr.length; j++){
        if(arr[j] === 'x'){
          hasil = j-i;
          return hasil;
        }
      }
    }else if(arr[i] === 'x'){
      for(var j=i+1; j<arr.length; j++){
        if(arr[j] === 'x'){
          var temp = j;
        }
        if(arr[j] === 'o'){
          hasil = j-temp;
        }
      }
    }
  }
  return hasil;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2