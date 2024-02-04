


function validate(e) {
  var email = e.target["email"].value;
  var password = e.target["password"].value;
  
  if (email === "" || password === "") {
    alert("Both email and password must be filled out");
    return false;
  }
  return true;
}
