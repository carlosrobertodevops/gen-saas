#!/bin/bash

# Função para substituir imports
replace_imports() {
    local dir="$1"
    
    # Substituir imports de componentes
    find "$dir" -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 | xargs -0 sed -i '' \
        -e 's|@/app/components/|@/components/|g' \
        -e 's|@/app/DropDowns/|@/features/dropdowns/|g' \
        -e 's|@/app/Windows/|@/features/windows/|g' \
        -e 's|@/app/Hooks/|@/hooks/|g' \
        -e 's|@/app/models/|@/features/models/|g' \
        -e 's|@/app/LocalData/|@/features/data/|g' \
        -e 's|@/app/dashboard/|@/features/dashboard/|g' \
        -e 's|@/app/api/|@/features/api/|g' \
        -e 's|@/app/types/|@/types/|g' \
        -e 's|@/app/lib/|@/lib/|g' \
        -e 's|@/app/AppContext|@/features/context/AppContext|g'
}

# Diretórios para atualizar imports
DIRS=("src")

# Iterar sobre os diretórios
for dir in "${DIRS[@]}"; do
    echo "Atualizando imports em $dir..."
    replace_imports "$dir"
done

echo "Atualização de imports concluída!"
