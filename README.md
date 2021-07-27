# Transformando Talentos para o Futuro

Olá! sou Eduardo Silva Rocha participante do Programa de Formação Tech | Itaú // Edição { pessoas com deficiência }. Depois de concluir a trilha preparatória desenvolvida pela Gama Academy. Este é o desafio final da segunda turma do programa.

# Pagina do Formulário 

Criar um formulario para registrar dados pessoais, Nome, Cpf, Rg, Sexo, Endereco, Numero, Bairro, Cidade, Estado, Cep, Telefone Fixo, Telefone Celular. Sendo os campos Nome, Cpf, Endereco, Numero, Telefone Celular, obrigatório o preenchimento .

## Funcionalidades

Validação do cpf, busca do endereço pelo cep, redirecionamento de pagina, validação de campos, campos obrigatorios e pagina responsiva.

## Implementação 

- Validação do campo cpf, realizada por javascript arquivo validacao_cpf.js foi criada uma função que busca o valor do cpf digitado e retira os . e / do numero, com um laço de repetição, depois uma divisão é realizado a formula de validação do cpf por ultimo foi utilizado uma condicional para validar os dois ultimos digitos.
- busca do endereço, realizada por javascript arquivo cep.js, uma constando busca o cep digitado, o evento blur do input cep roda a função para buscar o endereço, dentro da funçao  o comando replace que procura o caractere (-) e troca ele por nada, e assim coloca a numeracao somente com numeros inteiros dentro de uma variavel. Em seguida o fech acessar a url
onde trocamos parte do endereço pela variavel mencionada acima, para acessar uma url remota foi usado os parametros get cors default, para tratar possiveis erros usamos then() e catch(). Os dados que retorna no formato json é tratato e utilizamos um laço de repetição para colocar o objeto retornado em uma variavel com todos os campos, depois uma condicional verifica se existe o campo em nosso formulario e se existir ele busca o input e da o valor existente na variavel.
- utilizamos o comando em javascript window.location.href para redirecionar a pagina 
- utilizamos expressoes regulares dentro do formulario para validar os dados
- utilizamos o requerid para tornar o dado obrigatorio no preenchimento do formulario


