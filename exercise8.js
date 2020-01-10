function pasanganTerbesar(num) {
    var number = num.toString();
    var arr = [];
    for(var i = 0; i < number.length-1; i++){
      var str = '';
      for(var j = i; j < i+2; j++){
        str += number[j];
      }
    arr.push(parseInt(str));
    }
    arr.sort(function(a,b){return b-a});
    return arr[0]; 
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99