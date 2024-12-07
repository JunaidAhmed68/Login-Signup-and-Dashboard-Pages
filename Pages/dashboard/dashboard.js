var isLogin =JSON.parse(localStorage.getItem("login"));




function logout(e){
  e.preventDefault();
  localStorage.removeItem('login')
  window.location.replace("../login/login.html")



  
}