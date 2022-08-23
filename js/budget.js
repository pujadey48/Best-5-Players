console.log("football");
function orderdList(elementID){
    
    const orderedListContainer = document.querySelector("ol");
    let listNumber = orderedListContainer.querySelectorAll("li");
    // console.log(listNumber.length);
    let listLength = listNumber.length;
    console.log(listLength);
    if(listLength<5){
        const playerNameField = document.getElementById(elementID);
        const playerName = playerNameField.innerText;
        console.log(playerName);
        const list = document.getElementById('player-list');

        let entry = document.createElement('li');
        entry.innerText = playerName;
        list.appendChild(entry);

        // const selectBtn = document.getElementById("player1-select");
        // selectBtn.setAttribute('disabled',true);
        // selectBtn.style.backgroundColor= "gray";
    }
    else{
        alert("can not add more");
    }
    
}

function getOlLength(){
    const orderedListContainer = document.querySelector("ol");
    let listNumber = orderedListContainer.querySelectorAll("li");
    // console.log(listNumber.length);
    let listLength = listNumber.length;
    return listLength;
}

function getInputElementById(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}

function setTextElementById(elementId, value){
    const textField = document.getElementById(elementId);
    textField.innerText = value;
    return;
}

function gettextvalue(elementID){
    const textField = document.getElementById(elementID);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseInt(textFieldValueString);
    return textFieldValue;

}
function disabledFunction(elementId) {
    // document.getElementById(elementId).style="pointer-events: none;backgroundColor= 'gray';";
    const selectBtn = document.getElementById(elementId);
    selectBtn.style.pointerEvents="none";
    selectBtn.style.backgroundColor= "gray";
}


document.getElementById("player1-select").addEventListener("click", function(){
    orderdList("player-select1");
    disabledFunction("player1-select");
    
    
})
document.getElementById("player2-select").addEventListener("click", function(){
    orderdList("player-select2");
    disabledFunction("player2-select");
})

document.getElementById("player3-select").addEventListener("click", function(){
    orderdList("player-select3");
    disabledFunction("player3-select");
})

document.getElementById("player4-select").addEventListener("click", function(){
    orderdList("player-select4");
    disabledFunction("player4-select");
})

document.getElementById("player5-select").addEventListener("click", function(){
    orderdList("player-select5");
    disabledFunction("player5-select");
})

document.getElementById("player6-select").addEventListener("click", function(){
    orderdList("player-select6")
    disabledFunction("player6-select");
})

document.getElementById("btn-calculate").addEventListener("click",function(){
    const perPlayer = getInputElementById("input-per-player");
    if(isNaN(perPlayer)||perPlayer<0){
        alert("please provide a valid input");
        return;
    }
    const olLength = getOlLength();
    
    if(olLength==5){
        const playerExpenses = perPlayer * olLength;
        const totalExpenses = setTextElementById("total", playerExpenses);
    }
    else{
        alert("invalid");
    }
    
    

})

document.getElementById("btn-calculate-total").addEventListener("click", function(){
    const manager = getInputElementById("manager-cost");
    const coach = getInputElementById("coach-cost");
    const playerExpenses = gettextvalue("total");
    if(isNaN(manager)||isNaN(coach)||manager<0||coach<0){
        alert("please provide a valid input");
        return;
    }
    const finalTotalCost = manager+coach+playerExpenses;
    const finalCost = setTextElementById("final-cost", finalTotalCost);

})





