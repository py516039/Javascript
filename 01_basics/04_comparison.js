//comparison
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


//such type of comparison should be avoided
console.log("2" > 1);
console.log("02" > 1);



//such type of comparison should be avoided
console.log(null==0)
console.log(null>=0);
console.log(nul<0);


//such type of comparison should be avoided
console.log(undefined==0)
console.log(undefined>0);//output always false in all condition
console.log(undefined<0);

//always use clean code