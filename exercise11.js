function tentukanDeretAritmatika(arr) {
    var hasil = true;
    for(var i=0; i<arr.length-2; i++){
      var a = arr[i+2]-arr[i+1];
      var b = arr[i+1]-arr[i];
      if(a !== b){
        hasil = false;
      }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false