# Reciclaville

## Descrição:

O Reciclaville é uma plataforma que facilita o gerenciamento de resíduos e o acesso a pontos de coleta de materiais recicláveis. Os usuários podem cadastrar novos pontos de coleta, verificar pontos de coleta em uma lista, visualizar informações sobre os materiais aceitos em cada ponto e registrar suas próprias contribuições para a reciclagem. 

## Tecnologias:

O sistema foi desenvolvido em Javascript usando a biblioteca React, com a ajuda de algumas outras bibliotecas como Material UI, React Router DOM, react-toastify e leaflet.

## Como executar: 

Para executar o sistema front-end: npm install e  npm run dev
Para que o sistema reciclaville funcione corretamente faça o download da API coletas.js, a execução dela se da pelo comando npm run start

## Dentro do site:

No site é necessário que o usuario crie um login com email e senha e adicione algumas informações como nome, gênero, cpf e data de nascimento.
Feito o login, é liberada a tela de 'locais de coleta', a página ira listar todas as rotas de coleta criadas pelo usuario logado. Nesta mesma tela há um botão, clicando nele o usuario pode cadastrar novas rotas.
Há também a tela de dashboard, que lista a quantidade de pontos de coleta cadastrados no site por estado e um mapa com marcadores, mostrando onde ficam todos os pontos de coleta cadastrados.