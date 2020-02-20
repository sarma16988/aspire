function validate()
{
var x=document.getElementById("name").value;
var y=document.getElementById("password").value;
if(x=="16988" && y=="16988")
{
window.open("tryIt.html");
}
else if(x=="15000" && y=="15000")
{

 window.alert("Rejrected Id");
}
else
{
    window.alert("Invalid Id or Password");
}
}