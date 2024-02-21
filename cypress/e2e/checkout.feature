#language: pt

Funcionalidade: Compra e CHekcout
Como cliente
Quero fazer checkout
Para realizar minha compra


Contexto: Dado que esteja na pagina de produtos


Cenário: Compra Válida

Quando eu adicionar produto ao carrinho
E clickar em realizar check-out
E preencher os dados corretamente
Então deve permitir finalizar a compra


Cenário: Compra Inválida

Quando adicionar produto ao carrinho
E clickar em realizar checkout
E clickar em finalizar compra
Então deve exibir uma mensagem de alerta


