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

Sem dificuldades.

## Pontos de melhoria da sugestão
#### Na parte de requisição percebi que no documento faltam algumas informações para a chamada do microsserviço, logo fiz no achometro, percebi que era uma requisição post e os parametros eu passei no body como achava que deveria ser.

Percebi que no protótipo enviado ele utiliza um sistema de paginação dos personagens e episódios.Percebi que seria mais prático listar o conjunto na mesma página construindo assim em uma single page.

Auto complete na hora de pesquisar.
Ao invés de utilizar o sistema tradicional de pesquisa utilizei o metodo autocomplete para melhorar o UX, e ter mais dinamica na pagina. alem de economizar recursos é bem mais agradavel de se testar e utilizar.

## Pontos de Melhoria do desenvolvimento

# Problemas relacionados a falta de tempo

#### Layout da page de episódios:
Devido ao meu curto prazo de tempo disponivel para desenvolver fiz alguns cortes na parte do produto para poder entrega-lo para vocês.
Como puderam perceber o layout da pagina de episodios não segue o prototipo enviado, a listagem não está estilizada.

#### Requisição sugestão
No quesito, pensando que não estaria disponível o tempo todo, não desenvolvi uma solução para esse problema, ao meu ver pensei, se ele ficar por exemplo 1 dia fora do ar, não iria recuperar essa requisição.
##### Talvez com mais tempo teria desenvolvido essa funcionalidade

#### Melhor componentização: 
Novamente devido ao curto prazo alguns componentes poderiam ser quebrados e criar outros componentes reutilizáveis.

#### Resposta da sugestão
Não criei um modal adequado para informar o usuário da requisição, apenas um alert.

#### Filtro por status
Falta de tempo.

#### Teste Unitário.
Falta de tempo
