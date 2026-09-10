## 🧩 Exercícios de Lógica de Programação em JavaScript

### Exercício 1 – Estruturas Condicionais (`exercicio1.js`)
**Objetivo:** Praticar `if`, `else if` e `else`.

Crie variáveis para armazenar o **nome do aluno**, **nota 1**, **nota 2** e **frequência** (em porcentagem, de 0 a 100).

- Calcule a média das duas notas.
- O aluno será **Aprovado** se a média for maior ou igual a `7.0` **E** a frequência for maior ou igual a `75%`.
- O aluno estará de **Recuperação** se a média for entre `5.0` e `6.9` **E** a frequência for maior ou igual a `75%`.
- O aluno será **Reprovado** se a média for menor que `5.0` **OU** a frequência for menor que `75%`.
- Exiba no console o nome do aluno, a média calculada, a frequência e o status final (*"Aprovado"*, *"Recuperação"* ou *"Reprovado"*).

---

### Exercício 2 – Laço `for` Simples (`exercicio2.js`)
**Objetivo:** Praticar repetição com contador e acumulador.

Crie uma variável chamada `numeroBase` (ex: `7`).

- Utilize um laço `for` para imprimir a tabuada desse número de 1 a 10 no seguinte formato: `7 x 1 = 7`.
- Além de imprimir a tabuada, utilize uma variável acumuladora para calcular e exibir a **soma de todos os resultados** da tabuada ao final.

---

### Exercício 3 – Laço com Condicionais e Operador Módulo (`exercicio3.js`)
**Objetivo:** Praticar laços de repetição combinados com checagem de paridade (`%`).

Crie duas variáveis: `inicio` (ex: `1`) e `fim` (ex: `20`).

- Utilize um laço `for` para percorrer todos os números desse intervalo (inclusive o início e o fim).
- Para cada número, verifique:
  - Se for **par**, exiba: `O número X é PAR`.
  - Se for **ímpar**, exiba: `O número X é ÍMPAR`.
- Contabilize quantos números pares e quantos números ímpares existem no intervalo e exiba o total de cada um no final.
