const content = {
  'card-1': {
    title: 'Tonic',
    project: ['CANOPI', 'Back end', '2015'],
    image: 'img/desk-2.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ',
    language: ['html', 'css', 'javascript'],
  },
  'card-2': {
    title: 'Tonic',
    project: ['canopi', 'Back end', '2015'],
    image: 'img/desk-3.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javascript'],
  },
  'card-3': {
    title: 'Tonic',
    project: ['canopi', 'Back end', '2015'],
    image: 'img/Portfolio.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javascript'],
  },
  'card-4': {
    title: 'Tonic',
    project: ['canopi', 'Back end', '2015'],
    image: 'img/desk-1.png',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    language: ['html', 'css', 'javascript'],
  },

};

function spreadB(arg) {
  const btn = document.getElementById(arg);
  const spreads = document.querySelector('.popup');
  const btns = document.getElementById('close');

  function disapear() {
    spreads.style.display = 'none';
    document.querySelector('.container').style.filter = 'blur(0px)';
    document.getElementById('close').style.display = 'none';
  }

  function appear() {
    spreads.style.display = 'block';
    document.querySelector('.container').style.filter = 'blur(5px)';
    document.getElementById('close').style.display = 'block';
  }

  btn.addEventListener('click', appear);

  spreads.innerHTML = `<div class='main-pop'>
  <div class='title-section'>
      <h3 class='title'>${content[arg].title}</h3>
      
  </div>
  <ul class='link'>
  <li class='itemse'>${content[arg].project[0]}</li>
  <li class='items1'> <img src='img/Counter.png'> ${content[arg].project[1]}</li>
  <li class='items1'> <img src='img/Counter.png'> ${content[arg].project[2]}</li>
  </ul>
  <div>
     <img class='images' src='${content[arg].image}' alt='text'>
      <div class = 'main-class'>
        <p class='text'>${content[arg].text}</p>
        <div class="generals">
            <ul class = 'langages langs'>
              <li class='lang-item'>${content[arg].language[0]}</li>
              <li class='lang-item'>${content[arg].language[1]}</li>
              <li class='lang-item'>${content[arg].language[2]}</li>
            </ul>
            <div id='link-buttons'>
              <a class='link-button-item btn-text' href='#'>See live <img src='img/demo-icon.png'></a>
              <a class='link-button-item ittem btn-text' href='#'>See Source <img src='img/vct.png'> </a> 
          </div>
        </div>
    </div>
  </div>
 </div>`;

  btns.addEventListener('click', disapear);
}
for (let i = 1; i <= 4; i += 1) {
  spreadB(`card-${[i]}`);
}

function error() {
  document.querySelector('.error').style.display = 'block';
}

document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('myForm').elements[1].value;

  if (email === email.toLowerCase()) {
    document.getElementById('myForm').submit();
  } else {
    error();
  }
});

function storeForm(storData) {
  const newData = JSON.stringify(storData);
  if (typeof storData !== 'undefined') {
    localStorage.setItem('data', newData);
  } else {
    const prevData = JSON.parse(localStorage.getItem('data'));
    document.getElementById('myForm').elements[0].value = prevData.name;
    document.getElementById('myForm').elements[1].value = prevData.email;
    document.getElementById('myForm').elements[2].value = prevData.text;
  }
}

function checkKey() {
  const email = document.getElementById('myForm').elements[1].value;
  const name = document.getElementById('myForm').elements[0].value;
  const texte = document.getElementById('myForm').elements[2].value;
  const storage = { name, email, text: texte };
  storeForm(storage);
}

if (document.getElementById('myForm').elements[1].value === true) {
  checkKey();
}

storeForm();