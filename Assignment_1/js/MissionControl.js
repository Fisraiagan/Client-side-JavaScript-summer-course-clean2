//initalize Dom selector variables
let agentTypeBtn = document.querySelector('#agentBtn');
let locationBtn = document.querySelector('#locationBtn');
let weaponLoadoutBtn = document.querySelector('#weaponLoadoutBtn');
let objectiveBtn = document.querySelector('#objectiveBtn');
let riskLevelBtn = document.querySelector('#riskBtn');
let generateBtn = document.querySelector('#generateBtn');
let resetBtn = document.querySelector('#resetBtn');
let agentTypeOutput = document.querySelector('#agentTypeOutput');
let locationOutput = document.querySelector('#locationOutput');
let weaponLoadoutOutput = document.querySelector('#weaponLoadoutOutput');
let objectiveOutput = document.querySelector('#objectiveOutput');
let riskLevelOutput = document.querySelector('#riskLevelOutput');
let missionOutput = document.querySelector('#missionOutput');

//initalize arrays for each category
const agentType = ['Bravo', 'Ghost Recon', '007', 'Maverick','Eagle Eye'];
let locations = ["Arctic Base", "MegaCity", "Jungle Fortress", "Underwater Lab"];
const weaponLoadout = ['Assault Rifle', 'Sniper Rifle', 'silenced pistol'];
const objective = ['Reconnaissance', 'Elimination', 'Extraction'];
const riskLevel = ['Low', 'Medium', 'High'];

//Initialize index variables for each category
let indexAgentType = 0;
let indexLocation = 0;
let indexWeaponLoadout = 0;
let indexObjective = 0;
let indexRiskLevel = 0;

// This function takes an array and an index, increments the index,
//  and resets it to zero if it exceeds the array length. 
// It returns the new index.
function cycle(array, index) {
    index++;
    if (index >= array.length)
        {
            index = 0;
        } 
    return index;
}

//Generate a Mission statement based on the selected parameters.
function generateMission() {
    //if any of the output fields are empty, prompt the user to select all parameters
    if(!agentTypeOutput.textContent || !locationOutput.textContent || !weaponLoadoutOutput.textContent 
        || !objectiveOutput.textContent || !riskLevelOutput.textContent) {
            missionOutput.textContent = "Please select all mission parameters before generating a mission.";
    }
    //if all parameters are selected, generate the mission statement
    else {
        missionOutput.textContent = 'Your new mission is to ' + objectiveOutput.textContent + ' at ' 
        + locationOutput.textContent + ' with a ' + riskLevelOutput.textContent + ' risk level. You will be using a '
         + weaponLoadoutOutput.textContent + ' and your agent type is ' + agentTypeOutput.textContent + '. Good luck!';
    }
}


function resetMission() {
// reset text content to empty strings 
    agentTypeOutput.textContent = '';
    locationOutput.textContent = '';
    weaponLoadoutOutput.textContent = '';
    objectiveOutput.textContent = '';
    riskLevelOutput.textContent = '';
    missionOutput.textContent = '';

    // reset Index variables to -1 so that the first click on the button will set it to 0 and display the first item in the array
    indexAgentType = -1;
    indexLocation = -1;
    indexWeaponLoadout = -1;
    indexObjective = -1;
    indexRiskLevel = -1;


}

// Add event listeners to buttons
agentTypeBtn.addEventListener ('click', function() {
    //agent
    //cycle through the agent types array
    indexAgentType = cycle(agentType, indexAgentType);
    //output the new agent type to the page
    agentTypeOutput.textContent = agentType[indexAgentType]; 
    });
    
    locationBtn.addEventListener ('click', function() {
    //location
    //cycle through the locations array
    indexLocation = cycle(locations, indexLocation);
    //output the new location to the page
    locationOutput.textContent = locations[indexLocation];
    });
    
    weaponLoadoutBtn.addEventListener ('click', function() {
    //weapon loadout 
    //cycle through the weapon loadout array
    indexWeaponLoadout = cycle(weaponLoadout, indexWeaponLoadout);
    //output the new weapon loadout to the page
    weaponLoadoutOutput.textContent = weaponLoadout[indexWeaponLoadout];
});

    objectiveBtn.addEventListener ('click', function() {
    //objective
    //cycle through the objective array
    indexObjective = cycle(objective, indexObjective);
    //output the new objective to the page
    objectiveOutput.textContent = objective[indexObjective];
});

    riskLevelBtn.addEventListener ('click', function() {
    //risk level
    //cycle through the risk level array
    indexRiskLevel = cycle(riskLevel, indexRiskLevel);
    //output the new risk level to the page
    riskLevelOutput.textContent = riskLevel[indexRiskLevel];
}); 



generateBtn.addEventListener('click', generateMission);
resetBtn.addEventListener('click', resetMission);