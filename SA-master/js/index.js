let cervejasLista = document.getElementById("cervejas")
let produtos = JSON.parse(localStorage.produtos)
let filtroCerv=[]
let filtroSelect=document.getElementById("filtroCerv")

function filtrarCerveja(){
filtroCerv=[]
if("todas"===filtroSelect.value){
    return criaProduto(produtos)
    
}else{
    filtroCerv=[]
    produtos.forEach(elemento=>{
        if(elemento.tipo===filtroSelect.value){
            filtroCerv.push(elemento)
            console.log(filtroCerv)
            return criaProduto(filtroCerv)
            
    }
})

}
 
}
function criaProduto(arrProduto){
    
    for(let i = 0; i<arrProduto.length; i++){
        cervejasLista.appendChild(document.createElement("div")).classList.add("div-cerveja")
    }
    let cervejas = document.querySelectorAll(".div-cerveja")
    cervejas.forEach(function(div, index){
        div.appendChild(document.createElement('img')).setAttribute('src', 'img/beer1.svg')
        div.appendChild(document.createElement('h3')).innerText = arrProduto[index].nome
        div.appendChild(document.createElement('h2')).innerText = `Tipo: ${arrProduto[index].tipo}`
        div.appendChild(document.createElement('p')).innerText = arrProduto[index].descricao
        // div.appendChild(document.createElement('button')).innerText = 'Mais informações'
    })
     
}

