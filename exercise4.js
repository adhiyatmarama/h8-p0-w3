function dataHandling2(input){
    // Modifikasi Array
    input.splice(1, 2, input[1]+" Sharawy", "Provinsi " + input[2]);
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);
    
    //
    var tl = input[3];
    var pisah = tl.split("/");
    const tl_split = [pisah[0], pisah[1], pisah[2]];
    var temp = [pisah[0], pisah[1], pisah[2]];
    switch (tl_split[1]){
        case "01":
            console.log(`Januari`);
            break;
        case "02":
            console.log(`Februari`);
            break;
        case "03":
            console.log(`Maret`);
            break;
        case "04":
            console.log(`April`);
            break;
        case "05":
            console.log(`Mei`);
            break;
        case "06":
            console.log(`Juni`);
            break;
        case "07":
            console.log(`Juli`);
            break;
        case "08":
            console.log(`Agustus`);
            break;
        case "09":
            console.log(`September`);
            break;
        case "10":
            console.log(`Oktober`);
            break;
        case "11":
            console.log(`November`);
            break;
        case "12":
            console.log(`Desember`);
            break;
    }
    tl_split.sort(function(a,b){
        return b-a;
    });
    console.log(tl_split);
    console.log(temp.join("-"));

    var nama = input[1];
    var nama_slice = nama.slice(0,15);
    console.log(nama_slice);
}
//Test Case
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);