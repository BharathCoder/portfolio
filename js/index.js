let burger = document.querySelector('.burger');
let sidebar = document.querySelector('.sidebar');
let links = Array.from(document.getElementsByClassName('link'))

burger.addEventListener('click', ()=>{
    sidebar.classList.toggle('slid')
});

links.forEach((element)=>{
    element.addEventListener('click', ()=>{
        sidebar.classList.toggle('slid')
    })
})

