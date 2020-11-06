var turn=0
var x1=0;var x2=0;var x3=0;var x4=0;var x5=0;var x6=0;var x7=0;
var winner=false;
let a=()=>{
    var turn=0
    var x1=0;var x2=0;var x3=0;var x4=0;var x5=0;var x6=0;var x7=0;
    var winner=false;
    var x=document.getElementById('x')
    x.innerHTML="<div><a id=c1 onclick=b(this)></a><a id=c2 onclick=b(this)></a><a id=c3 onclick=b(this)></a><a id=c4 onclick=b(this)></a><a id=c5 onclick=b(this)></a><a id=c6 onclick=b(this)></a></div><div><a id=c7 onclick=c(this)></a><a id=c8 onclick=c(this)></a><a id=c9 onclick=c(this)></a><a id=c10 onclick=c(this)></a><a id=c11 onclick=c(this)></a><a id=c12 onclick=c(this)></a></div><div><a id=c13 onclick=d(this)></a><a id=c14 onclick=d(this)></a><a id=c15 onclick=d(this)></a><a id=c16 onclick=d(this)></a><a id=c17 onclick=d(this)></a><a id=c18 onclick=d(this)></a></div><div><a id=c19 onclick=e(this)></a><a id=c20 onclick=e(this)></a><a id=c21 onclick=e(this)></a><a id=c22 onclick=e(this)></a><a id=c23 onclick=e(this)></a><a id=c24 onclick=e(this)></a></div><div><a id=c25 onclick=f(this)></a><a id=c26 onclick=f(this)></a><a id=c27 onclick=f(this)></a><a id=c28 onclick=f(this)></a><a id=c29 onclick=f(this)></a><a id=c30 onclick=f(this)></a></div><div><a id=c31 onclick=g(this)></a><a id=c32 onclick=g(this)></a><a id=c33 onclick=g(this)></a><a id=c34 onclick=g(this)></a><a id=c35 onclick=g(this)></a><a id=c36 onclick=g(this)></a></div><div><a id=c37 onclick=g(this)></a><a id=c38 onclick=h(this)></a><a id=c39 onclick=h(this)></a><a id=c40 onclick=h(this)></a><a id=c41 onclick=h(this)></a><a id=c42 onclick=h(this)></a></div>"
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
    }
    win(circle,x)
}

