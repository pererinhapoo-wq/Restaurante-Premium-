import { Specialty, Doctor, Environment, Article } from './types';
import heroImg from './assets/images/vitrae_hero_architecture_1790827939043.jpg';
import consultorioImg from './assets/images/vitrae_ambience_consultorio_1790827951139.jpg';
import loungeImg from './assets/images/vitrae_ambience_lounge_1790827963789.jpg';
import wellnessImg from './assets/images/vitrae_wellness_rehab_1790827972018.jpg';

// Curated image assets generated for VITRAE
export const clinicImages = {
  hero: heroImg,
  consultorio: consultorioImg,
  lounge: loungeImg,
  wellness: wellnessImg,
};

export const specialtiesData: Specialty[] = [
  {
    id: 'clinica-medica',
    name: 'Clínica Médica',
    subtitle: 'Visão sistêmica, escuta profunda e coordenação terapêutica',
    description: 'O ponto de convergência de toda a sua saúde. Nossas consultas de clínica médica duram em média 90 minutos para analisar seu organismo de maneira sistêmica, avaliando exames laboratoriais detalhados, histórico familiar e interações metabólicas.',
    badge: 'Núcleo Central',
    focusAreas: [
      'Investigação de fadiga crônica e imunidade',
      'Regulação metabólica e hormonal preventiva',
      'Mapeamento cardiovascular e inflamatório',
      'Planejamento de longevidade saudável'
    ],
    protocols: [
      'Anamnese Integrada de 90 Minutos',
      'Painel Laboratorial Ampliado de 48 Biomarcadores',
      'Conciliação Medicamentosa e Desprescrição Consciente'
    ],
    diagnosticTech: [
      'Bioimpedância Segmentar de Alta Resolução',
      'Monitoramento Contínuo de Glicemia',
      'Eletrocardiografia Digital em Repouso'
    ],
    leadDoctor: 'Dra. Helena Martins',
    doctorRole: 'Coordenadora Clínica & Especialista em Medicina Interna',
    accentColor: '#1D3B39'
  },
  {
    id: 'dermatologia',
    name: 'Dermatologia',
    subtitle: 'Saúde cutânea integral, estética natural e regeneração celular',
    description: 'Entendemos a pele como o maior espelho da fisiologia interna e do bem-estar emocional. Atuamos com dermatologia clínica, rastreio rigoroso de lesões por dermatoscopia digital e procedimentos estéticos preservando a autenticidade e a harmonia de cada traço.',
    badge: 'Saúde Cutânea',
    focusAreas: [
      'Dermatologia clínica, acne adulta e rosácea',
      'Mapeamento corporal digital de nevos e pintas',
      'Bioestimuladores de colágeno e regeneração tecidual',
      'Tricologia e recuperação da densidade capilar'
    ],
    protocols: [
      'Mapeamento Digital Dermatoscópico',
      'Protocolo Cutâneo de Barreira e Microbioma',
      'Harmonização Sutil sem Perda de Identidade'
    ],
    diagnosticTech: [
      'Dermatoscópio Digital Polarizado com IA de Apoio',
      'Câmera Multiespectral Facial Reveal',
      'Laser Fracionado Não-Ablativo de Baixa Agressão'
    ],
    leadDoctor: 'Dr. Rafael Duarte',
    doctorRole: 'Dermatologista Clínico e Especialista em Tecnologias Cutâneas',
    accentColor: '#2E5654'
  },
  {
    id: 'nutricao',
    name: 'Nutrição Funcional',
    subtitle: 'Bioquímica alimentar aplicada ao seu estilo de vida e genoma',
    description: 'A alimentação como ferramenta terapêutica diária, adaptada às demandas da sua rotina real. Sem restrições cegas ou cardápios engessados: calculamos nutrientes essenciais, cuidamos da microbiota intestinal e otimizamos sua energia mitocondrial.',
    badge: 'Metabolismo & Nutrição',
    focusAreas: [
      'Modulação da microbiota intestinal e digestão',
      'Nutrição para alta performance cognitiva e energia',
      'Composição corporal com preservação de massa magra',
      'Manejo de intolerâncias e sensibilidades alimentares'
    ],
    protocols: [
      'Planejamento Alimentar Cronobiológico',
      'Suplementação Personalizada de Precisão',
      'Guia Prático de Compras e Gastronomia Saudável'
    ],
    diagnosticTech: [
      'Análise de Microbioma Fecal por Sequenciamento',
      'Calorimetria Indireta para Taxa Metabólica Basal',
      'Avaliação de Absorção e Micronutrientes Séricos'
    ],
    leadDoctor: 'Marina Costa',
    doctorRole: 'Nutricionista Funcional e Especialista em Metabolismo',
    accentColor: '#3E6E6C'
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia Integrativa',
    subtitle: 'Biomecânica, alívio de tensões e mobilidade funcional sem dor',
    description: 'Um olhar que não trata apenas a dor localizada, mas a cadeia neuromuscular completa. Unimos terapia manual de alta precisão, reeducação postural e exercícios de controle motor em um espaço calmo e silencioso, projetado para restabelecer a harmonia do movimento.',
    badge: 'Movimento & Biomecânica',
    focusAreas: [
      'Reabilitação de dores na coluna e articulações',
      'Alívio de cefaleias tensionais e disfunção de ATM',
      'Recuperação neuromuscular e preparação esportiva',
      'Educação postural para rotinas de trabalho sedentárias'
    ],
    protocols: [
      'Avaliação Biomecânica Tridimensional',
      'Terapia Manual Miofascial e Descompressão Guiada',
      'Protocolo de Fortalecimento Articular Progressivo'
    ],
    diagnosticTech: [
      'Plataforma de Baropodometria Computadorizada',
      'Termografia por Infravermelho para Focos Inflamatórios',
      'Biofeedback Eletromiográfico de Superfície'
    ],
    leadDoctor: 'Lucas Almeida',
    doctorRole: 'Fisioterapeuta Especialista em Biomecânica e Terapia Manual',
    accentColor: '#122826'
  },
  {
    id: 'psicologia',
    name: 'Psicologia & Saúde Mental',
    subtitle: 'Acolhimento empático, clareza mental e manejo do estresse',
    description: 'Espaço seguro e acolhedor para compreender suas emoções, desacelerar a sobrecarga psíquica e construir estratégias concretas de regulação emocional. Dialogamos em conjunto com a clínica médica para entender os reflexos somáticos do estresse no corpo.',
    badge: 'Equilíbrio Emocional',
    focusAreas: [
      'Gerenciamento de estresse crônico e burnout',
      'Terapia para transtornos de ansiedade e fobias',
      'Desenvolvimento de resiliência e tomada de decisões',
      'Apoio em fases de transição profissional e pessoal'
    ],
    protocols: [
      'Mapeamento de Padrões Cognitivos e Gatilhos',
      'Práticas de Respiração e Regulação do Nervo Vago',
      'Plano Estratégico de Higiene Mental e Limites'
    ],
    diagnosticTech: [
      'Treinamento de Coerência Cardíaca HeartMath',
      'Escalas Validadas de Carga Alostática e Burnout',
      'Sessões Presenciais em Sala com Conforto Acústico'
    ],
    leadDoctor: 'Dr. Thiago Prado',
    doctorRole: 'Psicólogo Clínico e Terapeuta Comportamental',
    accentColor: '#4A7A78'
  },
  {
    id: 'medicina-preventiva',
    name: 'Medicina Preventiva',
    subtitle: 'Longevidade ativa, epigenética e preservação da autonomia',
    description: 'Antecipar-se ao adoecimento antes que os sintomas surjam. Mapeamos riscos cardiovasculares precoces, predisposições epigenéticas e biomarcadores de inflamação subclínica para desenhar um plano de vida ativo para as próximas décadas.',
    badge: 'Longevidade Saudável',
    focusAreas: [
      'Check-up integrado personalizado com coordenação clínica',
      'Rastreio de calcificação coronária e risco vascular',
      'Saúde musculoesquelética e densidade óssea preventiva',
      'Otimização do sono reparador e ciclo circadiano'
    ],
    protocols: [
      'Score de Risco Multissistêmico VITRAE',
      'Plano de Metas para Longevidade em 5 e 10 Anos',
      'Revisões Semestrais com Ajustes de Rotina'
    ],
    diagnosticTech: [
      'Polissonografia Noturna Domiciliar de Alta Fidelidade',
      'Exame de Composição Tecidual Avançada',
      'Painel de Marcadores de Senescência Celular'
    ],
    leadDoctor: 'Dra. Camila Valença',
    doctorRole: 'Médica Preventivista e Especialista em Longevidade Humana',
    accentColor: '#254A48'
  }
];

