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

# Instalar dependências de desenvolvimento adicionais
echo "Instalando dependências de desenvolvimento..."
npm install -D @testing-library/jest-dom

# Configurar next-intl para App Router
echo "Configurando next-intl..."
mkdir -p src/i18n
cat > src/i18n/request.ts << EOL
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en-US', 'pt-BR'] as const;
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({locales});
EOL

# Atualizar next.config.js para remover i18n e usar next-intl
cat > next.config.js << EOL
const createNextIntlPlugin = require('next-intl/plugin');

module.exports = createNextIntlPlugin()({
  reactStrictMode: true,
});
EOL

# Configurar arquivo de ambiente
echo "Copiando arquivo de ambiente..."
cp .env.example .env

# Gerar cliente Prisma
echo "Gerando cliente Prisma..."
npx prisma generate

# Configurar Husky (se necessário)
echo "Configurando Git hooks..."
npm pkg set scripts.prepare="husky install"
npm run prepare

# Executar testes
echo "Executando testes..."
npm test

# Iniciar servidor de desenvolvimento
echo "Iniciando servidor de desenvolvimento..."
npm run dev
