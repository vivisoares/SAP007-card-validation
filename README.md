# Cartão de Crédito Válido

## Índice

- [1. Introdução](#1-Introdução)
- [2. Definição e objetivo do produto](#2-Definição-e-objetivo-do-produto)
- [3. Desenvolvimento](#3-Desenvolvimento)
- [4. Considerações finais](#4-Considerações-finais)

---

## 1. Introdução

O projeto tem como principal funcionalidade da página realizar a validação de cartões de crédito, para isso, é utilizado: O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também chamado de módulo 10, é um método de soma de verificação, usado para validar números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10,  podemos
1- somar os dígitos do resultado ou 2- subtrairmos 9 do valor.

O número a verificar só será válido se o resultado da soma de todos seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Definição e objetivo do produto

### Principais usuários:

A página em questão será utilizada pelos clientes do acervo Sinergia Skyn ao finalizar a compra das suas peças de roupas e que optem pelo método de pagamento online: O acervo SS visa engajar a causa sustentável pois como se sabe, a área da moda ocupa posição de mais poluente do planeta.

Após preencher todos os campos nessários para validação será exibido o resultado: 'É VÁLIDO!' ou 'É INVÁLIDO!',
além dos 4 últimos dígitos do cartão visíveis e o restante dos números ocultados por motivos de segurança.
Com o intuito de simplificar e facilitar a vida do cliente.

### Interface do usuário (UI)

A interface permite ao usuário:

- Inserir o número que deseja validar.
- Constatar se o resultado é válido ou não.
- Conseguir visualizar os últimos 4 dígitios enquanto os demais são ocultados. 

## 3. Desenvolvimento

Inicialmente, foi desenvolvido o planejamento de pequenas etapas de execução do projeto através da plataforma do [Trello](https://trello.com/b/lIPhyqg8/1-card-validation-sprint-planning).

Em seguida, foi rascunhado o [protótipo](prototype.png) da página para uma perspectiva melhor da aplicação dos objetivos de aprendizagem necessários. Reforçando o conceito de babysteps ao longo do desenvolvimento com objetivo de aprimoramento do produto à cada etapa.

Primeiramente, foi desenvolvida a estrutura simples, em HTML e CSS, seguindo os conceitos de aplicação de semântica, uso de seletores, box model, entre outros, conforme protótipo. 
Após a finalização da estrutura básica, foi iniciada a manipulação do arquivo index.js, responsável por receber todos os seletores de DOM, sendo eles os gerenciadores de eventos de DOM e manipulação dinâmica de DOM. Onde o projeto começou a ganhar vida e tomar forma da sua funcionalidade.

E por último e mais importante para concluir a funcionalidade e objetivo do produto, o arquivo validation.js, que hospeda as duas funções de teste unitários, é responsável por armazenar a função da formúla do Algoritmo de Luhn, que permite a validação do cartão de crédito, e a função de mascarar os números, deixando aparente apenas os últimos 4 dígitos, ambos resultados das funções são entregues na página HTML ao validar os campos.
Ambos arquivos JS utilizam-se de uso de condicionais, laços, parâmetros, valor de retorno.

As atualizações virtuais do projeto ao GitHub foram feitas pelo terminal GitBash através dos comandos 'git' e para teste local foram usados os comandos 'npm'

## 4. Considerações finais

- O planejamento deste projeto se encontra no [Trello](https://trello.com/b/lIPhyqg8/1-card-validation-sprint-planning)
- O repositório deste projeto se encontra no [GitHub](https://github.com/vivisoares/SAP007-card-validation)
- O deploy deste projeto está hospedado no [GitPages](https://vivisoares.github.io/SAP007-card-validation/)
- Este projeto nse utiliza apenas do uso de Vanilla JavaScript. Frameworks e bibliotecas não foram utilizadas.
- Foram executados dois testes: validator.isValid e validator.maskify.
- Os testes unitários cobriram 100% dos statements, functions e lines e branches.
- Este projeto conta com o uso de SSH key associada a conta do GitHub.
- Desenvolvido por Viviane Soares.
