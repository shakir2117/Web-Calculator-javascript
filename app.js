function display(val){
    document.getElementById('result').value +=val;
}
function solve(){
    let x= document.getElementById('result').value
    let y=eval(x);
    document.getElementById('result').value=y
}
function ClearScreen(){
    document.getElementById('result').value=''
}

function add() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let result = num1 + num2
    document.getElementById("res").value = result
    console.log(result)
}
function sub() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let result = num1 - num2
    document.getElementById("res").value = result
    console.log(result)
}
function mul() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let result = num1 * num2
    document.getElementById("res").value = result
    console.log(result)
}
function div() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let result = num1 / num2
    document.getElementById("res").value = result
    console.log(result)
}
function clearTest(){
    document.getElementById('res').value='';
}