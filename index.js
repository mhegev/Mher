let div = document.getElementById("myDiv");
let i = 0;
div.onclick = function(){
    i++
    if (i%3==1){
        div.style.backgroundColor = 'purple'
    }else if(i%15==0){
        div.style.backgroundColor = 'blue'
    }else if(i%15==1){
        div.style.backgroundColor = 'green'
    }else if(i%15==2){
        div.style.backgroundColor = 'red'
    }else if(i%15==3){
        div.style.backgroundColor = 'yellow'
    }else if(i%15==4){
        div.style.backgroundColor = 'orange'
    }else if(i%15==5){
        div.style.backgroundColor = 'aqua'
    }else if(i%15==6){
        div.style.backgroundColor = 'lime'
    }else if(i%15==7){
        div.style.backgroundColor = 'black'
    }else if(i%15==8){
        div.style.backgroundColor = 'pink'
    }else if(i%15==9){
        div.style.backgroundColor = 'brown'
    }else if(i%15==10){
        div.style.backgroundColor = 'grey'
    }else if(i%15==11){
        div.style.backgroundColor = 'magenta'
    }else if(i%15==12){
        div.style.backgroundColor = 'turquoise'
    }else if(i%15==13){
        div.style.backgroundColor = 'silver'
    }else if(i%15==14){
        div.style.backgroundColor = 'gold'
    }
}
