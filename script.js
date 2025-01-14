const buttonE=document.getElementById("btn");
const billE=document.getElementById("bill");
const tipE=document.getElementById("tip");
const totalE=document.getElementById("total");

console.log(totalE);
buttonE.addEventListener("click",()=>{
    const billValue=billE.value;
    const tipValue=tipE.value;
    const total= billValue*(1+tipValue/100).toFixed(2);
    
    totalE.innerText=total;
    
    
})