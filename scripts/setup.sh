#!/bin/bash

# Script de configuração inicial do projeto Gen-SaaS

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "Node.js não encontrado. Por favor, instale o Node.js 18+ primeiro."
    exit 1
fi

# Verificar versão do Node.js
NODE_VERSION=$(node -v)
REQUIRED_VERSION="v18.0.0"
if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo "Versão do Node.js incompatível. Necessário Node.js 18+."
    exit 1
fi

# Instalar dependências
echo "Instalando dependências..."
npm install

# Configurar ambiente de desenvolvimento
echo "Copiando arquivo de ambiente..."
cp .env.example .env

# Gerar cliente Prisma
echo "Gerando cliente Prisma..."
npx prisma generate

# Executar migrações de banco de dados
echo "Executando migrações de banco de dados..."
npx prisma migrate dev

# Instalar husky hooks
echo "Configurando Git hooks..."
npm run prepare

# Executar testes
echo "Executando testes..."
npm test

# Iniciar servidor de desenvolvimento
echo "Iniciando servidor de desenvolvimento..."
npm run dev
