/**
 * Gera um PIN numérico
 */
export function generatePIN(
  length: number,
  avoidSequences: boolean,
  avoidRepeated: boolean
): string {
  const digits = "0123456789";
  let pin = "";

  if (avoidRepeated && length > 10) {
    throw new Error("Com 'Evitar repetições' ativado, o comprimento máximo é 10 dígitos");
  }

  // Gera dígitos únicos se necessário
  const usedDigits = new Set<string>();

  for (let i = 0; i < length; i++) {
    let digit: string;
    
    if (avoidRepeated) {
      const available = digits.split("").filter((d) => !usedDigits.has(d));
      if (available.length === 0) {
        // Se todos os dígitos foram usados, permite repetição
        digit = digits[Math.floor(Math.random() * digits.length)];
      } else {
        digit = available[Math.floor(Math.random() * available.length)];
        usedDigits.add(digit);
      }
    } else {
      digit = digits[Math.floor(Math.random() * digits.length)];
    }

    pin += digit;

    // Verifica sequências se necessário
    if (avoidSequences && pin.length >= 2) {
      const lastDigit = parseInt(pin[pin.length - 1], 10);
      const prevDigit = parseInt(pin[pin.length - 2], 10);
      
      // Verifica sequência crescente (ex: 12, 23, 34)
      if (lastDigit === prevDigit + 1) {
        // Tenta novamente com um dígito diferente
        pin = pin.slice(0, -1);
        i--;
        continue;
      }
      
      // Verifica sequência decrescente (ex: 98, 87, 76)
      if (lastDigit === prevDigit - 1) {
        pin = pin.slice(0, -1);
        i--;
        continue;
      }
    }
  }

  return pin;
}
