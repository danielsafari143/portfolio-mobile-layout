content = {
  'card-1':{
      title:"Tonicle",
      project:["canopi" , "Back end" , "2015"],
      image:"",
      text:"lsafarihamui",
      language:["html", "css" , "javascript"]
  },
  'card-2':{
      title:"lower",
      project:["canopi" , "Back end" , "2015"],
      image:"",
      text:"",
      language:["html", "css" , "javascript"]
  },
  'card-3':{
      title:"lover",
      project:["canopi" , "Back end" , "2015"],
      image:"",
      text:"hey you guys ",
      language:["html", "css" , "javascript"]
  },
  'card-4':{
    title:"",
    project:["canopi" , "Back end" , "2015"],
    image:"",
    text:"",
    language:["html", "css" , "javascript"]
},
 
}


function spreadB(...arg){
  let btn = document.querySelector(arg[0]);
  let spreads = document.querySelector(arg[1]);
  let btns = document.querySelector(arg[2]);
  let clickedButton ='';
  function disapear(){
      spreads.style.display='none';
  }
  function appear(){
      spreads.style.display='block';
  }
  for(let ver of btn.classList){
    clickedButton = ver ;
  }

  spreads.innerHTML=`<div>
  <div class="title-section">
      <h3 class="title">${content[clickedButton].title}</h3>
      <img class="close" src="${content[clickedButton].image}" alt="close">
  </div>
  <ul class="link"></ul>
  <div>
     <img src="" alt="">
     <p class="text">
          ${content[clickedButton].text}
     </p>
     <ul></ul>
  </div>
</div>`;

  btn.addEventListener('click' , appear)
  btns.addEventListener('click', disapear) ;
}
spreadB('.btn','.popup','.close')