function groupAnimals(animals) {
    var hasil = [];
    for(var i=0; i<animals.length; i++){
     var index = -1;
      for(var j=0; j<hasil.length; j++){
        var str = animals[i];
        var str2 = hasil[j][0];
        if(str[0] == str2[0]){
          index = j;
        }
      }
      if(index === -1){
        hasil.push([animals[i]]);
      }else{
        hasil[index].push(animals[i]);
      }
    }
    hasil.sort();
    return hasil;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]