function getValues(){
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    $.get('credentials.json',function(data){
        if(data.username==username && data.password==password){
            // alert("login successfull");
         window.location.href = "index.html";
            // window.open('login.html', '_blank');
        }
       else if(data.username!==username || data.password!==password){
        alert("Invalid username and password");
       }
       else{
        alert("Login failed");
       }
    }
)
}