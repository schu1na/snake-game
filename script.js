const linhas = 10;
const colunas = 10;
const direcao_inicial = "right";

function criar_matriz(colunas, linhas){
    return Array.from({ length: colunas }, () => Array(linhas).fill(0));
}

function criar_cobra(linhas, direcao_inicial){
    let cobra = {
        body: [{x: 3, y: linhas/2}, {x:2, y:linhas/2}, {x:1, y:linhas/2}, {x:0, y:linhas/2}],
        direcao: direcao_inicial 
    }
    return cobra
}

function atualizar_posicao_cobra(cobra){
    tamanho_cobra = cobra.body.length
    for(let i = tamanho_cobra-1; i >= 0; i--){
        if(i === 0){
            switch(cobra.direcao) {
                case "up":
                    cobra.body[i].y--;
                    break;
                case "down":
                    cobra.body[i].y++;
                    break;
                case "left":
                    cobra.body[i].x--;
                    break;
                case "right":
                    cobra.body[i].x++;
                    break;
            }
        } 
        else{
            cobra.body[i].x = cobra.body[i-1].x;
            cobra.body[i].y = cobra.body[i-1].y;
        }
    }
}

function atualizar_campo_cobra(campo, corpo_cobra){
    tamanho_cobra = cobra.body.length
    for(let i=0; i<tamanho_cobra - 1; i++){
        campo[corpo_cobra[i].y][corpo_cobra[i].x] = "x";
    }
    campo[corpo_cobra[tamanho_cobra - 1].y][corpo_cobra[tamanho_cobra - 1].x] = 0;
}

function imprimir_campo(campo){
    let campo_formatado = campo.map(linha => linha.join(' ')).join('\n');
    console.log(campo_formatado);
}

let campo = criar_matriz(linhas, colunas);
let cobra = criar_cobra(linhas, direcao_inicial);
