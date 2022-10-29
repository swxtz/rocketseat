# TypeScript

# **O que é o TypeScript?**

O TypeScript foi criado pela Microsoft para trazer um superset de tipagens para o JavaScript.

A diferença entre o JavaScript e TypeScript é a sua tipagem que no JS não é obrigatório, já no TS é obrigatório, mas nem pra todos os casos. Algumas vantagens de utilizar o TS é que a sua adoção pode ocorrer de forma gradual em um projeto JavaScript.

---

# **Porquê utilizar TypeScript?**

A maior vantagem de usar o TypeScript além de aumentar a nossa produtividade no dia a dia é ele reconhecer os erros durante o desenvolvimento, diferente do JavaScript que reconhecerá apenas quando o projeto é executado.

```jsx
function sum(a, b){
  return a + b;
}

console.log(sum('1', '2'));

// Ao executar esse trecho de código o resultado seria 12.
```

*Se estivéssemos utilizando o TypeScript não precisaríamos executar para identificar o erro.*

---

# **Verificação tipo estático**

Já sabemos que o TypeScript verifica erros antes da execução, mas vamos ver isso na prática:

```jsx
const userName = "João Inácio"

userName()
```

Ao tentar como uma função o TypeScript nos avisará que o que estamos querendo executar é uma variável do tipo String.

---

# **Compilação**

O TypeScript é sempre compilado para JavaScript, mas normalmente não estamos vendo isso. Observe os exemplos:

Código em TypeScript:

```tsx
function showTicket(user: string,  ticket: number) {
    console.log(`Olá ${user ?? 'Usuário Padrão'}. Seu número de bilhete é: ${ticket}`)
}
```

Resultado da conversão para JavaScript:

```jsx
"use strict";
function showTicket(user, ticket) {
    console.log(`Olá ${user !== null && user !== void 0 ? user : 'Usuário Padrão'}. Seu número de bilhete é: ${ticket}`);
}
showTicket('João Inácio', 123);
```

---

# **Tipagem explícita**

Na tipagem explícita nós especificamos o qual será o tipo de cada variável.

`user: string`, `ticket: number`;

> O TypeScript nos ajuda a identificar cada tipo de variável ao invocá-las.
> 

![https://storage.googleapis.com/golden-wind/discover/especializar/typescript/tipagem-explicita.png](https://storage.googleapis.com/golden-wind/discover/especializar/typescript/tipagem-explicita.png)

---

# **Any**

Ao declarar uma variável no TypeScript o seu tipo por padrão será `any`
. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.

Exemplo:

```tsx
let info: any;

info = [123];
info = 'João';
info = true;
info = 10.50;

// Com o tipo any a variável aceitará qualquer valor.
```