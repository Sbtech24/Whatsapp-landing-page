const Hamburger=document.querySelector('.Hamburger');
const NavbarLinks=document.querySelector('.nav2');

Hamburger.addEventListener('click',()=>{
    if(NavbarLinks.style.transform==='scaleY(1)'){
        NavbarLinks.style.transform='scaleY(0)';
    }else{
        NavbarLinks.style.transform='scaleY(1)';
    }
});