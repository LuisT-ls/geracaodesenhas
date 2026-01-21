export type GlossaryCategory = "conceitos-basicos" | "tipos-ameacas" | "protecao-prevencao" | "termos-tecnicos";

export interface GlossaryTerm {
  term: string;
  category: GlossaryCategory;
  definition: string;
  examples?: string[];
  relatedTerms?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // Conceitos Básicos
  {
    term: "Senha",
    category: "conceitos-basicos",
    definition: "Uma sequência secreta de caracteres usada para autenticação e acesso a sistemas, contas ou recursos protegidos.",
    examples: ["Senha de email", "Senha de banco", "Senha de WiFi"],
    relatedTerms: ["Autenticação", "Credenciais", "Passphrase"]
  },
  {
    term: "Autenticação",
    category: "conceitos-basicos",
    definition: "Processo de verificação da identidade de um usuário, sistema ou dispositivo antes de conceder acesso a recursos protegidos.",
    examples: ["Login com senha", "Autenticação de dois fatores", "Biometria"],
    relatedTerms: ["Autorização", "Credenciais", "2FA"]
  },
  {
    term: "Autorização",
    category: "conceitos-basicos",
    definition: "Processo de determinar quais recursos ou ações um usuário autenticado tem permissão para acessar ou executar.",
    relatedTerms: ["Autenticação", "Permissões", "Controle de Acesso"]
  },
  {
    term: "Credenciais",
    category: "conceitos-basicos",
    definition: "Informações usadas para verificar a identidade de um usuário, geralmente consistindo em um nome de usuário e senha.",
    relatedTerms: ["Autenticação", "Senha", "Login"]
  },
  {
    term: "Criptografia",
    category: "conceitos-basicos",
    definition: "Processo de converter informações legíveis (texto simples) em formato codificado (texto cifrado) para proteger dados contra acesso não autorizado.",
    examples: ["HTTPS", "Criptografia de disco", "Mensagens criptografadas"],
    relatedTerms: ["Descriptografia", "Chave", "Hash"]
  },
  {
    term: "Hash",
    category: "conceitos-basicos",
    definition: "Função matemática que converte dados de qualquer tamanho em uma string de tamanho fixo. Usado para verificar integridade e armazenar senhas com segurança.",
    examples: ["SHA-256", "MD5", "bcrypt"],
    relatedTerms: ["Criptografia", "Salt", "Senha"]
  },
  {
    term: "Salt",
    category: "conceitos-basicos",
    definition: "Dados aleatórios adicionados a uma senha antes de criar o hash, tornando ataques de força bruta muito mais difíceis.",
    relatedTerms: ["Hash", "Senha", "Criptografia"]
  },
  {
    term: "Entropia",
    category: "conceitos-basicos",
    definition: "Medida da imprevisibilidade ou aleatoriedade de uma senha. Quanto maior a entropia, mais difícil é adivinhar a senha.",
    relatedTerms: ["Senha", "Segurança", "Força da Senha"]
  },
  {
    term: "Passphrase",
    category: "conceitos-basicos",
    definition: "Uma sequência de palavras usada como senha, geralmente mais longa e mais fácil de lembrar do que senhas tradicionais, mas ainda segura.",
    examples: ["casa-azul-sol-mar", "gato-verde-123"],
    relatedTerms: ["Senha", "Entropia", "Segurança"]
  },
  {
    term: "2FA / Autenticação de Dois Fatores",
    category: "conceitos-basicos",
    definition: "Método de segurança que requer duas formas diferentes de verificação de identidade antes de conceder acesso (ex: senha + código SMS).",
    examples: ["Senha + código SMS", "Senha + aplicativo autenticador", "Senha + biometria"],
    relatedTerms: ["Autenticação", "MFA", "Segurança"]
  },
  {
    term: "MFA / Autenticação Multifator",
    category: "conceitos-basicos",
    definition: "Método de segurança que requer múltiplas formas de verificação de identidade (dois ou mais fatores).",
    relatedTerms: ["2FA", "Autenticação", "Segurança"]
  },

