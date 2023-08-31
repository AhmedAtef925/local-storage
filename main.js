var allSpans = document.querySelectorAll(".buttons span"),
 results = document.querySelector(".results > span"),
 theInput = document.getElementById("the-input");

 allSpans.forEach((element) => {

    element.addEventListener("click", (e) => {

 if(e.target.classList.contains("check-item")){

    checker()
 }

 if(e.target.classList.contains("add-item")){

    adder()
 }


 if(e.target.classList.contains("delete-item")){

    deleter()
 }

 if(e.target.classList.contains("show-items")){

    shower()
 }

})
});

function showMessage() {
 
    if(theInput.value==" "){

    results.innerHTML = 'Input Canot Be Empty';
}
  }
function checker() {
if(theInput!==""){

    if(localStorage.getItem(theInput.value)){
        results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;
    }
    else{
        results.innerHTML = 'no found the word in the local store ';
    }
}else{
    showMessage()
}

}

function adder() {

    if (theInput.value !== " ") {
        localStorage.setItem(theInput.value, "test")
        results.innerHTML = ` Local Storage Item Called <span>${theInput.value}</span> ADDER`;
        theInput.value == " ";
    }
    else {
        showMessage()
    }
}

function deleter() {
    if (theInput.value !== "") {
        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value)
            results.innerHTML = ` Local Storage Item Called <span>${theInput.value}</span> DELETER`;
            theInput.value == " ";
        }
        else{
            results.innerHTML = 'no found the word in the local store ';
        }
    }
    else {
        showMessage()
    }

}

function shower() {

    if (localStorage.length) {

        console.log(`Found Elements ${localStorage.length}`);

        results.innerHTML = '';

        for (let [key, value] of Object.entries(localStorage)) {

            results.innerHTML += `<span class="keys">${key}</span>`;

        }

    } else {
        showMessage()

    }
}























