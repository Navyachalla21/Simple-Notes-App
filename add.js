let user = localStorage.getItem("currentUser");
if(!user) window.location.href="login.html";

welcome.innerText = "Welcome, " + user;

let key = "notes_"+user;
let notes = JSON.parse(localStorage.getItem(key)) || [];

function saveNote(){
  let t = noteInput.value.trim();
  if(!t) return alert("Write something");

  notes.push({
    text: t,
    time: new Date().toLocaleString()
  });

  localStorage.setItem(key, JSON.stringify(notes));
  noteInput.value="";
  alert("Saved");
}

function clearNote(){
  noteInput.value="";
}

function goView(){
  window.location="view.html";
}

function logout(){
  localStorage.removeItem("currentUser");
  window.location="login.html";
}