let scoreCount = 0
let scoreCountTwo = 0

let scoreOne = document.getElementById("homescore")
let scoreTwo = document.getElementById("Score")

let resetCount = 0





function addOne(){
   
    scoreCount++
    scoreOne.textContent = scoreCount
    
   
}
function addTwo(){
    scoreCount +=2
    scoreOne.textContent = scoreCount
    
   
}
function addThree(){
    scoreCount += 3
    scoreOne.textContent = scoreCount   
}



function plusOne(){
    scoreCountTwo++
    scoreTwo.textContent = scoreCountTwo
    
   
}

function plusTwo(){
    scoreCountTwo +=2
    scoreTwo.textContent = scoreCountTwo
    
   
}

function plusThree(){
    scoreCountTwo += 3
    scoreTwo.textContent = scoreCountTwo

}

function resetScores(){
    scoreOne.textContent = 0
    scoreTwo.textContent = resetCount
    scoreCount = 0
    scoreCountTwo = 0
}