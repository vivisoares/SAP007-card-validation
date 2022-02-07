# Cartão de Crédito Válido

## Índice

- [1. Introdução](#1-Introdução)
- [2. Definição e objetivo do produto](#2-Definição-e-objetivo-do-produto)
- [3. Desenvolvimento](#3-Desenvolvimento)
- [4. Considerações finais](#5-considerações-finais)

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

A interface deve permitir ao usuário:

- Inserir o número que desejamos validar.
- Constatar se o resultado é válido ou não.
- Ocultar todos os dígitos do número do cartão, exceto os últimos 4
  caracteres.
- Não deve poder inserir um campo vazio.

## 3. Desenvolvimento

### UX (Design da experiência do usuário)

Antes de começar a codificar, você deve entender o problema que deseja resolver
e como o aplicativo o resolve.

- Trabalhe seu primeiro protótipo com papel e lápis (preto e branco).
- Em seguida, valide esta solução com uma companheira (peça feedback).
- Use o aprendizado no momento de validar seu primeiro protótipo e desenvolva um
  novo protótipo empregando alguma ferramenta para design de protótipos
  ([Balsamiq](https://balsamiq.com/), [Figma](https://www.figma.com/),
  [Apresentações Google](https://www.google.com/intl/pt-br/slides/about/) etc.)
  Esses pontos serão apresentados no `README.md`.

### Scripts / Arquivos

- `REAME.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.

## 4. Considerações finais


### Parte Obrigatória

- [ ] `README.md` adicionar informação sobre o processo e decisões do desenho.
- [ ] `README.md` explicar claramente quem são os usuários e as suas relações
      com o produto.
- [ ] `README.md` explicar claramente como o produto soluciona os
