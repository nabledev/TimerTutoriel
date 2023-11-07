const form = document.querySelector('#formulaireTimer');
const timerContainer = document.querySelector("#timerInfo");
let intervalTimer;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const minutes = document.querySelector("#inputMinute").value;
    const secondes = document.querySelector("#inputSeconde").value;
    timerContainer.innerHTML = `<span>${minutes}:${secondes}</span>`
    intervalTimer = setInterval(descendreTimer,1000);


})


const descendreTimer= () =>{
    const timer = timerContainer.innerText;
    let min = Number.parseInt(timer.split(":")[0]);
    let sec = Number.parseInt(timer.split(":")[1]);
    if(sec === 0){
        if(min === 0){
            clearInterval(intervalTimer);
            return;
        }
        else{
            min = min-1;
            sec = 59;
        }
        
    }
    else{
        sec = sec - 1;
    }
    timerContainer.innerHTML = `<span>${min}:${sec}</span>`

}