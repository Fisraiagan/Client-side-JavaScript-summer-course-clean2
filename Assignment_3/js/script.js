
   //add event listener to id element pizzaForm so we may listen for submit event 
document.querySelector("#pizzaForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault(); 
    
    const output = document.querySelector("#orderOutput");
    // Get stored form values from id elements  
    const customerName = document.querySelector("#customerName").value;
    const size = document.querySelector("#size").value;
    const crust = document.querySelector("#crust").value;
    const instructions = document.querySelector("#instructions").value;
    
    const toppings = []; 
    // Loop through all checked toppings and add their values to the toppings array
    for (const boxesChecked of document.querySelectorAll("input[name='toppings']:checked")) {
        toppings.push(boxesChecked.value);
    }

    //initialize variables
    let isValid = true;
    let errors = [];

    // Validate variable values
    if(customerName === ""){
        isValid = false;
        errors.push(" Please enter your name");
    }

    if(size === ""){
        isValid = false
        errors.push("Please select a pizza size");

    }

    if(crust === ""){
        isValid = false;
        errors.push("Please select a crust type");
    }

    if(toppings.length === 0){
        isValid = false;
        errors.push("Please select at least one topping");
    }

    //if isValid is false, alert the user with the errors and stop execution
    if(!isValid){
        alert(errors.join("\n"));
        return; // Stop execution if the form is not valid
    }

    //class Pizza with constructor and desc method
    class Pizza {
        constructor(CustomerName, size, crust, toppings, instructions) {
            this.customerName = CustomerName;
            this.size = size;
            this.crust = crust;
            this.toppings = toppings;
            this.instructions = instructions;
        }

        desc(){
            return `Thank you, ${this.customerName}! Your order is a ${this.size} pizza with ${this.crust} crust and the following toppings:
             ${this.toppings.join(", ")}. Your Special instructions: ${this.instructions}`;
        }


    }
    //create a new instance of the Pizza class with the form values 
    let pizzaOrder = new Pizza(customerName, size, crust, toppings, instructions);
    //display the order description in the output element
    output.textContent = pizzaOrder.desc();
    
});