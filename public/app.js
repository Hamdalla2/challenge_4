var turn=0
var x1=0;var x2=0;var x3=0;var x4=0;var x5=0;var x6=0;var x7=0;
var winner=false;
let a=()=>{
    var x=document.getElementById('x')
    x.innerHTML="<div><a id=c1 onclick=b(this)></a><a id=c2 onclick=b(this)></a><a id=c3 onclick=b(this)></a><a id=c4 onclick=b(this)></a><a id=c5 onclick=b(this)></a><a id=c6 onclick=b(this)></a></div><div><a id=c7 onclick=c(this)></a><a id=c8onclick=c(this)></a><a id=c9 onclick=c(this)></a><a id=c10 onclick=c(this)></a><a id=c11 onclick=c(this)></a><a id=c12 onclick=c(this)></a></div><div><a id=c13 onclick=d(this)></a><a id=c14 onclick=d(this)></a><a id=c15 onclick=d(this)></a><a id=c16 onclick=d(this)></a><a id=c17 onclick=d(this)></a><a id=c18 onclick=d(this)></a></div><div><a id=c19 onclick=e(this)></a><a id=c20 onclick=e(this)></a><a id=c21 onclick=e(this)></a><a id=c22 onclick=e(this)></a><a id=c23 onclick=e(this)></a><a id=c24 onclick=e(this)></a></div><div><a id=c25 onclick=f(this)></a><a id=c26 onclick=f(this)></a><a id=c27 onclick=f(this)></a><a id=c28 onclick=f(this)></a><a id=c29 onclick=f(this)></a><a id=c30 onclick=f(this)></a></div><div><a id=c31 onclick=g(this)></a><a id=c32 onclick=g(this)></a><a id=c33 onclick=g(this)></a><a id=c34 onclick=g(this)></a><a id=c35 onclick=g(this)></a><a id=c36 onclick=g(this)></a></div><div><a id=c37 onclick=g(this)></a><a id=c38 onclick=h(this)></a><a id=c39 onclick=h(this)></a><a id=c40 onclick=h(this)></a><a id=c41 onclick=h(this)></a><a id=c42 onclick=h(this)></a></div>"
    var text=document.getElementById('turn')
    text.innerText="Blue\'s Turn"
}
//1st Column Click
let b=(x)=>{
    if(x1===6){return}
    color(x.parentElement.childNodes[x1],x1)
    x1++
}
//2nd Column Click
let c=(x)=>{
    if(x2===6){return}
    color(x.parentElement.childNodes[x2],x2)
    x2++
}
//3rd Column Click
let d=(x)=>{
    if(x3===6){return}
    color(x.parentElement.childNodes[x3],x3)
    x3++
}
//4th Column Click
let e=(x)=>{
    if(x4===6){return}
    color(x.parentElement.childNodes[x4],x4)
    x4++
}
//5th Column Click
let f=(x)=>{
    if(x5===6){return}
    color(x.parentElement.childNodes[x5],x5)
    x5++
}
//6th Column Click
let g=(x)=>{
    if(x6===6){return}
    color(x.parentElement.childNodes[x6],x6)
    x6++
}
//7th Column Click
let h=(x)=>{
    if(x7===6){return}
    color(x.parentElement.childNodes[x7],x7)
    x7++
}
//Color Circle on click
let color=(circle,x)=>{
    if(!winner){
        var text=document.getElementById('turn')
        if(turn===0){circle.style.backgroundColor="blue";++turn;text.innerText="Red\'s Turn";text.style.color='red'}
        else if(turn===1){circle.style.backgroundColor="red";--turn;text.innerText="Blue\'s Turn";text.style.color='blue'}
        win(circle,x)
    }
}

//Check for Win
let win=(circle,x)=>{
    //Vertical Win
    if(x>3){
    if(circle.style.color===circle.previousSibling.style.color&&circle.style.color===circle.previousSibling.previousSibling.style.color&&circle.style.color===circle.previousSibling.previousSibling.previousSibling.style.color){winner=true;console.log(winner)}
    }
    //Horizontal Win

    //Right Diagonal Win

    //Left Diagonal Win
    
}
