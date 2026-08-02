/* Declare DOM variables */
characterName = document.querySelector(".CharacterName");
age = document.querySelector(".age");
isSuperhero = document.querySelector(".isSuperhero");
specialPowers = document.querySelector(".specialpowers");
favoriteFood = document.querySelector(".favoriteFood");
description = document.querySelector(".desc");
userNameInput = document.querySelector("#characterName");
ageInput = document.querySelector("#ageInput");
updateAgeButton = document.querySelector("#updateAgeButton");
updateNameButton = document.querySelector("#updateNameButton");
ageIncreaseButton = document.querySelector("#ageIncreaseButton");
ageDecreaseButton = document.querySelector("#ageDecreaseButton");

/* Set initial content*/
isSuperhero.textContent = 'Is a Superhero: '+' '+true;
specialPowers.textContent = 'Special Powers: '+' '+'Flying, Super Strength, acrobatics';
favoriteFood.textContent = 'Favorite Food: '+' '+'Hamburger';
let agedSliced = 0;
let characterNameSliced = '';

/* Slice the content of the elements to get the relevant information */
powersSliced = specialPowers.textContent.slice(16);
FoodSliced = favoriteFood.textContent.slice(15);
//agedSliced = age.textContent.slice(7);

/*Generate random age from 1 to 100 */
let randomAge = Math.floor(Math.random() * 100) + 1;
/* Set the initial age content with the random age */
age.textContent = 'Age is'+' '+randomAge;

/* Add event listeners to the updateAgeButton to update the age*/
updateAgeButton.addEventListener("click", function() {
    /* update the age content with new value */
    age.textContent = 'Age is'+' '+ageInput.value;
    /* Slice the age object to get the just the age content */
    agedSliced = age.textContent.slice(7);

    /* Update the description with the new age content */
    description.textContent = 'Say hello to'+' '+characterNameSliced+
    ', a superhero with the power of'+' '+powersSliced 
    +'!'+' '+'They are'+' '+agedSliced+' '
    +'years old and their favorite food is'+' '+FoodSliced+'.';

    
});


/* Add event listeners to the updateNameButton to update the character name*/
updateNameButton.addEventListener("click", function() {
    /* update the characterName content with the new value */
    characterName.textContent = 'Character Name: '+' '+userNameInput.value;
    /* Slice the characterName object to get just the character name content */
    characterNameSliced = characterName.textContent.slice(16);

    /* Update the description with the new character name content */
    description.textContent = 'Say hello to'+' '+characterNameSliced+
    ', a superhero with the power of'+' '+powersSliced 
    +'!'+' '+'They are'+' '+agedSliced+' '
    +'years old and their favorite food is'+' '+FoodSliced+'.';

});

/* Set the initial description content with the initial values */
description.textContent = 'Say hello to'+' '+characterNameSliced+
', a superhero with the power of'+' '+powersSliced 
+'!'+' '+'They are'+' '+agedSliced+' '
+'years old and their favorite food is'+' '+FoodSliced+'.';


ageIncreaseButton.addEventListener("click", function() {
    /* Increment age content*/
    randomAge++;
    age.textContent = 'Age is'+' '+randomAge;
    /* Slice the age object to get just the age content */
    agedSliced = age.textContent.slice(7);

     /* Update the description with the new age content */
    description.textContent = 'Say hello to'+' '+characterNameSliced+
    ', a superhero with the power of'+' '+powersSliced 
    +'!'+' '+'They are'+' '+agedSliced+' '
    +'years old and their favorite food is'+' '+FoodSliced+'.';


});

ageDecreaseButton.addEventListener("click", function() {
    /* Decrement the age content*/
    randomAge--;
    age.textContent = 'Age is'+' '+randomAge;
    /* Slice the age object to get just the age content */
    agedSliced = age.textContent.slice(7);
    /* Update the description with the new age content */
    description.textContent = 'Say hello to'+' '+characterNameSliced+
    ', a superhero with the power of'+' '+powersSliced 
    +'!'+' '+'They are'+' '+agedSliced+' '
    +'years old and their favorite food is'+' '+FoodSliced+'.';
});