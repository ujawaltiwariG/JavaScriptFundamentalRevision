// var array = [2, 12, 5, 7, 8, 9];  //sum of two element: 14
// var first = 0;
// var last = array.length-1;
// for(let i=first; i<last; i++){
//     if((array[first]+ array[last])==14){
//         console.log(array[first]);
//         console.log(array[last]);
//         break;
//     }else{
//         first++;
//         last--;
//     }  
// }

var array = [2, 12, 5, 7, 8, 9];

var first = 0;
var last = array.length;

for(var i=first;first<array.length; first++){
    if(array[first]+array[last] == 14){
        console.log(array[first]);
        console.log(array[last]);
        // break;
    }else{
        first++;
        last--;
    }
}