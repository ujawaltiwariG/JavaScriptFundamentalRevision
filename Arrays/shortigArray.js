var array = [40,30,12,25];

for(i = 0; i<array.length; i++){
   for(j=0; j<array.length; j++){
    if(array[j]>array[j+1]){              //array[40]>array[30]
       let temp = array[j];               //let temp = array[40] -->>if 40  is grater then 30 store in temp=40
       
       array[j] = array[j+1];            //array[40] = array[30]  ->> store 30 in array index j
       array[j+1] = temp;                //array[30] = 40 -->> index j+1 strore temp value 

    }

   }
}
console.log(array);
