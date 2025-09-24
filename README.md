
# pt-BR


Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Inter, uma fonte personalizada do Google.

## Saiba Mais

Para saber mais sobre o Next.js, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - saiba mais sobre os recursos e a API do Next.js.
- [Aprenda o Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir [o repositório do Next.js no GitHub](https://github.com/vercel/next.js/) - seu feedback
e contribuições são bem-vindos!

## Implantar no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

1. Abra o vs code, abra seu terminal e cole este comando para criar um novo projeto:
npx create-next-app@latest
Certifique-se de usar as opções padrão
2. Extraia os arquivos baixados diretamente para a pasta raiz do projeto criado
3. Abra o projeto no vs code, abra seu terminal e digite npm install para instalar as dependências ausentes.
4. Acesse o GitHub e crie um novo repositório com o nome do projeto
5. Após criar seu repositório, copie e cole estes comandos em seu terminal: echo "# habit-test" >> README.md
```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin [link do seu repositório]
git push -u origin main
```
4. Em seguida, criaremos nosso banco de dados no Mongo DB. Então, registre-se e crie um novo projeto,
dê um nome a ele, escolha a camada gratuita e clique em "Criar implantação".
5. Depois, clique em "Criar usuário do banco de dados", depois em "Escolher um método de conexão",
vá para o MongoDB para o VSCode e copie a string assim: mongodb+srv://<nomedeusuário>:<senha>@cluster0.utijbi2.mongodb.net/ e
adicione o nome do banco de dados à variável MONGO_URL.
(Certifique-se de substituir o nome de usuário e a senha que você criou no banco de dados Mongo).
A string completa ficará assim:
```
mongodb+srv://<nomedeusuário>:<senha>@cluster0.utijbi2.mongodb.net/NAME-DATABASE (Isso é apenas para referência, copie a sua, por favor)
```
6. Acesse o Vercel e crie uma nova conta, caso ainda não tenha.
Após conectar-se à sua conta do GitHub, acesse a visão geral, clique no botão "Novo" e selecione o projeto.
Assim, você encontrará o projeto com o nome que você deu a ele, clique em "Importar" e, em seguida, em "Implantar".
7. Após a implantação, pegue o nome de domínio que termina com vercel.app e copie-o.
Não se preocupe, se ainda não estiver funcionando, o motivo é a ausência de variáveis ​​de ambiente.
O que queremos é o nome de domínio para a próxima etapa.
8. Agora, acesse o Clerk, crie uma nova conta novamente e, em seguida, crie um novo aplicativo.
Em seguida, vá para a aba "Webhooks" e clique em "Criar um endpoint".
9. Copie o nome de domínio que você obteve do Vercel após a implantação do aplicativo e, não se esqueça,
http:// primeiro.
10. Acesse a aba "Webhooks" e clique em "Adicionar endpoint".
Depois, adicione a URL do site, no campo endpoint, e nos eventos de inscrição na parte inferior, selecione o usuário.
Depois, clique em criar, copie o segredo de assinatura fornecido e volte ao seu código VS para a variável WEBHOOK_SECRET.
11. No arquivo env.local, copie todas as variáveis. Em seguida, vá para o projeto, depois para a aba de configurações,
vá para a opção Variáveis ​​de Ambiente e, na seção de chaves, cole todas as variáveis.
12. Em seguida, volte para a seção de implantação no Vercel, no primeiro elemento,
clique nos três pontos e, em seguida, clique em reimplantar.
13. E pronto, o aplicativo está funcionando.
Observação: eu já testei isso. Se algo não funcionou
como esperado, revise os passos.


# In-eu

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically
optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback
and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from
creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
