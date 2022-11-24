content = {
  'card-1':{
      title:"Tonic",
      project:["CANOPI" , "Back end" , "2015"],
      image:'img/Snapshoot Portfolio.png',
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      language:["html", "css" , "javascript"]
  },
  'card-2':{
    title:"Tonicle",
    project:["canopi" , "Back end" , "2015"],
    image:'img/Snapshoot.png',
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    language:["html", "css" , "javascript"]
  },
  'card-3':{
    title:"Tonicle",
    project:["canopi" , "Back end" , "2015"],
    image:'img/Portfolio.png',
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    language:["html", "css" , "javascript"]
  },
  'card-4':{
    title:"Tonicle",
      project:["canopi" , "Back end" , "2015"],
      image:'img/last.png',
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      language:["html", "css" , "javascript"]
},
 
}

function spreadB(arg){
  let btn = document.getElementById(arg);
  let spreads = document.querySelector('.popup');
  let btns = document.getElementById('close');
  console.log(btn)
  function disapear(){
      spreads.style.display='none';
      document.querySelector('.container').style.filter = "blur(0px)"
      document.getElementById('close').style.display = 'none'
  }
  function appear(){
      spreads.style.display='block';
      document.querySelector('.container').style.filter = "blur(5px)"
      document.getElementById('close').style.display = 'block'
  }
  btn.addEventListener('click' , appear)
  spreads.innerHTML =`<div class="main-pop">
  <div class="title-section">
      <h3 class="title">${content[arg].title}</h3>
      
  </div>
  <ul class='link'>
  <li class='itemse'>${content[arg].project[0]}</li>
  <li class='items1'> <img src="img/Counter.png"> ${content[arg].project[1]}</li>
  <li class='items1'> <img src="img/Counter.png"> ${content[arg].project[2]}</li>
  </ul>
  <div>
     <img class="images" src="${content[arg].image}" alt="text">
     <p class="text">
          ${content[arg].text}
     </p>
     <ul class = "langages langs">
        <li class="lang-item">${content[arg].language[0]}</li>
        <li class="lang-item">${content[arg].language[1]}</li>
        <li class="lang-item">${content[arg].language[2]}</li>
     </ul>
     <div id="link-buttons">
      <a class="link-button-item btn-text" href="#">See live <img src='img/demo-icon.png'></a>
      <a class="link-button-item ittem btn-text" href="#">See Source <img src='img/vct.png'> </a> 
    </div>
  </div>
 </div>`;

  btns.addEventListener('click', disapear) ;
}
for(let i = 1 ; i <= 4; i++){
  spreadB( 'card-'+[i]+'')
}