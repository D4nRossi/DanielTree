import {socialLinks, 
whereNextLinks, 
headerName, 
resumeTagLineText, 
imagePath, 
showcaseContainer
} from './data.js'

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
    const title = document.querySelector('.whereTittle');

    title.innerHTML = 'Profissional';

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

export function showcaseGrid(){

    var title1 = "Últimos Projetos";
    var title2 = "Discord";
    var title3 = "Steam";
    var title4 = "Playlist";

    var link1 = 'https://github.com/D4nRossi'
    var link2 = 'https://discord.gg/BTtGEmysF3'
    var link3 = 'https://steamcommunity.com/profiles/76561198326638076/'
    var link4 = 'https://open.spotify.com/playlist/0Hjv3kha6YJGAMCeTawUiv?si=1fbaaaf23d704335'

    const gridTitle = document.querySelector('.tittle-showcase');
    const gridName = 'Shortcuts';

    const header = document.querySelector('.tittle-showcase');

    const layout1 = document.querySelector('#layout1')
    const layout2 = document.querySelector('#layout2')
    const layout3 = document.querySelector('#layout3')
    const layout4 = document.querySelector('#layout4')

    layout1.innerHTML = title1;
    layout2.innerHTML = title2;
    layout3.innerHTML = title3;
    layout4.innerHTML = title4;

    layout1.addEventListener('click', ()=>{
        window.open(link1);
    })
    layout2.addEventListener('click', ()=>{
        window.open(link2);
    })
    layout3.addEventListener('click', ()=>{
        window.open(link3);
    })
    layout4.addEventListener('click', ()=>{
        window.open(link4);
    })

    header.innerHTML = 'Pessoal';

}




