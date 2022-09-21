let bill = document.getElementById("bill");
let billNumber = parseInt(bill.value);

let people = document.getElementById("people");
let peopleNumber = parseInt(people.value);

let tipResult = document.getElementById("results")
let totalResult = document.getElementById("resultados")

let buttons = document.querySelectorAll("button")

let tipValue = 15;

let alert = document.getElementById("alert")

buttons.forEach(element => {
    element.addEventListener("click", e=>{

buttons.forEach(elements => {
elements.classList.remove("button--selected")
});
element.classList.add("button--selected");

        tipValue = parseInt(e.target.innerText.slice(0,-1))
       calculateTip();
    })
})


// Actualizando el bill

bill.addEventListener("input", function() {
 billNumber = parseFloat(bill.value)
 calculateTip()
});

function calculateTip() {
 // Calculo de tip Amount
 tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);
 // Calculo del total

 totalResult.innerText = ((billNumber * tipValue / 100 + billNumber)/peopleNumber).toFixed(2);
}



// Actualizando custom

let custom = document.getElementById("custom")
custom.addEventListener("click", function(){
    buttons.forEach(elements => {
        elements.classList.remove("button--selected")
        });
})

custom.addEventListener("input", function(){
    tipValue = parseInt(custom.value)

    if (isNaN(tipValue)) {

    } else {
        calculateTip();
    }

})





// Actualizando el NumberPeople


people.addEventListener("input", () => {
    peopleNumber = parseFloat(people.value)
    if(peopleNumber == 0 || isNaN(peopleNumber)) {
        people.style.borderColor = "rgb(164, 68, 68)"
        alert.classList.add("error")
    } else{
        people.style.borderColor = "hsl(189, 41%, 97%)"
        alert.classList.remove("error")
        calculateTip()
    }

   })

   //reset

   let reset = document.getElementById("reset")

   reset.addEventListener("click", function() {
    bill.value = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    tipValue = 0;
    custom.value= "custom";
    calculateTip()
   })
