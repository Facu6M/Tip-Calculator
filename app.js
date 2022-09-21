let bill = document.getElementById("bill");
let billNumber = parseInt(bill.value);

let people = document.getElementById("people");
let peopleNumber = parseInt(people.value);

let tipResult = document.getElementById("results")
let totalResult = document.getElementById("resultados")

let buttons = document.querySelectorAll("button")

let tipValue = 15;

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


// Actualizando el NumberPeople


people.addEventListener("input", () => {
    peopleNumber = parseFloat(people.value)
    calculateTip()
   })

