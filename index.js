function spreadB(...arg){
    let btn = document.querySelector(arg[0]);
    let spreads = document.querySelector(arg[1]);
    let btns = document.querySelector(arg[2]);
    let link = document.querySelector(arg[3]);
    let liste = document.querySelectorAll(arg[4])
    linkList = document.querySelectorAll(arg[5])

    function disapear(){
        spreads.style.display='none';
        btns.style.display='none';
        link.style.display='none';
    }

    btn.addEventListener('click' , function(){
        spreads.style.display='block';
        btns.style.display='block';
        link.style.display='block';
       
        for (let linkList of liste){
            linkList.classList.add('linkList')
        } 

    });

    btns.addEventListener('click', disapear) ;
   
    for (let key of liste){
      key.addEventListener('click' , disapear);
    } 

   }
  spreadB('.header-img','.spread','.close','.link','li','a')