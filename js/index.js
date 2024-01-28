const btn = document.querySelector(".btn")
const token = window.localStorage.getItem("token")

if(!token){
    window.location.replace("login.html")
}

btn.addEventListener("click", (evt)=>{
    window.localStorage.removeItem("token")
    window.location.replace("login.html")
})