  // Tipos de Ameaças
  {
    term: "Malware",
    category: "tipos-ameacas",
    definition: "Software malicioso projetado para danificar, interromper ou obter acesso não autorizado a sistemas de computador.",
    examples: ["Vírus", "Trojan", "Ransomware", "Spyware"],
    relatedTerms: ["Vírus", "Trojan", "Ransomware", "Spyware"]
  },
  {
    term: "Vírus",
    category: "tipos-ameacas",
    definition: "Tipo de malware que se replica inserindo seu código em outros programas e arquivos, causando danos ao sistema.",
    relatedTerms: ["Malware", "Antivírus", "Segurança"]
  },
  {
    term: "Trojan / Cavalo de Troia",
    category: "tipos-ameacas",
    definition: "Tipo de malware que se disfarça como software legítimo para enganar usuários e obter acesso não autorizado ao sistema.",
    relatedTerms: ["Malware", "Phishing", "Engenharia Social"]
  },
  {
    term: "Ransomware",
    category: "tipos-ameacas",
    definition: "Tipo de malware que criptografa os arquivos da vítima e exige pagamento (resgate) para restaurar o acesso aos dados.",
    examples: ["WannaCry", "Locky", "Ryuk"],
    relatedTerms: ["Malware", "Criptografia", "Backup"]
  },
  {
    term: "Spyware",
    category: "tipos-ameacas",
    definition: "Software malicioso que coleta informações sobre um usuário ou organização sem seu conhecimento, geralmente para fins de espionagem.",
    relatedTerms: ["Malware", "Privacidade", "Keylogger"]
  },
  {
    term: "Keylogger",
    category: "tipos-ameacas",
    definition: "Software ou hardware que registra as teclas pressionadas em um teclado, frequentemente usado para roubar senhas e informações confidenciais.",
    relatedTerms: ["Spyware", "Malware", "Senha"]
  },
  {
    term: "Phishing",
    category: "tipos-ameacas",
    definition: "Técnica de engenharia social que usa emails, mensagens ou sites falsos para enganar usuários e roubar credenciais ou informações pessoais.",
    examples: ["Email falso de banco", "Site falso de login", "Mensagem de WhatsApp suspeita"],
    relatedTerms: ["Engenharia Social", "Credenciais", "Segurança"]
  },
  {
    term: "Engenharia Social",
    category: "tipos-ameacas",
    definition: "Técnicas psicológicas usadas para manipular pessoas e fazê-las revelar informações confidenciais ou realizar ações que comprometem a segurança.",
    examples: ["Phishing", "Pretexting", "Baiting"],
    relatedTerms: ["Phishing", "Segurança", "Conscientização"]
  },
  {
    term: "Ataque de Força Bruta",
    category: "tipos-ameacas",
    definition: "Método de ataque que tenta descobrir uma senha testando sistematicamente todas as combinações possíveis até encontrar a correta.",
    relatedTerms: ["Senha", "Segurança", "Rate Limiting"]
  },
  {
    term: "Ataque de Dicionário",
    category: "tipos-ameacas",
    definition: "Tipo de ataque de força bruta que usa uma lista pré-compilada de palavras comuns e senhas frequentes para tentar acessar contas.",
    relatedTerms: ["Força Bruta", "Senha", "Segurança"]
  },
  {
    term: "SQL Injection",
    category: "tipos-ameacas",
    definition: "Técnica de ataque que insere código SQL malicioso em campos de entrada de aplicações web para acessar ou manipular bancos de dados.",
    relatedTerms: ["Segurança Web", "Vulnerabilidade", "OWASP"]
  },
  {
    term: "XSS / Cross-Site Scripting",
    category: "tipos-ameacas",
    definition: "Vulnerabilidade de segurança que permite a injeção de scripts maliciosos em páginas web visualizadas por outros usuários.",
    relatedTerms: ["Segurança Web", "Vulnerabilidade", "OWASP"]
  },
  {
    term: "CSRF / Cross-Site Request Forgery",
    category: "tipos-ameacas",
    definition: "Ataque que força usuários autenticados a executar ações indesejadas em aplicações web nas quais estão autenticados.",
    relatedTerms: ["Segurança Web", "Vulnerabilidade", "OWASP"]
  },
  {
    term: "Man-in-the-Middle (MITM)",
    category: "tipos-ameacas",
    definition: "Ataque onde um atacante intercepta e possivelmente altera a comunicação entre duas partes sem que elas saibam.",
    examples: ["WiFi público comprometido", "Interceptação de HTTPS"],
    relatedTerms: ["Criptografia", "HTTPS", "VPN"]
  },
  {
    term: "DDoS / Ataque de Negação de Serviço Distribuído",
    category: "tipos-ameacas",
    definition: "Ataque que sobrecarrega um servidor, serviço ou rede com tráfego excessivo, tornando-o indisponível para usuários legítimos.",
    relatedTerms: ["Segurança", "Rede", "Servidor"]
  },

