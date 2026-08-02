let position = getLocation();
async function startProgram() {
    await setMainLed(getRandomColor()); 
    await  traceDistance(5, 120);

    await speak(`my current position is ${position.x.toString()}, ${position.y.toString()}`);
    exitProgram();
}

registerEvent(EventType.onCollision, async () => {
    stopRoll();
    setMainLed({ r: 255, g: 0, b: 0 });
    await speak('I crashed!', true);
    await delay(0.5);
    setMainLed({ r: 255, g: 255, b: 255 });
    setSpeed(5);


});

 

async function traceDistance(velocity, distance) {

    await scrollMatrixText("TraceDistance", getRandomColor(), 24,false);
    await rollToDistance(30, 50, 120);
    await roll(0, 5, 60);
    await rollToDistance(80, velocity, distance);

    await speak(`${distance} centimeter distance, at velocity ${velocity}`);

    
}

