# Cifra de César
## Papo de Mulher
### Conteúdo

* [1. Motivo](#1-motivo)
* [2. Definição do Produto](#2-definição-do-produto)
* [3. Descrição do Produto](#3-descrição-do-produto)
* [4. Fluxograma](#4-fluxograma)
***

### **1. Motivo**

**Sprint 1** - Bootcamp Laboratoria (front-end developer).
O desafio proposto era criar uma aplicação web (tema livre) em que o usuário pudesse cifrar e decifrar um texto indicando uma chave de deslocamento (_offset_), utilizando a lógica da Cifra de César.
***

### **2. Definição do Produto**

Estimasse que em 2018, 1.6 milhão de mulheres foram espancadas ou sofreram tentativa de estrangulamento e  22 milhões (37.1%) de brasileiras passaram por algum tipo de assédio. Entre os casos de violência, 76.4% das mulheres conheciam o autor da violência, sendo que 42% dos casos ocorreram no ambiente doméstico. 
Considerando estes dados e o fato de que após sofrer uma violência, mais da metade das mulheres (52%) não denunciou o agressor ou procurou ajuda, o **_Papo de Mulher_** busca ser um canal de comunição que cria um ambiente seguro para a vítima e que não desperta a atenção dos agressores. 

O **_Papo de Mulher_** é um protótipo de site com uma interface que busca corresponder ao estereótipo de conteúdo considerado "exclusivamente feminino", principalmente pelo público masculino. Contudo, apesar de ter conteúdo diversificado, o seu principal objetivo é servir como  um canal de comunicação com a **Delegacia de Defesa da Mulher (Decap)**. 
As mensagens encaminhadas pela usuária são codificadas e esta conseguiria através do mesmo portal decodificar as mensagens recebidas do Decap.

O objetivo da interface correspondente ao estereótipo de temas femininos é não despertar o interesse do agressor em caso de controle abusivo do conteúdo acessado pela vítima.  
***

### **3. Descrição do Produto**

1. Dentro do site a aplicação de cifrar/decifrar se inicia por meio de um formulário em que o usuário informa a chave de deslocamento (**input offset**) e introduz a mensagem a ser codificada/decodificada (**textarea**). 

2. Por meio de um botão (**Enviar**), tanto a chave de deslocamento, como a mensagem introduzida são armazenadas em  variáveis (**let offset** e **let str**) dentro das funções **btnEncode()** ou **btnDecode()** (dependendo da escolha do usuário).

3. As funções **encode**/**decode** iniciam, tendo como parâmetros "_offset_" e "str", utilizando como argumentos os valores armazenado nas funções **btn**. 

4. Por meio de um **for** é feita uma busca para separa as letras **maiúsculas** e as **minúsculas**, tendo como base na numeração decimal do cógido ACSII.

5. Para **cifrar** (função **btnEncode()**):

    * _a_. se a letra for **maiúscula** (intervalo de numeração do 65 ao 90), seu valor numérico é subtraído por 65 (numeração da letra "A" - **primeira letra**) e **somado ao _offset_** (fornecido pelo usuário). O resultado é então divido por 26 (total de letras do alfabeto) e obtem-se o resto inteiro, por meio do uso do módulo (**%**). Esta operação é realizada com a finalidade de reatribuir valores numéricos às letras, partindo-se do 0. Finalmente, soma-se 65, para  obter a numeração da "nova" letra após o deslocamento.

    * _b_. A letra correspondente à numeração obtida (por **String.fromCharCodeAt()**) é então armazenada na variável **result**.

    * _c_. Se a letra for **minúscula** (intervalo de numeração do 97 ao 122) passa pelo mesmo processo dos itens a. e b., com o diferencial que o valor da primeira letra ("a"), ou seja, valor a ser subtraído e somado é 97. 

    * _d_. Os caracteres que não se encontram em nenhum dos intervalos são retornados como eles mesmo (**str[i]**), não havendo passado pelo processo de cifragem. 

    * _e_. A mensagem cifrada é printada na tela.  

9. Para **decifrar** (função **btnDecode**), o mesmo processo foi executado, contudo os valores a serem subtraído para reatribuir valores numéricos às letras foram 90 e 122, para **maiúsculas** e **minúsculas**, respectivamente. Isto, considerando-se que deve-se partir agora da **última letra**. 
    * a. O valor **_offset_ deve ser subtraído**, dado que o objetivo é voltar na "numeração inicial". 
    
    * **IMPORTANTE**: O usuário deve se atentar a usar a mesma chave utilizada para decifrar. 

### **4. Fluxograma**

Cifra de César - Papo de Mulher: ![Fluxograma](URL)