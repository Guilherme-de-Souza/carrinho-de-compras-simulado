
let total =0;
limpar()

function adicionar() {
    
    let produto= document.getElementById('produto').value;
    let qtd= parseInt(document.getElementById('quantidade').value);
    let nomeProduto = produto.split(" - ")[0];
    let valorProduto = parseInt(produto.split(" - R$")[1])
    
    let preco = valorProduto*qtd
     
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML=carrinho.innerHTML+`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    
    total = total + preco
    let totalCarrinho= document.getElementById('valor-total');
    totalCarrinho.textContent=`R$ ${total}`
    document.getElementById('quantidade').value='';
}


function limpar() {
    
document.getElementById('lista-produtos').innerHTML='';
document.getElementById('valor-total').textContent='R$ 0';
total=0
    
}