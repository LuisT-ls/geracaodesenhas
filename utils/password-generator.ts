export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

/**
 * Gera uma senha aleatória baseada nas opções fornecidas
 */
export function generatePassword(options: PasswordOptions): string {
  const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;

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

  // Constrói o conjunto de caracteres disponíveis
  let charset = "";
  if (includeLowercase) charset += LOWERCASE;
  if (includeUppercase) charset += UPPERCASE;
  if (includeNumbers) charset += NUMBERS;
  if (includeSymbols) charset += SYMBOLS;

  // Garante que pelo menos um caractere de cada tipo selecionado seja incluído
  let password = "";
  const selectedTypes: string[] = [];
  
  if (includeLowercase) {
    password += LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)];
    selectedTypes.push("lowercase");
  }
  if (includeUppercase) {
    password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
    selectedTypes.push("uppercase");
  }
  if (includeNumbers) {
    password += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
    selectedTypes.push("numbers");
  }
  if (includeSymbols) {
    password += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    selectedTypes.push("symbols");
  }

  // Preenche o restante da senha com caracteres aleatórios
  const remainingLength = length - password.length;
  for (let i = 0; i < remainingLength; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  // Embaralha a senha para evitar padrões previsíveis
  return shuffleString(password);
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
