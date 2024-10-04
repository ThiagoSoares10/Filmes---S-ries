pagina.addEventListener("scrooll", function(){
    let header = document.querySelector('.paginageral')
    header.classList.toggle('rolagem',pagina.scrollY > 0)
})