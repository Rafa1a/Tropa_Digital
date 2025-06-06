# Desafio Tropa Digital - Frontend Challenge

Este é um projeto desenvolvido como teste prático para a vaga de Frontend na Tropa Digital. O desafio consistiu em implementar uma interface de login e dashboard para gerenciamento de eventos, seguindo fielmente o design fornecido no Figma.

## 🎯 Sobre o Desafio

O desafio foi interessante por exigir precisão na implementação do design. Diferente de projetos onde há liberdade criativa, aqui o objetivo era reproduzir exatamente o que foi estipulado no Figma - desde cores, espaçamentos, até comportamentos específicos. 

Grande parte do projeto está exatamente igual ao solicitado, com algumas adaptações necessárias para melhor responsividade e ajustes estruturais que não comprometeram a fidelidade ao design original. Também foram adicionadas algumas animações extras e melhorias na experiência do usuário.

Agradeço pelo desafio! Independente do resultado, é sempre bom se desafiar e aprender mais no processo.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para desenvolvimento web
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Lottie React** - Animações Lottie para loading e elementos visuais
- **Next Image** - Otimização de imagens

## 📋 Funcionalidades

### Tela de Login
- Formulário de autenticação com email e senha
- Validação de credenciais via variáveis de ambiente
- Toggle para mostrar/ocultar senha
- Animação de loading durante o processo de login
- Design responsivo com layout em duas colunas

### Dashboard Principal
- **Menu lateral responsivo** com navegação por seções:
  - Dashboard
  - Eventos (ativo)
  - Equipes
  - Inscrições
- **Área de conteúdo principal** com:
  - Barra de busca para filtrar eventos
  - Tabela de eventos com informações detalhadas
  - Paginação funcional
  - Botão para inserir novos eventos
- **Perfil do usuário** com opções para:
  - Alterar dados
  - Logout do sistema

### Recursos Adicionais
- **Autenticação persistente** via localStorage
- **Design totalmente responsivo** com breakpoints customizados
- **Animações suaves** em transições e interações
- **Menu mobile** com botão toggle para telas menores
- **Loading states** com animações Lottie

## 🎨 Componentes Principais

### [`Card_Login`](desafio/src/components/login/Card_Login.tsx)
Componente principal da tela de login com formulário de autenticação, validação de credenciais e integração com o sistema de navegação.

### [`CardHome`](desafio/src/components/home/Card_home.tsx)
Dashboard principal com menu lateral, tabela de eventos, sistema de busca e todas as funcionalidades de gerenciamento.

### [`Lottie`](desafio/src/components/Lottie.jsx) e [`LottieLoading`](desafio/src/components/Lottieloading.jsx)
Componentes para animações de carregamento e estados de loading.

## 🔧 Configuração e Execução

### Pré-requisitos
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Entre no diretório do projeto
cd desafio

# Instale as dependências
npm install
# ou
yarn install
```

### Configuração do Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as credenciais de login:

```bash
email=seu-email@exemplo.com
senha=sua-senha-aqui
```

### Executando o Projeto

```bash
# Desenvolvimento
npm run dev
# ou
yarn dev

# Build para produção
npm run build
# ou
yarn build

# Executar em produção
npm start
# ou
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📱 Responsividade

O projeto foi desenvolvido com foco em responsividade, incluindo:

- **Desktop**: Layout completo com menu lateral e tabela de eventos
- **Tablet**: Adaptações no layout mantendo funcionalidades principais
- **Mobile**: Menu colapsável e aviso para telas muito pequenas (< 440px)

## 🎭 Design System

### Cores Principais
- **Primary**: `#CC6237` (Laranja)
- **Background**: `#F8F8F8` (Cinza claro)
- **Text**: `#252525` (Preto)
- **Secondary**: `#657593` (Azul acinzentado)

### Tipografia
- **Roboto**: Fonte principal do projeto
- **Poppins**: Utilizada em elementos específicos (tabelas, etc.)

## 📁 Estrutura do Projeto

```
desafio/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   └── page.tsx          # Página do dashboard
│   │   ├── globals.css           # Estilos globais
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página de login
│   └── components/
│       ├── home/
│       │   └── Card_home.tsx    # Componente do dashboard
│       ├── login/
│       │   └── Card_Login.tsx   # Componente de login
│       ├── Lottie.jsx          # Animação principal
│       └── Lottieloading.jsx   # Animação de loading
├── public/                      # Imagens e assets
└── package.json
```

## 🔐 Sistema de Autenticação

O sistema utiliza autenticação simples baseada em:
- Credenciais definidas em variáveis de ambiente
- Armazenamento de estado no localStorage
- Redirecionamento automático baseado no status de login
- Proteção de rotas com verificação de autenticação

---

**Desenvolvido por Rafael para o desafio técnico da Tropa Digital** 🚀