//Check for Win
let win=(circle,x)=>{
    id=Number(circle.id.slice(1))
    console.log(id)
    
    right1=document.getElementById(`c${id+6}`)
    right2=document.getElementById(`c${id+12}`)
    right3=document.getElementById(`c${id+18}`)

    left1=document.getElementById(`c${id-6}`)
    left2=document.getElementById(`c${id-12}`)
    left3=document.getElementById(`c${id-18}`)

    down1=document.getElementById(`c${id-1}`)
    down2=document.getElementById(`c${id-2}`)
    down3=document.getElementById(`c${id-3}`)

    diaright1=document.getElementById(`c${id+7}`)
    diaright2=document.getElementById(`c${id+14}`)
    diaright3=document.getElementById(`c${id+21}`)

    dialeft1=document.getElementById(`c${id-7}`)
    dialeft2=document.getElementById(`c${id-14}`)
    dialeft3=document.getElementById(`c${id-21}`)

    diaup1=document.getElementById(`c${id+5}`)
    diaup2=document.getElementById(`c${id+10}`)
    diaup3=document.getElementById(`c${id+15}`)

    diadown1=document.getElementById(`c${id-5}`)
    diadown2=document.getElementById(`c${id-10}`)
    diadown3=document.getElementById(`c${id-15}`)
    //Vertical Win
    if(x>2){
    if(circle.style.backgroundColor===down1.style.backgroundColor&&circle.style.backgroundColor===down2.style.backgroundColor&&circle.style.backgroundColor===down3.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";down1.style.backgroundColor="gold";down2.style.backgroundColor="gold";down3.style.backgroundColor="gold";ender()}
    }
    //Horizontal Win
    if(right1&&right2&&right3){
    if(circle.style.backgroundColor===right1.style.backgroundColor&&circle.style.backgroundColor===right2.style.backgroundColor&&circle.style.backgroundColor===right3.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";right1.style.backgroundColor="gold";right2.style.backgroundColor="gold";right3.style.backgroundColor="gold";ender()}
    }
    if(right1&&right2&&left1){
    if(circle.style.backgroundColor===right1.style.backgroundColor&&circle.style.backgroundColor===right2.style.backgroundColor&&circle.style.backgroundColor===left1.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";right1.style.backgroundColor="gold";right2.style.backgroundColor="gold";left1.style.backgroundColor="gold";ender()}
    }
    if(right1&&left2&&left1){
    if(circle.style.backgroundColor===right1.style.backgroundColor&&circle.style.backgroundColor===left2.style.backgroundColor&&circle.style.backgroundColor===left1.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";right1.style.backgroundColor="gold";left2.style.backgroundColor="gold";left1.style.backgroundColor="gold";ender()}
    }
    if(left1&&left2&&left3){
    if(circle.style.backgroundColor===left1.style.backgroundColor&&circle.style.backgroundColor===left2.style.backgroundColor&&circle.style.backgroundColor===left3.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";left1.style.backgroundColor="gold";left2.style.backgroundColor="gold";left3.style.backgroundColor="gold";ender()}
    }
    //Right Diagonal Win
    if(diaright1&&diaright2&&diaright3){
        if(circle.style.backgroundColor===diaright1.style.backgroundColor&&circle.style.backgroundColor===diaright2.style.backgroundColor&&circle.style.backgroundColor===diaright3.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";diaright1.style.backgroundColor="gold";diaright2.style.backgroundColor="gold";diaright3.style.backgroundColor="gold";ender()}
        }
        if(diaright1&&diaright2&&dialeft1){
        if(circle.style.backgroundColor===diaright1.style.backgroundColor&&circle.style.backgroundColor===diaright2.style.backgroundColor&&circle.style.backgroundColor===dialeft1.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";diaright1.style.backgroundColor="gold";diaright2.style.backgroundColor="gold";dialeft1.style.backgroundColor="gold";ender()}
        }
        if(diaright1&&dialeft2&&dialeft1){
        if(circle.style.backgroundColor===diaright1.style.backgroundColor&&circle.style.backgroundColor===dialeft2.style.backgroundColor&&circle.style.backgroundColor===dialeft1.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";diaright1.style.backgroundColor="gold";dialeft2.style.backgroundColor="gold";dialeft1.style.backgroundColor="gold";ender()}
        }
        if(dialeft1&&dialeft2&&dialeft3){
        if(circle.style.backgroundColor===dialeft1.style.backgroundColor&&circle.style.backgroundColor===dialeft2.style.backgroundColor&&circle.style.backgroundColor===dialeft3.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";dialeft1.style.backgroundColor="gold";dialeft2.style.backgroundColor="gold";dialeft3.style.backgroundColor="gold";ender()}
        }
    //Left Diagonal Win
    if(diaup1&&diaup2&&diaup3){
        if(circle.style.backgroundColor===diaup1.style.backgroundColor&&circle.style.backgroundColor===diaup2.style.backgroundColor&&circle.style.backgroundColor===diaup3.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";diaup1.style.backgroundColor="gold";diaup2.style.backgroundColor="gold";diaup3.style.backgroundColor="gold";ender()}
        }
        if(diaup1&&diaup2&&diadown1){
        if(circle.style.backgroundColor===diaup1.style.backgroundColor&&circle.style.backgroundColor===diaup2.style.backgroundColor&&circle.style.backgroundColor===diadown1.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";diaup1.style.backgroundColor="gold";diaup2.style.backgroundColor="gold";diadown1.style.backgroundColor="gold";ender()}
        }
        if(diaup1&&diadown2&&diadown1){
        if(circle.style.backgroundColor===diaup1.style.backgroundColor&&circle.style.backgroundColor===diadown2.style.backgroundColor&&circle.style.backgroundColor===diadown1.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";diaup1.style.backgroundColor="gold";diadown2.style.backgroundColor="gold";diadown1.style.backgroundColor="gold";ender()}
        }
        if(diadown1&&diadown2&&diadown3){
        if(circle.style.backgroundColor===diadown1.style.backgroundColor&&circle.style.backgroundColor===diadown2.style.backgroundColor&&circle.style.backgroundColor===diadown3.style.backgroundColor){winner=true;circle.style.backgroundColor="gold";dialeft1.style.backgroundColor="gold";dialeft2.style.backgroundColor="gold";dialeft3.style.backgroundColor="gold";ender()}
        }

}

let ender=()=>{
    winner=true;
    var text=document.getElementById('turn')
    if(turn===1){text.innerText="Blue Wins";text.style.color='blue'}
    else{text.innerText="Red Wins";text.style.color='red'}
}

let reset=()=>{location.reload()}