var turn=0
var x1=0;var x2=0;var x3=0;var x4=0;var x5=0;var x6=0;var x7=0;
let a=()=>{
    var x=document.getElementById('x')
    x.innerHTML="<div><a onclick=b(this)></a><a onclick=b(this)></a><a onclick=b(this)></a><a onclick=b(this)></a><a onclick=b(this)></a><a onclick=b(this)></a></div><div><a onclick=c(this)></a><a onclick=c(this)></a><a onclick=c(this)></a><a onclick=c(this)></a><a onclick=c(this)></a><a onclick=c(this)></a></div><div><a onclick=d(this)></a><a onclick=d(this)></a><a onclick=d(this)></a><a onclick=d(this)></a><a onclick=d(this)></a><a onclick=d(this)></a></div><div><a onclick=e(this)></a><a onclick=e(this)></a><a onclick=e(this)></a><a onclick=e(this)></a><a onclick=e(this)></a><a onclick=e(this)></a></div><div><a onclick=f(this)></a><a onclick=f(this)></a><a onclick=f(this)></a><a onclick=f(this)></a><a onclick=f(this)></a><a onclick=f(this)></a></div><div><a onclick=g(this)></a><a onclick=g(this)></a><a onclick=g(this)></a><a onclick=g(this)></a><a onclick=g(this)></a><a onclick=g(this)></a></div><div><a onclick=g(this)></a><a onclick=h(this)></a><a onclick=h(this)></a><a onclick=h(this)></a><a onclick=h(this)></a><a onclick=h(this)></a></div>"
    var text=document.getElementById('turn')
    text.innerText="Blue\'s Turn"
}

let b=(x)=>{
    if(x1===6){return}
    color(x.parentElement.childNodes[x1])
    x1++
}
let c=(x)=>{
    if(x2===6){return}
    color(x.parentElement.childNodes[x2])
    x2++
}
let d=(x)=>{
    if(x3===6){return}
    color(x.parentElement.childNodes[x3])
    x3++
}
let e=(x)=>{
    if(x4===6){return}
    color(x.parentElement.childNodes[x4])
    x4++
}
let f=(x)=>{
    if(x5===6){return}
    color(x.parentElement.childNodes[x5])
    x5++
}
let g=(x)=>{
    if(x6===6){return}
    color(x.parentElement.childNodes[x6])
    x6++
}
let h=(x)=>{
    if(x7===6){return}
    color(x.parentElement.childNodes[x7])
    x7++
}

let color=(circle)=>{
    var text=document.getElementById('turn')
    if(turn===0){circle.style.backgroundColor="blue";++turn;text.innerText="Red\'s Turn";text.style.color='red'}
    else if(turn===1){circle.style.backgroundColor="red";--turn;text.innerText="Blue\'s Turn";text.style.color='blue'}
}

let win=(circle)=>{}
