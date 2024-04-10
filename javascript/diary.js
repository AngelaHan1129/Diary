var date = new Date();
var yyyy = date.getFullYear();
var mm = String(date.getMonth() + 1).padStart(2, '0');
var dd = String(date.getDate()).padStart(2, '0');
var today = yyyy + "-" + mm + "-" + dd;

document.getElementById("date").value = today;