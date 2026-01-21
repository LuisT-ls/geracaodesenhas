/**
 * Gera uma senha WiFi
 */
export function generateWifiPassword(
  length: number,
  memorable: boolean
): string {
  if (memorable) {
    // Senha memorizável: combina palavras e números
    const words = [
      "casa", "gato", "sol", "mar", "lua", "rio", "vida", "amor", "paz", "cor",
      "verde", "azul", "rosa", "ouro", "prata", "fogo", "agua", "terra", "ar", "ceu",
      "estrela", "flor", "arvore", "passaro", "peixe", "cachorro", "gato", "cavalo", "leao", "tigre"
    ];
    
    const word = words[Math.floor(Math.random() * words.length)];
    const number = Math.floor(Math.random() * 10000);
    const special = ["!", "@", "#", "$", "%"][Math.floor(Math.random() * 5)];
    
    // Capitaliza a palavra
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    
    // Combina: palavra + número + símbolo
    let password = capitalizedWord + number + special;
    
    // Se precisar de mais caracteres, adiciona mais palavras/números
    while (password.length < length) {
      const extraWord = words[Math.floor(Math.random() * words.length)];
      const extraNumber = Math.floor(Math.random() * 100);
      password += extraWord.charAt(0).toUpperCase() + extraWord.slice(1) + extraNumber;
    }
    
    return password.substring(0, length);
  } else {
    // Senha aleatória forte
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    
    // Garante pelo menos um de cada tipo
    password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
    password += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
    password += "0123456789"[Math.floor(Math.random() * 10)];
    password += "!@#$%^&*"[Math.floor(Math.random() * 8)];
    
    // Preenche o restante
    for (let i = password.length; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }
    
    // Embaralha
    return password.split("").sort(() => Math.random() - 0.5).join("");
  }
}

/**
 * Gera string WPA para QR Code
 */
export function generateWifiQRString(
  ssid: string,
  password: string,
  security: "WPA" | "WEP" | "nopass" = "WPA"
): string {
  // Formato: WIFI:T:WPA;S:SSID;P:Password;;
  return `WIFI:T:${security};S:${ssid};P:${password};;`;
}
