#!/bin/bash

# Função para migrar arquivos
migrate_files() {
    local source_dir="$1"
    local dest_dir="$2"
    local pattern="$3"

    # Criar diretório de destino se não existir
    mkdir -p "$dest_dir"

    # Encontrar e mover arquivos
    find "$source_dir" -type f -name "$pattern" | while read -r file; do
        # Calcular caminho de destino
        relative_path="${file#$source_dir/}"
        dest_path="$dest_dir/$relative_path"
        
        # Criar subdiretórios se necessário
        mkdir -p "$(dirname "$dest_path")"
        
        # Copiar arquivo
        cp "$file" "$dest_path"
        
        echo "Migrado: $file -> $dest_path"
    done
}

# Diretórios de origem e destino
SRC_DIR="src/app"
NEW_SRC_DIR="src"

# Migrar componentes
migrate_files "$SRC_DIR/components" "$NEW_SRC_DIR/components" "*.tsx"
migrate_files "$SRC_DIR/DropDowns" "$NEW_SRC_DIR/features/dropdowns" "*.tsx"
migrate_files "$SRC_DIR/Windows" "$NEW_SRC_DIR/features/windows" "*.tsx"

# Migrar hooks
migrate_files "$SRC_DIR/Hooks" "$NEW_SRC_DIR/hooks" "*.tsx"

# Migrar modelos
migrate_files "$SRC_DIR/models" "$NEW_SRC_DIR/features/models" "*.ts"

# Migrar dados locais
migrate_files "$SRC_DIR/LocalData" "$NEW_SRC_DIR/features/data" "*.ts" "*.tsx"

# Migrar dashboard
migrate_files "$SRC_DIR/dashboard" "$NEW_SRC_DIR/features/dashboard" "*.tsx"

# Migrar APIs
migrate_files "$SRC_DIR/api" "$NEW_SRC_DIR/features/api" "*.ts"

# Migrar tipos
migrate_files "$SRC_DIR/types" "$NEW_SRC_DIR/@types" "*.ts"

# Migrar lib
migrate_files "$SRC_DIR/lib" "$NEW_SRC_DIR/lib" "*.ts"

# Migrar contexto
cp "$SRC_DIR/AppContext.tsx" "$NEW_SRC_DIR/features/context/AppContext.tsx"

# Migrar páginas principais
cp "$SRC_DIR/page.tsx" "$NEW_SRC_DIR/app/page.tsx"
cp "$SRC_DIR/layout.tsx" "$NEW_SRC_DIR/app/layout.tsx"

# Migrar estilos
cp "$SRC_DIR/globals.css" "$NEW_SRC_DIR/styles/globals.css"

echo "Migração concluída!"
