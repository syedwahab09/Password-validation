function checkPassword(){
    let password = document.getElementById("password").value;
    let confPassword = document.getElementById("conf-password").value;
    console.log(password,confPassword);
    let message = document.getElementById("message");
    
    if( password.length !=0){
        if(password == confPassword){
            message.innerHTML="Password Match"
        }
        else{
            message.innerHTML ="Password Don't Match"
        }
        setTimeout(function(){
            message.innerHTML=""
        },5000)
        form.reset()
    }
}