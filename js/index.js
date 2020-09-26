let allButtons = document.querySelectorAll("body > div > ul > li");

let allContents = document.querySelectorAll(".content");

let counter2 = 0;

let button2 = document.querySelector("body > div > ul > li:nth-child(2)");
button2.addEventListener("click" ,event =>{
    for (let i = 0; i<allButtons.length;i++){
        allButtons[i].classList.remove("active");
        if(allButtons[i].classList.contains("two")){
            allButtons[i].classList.add("active");
        }
    }

    for (let i = 0; i<allContents.length;i++){
        allContents[i].classList.remove("active");
        if(allContents[i].classList.contains("two")){
            allContents[i].classList.add("active");
        }
    }

    counter2++;
    
})


let button3 = document.querySelector("body > div > ul > li:nth-child(3)");
button3.addEventListener("click" ,event =>{
    for (let i = 0; i<allButtons.length;i++){
        allButtons[i].classList.remove("active");
        if(allButtons[i].classList.contains("three")){
            allButtons[i].classList.add("active");
        }
    }

    for (let i = 0; i<allContents.length;i++){
        allContents[i].classList.remove("active");
        if(allContents[i].classList.contains("three")){
            allContents[i].classList.add("active");
        }
    }
    
})

let button4 = document.querySelector("body > div > ul > li:nth-child(4)");
button4.addEventListener("click" ,event =>{
    for (let i = 0; i<allButtons.length;i++){
        allButtons[i].classList.remove("active");
        if(allButtons[i].classList.contains("four")){
            allButtons[i].classList.add("active");
        }
    }

    for (let i = 0; i<allContents.length;i++){
        allContents[i].classList.remove("active");
        if(allContents[i].classList.contains("four")){
            allContents[i].classList.add("active");
        }
    }
    
})

let button1 = document.querySelector("body > div > ul > li:nth-child(1)");
button1.addEventListener("click" ,event =>{
    for (let i = 0; i<allButtons.length;i++){
        allButtons[i].classList.remove("active");
        if(allButtons[i].classList.contains("one")){
            allButtons[i].classList.add("active");
        }
    }

    for (let i = 0; i<allContents.length;i++){
        allContents[i].classList.remove("active");
        if(allContents[i].classList.contains("one")){
            allContents[i].classList.add("active");
        }
    }
    
})

let log = document.createElement("p");
document.addEventListener("keypress" , logKey);

function logKey(n){
    log.textcontent = n.code;
    if(log.textcontent === "Digit2"){
        for (let i = 0; i<allButtons.length;i++){
            allButtons[i].classList.remove("active");
            if(allButtons[i].classList.contains("two")){
                allButtons[i].classList.add("active");
            }
        }
    
        for (let i = 0; i<allContents.length;i++){
            allContents[i].classList.remove("active");
            if(allContents[i].classList.contains("two")){
                allContents[i].classList.add("active");
            }
        }
        counter2++;
    }else if(log.textcontent === "Digit3"){
        for (let i = 0; i<allButtons.length;i++){
            allButtons[i].classList.remove("active");
            if(allButtons[i].classList.contains("three")){
                allButtons[i].classList.add("active");
            }
        }
    
        for (let i = 0; i<allContents.length;i++){
            allContents[i].classList.remove("active");
            if(allContents[i].classList.contains("three")){
                allContents[i].classList.add("active");
            }
        }
    }else if(log.textcontent === "Digit4"){
        for (let i = 0; i<allButtons.length;i++){
            allButtons[i].classList.remove("active");
            if(allButtons[i].classList.contains("four")){
                allButtons[i].classList.add("active");
            }
        }
    
        for (let i = 0; i<allContents.length;i++){
            allContents[i].classList.remove("active");
            if(allContents[i].classList.contains("four")){
                allContents[i].classList.add("active");
            }
        }
    }else if(log.textcontent === "Digit1"){
        for (let i = 0; i<allButtons.length;i++){
            allButtons[i].classList.remove("active");
            if(allButtons[i].classList.contains("one")){
                allButtons[i].classList.add("active");
            }
        }
    
        for (let i = 0; i<allContents.length;i++){
            allContents[i].classList.remove("active");
            if(allContents[i].classList.contains("one")){
                allContents[i].classList.add("active");
            }
        }
    }

    console.log("the counter for tab 2 = " + counter2);
}