export const doctorsData: Doctor[] = [
  {
    id: 'dra-helena-martins',
    name: 'Dra. Helena Martins',
    specialtyId: 'clinica-medica',
    specialtyName: 'Clínica Médica & Coordenação',
    crm: 'CRM/SP 148.920',
    rqe: 'RQE 62.401',
    bio: 'Formada pela Faculdade de Medicina da USP com residência em Clínica Médica no Hospital das Clínicas e aperfeiçoamento em Medicina Integrada pela Harvard Medical School. Defende que a consulta médica deve ser um refúgio de escuta detalhada e visão holística do organismo.',
    approach: 'Coordena as reuniões clínicas multidisciplinares da VITRAE, conectando achados diagnósticos de diferentes áreas em uma narrativa única para o paciente.',
    philosophy: '“A saúde não é um conjunto de órgãos isolados. Quando dedicamos tempo real para ouvir o paciente, os diagnósticos se tornam precisos e as soluções, sustentáveis.”',
    focus: ['Medicina Interna', 'Doenças Metabólicas', 'Cuidado Longitudinal'],
    consultationDuration: '90 min'
  },
  {
    id: 'dr-rafael-duarte',
    name: 'Dr. Rafael Duarte',
    specialtyId: 'dermatologia',
    specialtyName: 'Dermatologia Clínica & Tecnologias',
    crm: 'CRM/SP 162.330',
    rqe: 'RQE 71.854',
    bio: 'Membro titular da Sociedade Brasileira de Dermatologia (SBD), com mestrado em Oncologia Cutânea pela UNIFESP e fellowship no Instituto de Dermatologia de Munique. Dedica-se à dermatoscopia avançada e tratamentos regenerativos com foco na naturalidade da pele.',
    approach: 'Privilegia a recuperação biológica da barreira cutânea e tratamentos sutis que realçam o viço sem transformar as feições naturais.',
    philosophy: '“Uma pele saudável é o resultado de harmonia fisiológica interna, proteção solar inteligente e procedimentos com moderação e elegância.”',
    focus: ['Mapeamento Corporal', 'Dermatologia Clínica', 'Estética Regenerativa'],
    consultationDuration: '60 min'
  },
  {
    id: 'marina-costa',
    name: 'Marina Costa',
    specialtyId: 'nutricao',
    specialtyName: 'Nutrição Funcional & Metabólica',
    crm: 'CRN-3 38.412',
    bio: 'Graduada pelo Centro Universitário São Camilo com pós-graduação em Nutrição Funcional e modulação de microbiota. Possui mais de 10 anos de prática clínica com pacientes executivos e indivíduos com sensibilidades alimentares complexas.',
    approach: 'Cria planejamentos alimentares descomplicados, viáveis para quem viaja ou tem agendas cheias, priorizando densidade de micronutrientes e prazer à mesa.',
    philosophy: '“Comer bem não deve ser um sacrifício punitivo. A nutrição de precisão busca nutrir a célula e respeitar a cultura e o bem-estar de cada indivíduo.”',
    focus: ['Microbiota Intestinal', 'Bioquímica Celular', 'Composição Corporal'],
    consultationDuration: '75 min'
  },
  {
    id: 'lucas-almeida',
    name: 'Lucas Almeida',
    specialtyId: 'fisioterapia',
    specialtyName: 'Fisioterapia Integrativa & Biomecânica',
    crm: 'CREFITO-3 189.704-F',
    bio: 'Especialista em Fisioterapia Traumato-Ortopédica pelo Instituto Vita e certificado internacional em Terapia Manual Maitland e Osteopatia Estrutural. Atua no restabelecimento do equilíbrio cinético e na prevenção de recidivas de dores corporais.',
    approach: 'Combina descompressão articular, trabalho miofascial fino e reprogramação motora para que o paciente retome a confiança em seu próprio corpo.',
    philosophy: '“O movimento bem orientado é o melhor remédio que o corpo pode sintetizar. Nosso objetivo é devolver liberdade de movimento com conforto absoluto.”',
    focus: ['Coluna e Articulações', 'Terapia Manual', 'Controle Motor'],
    consultationDuration: '60 min'
  },
  {
    id: 'dra-camila-valenca',
    name: 'Dra. Camila Valença',
    specialtyId: 'medicina-preventiva',
    specialtyName: 'Medicina Preventiva & Longevidade',
    crm: 'CRM/SP 155.801',
    rqe: 'RQE 68.910',
    bio: 'Cardiologista e Preventivista com residência no Instituto Dante Pazzanese de Cardiologia e especialização em Medicina Preventiva e do Estilo de Vida pelo American College of Lifestyle Medicine (ACLM).',
    approach: 'Estrutura programas preventivos de 12 meses focados em preservação de artérias, estabilidade cognitiva e manutenção de massa muscular na maturidade.',
    philosophy: '“Envelhecer com vigor e autonomia não é sorte genética: é o resultado de escolhas informadas e monitoramento meticuloso dos sinais do corpo.”',
    focus: ['Rastreio Cardiovascular', 'Epigenética Aplicada', 'Saúde Circadiana'],
    consultationDuration: '80 min'
  },
  {
    id: 'dr-thiago-prado',
    name: 'Dr. Thiago Prado',
    specialtyId: 'psicologia',
    specialtyName: 'Psicologia Clínica & Neurociência',
    crm: 'CRP 06/124.951',
    bio: 'Doutor em Neurociências e Comportamento pelo Instituto de Psicologia da USP com formação em Terapia Focada na Compaixão e Regulação Autonômica pelo Mindfulness-Based Stress Reduction (MBSR).',
    approach: 'Oferece suporte acolhedor e baseado em evidências para pacientes lidando com altas demandas de responsabilidade, sobrecarga mental e ansiedade.',
    philosophy: '“Cuidar da mente é pré-requisito para que qualquer tratamento físico floresça. O acolhimento sem pressa transforma a forma como habitamos nossa rotina.”',
    focus: ['Manejo de Burnout', 'Regulação do Estresse', 'Coerência Cardíaca'],
    consultationDuration: '50 min'
  }
];

