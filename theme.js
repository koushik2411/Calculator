const toggleBtn = document.getElementById("theme-btn");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "M";
}

toggleBtn.addEventListener("click",() =>{
    body.classList.toggle("light");

    if(body.classList.contains("light")){
        toggleBtn.textContent = "M";
    }

    else{
    (toggleBtn.textContent = "M");
    localStorage.setItem("theme","dark");
    }
});