  // Proteção e Prevenção
  {
    term: "Antivírus",
    category: "protecao-prevencao",
    definition: "Software projetado para detectar, prevenir e remover malware, incluindo vírus, trojans, spyware e outros programas maliciosos.",
    relatedTerms: ["Malware", "Segurança", "Firewall"]
  },
  {
    term: "Firewall",
    category: "protecao-prevencao",
    definition: "Sistema de segurança de rede que monitora e controla o tráfego de rede de entrada e saída com base em regras de segurança predefinidas.",
    relatedTerms: ["Rede", "Segurança", "Filtro"]
  },
  {
    term: "VPN / Rede Privada Virtual",
    category: "protecao-prevencao",
    definition: "Tecnologia que cria uma conexão segura e criptografada sobre uma rede pública, protegendo a privacidade e segurança dos dados.",
    examples: ["VPN corporativa", "VPN pessoal", "Túnel criptografado"],
    relatedTerms: ["Criptografia", "Privacidade", "Segurança"]
  },
  {
    term: "Backup",
    category: "protecao-prevencao",
    definition: "Cópia de segurança de dados importantes armazenada em local separado, permitindo recuperação em caso de perda, corrupção ou ataque.",
    examples: ["Backup em nuvem", "Backup local", "Backup incremental"],
    relatedTerms: ["Ransomware", "Recuperação", "Segurança"]
  },
  {
    term: "Atualização de Segurança / Patch",
    category: "protecao-prevencao",
    definition: "Correção de software que resolve vulnerabilidades de segurança conhecidas. Manter sistemas atualizados é crucial para segurança.",
    relatedTerms: ["Vulnerabilidade", "Segurança", "Manutenção"]
  },
  {
    term: "Gerenciador de Senhas",
    category: "protecao-prevencao",
    definition: "Aplicativo que armazena e gerencia senhas de forma segura, permitindo usar senhas únicas e fortes para cada conta sem precisar memorizá-las.",
    examples: ["LastPass", "1Password", "Bitwarden", "KeePass"],
    relatedTerms: ["Senha", "Segurança", "Credenciais"]
  },
  {
    term: "Rate Limiting",
    category: "protecao-prevencao",
    definition: "Técnica de segurança que limita o número de tentativas de acesso ou requisições que podem ser feitas em um período de tempo, prevenindo ataques de força bruta.",
    relatedTerms: ["Força Bruta", "Segurança", "Ataque"]
  },
  {
    term: "HTTPS",
    category: "protecao-prevencao",
    definition: "Protocolo de comunicação seguro que usa criptografia SSL/TLS para proteger dados transmitidos entre navegador e servidor web.",
    relatedTerms: ["Criptografia", "SSL", "TLS", "Segurança Web"]
  },
  {
    term: "SSL / Secure Sockets Layer",
    category: "protecao-prevencao",
    definition: "Protocolo de criptografia que fornece comunicação segura entre cliente e servidor. Predecessor do TLS.",
    relatedTerms: ["TLS", "HTTPS", "Criptografia"]
  },
  {
    term: "TLS / Transport Layer Security",
    category: "protecao-prevencao",
    definition: "Protocolo de criptografia que sucede o SSL, fornecendo comunicação segura e privada entre aplicações na internet.",
    relatedTerms: ["SSL", "HTTPS", "Criptografia"]
  },
  {
    term: "Zero Trust",
    category: "protecao-prevencao",
    definition: "Modelo de segurança que assume que nenhum usuário ou dispositivo deve ser confiado por padrão, exigindo verificação contínua.",
    relatedTerms: ["Segurança", "Autenticação", "Autorização"]
  },
  {
    term: "Conscientização em Segurança",
    category: "protecao-prevencao",
    definition: "Processo de educar usuários sobre ameaças de segurança, práticas seguras e como identificar e evitar ataques.",
    relatedTerms: ["Engenharia Social", "Phishing", "Treinamento"]
  },

