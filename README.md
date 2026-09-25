# 🚀 Lista de Exercícios Práticos — JavaScript Fundamental & Lógica (Nível Júnior)

Esta lista contém **15 exercícios práticos** desenhados para treinar lógica de programação, manipulação de dados, estruturas de controlo e funções avançadas em JavaScript.

> 💡 **Regra de Ouro:** Todos os exercícios devem ser executados e testados **exclusivamente no console** (`Node.js` ou DevTools do navegador). Não faças manipulação do DOM.

---

## 📋 Módulo 1: Manipulação de Estruturas de Dados e Operadores

### 1. Normalização de Payload e Validação de Tipos
Recebeste o seguinte objeto vindo de uma API legado com tipos inconsistentes:

```javascript
const entradaAPI = {
  id: "1052",
  ativo: "true",
  saldo: "450.50",
  meta: null
};
```

Cria uma função que receba este objeto e retorne um novo objeto tratado:
- Converte `id` para `number`.
- Converte `ativo` para `boolean`.
- Converte `saldo` para `number`.
- Usa o operador `typeof` para validar se todas as propriedades convertidas estão com os tipos corretos e exibe no console uma confirmação ou aviso caso algum tipo falhe.

---

### 2. Merge Avançado de Estado com Spread Operator (`...`)
Dado o seguinte cenário de configurações de utilizador:

```javascript
const configPadrao = { tema: "dark", notificacoes: true, idioma: "pt-BR", nivelAcesso: "user" };
const configUsuario = { tema: "light", idioma: "en-US" };
```

- Usa o **operador spread** para fundir as duas configurações de forma imutável, garantindo que `configUsuario` sobresscreva os valores padrão.
- Adiciona uma nova propriedade `ultimaAtualizacao` com o timestamp atual (`new Date().toISOString()`) sem alterar os objetos originais.

---

## 🚦 Módulo 2: Lógica Condicional e Regras de Negócio

### 3. Validador de Regra de Desconto Complexa
Cria uma função `calcularDesconto(cliente, valorCompra)` que aplique as seguintes regras com operadores lógicos (`&&`, `||`) e condicionais (`if / else if / else`):
- Cliente VIP **OU** compra acima de R$ 1.000,00: 20% de desconto.
- Cliente cadastrado há mais de 2 anos **E** compra acima de R$ 500,00 (que não seja VIP): 15% de desconto.
- Demais casos: 5% de desconto apenas se a compra for acima de R$ 200,00.
- Caso contrário: sem desconto (0%).

*A função deve retornar o valor final com o desconto aplicado.*

---

### 4. Máquina de Estados de Pedido com `switch case`
Cria uma função `processarStatusPedido(statusAtual, acao)` utilizando `switch case`. Os status possíveis são: `"PENDENTE"`, `"PAGO"`, `"ENVIADO"`, `"CANCELADO"`.
- Se estiver `"PENDENTE"` e a ação for `"PAGAR"`, muda para `"PAGO"`.
- Se estiver `"PENDENTE"` e a ação for `"CANCELAR"`, muda para `"CANCELADO"`.
- Se estiver `"PAGO"` e a ação for `"ENVIAR"`, muda para `"ENVIADO"`.
- Qualquer outra transição de status não permitida deve exibir no console: `"Transição de status inválida: de [statusAtual] via [acao]"`.

---

## 🔁 Módulo 3: Laços de Repetição em Cenários Reais

### 5. Média Ponderada com Loop `for` Tradicional
Dada a seguinte lista de avaliações:

```javascript
const avaliacoes = [
  { nota: 8.5, peso: 2 },
  { nota: 6.0, peso: 3 },
  { nota: 9.0, peso: 5 }
];
```

Usa um loop `for` tradicional para calcular a **média ponderada** do aluno:

$$\text{Média} = \frac{\sum (\text{nota} \times \text{peso})}{\sum \text{peso}}$$

Exibe no console a média calculada e se o aluno foi aprovado ($\ge 7.0$).

---

### 6. Sanitização de Objeto com `for...in`
Dado o objeto de utilizador vindo da base de dados:

```javascript
const usuario = {
  id: 1,
  nome: "Carlos",
  hashSenha: "xyz123secret",
  email: "carlos@email.com",
  tokenSessao: "abc-987"
};
```

Usa o loop `for...in` para percorrer o objeto e criar um novo objeto **sem** as chaves que contenham os nomes `"hashSenha"` ou `"tokenSessao"`.

---

### 7. Resumo de Carrinho de Compras com `for...of`
Dado o carrinho de compras:

```javascript
const carrinho = [
  { produto: "Notebook", preco: 3500, quantidade: 1 },
  { produto: "Mouse", preco: 80, quantidade: 2 },
  { produto: "Monitor", preco: 1200, quantidade: 2 }
];
```

