//linear search

let array = [33,49,10,1,23,85,20,7];

let element = 10;
let flag = false

for (let i = 0; i < array.length; i++) {
    if(array[i]===element){
        console.log("true");
        flag = true
        break;
    }
}

if(!flag){
    console.log("false");
}
