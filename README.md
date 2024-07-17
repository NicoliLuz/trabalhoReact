# Explicando o trabalhoReact


### `Criar pasta e baixar dependências`

Criar uma pasta e iniciar o gitBashHere, cd para acessa-la e 
npx create-react-app para baixar os pacotes React

### `Separar as pastas`
Criar o arquivo components que vai armazenar as demais pastas,
a Forms.jsx e sua estilização, bem como a Lista.jsx e seu CSS

### `Na pasta Forms.jsx`
Criei uma function e com useStete, permite rastrear o estado em um componente de função,
passei o valor que é o estado atual e set para atualiza-lo

Criei uma const para submitar e utilizei o preventDefault, é chamado no evento ao enviar o formulário para evitar um reload/refresh do navegador 

Passei onSubmit, disparado quando a pessoa usuária clica em um botão, bem como o 
onChange, acionado quando um valor do input é alterado, falando em input - ele
foi definido como text para o usuário escrever texto nele, junto do botão do type
submit

### `Na pasta Lista.jsx`
Criei uma function para adicionar e remover, no return chamei a adicao.map que
mapeia e transforma os itens de um array, já que estamos fazendo uma lista para
os usuários, atribuindo o index para tais valores
