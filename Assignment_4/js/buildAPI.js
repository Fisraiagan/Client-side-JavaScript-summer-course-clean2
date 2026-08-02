//  Declare and initialize the base URL for the API
const BaseUrl = 'https://www.thesportsdb.com/api/v1/json';
//key for the API
const key = '3';


function fetchPlayerResults(event) {
    // Use preventDefault() to stop the form submitting
    event.preventDefault();
    //  Assemble the full URL
    //https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?t=Arsenal
    let url = `${BaseUrl}/${key}/searchplayers.php?p=${searchPlayer.value}`;  
    console.log("URL:", url);

    // Get the value from the searchPlayer input field
    const name = searchPlayer.value; 
    
    //create a promise  that  returns the JSON data from the API and then pass the JSON data to the displayPlayer() function
   fetch(url)
        .then(response => response.json())
        .then(json => {
            if (!json.player) {
                alert("Player not found");
                return;
            }
            const player = json.player[0];
            displayPlayer(player);
        })
        .catch(err => console.error("Fetch error:", err));


}  