  // Termos Técnicos
  {
    term: "OWASP",
    category: "termos-tecnicos",
    definition: "Open Web Application Security Project - Organização sem fins lucrativos focada em melhorar a segurança de software, conhecida por sua lista Top 10 de vulnerabilidades web.",
    relatedTerms: ["Vulnerabilidade", "Segurança Web", "SQL Injection"]
  },
  {
    term: "Penetration Testing / Pen Test",
    category: "termos-tecnicos",
    definition: "Teste de segurança autorizado que simula ataques reais para identificar vulnerabilidades em sistemas, redes ou aplicações.",
    relatedTerms: ["Segurança", "Vulnerabilidade", "Auditoria"]
  },
  {
    term: "Vulnerabilidade",
    category: "termos-tecnicos",
    definition: "Fraqueza ou falha em um sistema, software ou processo que pode ser explorada por atacantes para comprometer a segurança.",
    examples: ["SQL Injection", "XSS", "Buffer Overflow"],
    relatedTerms: ["Exploit", "Patch", "Segurança"]
  },
  {
    term: "Exploit",
    category: "termos-tecnicos",
    definition: "Código ou técnica que aproveita uma vulnerabilidade em software ou hardware para obter acesso não autorizado ou causar comportamento indesejado.",
    relatedTerms: ["Vulnerabilidade", "Ataque", "Segurança"]
  },
  {
    term: "CVE / Common Vulnerabilities and Exposures",
    category: "termos-tecnicos",
    definition: "Sistema de identificação padronizado para vulnerabilidades de segurança conhecidas, fornecendo um identificador único para cada vulnerabilidade.",
    relatedTerms: ["Vulnerabilidade", "Segurança", "Patch"]
  },
  {
    term: "Bug Bounty",
    category: "termos-tecnicos",
    definition: "Programa de recompensas oferecido por organizações para pesquisadores de segurança que descobrem e reportam vulnerabilidades de forma responsável.",
    relatedTerms: ["Vulnerabilidade", "Segurança", "Penetration Testing"]
  },
  {
    term: "Token",
    category: "termos-tecnicos",
    definition: "String de caracteres usada como credencial temporária para autenticação e autorização, geralmente com tempo de expiração.",
    examples: ["JWT", "OAuth token", "Session token"],
    relatedTerms: ["Autenticação", "JWT", "OAuth"]
  },
  {
    term: "JWT / JSON Web Token",
    category: "termos-tecnicos",
    definition: "Padrão aberto para transmitir informações de forma segura entre partes como um objeto JSON, usado para autenticação e autorização.",
    relatedTerms: ["Token", "Autenticação", "API"]
  },
  {
    term: "OAuth",
    category: "termos-tecnicos",
    definition: "Padrão de autorização que permite aplicações obter acesso limitado a contas de usuários em serviços terceiros sem expor senhas.",
    examples: ["Login com Google", "Login com Facebook", "Login com GitHub"],
    relatedTerms: ["Autenticação", "Token", "API"]
  },
  {
    term: "API / Application Programming Interface",
    category: "termos-tecnicos",
    definition: "Conjunto de protocolos e ferramentas para construir aplicações de software, definindo como componentes devem interagir.",
    relatedTerms: ["REST", "OAuth", "Token"]
  },
  {
    term: "REST / Representational State Transfer",
    category: "termos-tecnicos",
    definition: "Arquitetura de software para sistemas distribuídos, comumente usada no desenvolvimento de APIs web.",
    relatedTerms: ["API", "HTTP", "Web Service"]
  },
  {
    term: "End-to-End Encryption (E2EE)",
    category: "termos-tecnicos",
    definition: "Método de comunicação onde apenas os usuários finais podem ler as mensagens, impedindo que provedores de serviços ou terceiros acessem os dados.",
    examples: ["WhatsApp", "Signal", "Telegram (modo secreto)"],
    relatedTerms: ["Criptografia", "Privacidade", "Segurança"]
  },
  {
    term: "Public Key Infrastructure (PKI)",
    category: "termos-tecnicos",
    definition: "Sistema de gerenciamento de chaves criptográficas que usa pares de chaves públicas e privadas para autenticação e criptografia.",
    relatedTerms: ["Criptografia", "Certificado", "SSL/TLS"]
  },
  {
    term: "Certificado Digital",
    category: "termos-tecnicos",
    definition: "Arquivo eletrônico que vincula uma chave pública a uma identidade, usado para verificar a autenticidade e estabelecer comunicação segura.",
    relatedTerms: ["PKI", "SSL", "TLS", "HTTPS"]
  },
  {
    term: "Sandbox",
    category: "termos-tecnicos",
    definition: "Ambiente isolado e restrito onde código não confiável pode ser executado com segurança, limitando o acesso a recursos do sistema.",
    relatedTerms: ["Segurança", "Isolamento", "Virtualização"]
  },
  {
    term: "Whitelist / Lista Branca",
    category: "termos-tecnicos",
    definition: "Lista de entidades (usuários, aplicações, IPs) que têm permissão explícita para acessar um recurso ou sistema.",
    relatedTerms: ["Blacklist", "Controle de Acesso", "Segurança"]
  },
  {
    term: "Blacklist / Lista Negra",
    category: "termos-tecnicos",
    definition: "Lista de entidades (usuários, aplicações, IPs) que são explicitamente bloqueadas ou negadas acesso a um recurso ou sistema.",
    relatedTerms: ["Whitelist", "Controle de Acesso", "Segurança"]
  },
  {
    term: "Honeypot",
    category: "termos-tecnicos",
    definition: "Sistema de segurança projetado para detectar, desviar ou estudar tentativas de acesso não autorizado, simulando um sistema vulnerável.",
    relatedTerms: ["Segurança", "Detecção", "Ataque"]
  },
  {
    term: "SOC / Security Operations Center",
    category: "termos-tecnicos",
    definition: "Centro de operações de segurança que monitora, analisa e responde a ameaças de segurança cibernética em tempo real.",
    relatedTerms: ["Segurança", "Monitoramento", "SIEM"]
  },
  {
    term: "SIEM / Security Information and Event Management",
    category: "termos-tecnicos",
    definition: "Solução de segurança que coleta, analisa e correlaciona dados de segurança de múltiplas fontes para detectar e responder a ameaças.",
    relatedTerms: ["SOC", "Segurança", "Monitoramento"]
  },
  {
    term: "Zero-Day",
    category: "termos-tecnicos",
    definition: "Vulnerabilidade de segurança desconhecida pelo desenvolvedor ou fornecedor, que pode ser explorada antes que um patch seja disponibilizado.",
    relatedTerms: ["Vulnerabilidade", "Exploit", "Segurança"]
  },
  {
    term: "Botnet",
    category: "termos-tecnicos",
    definition: "Rede de computadores infectados com malware que são controlados remotamente por um atacante, frequentemente usada para ataques DDoS ou spam.",
    relatedTerms: ["Malware", "DDoS", "Zombie"]
  },
  {
    term: "Rootkit",
    category: "termos-tecnicos",
    definition: "Coleção de software malicioso projetado para obter acesso privilegiado a um sistema e ocultar sua presença do usuário e do sistema operacional.",
    relatedTerms: ["Malware", "Privilégios", "Segurança"]
  },
  {
    term: "Adware",
    category: "termos-tecnicos",
    definition: "Software que exibe anúncios indesejados, frequentemente instalado sem consentimento do usuário e pode coletar dados de navegação.",
    relatedTerms: ["Malware", "Spyware", "Privacidade"]
  },
  {
    term: "Worm",
    category: "termos-tecnicos",
    definition: "Tipo de malware que se replica automaticamente e se espalha para outros computadores através de redes, sem necessidade de intervenção humana.",
    relatedTerms: ["Malware", "Vírus", "Rede"]
  },
  {
    term: "Trojan Horse",
    category: "termos-tecnicos",
    definition: "Malware que se disfarça como software legítimo para enganar usuários e obter acesso não autorizado ao sistema.",
    relatedTerms: ["Malware", "Engenharia Social", "Phishing"]
  },
  {
    term: "Backdoor",
    category: "termos-tecnicos",
    definition: "Método secreto de contornar autenticação ou segurança normal para obter acesso não autorizado a um sistema ou aplicação.",
    relatedTerms: ["Malware", "Acesso", "Segurança"]
  },
  {
    term: "RAT / Remote Access Trojan",
    category: "termos-tecnicos",
    definition: "Tipo de malware que permite controle remoto completo de um computador infectado, dando ao atacante acesso total ao sistema.",
    relatedTerms: ["Trojan", "Malware", "Backdoor"]
  }
];

export const categoryLabels = {
  "conceitos-basicos": "Conceitos Básicos",
  "tipos-ameacas": "Tipos de Ameaças",
  "protecao-prevencao": "Proteção e Prevenção",
  "termos-tecnicos": "Termos Técnicos"
};
