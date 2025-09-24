#!/bin/bash

# Diretórios de origem dos componentes
COMPONENT_SOURCES=(
    "src/app/dashboard/SideBar/Components"
    "src/app/dashboard/SideBar"
    "src/app/dashboard/ContentGenerator/LeftSection/OtherComponents"
    "src/app/components"
    "src/app/DropDowns"
    "src/app/Windows"
)

# Diretório de destino
DEST_DIR="src/components"

# Função para mover componentes
move_components() {
    local source_dir="$1"
    
    # Verificar se o diretório de origem existe
    if [ ! -d "$source_dir" ]; then
        echo "Diretório não encontrado: $source_dir"
        return
    fi

    # Criar subdiretórios no destino baseados no nome da fonte
    source_name=$(basename "$source_dir")
    target_subdir="$DEST_DIR/$source_name"
    mkdir -p "$target_subdir"

    # Mover arquivos .tsx
    find "$source_dir" -maxdepth 1 -type f -name "*.tsx" | while read -r file; do
        filename=$(basename "$file")
        
        # Verificar se o arquivo já existe no destino
        if [ -f "$target_subdir/$filename" ]; then
            echo "Conflito: $filename já existe em $target_subdir. Pulando."
        else
            mv "$file" "$target_subdir/"
            echo "Movido: $file -> $target_subdir/$filename"
        fi
    done

    # Recursivamente mover componentes de subdiretórios
    find "$source_dir" -type d | while read -r subdir; do
        if [ "$subdir" != "$source_dir" ]; then
            subdir_name=$(basename "$subdir")
            
            # Ignorar diretórios específicos
            if [[ "$subdir_name" != "node_modules" && "$subdir_name" != ".next" ]]; then
                find "$subdir" -maxdepth 1 -type f -name "*.tsx" | while read -r file; do
                    filename=$(basename "$file")
                    target_path="$target_subdir/$subdir_name-$filename"
                    
                    # Verificar se o arquivo já existe no destino
                    if [ -f "$target_path" ]; then
                        echo "Conflito: $target_path já existe. Pulando."
                    else
                        mv "$file" "$target_path"
                        echo "Movido: $file -> $target_path"
                    fi
                done
            fi
        fi
    done
}

# Criar diretório de destino
mkdir -p "$DEST_DIR"

# Iterar sobre os diretórios de origem
for source in "${COMPONENT_SOURCES[@]}"; do
    echo "Processando componentes de $source..."
    move_components "$source"
done

# Limpar diretórios vazios
find src -type d -empty -delete

echo "Consolidação de componentes concluída!"

# Atualizar imports
find src -type f \( -name "*.ts" -o -name "*.tsx" \) -print0 | xargs -0 sed -i '' \
    -e 's|@/app/dashboard/SideBar/Components/|@/components/Components/|g' \
    -e 's|@/app/dashboard/SideBar/|@/components/SideBar/|g' \
    -e 's|@/app/ContentGenerator/LeftSection/OtherComponents/|@/components/OtherComponents/|g' \
    -e 's|@/app/components/|@/components/|g' \
    -e 's|@/app/DropDowns/|@/components/DropDowns/|g' \
    -e 's|@/app/Windows/|@/components/Windows/|g'

echo "Imports atualizados!"
