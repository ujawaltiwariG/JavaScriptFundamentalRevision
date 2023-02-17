const array = [-8, 5 , 1, 0, 100, 6];

let min = array[0]; //defined for not store garbadge value
let max = array[0];

for(var i=1; i<array.length; i++){   //loop for goes on all elements
    if(array[i]>max)    //checking array elements from max
      max = array[i];   //store max

    if(array[i]<min)  ////checking array elements from mim
      min = array[i];  //store min
}

console.log(min);
console.log(max);
