let user = localStorage.getItem("currentUser");
if(!user) window.location="login.html";

let key = "notes_"+user;
let notes = JSON.parse(localStorage.getItem(key)) || [];

function display(){
  notesList.innerHTML="";

  if(notes.length===0){
    notesList.innerHTML="No notes saved";
    return;
  }

  notes.forEach((n,i)=>{
    notesList.innerHTML += `
      <div class="note">
        <b>${n.text.replace(/\n/g,"<br>")}</b><br>
        <small>${n.time}</small><br>
        <button onclick="del(${i})">Delete</button>
      </div>
    `;
  });
}

function del(i){
  notes.splice(i,1);
  localStorage.setItem(key, JSON.stringify(notes));
  display();
}

function goAdd(){
  window.location="add.html";
}

function logout(){
  localStorage.removeItem("currentUser");
  window.location="login.html";
}

display();