Usa um loop `for...of` para calcular o **total geral** do carrinho (multiplicando preço por quantidade de cada item) e exibe o resumo detalhado no console.

---

### 8. Sistema de Tentativas (Retry System) com `while`
Simula um sistema de conexão a uma base de dados:
- Cria uma variável `tentativas = 0` e uma flag `sucesso = false`.
- Num loop `while` (com limite de 5 tentativas), a cada iteração gera um número aleatório de 0 a 1 (`Math.random()`).
- Se o número for maior que `0.7`, define `sucesso = true` e interrompe a execução.
- Exibe no console o estado de cada tentativa e o resultado final da conexão.

---

### 9. Leitura de Fila com `do...while`
Dada uma lista de respostas de um servidor:

```javascript
const respostas = ["ERRO_500", "ERRO_500", "OK_200", "ERRO_404"];
```

Usa a estrutura `do...while` para ler a fila sequencialmente até encontrar o status `"OK_200"` ou esgotar a lista, imprimindo no console o progresso da leitura.

---

## ⚡ Módulo 4: Controle de Fluxo Avançado

### 10. Processamento Interrompido com `break` e `continue`
Dada a lista de transações bancárias:

```javascript
const transacoes = [200, -50, null, 1000, "INVALIDO", -800, 5000, -100];
```

Percorre a lista com um loop `for`:
- Se o valor não for um número válido (`typeof !== "number"` ou `isNaN`), usa `continue` para saltar o item.
- Se encontrares uma transação suspeita (valor absoluto acima de R$ 4.000,00 com `Math.abs()`), exibe um alerta de fraude e interrompe a verificação imediatamente com `break`.

---

## 🧩 Módulo 5: Arquitetura de Funções, Parâmetros e Escopo

### 11. Pipeline de Transformação com Arrow Functions
Cria três **Arrow Functions** concisas (de linha única com retorno implícito):
1. `limparTexto(str)`: remove espaços nas extremidades (`.trim()`) e converte para minúsculas.
2. `adicionarSufixo(str)`: adiciona `@empresa.com` ao final.
3. `gerarEmail(nome)`: encadeia as duas funções anteriores para transformar `"  João Silva  "` em `"joaosilva@empresa.com"`.

---

### 12. Acumulador de Logs Genérico com Rest Parameters (`...`)
Cria uma função `registrarLogs(nivel, ...mensagens)` usando **Rest Parameters**:
- O primeiro argumento deve indicar o nível do log (`"INFO"`, `"WARN"`, `"ERROR"`).
- Os demais argumentos devem ser capturados no array `mensagens`.
- A função deve iterar pelas mensagens e imprimir cada uma formatada no console: `[INFO] Mensagem aqui...`.

---

### 13. Factory Functions e Closures
Cria uma função `criarCalculadoraImposto(taxa)` que retorne outra função:
- A função interna deve receber um `valorBase` e aplicar a `taxa` gravada no escopo da função pai.
- Cria duas instâncias: `calcularIVA` (taxa de 0.21) e `calcularISS` (taxa de 0.05).
- Executa ambas com um valor de R$ 1.000,00 e exibe os resultados no console.

---

## 🗺️ Módulo 6: Domínio do Método `.map()`

### 14. Transformação de DTOs para o Frontend
Dada a lista de utilizadores vinda da base de dados:

```javascript
const usuariosBD = [
  { id_user: 101, first_name: "Ana", last_name: "Silva", is_active: 1 },
  { id_user: 102, first_name: "Pedro", last_name: "Santos", is_active: 0 },
  { id_user: 103, first_name: "Maria", last_name: "Oliveira", is_active: 1 }
];
```

Usa o método `.map()` para transformar essa lista num formato limpo para o Frontend:
- `id`: mantendo o valor de `id_user`.
- `nomeCompleto`: junção de `first_name` e `last_name`.
- `ativo`: `true` se `is_active === 1`, caso contrário `false`.

---

### 15. Calculadora Imutável de Preços com Imposto
Dada a lista de produtos de um e-commerce:

```javascript
const produtos = [
  { id: 1, nome: "Teclado Mecânico", precoBase: 200, categoria: "Eletrônicos" },
  { id: 2, nome: "Livro JS Avançado", precoBase: 80, categoria: "Livros" },
  { id: 3, nome: "Cadeira Gamer", precoBase: 1200, categoria: "Móveis" }
];
```

Usa o método `.map()` para retornar um novo array contendo os mesmos produtos, mas com a propriedade extra `precoFinal`:
- Categoria `"Eletrônicos"`: $15\%$ de imposto sobre o `precoBase`.
- Outras categorias: $5\%$ de imposto sobre o `precoBase`.
- **Atenção:** Garante que os objetos originais do array `produtos` **não sejam alterados** (utiliza o spread operator dentro da callback do `.map()`).
