window.addEventListener("load", ()=>{

    let flightStatus=document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
    let rocketImage = document.getElementById("rocket");

    let takeoffButton=document.getElementById("takeoff");
    let landButton=document.getElementById("landing");
    let abortMissionButton=document.getElementById("missionAbort");

    let upButton=document.getElementById("up");
    let downButton=document.getElementById("down");
    let rightButton=document.getElementById("right");
    let leftButton=document.getElementById("left");
    
    rocketImage.style.position ='absolute';
    rocketImage.style.left ='0px';
    rocketImage.style.bottom ='0px';

    takeoffButton.addEventListener("click", ()=>{
        let response = window.confirm ("Confirm that the shuttle is ready for takeoff.");
        if(response){
            flightStatus.innerHTML = "Shuttle is in flight.";
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML="10,000"
        }
    })

    landButton.addEventListener("click", ()=>{
        window.alert ("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML="0";
    })

    abortMissionButton.addEventListener("click", ()=>{
        let response = window.confirm ("Confirm that you want to abort the mission.");
        if(response){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerHTML="0"
        }

    })

    upButton.addEventListener("click", ()=>{
        let movement = parseInt(rocketImage.style.bottom)+ 10 + 'px';
        rocketImage.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    })

    downButton.addEventListener("click", ()=>{
        let movement = parseInt(rocketImage.style.bottom )- 10 + 'px';
        rocketImage.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        
    })

    rightButton.addEventListener("click", ()=>{
        let movement = parseInt(rocketImage.style.left) + 10 + 'px';
        rocketImage.style.left = movement; 
    })

    leftButton.addEventListener("click", ()=>{
        let movement = parseInt(rocketImage.style.left) - 10 + 'px';
        rocketImage.style.left = movement;   
        
    })


/*Bonus Mission
Keep the rocket from flying off of the background.
Return the rocket to its original position on the background when it has been landed or the mission was aborted.
*/



})