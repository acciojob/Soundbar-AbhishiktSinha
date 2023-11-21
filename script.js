//your JS code here. If required.
const allButtonList = Array.from(document.querySelectorAll(".btn"));

const stopButton = allButtonList.splice(-1, 1)[0];

let audioFile = new Audio();

allButtonList.forEach((buttonElement)=>{

    let buttonText = buttonElement.innerText;
    switch(buttonText){

        case "Applause":
            
            buttonElement.addEventListener("click", ()=>{
                audioFile.src = "./sounds/applause.mp3";
                audioFile.play();                
            });
            break;
        
        case "Boo":
            
            buttonElement.addEventListener("click", ()=>{
                audioFile.src = "./sounds/boo.mp3";
                audioFile.play();                
            });
            break;
        
        case "Gasp":
            
            buttonElement.addEventListener("click", ()=>{
                audioFile.src = "./sounds/gasp.mp3";
                audioFile.play();                
            });
            break;
        
        case "Tada":
            
            buttonElement.addEventListener("click", ()=>{
                audioFile.src = "./sounds/tada.mp3";
                audioFile.play();                
            });
            break;
        
        case "Victory":
            
            buttonElement.addEventListener("click", ()=>{
                audioFile.src = "./sounds/victory.mp3";
                audioFile.play();                
            });
            break;
        
        case "Wrong":
            
            buttonElement.addEventListener("click", ()=>{
                audioFile.src = "./sounds/wrong.mp3";
                audioFile.play();                
            });
            break;
        

        default:
            console.log("unexpected error");

    }
})

stopButton.addEventListener("click", ()=>{
    audioFile.load();
});