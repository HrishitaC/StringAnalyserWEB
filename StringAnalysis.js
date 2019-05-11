var consCountDisplay=document.querySelector("#consonants");
var vowCountDisplay=document.querySelector("#vowels");
var specCountDisplay=document.querySelector("#special");
var spaceCountDisplay=document.querySelector("#spaces");
var inputString=document.querySelector("input");
var clearButton=document.querySelector("#clear");

inputString.addEventListener("input", analyse);
clearButton.addEventListener("click", reset);

function analyse(e){
    var consCount=0;
    var vowCount=0;
    var specCount=0;
    var spaceCount=0;
    var check=e.srcElement.value;
    var len=check.length;
    for (var i=0;i<len;i++){
        if(check[i]===" "){
            spaceCount++;
        }
        else if(check[i].search(/A|E|I|O|U/i)===0){
            vowCount++;
        }
        else if(check[i].search(/[A-Z]/i)===0){
            consCount++;
        }
        else{
            specCount++;
        }
    }
    consCountDisplay.textContent=consCount;
    vowCountDisplay.textContent=vowCount;
    spaceCountDisplay.textContent=spaceCount;
    specCountDisplay.textContent=specCount;
}

function reset(){
    var consCount=0;
    var vowCount=0;
    var specCount=0;
    var spaceCount=0;
    consCountDisplay.textContent=consCount;
    vowCountDisplay.textContent=vowCount;
    spaceCountDisplay.textContent=spaceCount;
    specCountDisplay.textContent=specCount;
    inputString.value="";
}
