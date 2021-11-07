
let searchForm = document.querySelector('.seciton-form-container');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active')
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active')
    login.classList.remove('active');
}

let login = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active')
}
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active')
}

// làm hình ảnh chuyển động lên xuống theo hiệu ứng di chuột
document.querySelector('.home').onmousemove = (e) =>{

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}   

//   transform: scale(1.05);   width="600" height="450" style="border:0;"
//  font-family: 'Satisfy', cursive;
// .1rem solid rgba(0, 0, 0, 0.2);
//     box-shadow: 1rem 0 1rem rgba(0, 0, 0, 0.2);
    // display: -webkit-flex;
    // display: -ms-flexbox;
    // display: flex;