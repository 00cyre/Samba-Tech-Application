# Links e referências
[Protótipo de tela](https://www.figma.com/file/oRePpw7SAztaCYwkFJaL3x/Aplica%C3%A7%C3%A3o-Samba-Tech?node-id=0%3A1)

[Aplicação web](https://aplicacao-samba-tech.herokuapp.com/)

# Notas de desenvolvimento da aplicação para a empresa SambaTech

Eu desenvolvi essa aplicação pensando em features, como cada funcionalidade sendo separada em suas branchs desenvolvidas individualmente e implementadas de acordo com seu desenvolvimento.Em ambientes normais apos a publicação da feature em master deleto as branchs mas no caso para analise do codigo deixei ela aí mesmo.

## Pontos notáveis

Nos primeiros 20 minutos de desenvolvimento, ao ler a documentação da api do [Breaking bad](https://breakingbadapi.com/Documentation)
percebi que no endpoint 
##### `characters?name=`
Teria que fazer meus parseamentos com a lista completa em um input para fazer o autocomplete na hora da busca de personagens.
Essa solução foi implementada devido ao fato de perceber que seria mais pratico filtrar a lista dentro do app ao invés de enviar várias requisições cada uma pedindo a letra do personagem, alem do mais que seria mais lento e iria consumir mais processamento e internet.

Na pagina de requisição de sugestão não utilizei o Redux, pois a mesma não teria necessidade, já que não utilizo a resposta dele.

## Dificuldades

Nenhuma

## Pontos de melhoria da sugestão
#### Na parte de requisição percebi que no documento faltam algumas informações para a chamada do microsserviço, logo fiz no achometro, percebi que era uma requisição post e os parametros eu passei no body como achava que deveria ser.

Percebi que no protótipo enviado ele utiliza um sistema de paginação dos personagens e episódios.Percebi que seria mais prático listar o conjunto na mesma página construindo assim em uma single page.

Auto complete na hora de pesquisar.
Ao invés de utilizar o sistema tradicional de pesquisa utilizei o metodo autocomplete para melhorar o UX, e ter mais dinamica na pagina. alem de economizar recursos é bem mais agradavel de se testar e utilizar.

## Pontos de Melhoria do desenvolvimento

Nenhum

# Meu workflow normal
Geralmente faço por estórias onde eu construo minhas features em uma média de 4 dias por feature, onde dentro do desenvolvimento utilizo o TDD, e a qualidade de código é garantida.

# Porque faltaram testes no desafio?
Como isso é uma aplicação para teste, e não um produto completo, achei overkill testar todas as funcionalidas,views,components da aplicação, então decidi fazer 1 set de testes na feature ##### **character** onde eu testo desde o redux,services e views.

## Espero ter ficado claro.


