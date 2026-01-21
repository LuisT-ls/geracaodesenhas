export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeAmbiguous: boolean;
  avoidRepeated: boolean;
  startWithUppercase: boolean;
  endWithNumber: boolean;
}

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Caracteres ambíguos que podem ser confundidos (0, O, 1, l, I, 5, S, 2, Z)
const AMBIGUOUS_CHARS = "0O1lI5S2Z";

/**
 * Remove caracteres ambíguos de uma string
 */
function removeAmbiguousChars(str: string): string {
  return str
    .split("")
    .filter((char) => !AMBIGUOUS_CHARS.includes(char))
    .join("");
}

/**
 * Gera um caractere aleatório de um conjunto, evitando repetições se necessário
 */
function getRandomChar(
  charset: string,
  usedChars: Set<string>,
  avoidRepeated: boolean
): string {
  const availableChars = avoidRepeated
    ? charset.split("").filter((char) => !usedChars.has(char))
    : charset.split("");

  if (availableChars.length === 0) {
    // Se não houver caracteres disponíveis (todos já usados), reseta o conjunto
    return charset[Math.floor(Math.random() * charset.length)];
  }

  return availableChars[Math.floor(Math.random() * availableChars.length)];
}

/**
 * Gera uma senha aleatória baseada nas opções fornecidas
 */
export function generatePassword(options: PasswordOptions): string {
  const {
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    excludeAmbiguous,
    avoidRepeated,
    startWithUppercase,
    endWithNumber,
  } = options;

  // Validação: pelo menos um tipo de caractere deve estar habilitado
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
    throw new Error("Pelo menos um tipo de caractere deve estar habilitado");
  }

  // Validação: comprimento mínimo
  if (length < 4) {
    throw new Error("O comprimento mínimo da senha é 4 caracteres");
  }

  // Validação: comprimento máximo
  if (length > 128) {
    throw new Error("O comprimento máximo da senha é 128 caracteres");
  }

  // Validação: se startWithUppercase está ativo, deve incluir maiúsculas
  if (startWithUppercase && !includeUppercase) {
    throw new Error("Para iniciar com maiúscula, é necessário incluir letras maiúsculas");
  }

  // Validação: se endWithNumber está ativo, deve incluir números
  if (endWithNumber && !includeNumbers) {
    throw new Error("Para terminar com número, é necessário incluir números");
  }

  // Constrói o conjunto de caracteres disponíveis
  let lowercaseChars = includeLowercase ? LOWERCASE : "";
  let uppercaseChars = includeUppercase ? UPPERCASE : "";
  let numberChars = includeNumbers ? NUMBERS : "";
  let symbolChars = includeSymbols ? SYMBOLS : "";

  // Remove caracteres ambíguos se solicitado
  if (excludeAmbiguous) {
    lowercaseChars = removeAmbiguousChars(lowercaseChars);
    uppercaseChars = removeAmbiguousChars(uppercaseChars);
    numberChars = removeAmbiguousChars(numberChars);
    symbolChars = removeAmbiguousChars(symbolChars);
  }

  // Validação: verifica se ainda há caracteres disponíveis após remover ambíguos
  if (!lowercaseChars && !uppercaseChars && !numberChars && !symbolChars) {
    throw new Error(
      "Não há caracteres disponíveis. Tente desabilitar 'Excluir caracteres ambíguos' ou habilitar mais tipos de caracteres."
    );
  }

  // Validação: verifica se há caracteres suficientes para evitar repetições
  if (avoidRepeated) {
    const totalAvailableChars =
      lowercaseChars.length + uppercaseChars.length + numberChars.length + symbolChars.length;
    if (length > totalAvailableChars) {
      throw new Error(
        `Com 'Evitar caracteres repetidos' ativado, o comprimento máximo é ${totalAvailableChars} caracteres.`
      );
    }
  }

  const usedChars = new Set<string>();
  const passwordChars: string[] = new Array(length);

  // Função auxiliar para obter um caractere de um conjunto específico
  const getCharFromSet = (charSet: string): string => {
    if (!charSet || charSet.length === 0) return "";
    return getRandomChar(charSet, usedChars, avoidRepeated);
  };

  // Define o primeiro caractere (se necessário)
  if (startWithUppercase) {
    const firstChar = getCharFromSet(uppercaseChars);
    if (firstChar) {
      passwordChars[0] = firstChar;
      if (avoidRepeated) usedChars.add(firstChar);
    }
  }

  // Define o último caractere (se necessário)
  if (endWithNumber) {
    const lastChar = getCharFromSet(numberChars);
    if (lastChar) {
      passwordChars[length - 1] = lastChar;
      if (avoidRepeated) usedChars.add(lastChar);
    }
  }

  // Garante que pelo menos um caractere de cada tipo selecionado seja incluído
  const requiredChars: string[] = [];
  const reservedIndices = new Set<number>();
  
  if (startWithUppercase) reservedIndices.add(0);
  if (endWithNumber) reservedIndices.add(length - 1);

  // Adiciona pelo menos um de cada tipo (se ainda não foi adicionado)
  if (includeLowercase) {
    const hasLowercase = passwordChars.some((char, idx) => 
      char && lowercaseChars.includes(char)
    );
    if (!hasLowercase) {
      const char = getCharFromSet(lowercaseChars);
      if (char) requiredChars.push(char);
    }
  }

  if (includeUppercase && !startWithUppercase) {
    const hasUppercase = passwordChars.some((char) => 
      char && uppercaseChars.includes(char)
    );
    if (!hasUppercase) {
      const char = getCharFromSet(uppercaseChars);
      if (char) requiredChars.push(char);
    }
  }

  if (includeNumbers && !endWithNumber) {
    const hasNumber = passwordChars.some((char) => 
      char && numberChars.includes(char)
    );
    if (!hasNumber) {
      const char = getCharFromSet(numberChars);
      if (char) requiredChars.push(char);
    }
  }

  if (includeSymbols) {
    const hasSymbol = passwordChars.some((char) => 
      char && symbolChars.includes(char)
    );
    if (!hasSymbol) {
      const char = getCharFromSet(symbolChars);
      if (char) requiredChars.push(char);
    }
  }

  // Constrói o charset completo
  const fullCharset = lowercaseChars + uppercaseChars + numberChars + symbolChars;

  // Preenche as posições vazias
  let requiredIndex = 0;
  for (let i = 0; i < length; i++) {
    if (!passwordChars[i]) {
      if (requiredIndex < requiredChars.length) {
        passwordChars[i] = requiredChars[requiredIndex++];
        if (avoidRepeated) usedChars.add(passwordChars[i]);
      } else {
        const char = getRandomChar(fullCharset, usedChars, avoidRepeated);
        passwordChars[i] = char;
        if (avoidRepeated) usedChars.add(char);
      }
    }
  }

  // Embaralha a senha, mas preserva primeira e última posição se necessário
  const shuffled = passwordChars.slice();
  
  if (startWithUppercase || endWithNumber) {
    // Remove primeiro e último para embaralhar o resto
    const first = startWithUppercase ? shuffled.shift() : undefined;
    const last = endWithNumber ? shuffled.pop() : undefined;
    
    // Embaralha o meio
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Restaura primeiro e último
    if (first) shuffled.unshift(first);
    if (last) shuffled.push(last);
  } else {
    // Embaralha tudo
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  }

  return shuffled.join("");
}

