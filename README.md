# Gen-SaaS: AI Content Generation Platform

## 🚀 Visão Geral

Gen-SaaS é uma plataforma SaaS de geração de conteúdo alimentada por IA, projetada para ajudar criadores de conteúdo, marketing e desenvolvedores a gerar texto de alta qualidade rapidamente.

## 📋 Índice

- [Recursos](#recursos)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🌟 Recursos

- 🤖 Geração de conteúdo por IA
- 📝 Múltiplos templates de conteúdo
- 🌐 Suporte a internacionalização
- 🔒 Autenticação segura com Clerk
- 💾 Banco de dados MongoDB com Prisma
- 🎨 Interface moderna com Tailwind CSS

## 🛠 Tecnologias

- **Frontend**: Next.js 14, React 18
- **Backend**: Node.js, TypeScript
- **Autenticação**: Clerk
- **Banco de Dados**: MongoDB, Prisma
- **Estilização**: Tailwind CSS
- **Testes**: Jest, React Testing Library
- **Internacionalização**: next-intl

## 🔧 Pré-requisitos

- Node.js 18+
- npm 9+
- MongoDB
- Conta Clerk para autenticação

## 🚧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/gen-saas.git
cd gen-saas
```

2. Instale as dependências
```bash
npm install
```

3. Copie o arquivo de ambiente
```bash
cp .env.example .env
```

4. Preencha as variáveis de ambiente no `.env`

## ⚙️ Configuração

- Configure suas variáveis de ambiente
- Inicialize o banco de dados Prisma
```bash
npx prisma generate
npx prisma migrate dev
```

## 🏃 Executando o Projeto

Desenvolvimento:
```bash
npm run dev
```

Produção:
```bash
npm run build
npm start
```

## 📂 Estrutura do Projeto

```
gen-saas/
├── src/
│   ├── @types/       # Definições de tipos
│   ├── components/   # Componentes React
│   ├── features/     # Módulos de funcionalidades
│   ├── hooks/        # React hooks
│   ├── lib/          # Utilitários
│   └── services/     # Lógica de negócio
├── tests/            # Testes automatizados
└── docs/             # Documentação
```

## 🧪 Testes

Executar testes:
```bash
npm test
npm run test:coverage
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## 📞 Contato

Seu Nome - seu-email@exemplo.com

Link do Projeto: [https://github.com/seu-usuario/gen-saas](https://github.com/seu-usuario/gen-saas)