export const environmentsData: Environment[] = [
  {
    id: 'recepcao',
    name: 'Recepção & Lounge de Boas-Vindas',
    subtitle: 'Um espaço de acolhimento sensorial, sem balcões impessoais',
    description: 'Projetada para dissolver o estresse da cidade. O lounge de entrada conta com mármore suave, marcenaria curva em tons de carvalho natural, iluminação indireta quente de 2700K e poltronas ergonômicas para que sua espera seja um momento de pausa agradável.',
    details: [
      'Atendimento pessoal por concierge dedicado',
      'Chás botânicos preparados na hora e água mineral filtrada',
      'Seleção de livros de arte, arquitetura e bem-estar',
      'Acústica isolada de ruídos urbanos externos'
    ],
    image: clinicImages.lounge,
    acoustic: 'Atenuação acústica para 28 dB',
    lighting: 'Luz circadiana suave dimerizada'
  },
  {
    id: 'consultorios',
    name: 'Consultórios Humanizados',
    subtitle: 'Diálogo sem barreiras entre paciente e profissional',
    description: 'Substituímos a frieza das mesas de atendimento tradicionais por um layout de diálogo horizontal. Cadeiras de linho marfim, cortinas térmicas, plantas naturais e difusão discreta de óleos essenciais de bergamota promovem tranquilidade.',
    details: [
      'Mesa de madeira maciça em ângulo de acolhimento',
      'Monitor de visualização compartilhada de exames em alta definição',
      'Privacidade total para exame físico e trocas de roupa',
      'Macas com colchão de espuma com memória e aquecimento suave'
    ],
    image: clinicImages.consultorio,
    acoustic: 'Vedação acústica de portas duplas',
    lighting: 'Janelas amplas com iluminação natural filtrada'
  },
  {
    id: 'sala-avaliacao',
    name: 'Sala de Avaliação Fisiométrica',
    subtitle: 'Precisão diagnóstica em um ambiente calmo e acolhedor',
    description: 'Onde a tecnologia médica de ponta se integra à serenidade do espaço. Equipamentos modernos de bioimpedância de múltiplas frequências, dermatoscopia digital e eletrocardiografia operados com cuidado para você acompanhar os dados do seu organismo.',
    details: [
      'Equipamentos de padrão hospitalar com design elegante',
      'Exames realizados sem necessidade de deslocamento a laboratórios externos',
      'Visualização imediata dos resultados pelo paciente com orientação médica',
      'Higienização constante com produtos neutros hipoalergênicos'
    ],
    image: clinicImages.hero,
    acoustic: 'Isolamento sonoro para concentração máxima',
    lighting: 'Luz neutra de alta fidelidade de cor para exames'
  },
  {
    id: 'fisioterapia-reab',
    name: 'Espaço de Fisioterapia & Biomecânica',
    subtitle: 'Reabilitação do movimento em santuário tranquilo',
    description: 'Diferente de academias ou salas de fisioterapia barulhentas, nosso espaço possui ripados de madeira, iluminação zenital difusa, piso térmico e número rigorosamente limitado de pacientes por horário, garantindo atendimento 100% individualizado.',
    details: [
      'Equipamentos refinados de pilates e reabilitação postural',
      'Plataformas de alinhamento articular e esteira biomecânica',
      'Fisioterapeuta exclusivo dedicado a cada sessão',
      'Vestiário privativo equipado com toalhas de algodão egípcio'
    ],
    image: clinicImages.wellness,
    acoustic: 'Ambiente musical com frequências sonoras relaxantes',
    lighting: 'Luz natural matinal com brises orientáveis'
  },
  {
    id: 'bem-estar-infusoes',
    name: 'Área de Bem-Estar & Recuperação',
    subtitle: 'Momento de desaceleração pós-consulta e hidratação',
    description: 'Um espaço de transição onde os pacientes podem relaxar após consultas longas ou procedimentos cutâneos, degustando infusões medicinais personalizadas enquanto a equipe finaliza seu plano digital consolidado.',
    details: [
      'Menu de infusões biológicas guiadas por nutricionista',
      'Poltronas de repouso com gravidade zero',
      'Jardim de inverno com biofilia exuberante',
      'Acesso seguro e privativo à saída com valet cortesia'
    ],
    image: clinicImages.hero,
    acoustic: 'Som sutil de fonte de água e folhas',
    lighting: 'Penumbra suave para descanso ocular'
  },
  {
    id: 'atendimento-personalizado',
    name: 'Sala de Acolhimento & Alinhamento',
    subtitle: 'Onde dúvidas são esclarecidas com tempo e transparência',
    description: 'Dedicada para você conversar com o concierge e o navegador de cuidados da clínica, agendar retornos, entender etapas de exames ou planejar o cronograma anual com calma e privacidade absoluta.',
    details: [
      'Orientação individual sobre cada prescrição',
      'Agendamento sincronizado de múltiplas especialidades',
      'Esclarecimento de custos e relatórios para reembolso',
      'Suporte contínuo pós-atendimento via canal exclusivo'
    ],
    image: clinicImages.consultorio,
    acoustic: 'Confidencialidade absoluta',
    lighting: 'Lustres esculturais em latão e cobre'
  }
];

