async function populate(){

    const requestUrl = "https://fisraiagan.github.io/Client-side-JavaScript-summer-course/lesson-10/26S-JavaScript-02-Week10-main/js/heroes.json";
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(requestUrl);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()    
    const heroes = await response.json();

    console.log(heroes);

    populateHeader(heroes);

    populateHeroes(heroes);
}


function populateHeader(jsonObj){
const header = document.querySelector("header");
const myH1 = document.createElement("h1");
myH1.textContent = jsonObj.squadName;
header.appendChild(myH1);

const myPara = document.createElement("p");
myPara.textContent = `Hometown: ${jsonObj.homeTown} // Formed: ${jsonObj.formed}`;
header.appendChild(myPara);

}


function populateHeroes(jsonObj){
const section = document.querySelector("section");
const heroes = jsonObj.members;

for(const hero of heroes){
const myArticle = document.createElement("article");
const myH2 = document.createElement("h2");
const myPara1 = document.createElement("p");
const myPara2 = document.createElement("p");
const myPara3 = document.createElement("p");
const myList = document.createElement("ul");

myH2.textContent = hero.name;
myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
myPara2.textContent = `Age: ${hero.age}`;
myPara3.textContent = "Superpowers:";

const superPowers = hero.powers;
for(const power of superPowers){
    const listItem = document.createElement("li");
    listItem.textContent = power;
    myList.appendChild(listItem);

}
myArticle.appendChild(myH2);
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);
myArticle.appendChild(myList);
section.appendChild(myArticle);

    }
}

populate();