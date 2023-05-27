let turn = 'X';
let iswin = true;
const changeturn=()=>{
    return turn==='X'?'0':'X';
}


const checkwin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2,0,3,5],
        [3,4,5,0,3,15],
        [6,7,8,0,3,25],
        [0,3,6,90,15,6.5],
        [1,4,7,90,15,-3.5],
        [2,5,8,90,15,-13.5],
        [0,4,8,-135,-13,-8],
        [2,4,6,-45,-8,13]
    ]
    win.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText!==''){
            // document.getElementsByClassName("info")[0].innerText = boxtexts[e[0]].innerText + " won";
            document.getElementsByClassName("info")[0].innerHTML = `<b>${boxtexts[e[0]].innerText} won</b>`;
            iswin=false; 
            document.querySelector('.info').style.color = "black";
            document.querySelector('.line').style.transform = `rotate(${e[3]}deg) translate(${e[4]}vw,${e[5]}vw)`;
            // document.querySelector('.line').style.background="black";
            // document.querySelector('.line').style.visibility="visible";
            document.querySelector('.line').style.width="23vw";
            document.querySelector('.winimg').getElementsByTagName('img')[0].style.width="200px";

        }
    })
}

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function isdraw(){
    let boxtexts = document.getElementsByClassName('boxtext');
    // let arr = [0,1,2,3,4,5,6,7,8];
    if(boxtexts[0].innerText!=='' && boxtexts[1].innerText!=='' &&boxtexts[2].innerText!=='' &&boxtexts[3].innerText!=='' &&boxtexts[4].innerText!=='' &&boxtexts[5].innerText!=='' &&boxtexts[6].innerText!=='' &&boxtexts[7].innerText!=='' &&boxtexts[8].innerText!=='' && iswin===true){
        document.getElementsByClassName("info")[0].innerHTML = `<b>It's a draw!!</b>`;
        document.querySelector(".info").style.color="yellow";
        await sleep(750);
        document.location.reload();
    }
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
    let boxtxt = Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
        if(boxtxt.innerText ===''){
            boxtxt.innerText=turn;
            turn = changeturn();
            checkwin();
            isdraw();
            if(iswin===true){ 
                document.getElementsByClassName('info')[0].innerHTML= `<b>turn for ${turn}</b>`;
                isdraw();
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtxt = document.querySelectorAll('.boxtext')
    Array.from(boxtxt).forEach(Element=>{
        Element.innerText=""
    });
    turn='X';
    iswin=true;
    document.getElementsByClassName('info')[0].innerHTML= `<b>turn for ${turn}</b>`;
    document.getElementsByClassName("info")[0].style.color="black";
    document.querySelector('.winimg').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.line').style.width="0vw";
})