export const journeySteps = [
  {
    step: '01',
    title: 'Primeiro Contato & Boas-Vindas',
    tagline: 'Uma escuta atenta desde a primeira mensagem',
    description: 'Ao entrar em contato com a VITRAE, você é recebido por nosso concierge de saúde. Compreendemos seus objetivos principais, preferências de horário e alinhamos o questionário prévio de acolhimento para que a equipe médica já conheça seu histórico antes mesmo da sua chegada.',
    patientFeeling: 'Sensação de alívio e clareza, sem formulários burocráticos ou robôs impessoais.'
  },
  {
    step: '02',
    title: 'Entendimento das Necessidades',
    tagline: 'Definindo a porta de entrada ideal',
    description: 'Nem sempre o paciente sabe exatamente por qual especialidade começar. Com base no questionário e na triagem compassiva, desenhamos a ordem de consultas mais eficiente, evitando idas e vindas desnecessárias.',
    patientFeeling: 'Segurança de ter um direcionamento profissional sob medida para seu momento.'
  },
  {
    step: '03',
    title: 'Avaliação Integrada & Presencial',
    tagline: 'Consultas sem pressa e investigação minuciosa',
    description: 'Sua primeira consulta conta com tempo estendido (até 90 minutos). O médico avalia sono, alimentação, rotina, exame físico completo e realiza na própria clínica os testes complementares essenciais.',
    patientFeeling: 'A certeza de que cada detalhe relatado foi valorizado e considerado.'
  },
  {
    step: '04',
    title: 'Plano Personalizado Consolidado',
    tagline: 'Todas as áreas falando a mesma língua',
    description: 'Após a discussão do seu caso entre os especialistas responsáveis, você recebe um plano terapêutico unificado: nutrição, orientações médicas, conduta física e rotina de autocuidado organizadas em etapas práticas e graduais.',
    patientFeeling: 'Clareza total do que fazer, sem prescrições contraditórias ou excesso de informações.'
  },
  {
    step: '05',
    title: 'Acompanhamento Contínuo & Suporte',
    tagline: 'O cuidado continua entre uma consulta e outra',
    description: 'Você não fica desamparado após sair da clínica. Nossa equipe realiza check-ins programados, monitora a adaptação ao plano e fica disponível em canal direto para tirar dúvidas imediatas.',
    patientFeeling: 'Sentimento de acolhimento e amparo constante ao longo das semanas.'
  },
  {
    step: '06',
    title: 'Próximos Passos & Longevidade',
    tagline: 'Revisões estratégicas para manter sua vitalidade',
    description: 'Com metas alcançadas, reavaliamos biomarcadores e ajustamos as estratégias para a próxima estação da vida. Nosso compromisso é ser seu porto seguro de saúde duradoura.',
    patientFeeling: 'Autonomia, vigor renovado e paz de espírito com a própria saúde.'
  }
];

