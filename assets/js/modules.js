import {socialLinks, 
whereNextLinks, 
headerName, 
resumeTagLineText, 
imagePath, 
showcaseContainer} from './data.js'

/*export function dev(){
    window.oncontextmenu=function(){
        alert('Botão direito desativado - código fonte está no GitHub');
        return false;
    }
}*/

/*export function block(){
    document.onkeydown = function (e){
            if(event.keyCode == 123){
                return false;
                alert('F12 desativado - código fonte no GitHub')
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
                return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
                return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
                return false;
            }
            if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)){
                return false;
            }
    }
}*/

export function createSocialLinks(){
    const social = document.getElementById('socialRow');
    for(let link of socialLinks){
        if(link.active == true){
            //renderizar no html
            const i = document.createElement('i');
            i.classList.add('fa-brands');
            i.classList.add(`fa-${link.iconName}`);
    
            const a = document.createElement('a');
            a.setAttribute("href", link.url);
    
            a.appendChild(i);
        
            social.appendChild(a);
        }
    }
}

export function createWhereNextLinks(){
    const whereNextElement = document.getElementById('whereNext');
    for(let link of whereNextLinks){
        if(link.active == true){
    
            const a = document.createElement('a');
            a.setAttribute("href", link.url);
            a.classList.add('whiteButton');
            a.innerHTML = link.text;
    
            whereNextElement.appendChild(a);
        }
    }
    
}

export function accountName(){
    const nome = document.querySelector('.accountName');
    if(headerName != ''){
        nome.innerHTML = `${headerName.insta} - ${headerName.allName}` 
    }
}

export function resume(){
    const aLittle = document.querySelector('.tagLine')
    if(resumeTagLineText != ''){
        aLittle.innerHTML = `${resumeTagLineText}`
    }
}

export function accountImage(){
    const myPhoto = document.querySelector('.profileImage');
    if(imagePath != ''){
        myPhoto.setAttribute('src', imagePath.path);
        myPhoto.setAttribute('alt', 'Foto de perfil');
    }
}

export function showcaseIcons(){
    const iconContainer = document.querySelector('.showcase-icons');

    const title = document.querySelector('.tittle-showcase');
    const title1 = 'Ultimos Projetos';
    const title2 = 'Nerd Zone'

    const icon1 = document.querySelector('.icon1');
    const icon2 = document.querySelector('.icon2');

    const iCode = '<i class="fa-solid fa-code active"id="code"></i>';
    const whiteICode = '<i class="fa-solid fa-code active"id="code" style="color: #fff"></i>';
    const blackICode = '<i class="fa-solid fa-code active"id="code" style="color: #000"></i>';
    const iEngine = '<i class="fa-solid fa-gears" id="engines"></i>';
    const whiteIEngine = '<i class="fa-solid fa-gears" id="engines" style="color: #fff"></i>';
    const blackIEngine = '<i class="fa-solid fa-gears" id="engines" style="color: #000"></i>';

    const layout1 = document.querySelector('#layout1');
    const layout2 = document.querySelector('#layout2');
    const layout3 = document.querySelector('#layout3');
    const layout4 = document.querySelector('#layout4');

    window.onload = title.innerHTML = title1
    window.onload = icon1.innerHTML = iCode;
    window.onload = icon2.innerHTML = iEngine;
    window.onload = icon1.innerHTML = blackICode;        

    if(title.innerHTML = title1){
        layout1.innerHTML = 'Clone LinkTree';
        layout2.innerHTML = 'Jogo da Memoria';
        layout3.innerHTML = 'Pedra Papel Tesoura';
        layout4.innerHTML = 'Crud';
    }

    icon2.addEventListener('click', ()=>{
        icon1.classList.remove('active');
        icon1.innerHTML = whiteICode;

        icon2.innerHTML = blackIEngine
        icon2.classList.add('active');

        title.textContent = title2;

        layout1.innerHTML = 'Minha Config';
        layout2.innerHTML = 'Extensoes do VsCode';
        layout3.innerHTML = 'Cursos';
        layout4.innerHTML = 'Não sei oq colocar';
    });

    icon1.addEventListener('click', ()=>{
        icon2.classList.remove('active');
        icon2.innerHTML = whiteIEngine;

        icon1.innerHTML = blackICode;
        icon1.classList.add('active');

        title.textContent = title1;

        layout1.innerHTML = 'Clone Linktree';
        layout2.innerHTML = 'Jogo da Memoria';
        layout3.innerHTML = 'Pedra Papel Tesoura';
        layout4.innerHTML = 'Crud';

    });

    if(title.innerHTML = title1){
        layout1.addEventListener('click', ()=>{

        });
        layout2.addEventListener('click', ()=>{
            window.location.href = 'https://jogodamemorialegal.netlify.app/'
        });
        layout3.addEventListener('click', ()=>{
            window.location.href = 'https://pedrapapeltesouradan.netlify.app/'
        });
        layout4.addEventListener('click', ()=>{
            window.location.href = 'https://crud-danielrossi.netlify.app/'
        });
    }


}





