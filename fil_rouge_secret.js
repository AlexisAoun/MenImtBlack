var code = [2,3,3,3,3,4,4,4];
var index = 0;

var output = document.getElementById("output");


function eval (i){
    if(i==code[index]){
        index++;
        if(index>7){
            output.innerHTML = "2874141346";
        }
    }
    else{
        index=0;
    }
}


