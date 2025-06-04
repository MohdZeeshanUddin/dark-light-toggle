let btn1 = document.querySelector("#one");
let body = document.querySelector("body")
let CurrMode = "light";

btn1.addEventListener("click", () => {
    if(CurrMode === "light")
    {
        CurrMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        CurrMode="light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    
    console.log(CurrMode);
   } );

