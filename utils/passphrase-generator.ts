// Lista de palavras comuns em português para passphrase
const WORDS = [
  "casa", "gato", "sol", "mar", "lua", "rio", "vida", "amor", "paz", "cor",
  "verde", "azul", "rosa", "ouro", "prata", "fogo", "agua", "terra", "ar", "ceu",
  "estrela", "flor", "arvore", "passaro", "peixe", "cachorro", "cavalo", "leao", "tigre", "urso",
  "livro", "musica", "arte", "sonho", "esperanca", "forca", "coragem", "sabedoria", "felicidade", "liberdade",
  "montanha", "oceano", "floresta", "deserto", "neve", "chuva", "vento", "tempestade", "arcoiris", "aurora",
  "cafe", "chocolate", "pao", "fruta", "mel", "sal", "acucar", "leite", "queijo", "ovo",
  "carro", "bicicleta", "aviao", "barco", "trem", "onibus", "moto", "navio", "helicoptero", "foguete",
  "computador", "telefone", "tablet", "camera", "radio", "televisao", "relogio", "oculos", "chave", "porta",
  "janela", "parede", "teto", "chao", "mesa", "cadeira", "cama", "sofa", "armario", "gaveta"
];

export type Separator = "hifen" | "ponto" | "sublinhado" | "espaco" | "sem";

const SEPARATORS: Record<Separator, string> = {
  hifen: "-",
  ponto: ".",
  sublinhado: "_",
  espaco: " ",
  sem: "",
};

/**
 * Gera uma passphrase
 */
export function generatePassphrase(
  wordCount: number,
  separator: Separator,
  capitalize: boolean,
  addNumbers: boolean
): string {
  const words: string[] = [];
  
  for (let i = 0; i < wordCount; i++) {
    let word = WORDS[Math.floor(Math.random() * WORDS.length)];
    
    // Evita repetir palavras consecutivas
    if (words.length > 0 && words[words.length - 1] === word) {
      i--;
      continue;
    }
    
    if (capitalize) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    words.push(word);
  }
  
  // Adiciona números se solicitado
  if (addNumbers) {
    const numberPosition = Math.floor(Math.random() * words.length);
    const number = Math.floor(Math.random() * 1000);
    words.splice(numberPosition, 0, number.toString());
  }
  
  const sep = SEPARATORS[separator];
  return words.join(sep);
}
