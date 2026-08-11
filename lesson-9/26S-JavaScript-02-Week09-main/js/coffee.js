const output = document.querySelector("#output");

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    //variables/attributes
    size;
    isDecaf;
    //constructor
    constructor(size, isDecaf){
        this.size = size;
        this.isDecaf = isDecaf;
    }


    // add a serveIt method
    serveIt(){

        // Generate an IMG of the coffee ordered
        let cup = document.createElement("img");
        // Set the src path for the IMG element
        if(this.isDecaf){
            // Determine caffeine status of the coffee
            cup.src = "images/coffee-cup-green.svg";
        }
        else{
            // Determine caffeine status of the coffee
            cup.src = "images/coffee-cup-purple.svg";
        }
        
        // Set the size of the cup SVG image based on this.size
        switch(this.size){
            // Size the IMG in terms of its height based on above number from the switch
            case "small":
                cup.style.height = "100px";
                break;
            case "medium":
                cup.style.height = "150px";
                break;
            case "large":
                cup.style.height = "200px";
                break;
            default:
                cup.style.height = "150px";
                break;
        }
        
        // Generate a description of the coffee and put it into the IMG title attribute
        cup.setAttribute("title", `A ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} coffee.`);
        // Insert the new IMG element into the paragraph
        output.appendChild(cup);
    }

}

/* STEP 2: Instatiate a coffee based on the above constructor function */
let chrisCoffee = new Coffee("medium", false);
chrisCoffee.serveIt();

let tylorCoffee = new Coffee("large", true);
tylorCoffee.serveIt();

let meganCoffee = new Coffee("small", false);
meganCoffee.serveIt();
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee{
    milkType;

    constructor(size, isDecaf, milkType){
        super(size, isDecaf);
        this.milkType = milkType;
    };
    latteDesc(){
        return `A ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} latte with ${this.milkType} milk.`;
    }
}
/* STEP 6: Create a new instance of the Latte object */
let chrisLatte = new Latte("medium", false, "whole");
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */
console.log(chrisLatte.latteDesc());

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG

// Lab 3
class Cappuccino extends Latte{
    flavours;

    constructor(size, isDecaf, milkType, flavours){
        super(size, isDecaf, milkType);
        this.flavours = flavours;
    };
    desc(){
        return `A ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} 
        latte with ${this.milkType} milk and ${this.flavours} flavour.`
        }
    }

    let chrisCappuccino = new Cappuccino("Large", true, "whole", "Vanilla");
    let TylorsCappuccino = new Cappuccino("Medium", false, "2%", "Pumpkin spice");

    chrisCappuccino.serveIt();
    TylorsCappuccino.serveIt();

    output.textContent = chrisCappuccino.desc();
    console.log(TylorsCappuccino.desc());

    class Mocha extends Cappuccino{
        chocolateType;

        constructor(size, isDecaf, milkType, flavours, chocolateType){
            super(size, isDecaf, milkType, flavours);
            this.chocolateType = chocolateType;
        };
        desc(){
            return `A ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} latte with ${this.milkType} milk and ${this.flavours} flavour and ${this.chocolateType} chocolate.`
        }

    }

    let tylorMocha = new Mocha("Small", false, "Almond", "vanilla", "Dark");
    
    tylorMocha.serveIt();