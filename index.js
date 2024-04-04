const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const pOutput = document.getElementById("p-output");
const answer  ={
    answer1: "Please enter a valid number",
    answer2: "Please enter a number greater than or equal to 1",
    answer3: "Please enter a number less than or equal to 3999"
}


const checker = (n) =>{
    if(n === ""){
        removeHidden();
        pOutput.innerHTML = answer.answer1;
    }
    else if(n < 0 ){
        removeHidden();
        pOutput.innerHTML = answer.answer2;
    }
    else if(n > 3999){
        removeHidden();
        pOutput.innerHTML=answer.answer3;
    }
    else{
        converter();
    }
}

convertBtn.addEventListener("click",()=>{
    checker(number.value);
    
});
const removeHidden = ()=>{
    output.classList.remove("hidden");
}


