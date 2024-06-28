

const formValidation = (name, value)=>{
    switch(name){
        case 'loc':
            if(value.trim() === ""){
                name.nextSibling.innerHTML = "Enter the location";
                name.focus();
            }else{
                return true;
            }
            break;
        case 'date_s':
            if(value.trim() === "") {
                name.nextSibling.innerHTML = "Enter the Check-in";
                name.focus();
            }else{
                return true;
            }  
            break;  
        case 'date_e':
            if(value.trim() === "") {
                name.nextSibling.innerHTML = "Enter the Check-out";
                name.focus();
            }else{
                return true;
            }  
            break; 
        case 'email':
            if(value.trim() === ""){
                return false;
            }else{
                const flags = "gm";
                const pattern = "[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
                const regexPattern = new RegExp(pattern, flags);
                const result = value.match(regexPattern);
                return result;
            } 
        case 'password':
            if(value.trim() === ""){
                return false;
            }else{
                const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/;
                const result = pattern.test(value);
                return result;
            }         
    }
}

document.querySelector("form").addEventListener("submit", onSubmit);


// Function to handle form submission
function onSubmit(e) {
    e.preventDefault();

    const form = document.querySelector("form");
    if(form.loc.value.trim() == "") {alert("Enter Location"); form.loc.focus(); return;}
    else{!formValidation('loc', form.loc.value) && alert("enter Valid Location");}

    if(form.date_s.value.trim() == "") {alert("Enter Check-in"); form.date_s.focus(); return;}
    else{!formValidation('date_s', form.date_s.value) && alert("enter Valid date"); }

    if(form.date_e.value.trim() == "") {alert("Enter Check-out"); form.date_e.focus(); return;}
    else{!formValidation('date_e', form.date_e.value) && alert("enter Valid date"); }

    alert("form Submitted");
    form.loc.value="";
    form.date_s.value="";
    form.date_e.value="";
}



let rev = 0;
carousel(rev);
function prevReview(){ rev-=1; carousel(rev); }
function nextReview(){ rev+=1; carousel(rev); }
setInterval(()=>{ carousel(rev); rev+=1 },3000)

function carousel(review){
    let reviews = document.getElementsByClassName("review_item");
    if(review >= reviews.length){ review = 0;  rev =0; }
    if(review<0){ review = reviews.length -1; rev = reviews.length - 1 }

    for(let i=0; i<reviews.length; i++){ reviews[i].style.display = "none" }
    reviews[review].style.display = "block"; 
}


 document.getElementById('login-click').addEventListener("click",()=>{
    let login = document.getElementById('login');
    let display = login.style.display == "block"?"none":"block"; 
    login.style.display = display;
 })
 document.getElementById('register-click').addEventListener("click",()=>{
    let register = document.getElementById('register');
    console.log(register);
    let display = register.style.display == "block"?"none":"block"; 
    register.style.display = display;
 })

 document.getElementById("login-btn").addEventListener("click",(e)=>{
    e.preventDefault();

   if(!formValidation(email.name,email.value)){
       alert("Enter Valid Email");
       email.value = "";
       document.getElementById("password").value = "";
       email.focus();
   }else{
     email.value = "";
     document.getElementById("password").value = "";
     document.getElementById('login').style.display="none";
   }
   
 })

 document.getElementById("res-btn").addEventListener("click",(e)=>{
    e.preventDefault();
   let name = document.getElementById("fname");
   let email = document.getElementById("email_r");
   let age = document.getElementById("age");
   let password = document.getElementById("password_r");

   if(name.value.trim() == ""){
    alert("Name should not be empty.")
    return;
   }else if(age.value<1 || age.value>100){
    alert("Enter Age between 1 year to 100 Year.")
    return;
    }else if(!formValidation("email",email.value)){
       alert("Enter Valid Email");
       email.value = "";
       return;
   }else if(!formValidation("password", password.value)){
      alert("Enter Valid Password");
      return;
   }else{
     email.value = "";
     name.value = "";
     age.value = "";
     password.value = "";
     document.getElementById('register').style.display="none";
   }


   
 })
