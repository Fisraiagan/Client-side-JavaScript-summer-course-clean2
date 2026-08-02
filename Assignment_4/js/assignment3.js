const searchBtn = document.getElementById('searchBtn');
const searchPlayer = document.getElementById('searchPlayer');
// Add an event listener to the search button to trigger the fetchPlayerResults function when clicked
searchBtn.addEventListener('click', fetchPlayerResults);

console.log("Assignment3.js LOADED");

function displayPlayer(player){

    console.log("Display Results: ", player);
    
    const output = document.getElementById("output");
    //clear previous results whenver function is invoked 
    output.innerHTML = "";

    //Create Div container
    const card = document.createElement("div");
   //add class to the div container
    card.classList.add("player-card");

    //create h2 element to display the player name
    const name = document.createElement("h2");
    //get Player name from strPlayer key
    name.textContent = player.strPlayer;
    //append variable name to the card
    card.appendChild(name);

    //create a player cutout with image
    if(player.strCutout){
        const img = document.createElement("img");
        img.src = player.strCutout;
        img.alt = player.strPlayer;
        img.classList.add("team-logo");
       // img.style.width = "200px";
        //img.style.display ="block";
        //img.style.marginBottom = "15px";
        //img.classList.add("team-logo");
        card.appendChild(img);
    }
    console.log("Player OBJECT:", player);
    
    console.log("Badge URL:", player.strCutout);


     //output player nationality
    const nationality = document.createElement("p");
    nationality.textContent = "Nationality: " + player.strNationality;
    card.appendChild(nationality);

    //output player date of birth
    const dob = document.createElement("p");
    dob.textContent = "Date of Birth: " + player.dateBorn;
    card.appendChild(dob);
    
    //output player team
    const team = document.createElement("p");
    team.textContent = "Team " + player.strTeam;
    card.appendChild(team);

    //output player position
    const position = document.createElement("p");
    position.textContent = "Position: " + player.strPosition;
    card.appendChild(position);
    
    //output sport name
    const sport = document.createElement("p");
    sport.textContent = "Sport played: "+ player.strSport;
    card.appendChild(sport);
    

    // Team Description
    const desc = document.createElement("p");
    desc.textContent = player.strDescriptionEN || "No description available.";
    card.appendChild(desc);

    
    //Add div card to page
      output.appendChild(card);
    
}
    