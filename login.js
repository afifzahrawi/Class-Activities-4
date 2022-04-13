function validateform(){
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;

  if(username=="admin" && password=="password"){
    alert("Login Succesful");
    return false;
  }

  else{
    alert("Login Failed");
    return false;
  }
}
