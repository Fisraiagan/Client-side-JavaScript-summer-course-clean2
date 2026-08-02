// Select the paragraph element to display messages
msg = document.querySelector('p');

// Define variables for health, ammo, mission progress, shield status, and enemy proximity
let health = 65;
let ammo = 8;
let missionProgress = 40;
let shield = true;
let enemyNearby = true;


	//if health is below 30 and an enemy is nearby, display a critical alert message
if(health < 30 && enemyNearby === true){
    msg.textContent = " CRITICAL ALERT: Immediate evacuation required!";
}
//if ammo is below 5 or the shield is down, display a warning message
else if(ammo < 5 || shield === false){
    msg.textContent = "Warning: Low resources.";
}
//if mission progress is between 1 and 70, display a message indicating the mission is in progress
else if(missionProgress > 1 && missionProgress < 70){
    msg.textContent = "Mission in progress.";
}
//if mission progress is above 70 and no enemies are nearby, display a message indicating the mission is nearing completion
else if(missionProgress > 70 && enemyNearby === false){
    msg.textContent = "Approaching Mission Completion.";
    
}
//if mission progress is at 100, display a message indicating the mission is complete
else if(missionProgress === 100){
    msg.textContent = "Mission Complete successfully!";
}
//if none of the above conditions are met, display a message indicating the system is stable
else{
    msg.textContent = "System Stable.";
}