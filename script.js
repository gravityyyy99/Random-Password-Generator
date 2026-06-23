const btnEl = document.querySelector(".btn")
const inputE1 = document.getElementById("input")
const copyIconE1 = document.querySelector(".fa-clone")
const alertContainer = document.querySelector(".alert-container")

btnEl.addEventListener("click", ()=>{
  createPassword()
})

copyIconE1.addEventListener("click", ()=>{
  copyPassword()
  if (inputE1.value){
    alterContainer.classList.remove("active");
  setTimeout(()=>{
 alterContainer.classList.add("active");
  },2000);
  }
  
  })

function createPassword(){
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const passwordLength = 14;
  let password = ""
  for (let index = 0; index < passwordLength; index++) {
    const randomNum =Math.floor( Math.random() * chars.length);
    password += chars.substring(randomNum , randomNum+ 1);
    
    
  }
  inputE1.value = password;
  
    
  }

  function copyPassword(){
    inputE1.select();
    inputE1.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputE1.value);
    alterContainer.innerText = inputE1.value + " copied!";
  }
