# Desafio: Arquitetura em Camadas e Frameworks Back-end

Este repositório foi desenvolvido como parte do desafio da Unidade I, com o objetivo de demonstrar a aplicação prática do padrão **MVC (Model-View-Controller)** e a organização de projetos em dois ecossistemas distintos: **Node.js (Express)** e **Java (Spring Boot)**.

---

## 📂 Estrutura do Repositório

O projeto está dividido em duas pastas principais, cada uma representando uma tecnologia back-end:

- **/node-express**: Implementação utilizando JavaScript e o framework minimalista Express.
- **/java-springboot**: Implementação utilizando Java e o framework robusto Spring Boot (gerenciado via Maven).

---

## 🏗️ Explicação da Arquitetura (MVC)

Em ambos os projetos, a estrutura de pastas reflete a separação de responsabilidades:

1.  **Model (`UserModel.js` / `User.java`)**: Responsável pela representação dos dados e regras de negócio. Define como o objeto "Usuário" é estruturado.
2.  **Controller (`UserController.js` / `UserController.java`)**: Atua como o intermediário. Ele recebe as requisições do cliente, processa as informações através do Model e retorna a resposta adequada.
3.  **Routes / Request Mapping**: Define os pontos de entrada (endpoints) da aplicação. No Node.js, isso é isolado em um arquivo de rotas; no Spring Boot, é feito via anotações diretamente no Controller.

---

## 📊 Comparação Técnica: Node.js vs. Java Spring Boot

| Critério                   | Node.js (Express)                          | Java (Spring Boot)                                  |
| :------------------------- | :----------------------------------------- | :-------------------------------------------------- |
| **Configuração Inicial**   | Extremamente rápida e manual (`npm init`). | Mais burocrática, geralmente via Spring Initializr. |
| **Verbosidade**            | Código mais limpo e direto (JavaScript).   | Mais verboso devido à tipagem forte e anotações.    |
| **Gestão de Dependências** | Realizada via **NPM** (`package.json`).    | Realizada via **Maven** (`pom.xml`).                |
| **Estrutura**              | Flexível, o desenvolvedor decide a pasta.  | Rígida, segue o padrão de pacotes do Java.          |

### Análise Analítica

O **Node.js** se destaca pela agilidade e baixa curva de aprendizado, sendo ideal para protótipos e aplicações escaláveis em tempo real. Já o **Java Spring Boot** oferece uma estrutura muito mais segura e firme, facilitando a manutenção em grandes equipes e sistemas corporativos complexos, graças ao uso intensivo de **Injeção de Dependência** e **Anotações**.

---

## 🚀 Como Executar (Ambiente Local)

### Node.js

1. Navegue até a pasta `/node-express`.
2. Instale as dependências: `npm install`.
3. Inicie o servidor: `node app.js`.
4. Teste em: `http://localhost:3000/usuarios`.

### Java Spring Boot

1. Navegue até a pasta `/java-springboot`.
2. Execute via Maven: `./mvnw spring-boot:run`.
3. Teste em: `http://localhost:8080/usuarios`.

---

**Desenvolvido por Adryan – Estudante de ADS (UNINASSAU)**
