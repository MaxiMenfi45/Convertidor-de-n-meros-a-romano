const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const answer  ={
    answer1: "Please enter a valid number",
    answer2: "Please enter a number greater than or equal to 1",
    answer3: "Please enter a number less than or equal to 3999"
}
const numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
const letters = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
let result = '';


const checker = (n) =>{
    if(n === ""){
        
        output.innerHTML = answer.answer1;
    }
    else if(n < 0 ){
        
        output.innerHTML = answer.answer2;
        output.style.height="120px";
    }
    else if(n > 3999){
        
        output.innerHTML=answer.answer3;
        output.style.height="120px";
    }
    else {
        converter(n);
    }
    removeHidden();
}

convertBtn.addEventListener("click",()=>{
    checker(number.value);
    
});
const removeHidden = ()=>{
    output.classList.remove("hidden");
}

const converter = (n) =>{

        result='';
        let index = 0;

        while(n > 0){
            console.log("hola");
            if(n>=numbers[index]){
                result += letters[index];
                n -= numbers[index];
            }
            else{
                index++;
            }
        }
        output.innerHTML = result; 
        removeHidden();

    
}


