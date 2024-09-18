
function savedata(){
    const firstName=document.getElementById("Firstname").value;
    localStorage.setItem("First Name", firstName);
    const email=document.getElementById("Email").value;
    localStorage.setItem("Email", email);

}
function mention(){
    const firstName=localStorage.getItem("Firstname");
    const email=localStorage.getItem("Email");
    document.querySelector(".usernameonenable").textContent=firstName;
    document.getElementById("emailaddress").textContent=`" " + ${email}`;
}