const elform = document.querySelector( ".form")
const eltext = document.querySelector( ".usertext")
const elpassword = document.querySelector( ".userpassword")



elform.addEventListener("submit",(evt)=>{
    evt.preventDefault()

    const user = eltext.value.trim()  
    const passwordd = elpassword.value.trim()  


    fetch('https://reqres.in/api/login',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            email:user,
            password:passwordd,
        }),
        
    }).then((res)=>res.json()).then((data)=> {
        if(data?.token){
            window.localStorage.setItem("token",data.token)
            window.location.replace("index.html")
        }
    })

})