var array = [2, 12, 5, 7, 8, 9];  //sum of two element: 14
var i=0;
var e = array.length;

for (let i = 0; i < e; i++) {
    var el = 14 - array[i];
    for (let j = i+1; j < e; j++) {
        if(array[j]==el){
            console.log(array[i]);
            console.log(array[j]);
            console.log("\n");
        }
        
    }
}
