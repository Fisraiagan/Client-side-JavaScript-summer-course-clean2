/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header");
const section = document.querySelector("section"); 

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4a: Create i-scream.json file with companyName, headOffice, established, active, topFlavors(name, calories, type, ingredients, image) */
    // STEP 4b: Store the URL of a JSON file in a variable */
    let url = "https://fisraiagan.github.io/Client-side-JavaScript-summer-course/lesson-10/26S-JavaScript-02-Week10-main/js/ice-cream.json";

    // STEP 5: Use the new URL to create a new request object
    let request = new Request(url);
    
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    let response = await fetch(request);
    
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    let responseJson = await response.json();
    
    // STEP 8: Output the iScream JSON object to the console
    console.log(responseJson);
    
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(responseJson);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(responseJson);
}

// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonObj) {
// Create the H1 element
    let myH1 = document.createElement("h1");
    let myPara = document.createElement("p");
// Grab the company name from the JSON object and use it for the text node
    myH1.textContent = jsonObj.companyName;
    myPara.textContent = `Head Office: ${jsonObj.headOffice} est ${jsonObj.established} and is currently ${jsonObj.active ? "Active" : "Inactive"}.`;
// Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(myH1);
    header.appendChild(myPara);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
// STEP 10c: Bind the JSON topFlavors object to a var
    let topFlavors = jsonObj.topFlavors;

// STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {

        console.log(topFlavors[i]);
// STEP 10e: build HTML elements for the content: article, h2, image, p1, p2, list
        let myArticle = document.createElement("article");
        let myH2 = document.createElement("h2");
        let myPara1 = document.createElement("p");
        let myPara2 = document.createElement("p");
        let myPara3 = document.createElement("p");
        let myList = document.createElement("ul");
        let myImage = document.createElement("img");
// STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        myH2.textContent = topFlavors[i].name;
        myPara1.textContent = "Type: " +  topFlavors[i].type;
        myPara2.textContent = "Calories: " + topFlavors[i].calories;
        myPara3.textContent = "Rating: " + topFlavors[i].rating;
        myImage.setAttribute("src", topFlavors[i].images);

// STEP 10g: Build a loop for the ingredients array in the JSON
        let ingredients = topFlavors[i].ingredients;
        for(let j = 0; j < ingredients.length; j++) {
            console.log(ingredients[j]);
// STEP 10h: Create a list item for each ingredient and append to the UL element
            let listItem = document.createElement("li");
            listItem.textContent = ingredients[j];
            myList.appendChild(listItem);
        }
// STEP 10i: Append each element variable and add ARTICLE element to the SECTION element
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        myArticle.appendChild(myImage);
        section.appendChild(myArticle);
        
    }

}
// STEP 11: Add a 3rd flavour of ice cream to the local JSON file, making use of the /images/strawberry-sprinkle.svg image

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
