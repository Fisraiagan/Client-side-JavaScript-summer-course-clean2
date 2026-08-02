const output = document.querySelector('body p:nth-of-type(2)');

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let array1= ['string', 1, true, ['another', 'array']];
output.textContent = array1;
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
output.textContent = array1[3][0];
console.log("array1[3][0]: " + array1[3][0]);
// You can also change a particular element

// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
output.textContent = array1.length;
// In particular, looping through arrays
for (let i = 0; i < array1.length; i++) {
    output.textContent +=', '+ array1[i] + ' ';
}

array1.forEach((i)=> {
console.log('forEach loop: ' +i);
});

function add(a,b){
    return a + b;
}

const add2 = (a, b) => { return a + b; };

/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let teams = 'Warriors, Lakers, Celtics, Bulls, Knicks, Thunder, Spurs, Rockets';
// Output one of the array items
console.log(teams);
let teamsArray = teams.split(', ');
console.log('teamsArray[4]: ' + teamsArray[4]);

// Output the last element of the array
output.textContent = teamsArray[1];
output.textContent = teamsArray[teamsArray.length - 1];
/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
let teamsString = teamsArray.join(':');
output.textContent = teamsString;
console.log(teamsString);
console.log(typeof teamsString); // string

// let teamsString1 = teamsArray.toString();
// output.textContent = teamsString1;

/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()
let array2 = ['item1', 'item2', 'item3'];
array2.push('item4', 'item5');
output.textContent = array2;
console.log("array2: " + array2);
// If you would like to capture how many elements are in the array after you have edited it, then…
let newLength = array2.push('item6');
output.textContent = newLength;  
console.log("New length: " + newLength); 

// Removing an item from an array with pop()
// pop() returns the item that was removed, rather than the length of the updated array, so…
let array2Item = array2.pop();
console.log("Removed item: " + array2Item);
// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
    array2.unshift('item0');
    output.textContent = array2;
    console.log("array2 unshift: " + array2);
    array2.shift();
    console.log("array2 shift: " + array2);
    
// map() is used to change each element and return a new array
    let mappedArray = array1.map(i=>String(i));
    console.log("mappedArray: " + mappedArray);


//filter() is used to return a new array with only the elements that satisfy a certain condition
let filteredArray = array1.filter(i=>typeof i === 'string');
console.log("filteredArray: " + filteredArray);

// includes() is used to check if an array contains a certain element, and returns true or false
let includesString = array1.includes('string');
console.log("includesString: " + includesString);

// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()

/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */

/* STEP 1: Looping through an array with a FOR of loop */
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}