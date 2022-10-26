
function create(nametext){var br = document.createElement("br"); 
var br1 = document.createElement("br"); 
var profile = document.createElement("div"); 
profile.classList="profile"
profile.id=nametext
var img=document.createElement("img");

img.src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"

var nam=document.createElement("div");
nam.classList="name"
var span=document.createElement("span");
span.id="span"

var text=document.createTextNode(nametext)

span.appendChild(text)
nam.appendChild(span)
profile.appendChild(img)
profile.appendChild(nam)
document.getElementById("list").appendChild(br);
document.getElementById("list").appendChild(br1);
document.getElementById("list").appendChild(profile);}

me="ritik"

const firebaseConfig = {
    apiKey: "AIzaSyCtjg8Ziqkzk5ixe1kDQ9VmKkJKO4FFAbE",
    authDomain: "chatting-95a95.firebaseapp.com",
    databaseURL: "https://chatting-95a95-default-rtdb.firebaseio.com",
    projectId: "chatting-95a95",
    storageBucket: "chatting-95a95.appspot.com",
    messagingSenderId: "733255644621",
    appId: "1:733255644621:web:1b764b3ffd7c39b858c084",
    measurementId: "G-1CLZVFZEX7"
  };
  
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref(me+'/').once('value',function(snapshot) {
  document.getElementById("list").innerHTML=""
  
    snapshot.forEach(function(childSnapshot){
  
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

      console.log(childKey)

      create(childKey)

    });

  })


  var delayInMilliseconds = 3000;

setTimeout(function() {
 

function dischat(me,user){
      
      firebase.database().ref(me+'/'+user+'/me/').on('value',function(snapshot) {
      document.getElementById("message").innerHTML=""
      
        snapshot.forEach(function(childSnapshot){
      
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
      
          if(childKey[(childKey.length)-1]=="R"){
      
              var z=document.getElementById("text2").value;
              var a=document.createElement("p");
              var b=document.createTextNode(childData);
              a.setAttribute('id','p2')
              a.appendChild(b);
              var c=document.getElementById("message");
              c.appendChild(a);
      
          }
          
          if(childKey[(childKey.length)-1]=="L"){
              var z=document.getElementById("text1").value;
              var a=document.createElement("p");
              var b=document.createTextNode(childData);
              a.setAttribute('id','p1');
              a.appendChild(b);
          
              var c=document.getElementById("message");
              c.appendChild(a);
              
          }

          var objDiv = document.getElementById("message");
        objDiv.scrollTop = objDiv.scrollHeight;
      
        });
      });
}



    var elements = document.getElementsByClassName("profile");

    var myFunction = function() {
        var attribute = this.getAttribute("id");
        document.getElementById("message").innerHTML=""
        dischat(me,attribute)
        user=attribute
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }
}, delayInMilliseconds);
    


document.getElementById("send2").addEventListener("click",abcd);      
function abcd(){
    const d = new Date();
    var tim=d.getTime();
    
    var z=document.getElementById("text2").value;

    if(z==""){

    }else{
    var a=document.createElement("p");
    var b=document.createTextNode(z);
    a.setAttribute('id','p2')
    a.appendChild(b);
    var c=document.getElementById("message");
    c.appendChild(a);

    firebase.database().ref(me+'/'+user+'/me/'+tim+"R").set(z);
    firebase.database().ref(user+'/'+me+'/me/'+tim+"L").set(z);
    
    document.getElementById("text2").value=""

    var objDiv = document.getElementById("message");
    objDiv.scrollTop = objDiv.scrollHeight;
    }

  }

  $("#text2").keypress(function(event) {
    if (event.keyCode === 13) {
        $("#send2").click();
    }
});

$("#send2").click(function() {
});




