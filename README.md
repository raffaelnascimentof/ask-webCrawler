# Web Crawler

O projeto tem como objetivo trazer informações de hospedagem.

# Do que preciso para rodar ?

Para rodar o projeto você precisa ter na sua maquina:
 - Clone do projeto
 - [NodeJs](https://nodejs.org/en/) (versão utilizada v12.18.4)
 - Postman/Insomnia

 
 # Como rodar ?
 No local onde foi clonado o projeto rode o comando `npm intall` para instalar todas a dependências que o projeto precisa para executar.
 
 No terminal de sua IDE digite `npm start` para iniciar o servidor.
 
 # Consumindo os dados
 Agora podemos realizar uma requisição POST para o endereço `http://localhost:3000/v1/buscar` enviando no body da requisição as informações de checkin e checkout.
 
 Exemplo do JSON
 ```
 {
	"checkin": "23/02/2021",
	"checkout": "25/02/2021"
}
```
   
# Retorno da requisição

Vai retornar um array de objetos Json na seguinte estrutura
```
 {
    "nome": "Standard",
    "preco": "R$ 760,00",
    "descricao": "Ideal para relaxar. Os quartos dispõem de diversos serviços para garantir uma estadia confortável e agradável. Todos os apartamentos Stan... ",
    "imagem": "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189952.jpg"
  },

```

Caso não tenha informações de valores para o período de datas solicitado o retorno vai ficar da seguinte forma. 

```
{
    "nome": "Standard",
    "preco": "Verifique as Restrições do Tarifário",
    "descricao": "Ideal para relaxar. Os quartos dispõem de diversos serviços para garantir uma estadia confortável e agradável. Todos os apartamentos Stan... ",
    "imagem": "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189952.jpg"
  },

```