/**
 * Embaralha os caracteres de uma string
 */
function shuffleString(str: string): string {
  const array = str.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

/**
 * Calcula a força da senha (0-100)
 */
export function calculatePasswordStrength(password: string): number {
  let strength = 0;

  // Comprimento
  if (password.length >= 8) strength += 20;
  if (password.length >= 12) strength += 10;
  if (password.length >= 16) strength += 10;

  // Variedade de caracteres
  if (/[a-z]/.test(password)) strength += 10;
  if (/[A-Z]/.test(password)) strength += 10;
  if (/[0-9]/.test(password)) strength += 10;
  if (/[^a-zA-Z0-9]/.test(password)) strength += 20;

  return Math.min(strength, 100);
}

/**
 * Retorna uma descrição da força da senha
 */
export function getPasswordStrengthLabel(strength: number): {
  label: string;
  color: string;
} {
  if (strength < 30) {
    return { label: "Muito Fraca", color: "text-red-600 dark:text-red-400" };
  }
  if (strength < 50) {
    return { label: "Fraca", color: "text-orange-600 dark:text-orange-400" };
  }
  if (strength < 70) {
    return { label: "Média", color: "text-yellow-600 dark:text-yellow-400" };
  }
  if (strength < 90) {
    return { label: "Forte", color: "text-green-600 dark:text-green-400" };
  }
  return { label: "Muito Forte", color: "text-emerald-600 dark:text-emerald-400" };
}