export const educationalArticles: Article[] = [
  {
    id: 'sono-e-inflamacao',
    title: 'O impacto do sono profundo na imunidade e nos marcadores inflamatórios',
    category: 'Medicina Preventiva & Fisiologia',
    readTime: '4 min de leitura',
    summary: 'Como as ondas lentas do sono não-REM orquestram a limpeza celular glinfática e reduzem marcadores de estresse vascular.',
    author: 'Dra. Camila Valença',
    authorRole: 'Medicina Preventiva e Longevidade',
    content: [
      'Durante as fases mais profundas do sono, o cérebro ativa o sistema glinfático, um mecanismo de drenagem que remove resíduos metabólicos acumulados ao longo do dia, incluindo proteínas associadas ao declínio cognitivo.',
      'Além disso, é no repouso noturno que o organismo equilibra os níveis de cortisol e regula as interleucinas pró-inflamatórias. Quando o sono é fragmentado ou insuficiente, o corpo entra em estado de alerta crônico, elevando a resistência à insulina e sobrecarregando o sistema vascular.',
      'Na VITRAE, antes de prescrever qualquer suplementação ou medicamento para disposição, avaliamos detalhadamente a arquitetura do sono do paciente: horário de deitar, exposição à luz azul ao entardecer e possíveis distúrbios respiratórios sutis.'
    ],
    keyTakeaways: [
      'Priorize a escuridão total e temperatura fresca no quarto (entre 19°C e 21°C).',
      'Evite refeições ricas em gorduras saturadas até 2 horas antes de dormir.',
      'A regularidade no horário de acordar é o principal âncora do ritmo circadiano.'
    ]
  },
  {
    id: 'eixo-intestino-pele',
    title: 'Além do sintoma: a conexão entre o microbioma intestinal e a saúde da pele',
    category: 'Dermatologia & Nutrição Funcional',
    readTime: '5 min de leitura',
    summary: 'A permeabilidade da barreira intestinal como gatilho invisível para rosácea, dermatites e perda prematura de elasticidade.',
    author: 'Dr. Rafael Duarte & Marina Costa',
    authorRole: 'Dermatologia Clínica e Nutrição Funcional',
    content: [
      'A pele e o trato gastrointestinal compartilham a mesma origem embriológica e ambos atuam como barreiras vitais entre nosso meio interno e o mundo externo.',
      'Quando há disbiose intestinal (desequilíbrio entre bactérias benéficas e patogênicas) ou hiperpermeabilidade da mucosa, fragmentos bacterianos como lipopolissacarídeos (LPS) entram na corrente circulatória, desencadeando respostas inflamatórias na derme.',
      'Por isso, na nossa abordagem integrada, tratamentos de rosácea, acne persistente na vida adulta e eczema não se limitam a pomadas tópicas. Investigamos a digestão, o consumo de fibras prebióticas e a modulação alimentar individual.'
    ],
    keyTakeaways: [
      'Tratar a pele de fora para dentro sem olhar a digestão gera resultados efêmeros.',
      'Alimentos ricos em polifenóis (frutas vermelhas, azeite extra-virgem) nutrem a barreira cutânea.',
      'A hidratação precisa ser sistêmica: água de boa qualidade e eletrólitos equilibrados.'
    ]
  },
  {
    id: 'biomecanica-rotina',
    title: 'Biomecânica cotidiana: por que a postura de trabalho afeta sua energia mental',
    category: 'Fisioterapia Integrativa',
    readTime: '3 min de leitura',
    summary: 'Tensões cervicais persistentes diminuem o fluxo respiratório e induzem microfadiga crônica durante o expediente.',
    author: 'Lucas Almeida',
    authorRole: 'Fisioterapia e Biomecânica',
    content: [
      'Passar horas em flexão cervical olhando para telas gera uma sobrecarga mecânica de até 27 kg sobre a coluna cervical superior. Essa contratura contínua dos músculos suboccipitais comprime ramificações nervosas e restringe a expansão torácica na respiração.',
      'Com menor complacência torácica, a respiração se torna curta e apical, ativando reflexos do sistema nervoso simpático e gerando sensação sutil de ansiedade e peso nos ombros.',
      'Pequenas correções ergonômicas combinadas com pausas ativas de 2 minutos para mobilidade de escápulas e descompressão diafragmática restauram a oxigenação e o frescor mental.'
    ],
    keyTakeaways: [
      'Ajuste o topo da tela do monitor exatamente na linha dos olhos.',
      'Apoie os antebraços e mantenha os pés firmemente assentados no solo.',
      'Faça 3 respirações lentas e profundas pelo abdômen a cada 90 minutos de foco.'
    ]
  }
];

export const testimonialsData = [
  {
    quote: 'Pela primeira vez em anos, senti que uma equipe médica realmente conversou entre si sobre o meu caso. A Dra. Helena e a nutricionista Marina alinharam cada detalhe da minha rotina sem me sobrecarregar.',
    author: 'Beatriz Vasconcellos',
    role: 'Arquiteta & Designer',
    timeWithClinic: 'Paciente há 1 ano e meio'
  },
  {
    quote: 'A clínica é um respiro na cidade. A consulta de 90 minutos foi transformadora: investigaram causas que outros consultórios nunca tiveram tempo de ouvir. Minhas dores na coluna e o cansaço constante cessaram.',
    author: 'Eduardo M. Siqueira',
    role: 'Empresário',
    timeWithClinic: 'Paciente há 8 meses'
  },
  {
    quote: 'O que mais me impressionou foi o respeito e a elegância. Sem promessas milagrosas, sem excesso de procedimentos. Apenas medicina precisa, ambientes acolhedores e acompanhamento constante.',
    author: 'Clara Fontes Mendes',
    role: 'Advogada',
    timeWithClinic: 'Paciente há 2 anos'
  }
];
