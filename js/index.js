document.querySelector(".btn").addEventListener("click", handleClick);


document.querySelector(".input-amount").addEventListener("click", () => {
    document.querySelector(".input-amount-text-error").classList.add("input-error-text-hide");
    document.querySelector(".input-amount-text-error").classList.remove("input-error-text");
    document.querySelector(".input-amount").classList.remove("input-error");
})

document.querySelector(".input-people").addEventListener("click", () => {
    document.querySelector(".input-people").classList.remove("input-error");
    document.querySelector(".input-people-text-error").classList.add("input-error-text-hide");
    document.querySelector(".input-people-text-error").classList.remove("input-error-text");
})



for(let i =0; i<5; i++){
    
    document.querySelectorAll(".tip")[i].addEventListener("click", () => {
        if(document.querySelector(".input-people").value && document.querySelector(".input-amount").value){
            var tipPerPerson = 0.00;
            var totalPerPerson = 0.00;
            var amount = document.querySelector(".input-amount").value;
            var people = document.querySelector(".input-people").value;
            var amountValue =0; 
            var val = 0;
            
                amountValue =document.querySelectorAll(".tip")[i].innerText;
                val = parseInt(amountValue.substring(0, amountValue.length-1));
            
           
        tipPerPerson = (val * amount)/100/people;
        totalPerPerson  = (parseInt(amount) + tipPerPerson*people);
        document.querySelector(".tip-amount").innerText = "$" + tipPerPerson;
        document.querySelector(".total-amount").innerText = "$" + totalPerPerson;
        }else{
             if(!document.querySelector(".input-people").value){
            document.querySelector(".input-people").classList.add("input-error");
            document.querySelector(".input-people-text-error").classList.remove("input-error-text-hide");
            document.querySelector(".input-people-text-error").classList.add("input-error-text");
        } if(!document.querySelector(".input-amount").value){
            document.querySelector(".input-amount-text-error").classList.remove("input-error-text-hide");
            document.querySelector(".input-amount-text-error").classList.add("input-error-text");
            document.querySelector(".input-amount").classList.add("input-error");
        }
    }
        
    })
}

document.querySelectorAll(".tip")[5].addEventListener("keyup", () => {
    if(document.querySelector(".input-people").value && document.querySelector(".input-amount").value){
        var tipPerPerson = 0.00;
        var totalPerPerson = 0.00;
        var amount = document.querySelector(".input-amount").value;
        var people = document.querySelector(".input-people").value;
        var amountValue =0; 
        var val = 0;
        
            amountValue =document.querySelectorAll(".tip")[5].value;
            val = parseInt(amountValue);
        
       
    tipPerPerson = (val * amount)/100/people;
    totalPerPerson  = (parseInt(amount) + tipPerPerson*people);
    document.querySelector(".tip-amount").innerText = "$" + tipPerPerson;
    document.querySelector(".total-amount").innerText = "$" + totalPerPerson;
    }else{
         if(!document.querySelector(".input-people").value){
        document.querySelector(".input-people").classList.add("input-error");
        document.querySelector(".input-people-text-error").classList.remove("input-error-text-hide");
        document.querySelector(".input-people-text-error").classList.add("input-error-text");
    } if(!document.querySelector(".input-amount").value){
        document.querySelector(".input-amount-text-error").classList.remove("input-error-text-hide");
        document.querySelector(".input-amount-text-error").classList.add("input-error-text");
        document.querySelector(".input-amount").classList.add("input-error");
    }
}
})


function handleClick(){
    document.querySelector(".tip-amount").innerText = "$0.00";
    document.querySelector(".total-amount").innerText = "$0.00";
    document.querySelector(".input-people").value = "";
    document.querySelector(".input-amount").value = "";
    document.querySelector(".tip-custom").value = "";
    document.querySelector(".input-people").classList.remove("input-error");
    document.querySelector(".input-people-text-error").classList.add("input-error-text-hide");
    document.querySelector(".input-people-text-error").classList.remove("input-error-text");
    document.querySelector(".input-amount-text-error").classList.add("input-error-text-hide");
    document.querySelector(".input-amount-text-error").classList.remove("input-error-text");
    document.querySelector(".input-amount").classList.remove("input-error");
}