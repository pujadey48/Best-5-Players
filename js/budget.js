
function orderdList(elementID, btnId){
    
    const listLength = getOlLength();
    if(listLength<5){
        const playerNameField = document.getElementById(elementID);
        const playerName = playerNameField.innerText;
        console.log(playerName);
        const list = document.getElementById('player-list');

        let entry = document.createElement('li');
        entry.innerText = playerName;
        list.appendChild(entry);
        disabledFunction(btnId);
    }
    else{
        alert("can not add more");
    }
    
}

function getOlLength(){
    const orderedListContainer = document.querySelector("ol");
    let listNumber = orderedListContainer.querySelectorAll("li");
    
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
    
    const selectBtn = document.getElementById(elementId);
    selectBtn.style.pointerEvents="none";
    selectBtn.style.backgroundColor= "gray";
}

function init() {
    
    document.getElementById("input-per-player").value = "";
    document.getElementById("manager-cost").value = "";
    document.getElementById("coach-cost").value = "";
    document.getElementById("total").innerText = "00";
    document.getElementById("final-cost").innerText = "00";

}
window.onload = init;


document.getElementById("select-btn1").addEventListener("click", function(){
    orderdList("player-select1","select-btn1");
   
})
document.getElementById("select-btn2").addEventListener("click", function(){
    orderdList("player-select2","select-btn2");
    
})

document.getElementById("select-btn3").addEventListener("click", function(){
    orderdList("player-select3","select-btn3");
    
})

document.getElementById("select-btn4").addEventListener("click", function(){
    orderdList("player-select4","select-btn4");
    
})

document.getElementById("select-btn5").addEventListener("click", function(){
    orderdList("player-select5","select-btn5");
    
})

document.getElementById("select-btn6").addEventListener("click", function(){
    orderdList("player-select6","select-btn6");
    
})

document.getElementById("btn-calculate").addEventListener("click",function(){
    const perPlayer = getInputElementById("input-per-player");
    if(isNaN(perPlayer)||perPlayer<0){
        alert("please provide a valid input");
        return;
    }
    const olLength = getOlLength(); //find size of selected players
    
        const playerExpenses = perPlayer * olLength;
        const totalExpenses = setTextElementById("total", playerExpenses);
    
   
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





