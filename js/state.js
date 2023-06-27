let tabuleiro = ['p', 'p', 'p', null, 'b', 'b', 'b'];

export function getTabuleiro(){
    return structuredClone(tabuleiro);
}

export function mover(de, para){
    if(Math.abs(para - de) >= 3 || tabuleiro[para]!== null){
        return false;
    }   
    else{
        tabuleiro[para] = tabuleiro[de]
        tabuleiro[de] = null;
        return true;
    }
}