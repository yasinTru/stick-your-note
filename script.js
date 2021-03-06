var container2 = document.getElementsByClassName("container-2")[0];
var container3 = document.getElementsByClassName("container-3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var k = 0;


xIcon.addEventListener("click", function(){
  takeNote();
});

checkIcon.addEventListener("click", function(){
  createNote();
});

function takeNote(){
  if(container3.style.display == "none"){
    container3.style.display = "block";
  }
  else{
    container3.style.display = "none";
  }
}
  
function createNote(){
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  node1.innerHTML = noteText;

  node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow-wrap: break-word; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)")

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();
  
  node0.appendChild(node1);
  
  container2.insertAdjacentElement("beforeend", node0);

  node0.addEventListener("mouseenter", function(){
    node0.style.transform = "scale(1.1)";
  })

  node0.addEventListener("mouseleave", function(){
    node0.style.transform = "scale(1)";
  })

  node0.addEventListener("dblclick", function(){
    node0.remove();
  })

  document.getElementById("note-text").value = '';
}

function margin(){
  var random_margin = ["-5px","1px", "5px", "10px","15px","20px"];

  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate(){
  var random_degree = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)", "rotate(-10deg)"];

  return random_degree[Math.floor(Math.random() * random_degree.length)];
}

function color(){
  var random_colors = ["#c2fa3d","#ff1de8","#3dc2ff","#04e021","#bc83e6","#ebb328"];

  if(k > random_colors.length - 1){
    k = 0;
  }
  return random_colors[k++];
}