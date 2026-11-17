/* ============================================================
   assets/subpages.js
   Conteúdo das sub-sub-páginas.
   Cada chave corresponde ao atributo data-subpage do HTML.

   BUGS CORRIGIDOS nesta versão:
   1. Rótulo "NR-1" trocado por "NR-01" nos blocos de estatística
      de 'nr-01' e 'clima-psicossocial', para bater com o nome
      oficial da norma usado no restante do site (título da
      própria página é "NR-01").
   2. renderSubpage() agora é defensivo contra falhas de template
      (try/catch) e não roda duas vezes na mesma página.
   ============================================================ */
const SUBPAGES = {

  /* ---------- SEGURANÇA DO TRABALHO ---------- */
  'nr-01': {
    categoria: 'Segurança do Trabalho',
    catHref: 'seguranca-trabalho.html',
    titulo: 'NR-01 — <em>Riscos Ocupacionais</em>',
    lead: 'A NR-01 é a base de todo o sistema de segurança do trabalho. Ela define como a empresa deve identificar, avaliar e controlar riscos — incluindo os psicossociais.',
    meta: [
      { valor: 'PGR', rot: 'Programa obrigatório' },
      { valor: '5', rot: 'Níveis de risco' },
      { valor: 'NR-01', rot: 'Atualizada 2024' }
    ],
    conteudo: `
      <h3>O que a NR-01 exige hoje</h3>
      <p>A atualização mais recente da NR-01 trouxe uma mudança estrutural: o antigo PPRA foi substituído pelo <strong>PGR (Programa de Gerenciamento de Riscos)</strong>, que precisa ser integrado ao PCMSO e considerar também os <em>riscos psicossociais</em> relacionados ao trabalho.</p>
      <ul>
        <li>Inventário de riscos ocupacionais por função e setor</li>
        <li>Plano de ação com medidas de prevenção e prazos</li>
        <li>Avaliação de riscos psicossociais (assédio, sobrecarga, isolamento)</li>
        <li>Integração obrigatória com o PCMSO</li>
        <li>Registro e monitoramento contínuo dos indicadores</li>
      </ul>
      <h3>Como a Ethos e Terra atua</h3>
      <p>Fazemos o levantamento em campo, entrevistamos lideranças e colaboradores, construímos o inventário de riscos e o plano de ação com responsáveis e prazos. Entregamos o documento final pronto para auditoria, além de treinar a equipe interna para manter o sistema vivo.</p>
    `,
    faq: [
      { p: 'Qual o prazo para implementar a nova NR-01?', r: 'O PGR já está em vigor desde 2022. Empresas que ainda operam com PPRA estão em não conformidade e sujeitas a autuação.' },
      { p: 'Riscos psicossociais são obrigatórios?', r: 'Sim. A NR-01 os inclui expressamente no inventário de riscos, exigindo medidas de prevenção e monitoramento.' },
      { p: 'Preciso refazer o PGR todo ano?', r: 'O documento é revisado sempre que houver mudanças no processo, e no mínimo a cada 2 anos. Também é atualizado após acidentes graves ou mudanças significativas.' }
    ]
  },

  'nr-35': {
    categoria: 'Segurança do Trabalho',
    catHref: 'seguranca-trabalho.html',
    titulo: 'NR-35 — <em>Trabalho em Altura</em>',
    lead: 'Trabalho em altura é uma das atividades de maior risco nas empresas brasileiras. A NR-35 define os requisitos mínimos para proteger quem atua acima de 2 metros.',
    meta: [
      { valor: '2m', rot: 'Altura mínima' },
      { valor: '100%', rot: 'Equipe certificada' },
      { valor: 'Anual', rot: 'Reciclagem' }
    ],
    conteudo: `
      <h3>Quando se aplica</h3>
      <p>Sempre que houver atividade acima de <strong>2,00 m</strong> do nível inferior, com risco de queda. Inclui telhados, plataformas, andaimes, escadas, postes e qualquer estrutura elevada.</p>
      <h3>O que entregamos</h3>
      <ul>
        <li>Análise de Risco (AR) e Permissão de Trabalho (PT)</li>
        <li>Especificação de sistemas de ancoragem e EPIs (cintos, talabartes, trava-quedas)</li>
        <li>Treinamento de trabalho em altura (8h + reciclagem bienal)</li>
        <li>Treinamento de supervisão e resgate em altura</li>
        <li>Laudos de pontos de ancoragem</li>
        <li>Procedimentos operacionais e checklists</li>
      </ul>
      <h3>Diferencial</h3>
      <p>Não apenas treinamos: acompanhamos a execução em campo, ajustamos procedimentos conforme a realidade da obra ou planta e formamos multiplicadores internos para que a conformidade se mantenha após nossa saída.</p>
    `,
    faq: [
      { p: 'Qual a validade do treinamento NR-35?', r: 'O treinamento inicial tem validade de 2 anos. Após esse período, é exigida reciclagem. Mudanças significativas de procedimento também exigem reciclagem antecipada.' },
      { p: 'Trabalho em telhado sem acesso acima de 2m entra na NR-35?', r: 'Depende da altura real do ponto de queda. Se a queda potencial for superior a 2 metros, aplica-se a NR-35 mesmo que o trabalho seja rápido.' },
      { p: 'Vocês emitem laudo de ancoragem?', r: 'Sim. Realizamos a vistoria dos pontos de ancoragem existentes ou especificamos novos pontos com laudo técnico assinado por engenheiro.' }
    ]
  },

  'pgr-pcmso': {
    categoria: 'Segurança do Trabalho',
    catHref: 'seguranca-trabalho.html',
    titulo: 'PGR &amp; <em>PCMSO</em>',
    lead: 'Os dois programas obrigatórios que formam a espinha dorsal da saúde e segurança ocupacional: um cuida do risco, o outro cuida de quem está exposto a ele.',
    meta: [
      { valor: 'Anual', rot: 'Revisão PCMSO' },
      { valor: 'Bienal', rot: 'Revisão PGR' },
      { valor: 'Integ.', rot: 'PGR × PCMSO' }
    ],
    conteudo: `
      <h3>PGR — Programa de Gerenciamento de Riscos</h3>
      <p>Substitui o antigo PPRA e estrutura o inventário de riscos por função, o plano de ação e o monitoramento contínuo. É a base que sustenta todas as demais ações de segurança da empresa.</p>
      <h3>PCMSO — Programa de Controle Médico de Saúde Ocupacional</h3>
      <p>Define os exames médicos obrigatórios (admissional, periódico, de mudança de função, retorno ao trabalho e demissional), sempre vinculados aos riscos identificados no PGR.</p>
      <ul>
        <li>Elaboração e revisão de PGR e PCMSO</li>
        <li>Integração entre os dois programas (obrigatória)</li>
        <li>Coordenação com clínicas e médicos do trabalho</li>
        <li>ASO, atestados e relatórios analíticos</li>
        <li>LTCAT e laudos de insalubridade/periculosidade</li>
        <li>Suporte em eSocial (S-2210, S-2220, S-2240)</li>
      </ul>
      <h3>Como integramos</h3>
      <p>Muitas empresas tratam PGR e PCMSO como documentos isolados, gerando retrabalho e inconsistências. Nós os construímos em conjunto — os riscos do PGR orientam os exames do PCMSO, e os dados do PCMSO realimentam o PGR.</p>
    `,
    faq: [
      { p: 'Com que frequência o PGR deve ser atualizado?', r: 'No mínimo a cada 2 anos, ou sempre que houver mudanças significativas nos processos, layout, funções ou após acidentes graves.' },
      { p: 'O PCMSO precisa de médico do trabalho?', r: 'Sim, obrigatoriamente coordenado por médico do trabalho registrado no CRM, com especialização em medicina ocupacional.' },
      { p: 'O que é LTCAT e quando é exigido?', r: 'É o Laudo Técnico das Condições Ambientais do Trabalho, exigido para comprovar exposição a agentes nocivos e embasar aposentadoria especial.' }
    ]
  },

  /* ---------- MARKETING ---------- */
  'branding-esg': {
    categoria: 'Marketing',
    catHref: 'marketing.html',
    titulo: 'Branding <em>ESG</em>',
    lead: 'Sua marca comunica o que sua empresa realmente faz. Se a atuação ambiental e social é séria, a narrativa precisa estar à altura — sem greenwashing.',
    meta: [
      { valor: '0', rot: 'Tolerância a greenwashing' },
      { valor: '360°', rot: 'Visão de marca' },
      { valor: 'ESG', rot: 'Framework aplicado' }
    ],
    conteudo: `
      <h3>O que é branding ESG</h3>
      <p>É a construção da identidade de marca ancorada em práticas ambientais, sociais e de governança <strong>reais</strong>. Não é maquiagem — é traduzir o que a empresa faz em narrativa consistente para clientes, investidores e talentos.</p>
      <h3>Como construímos</h3>
      <ul>
        <li>Auditoria de comunicação atual (o que é real, o que é exagero)</li>
        <li>Definição de propósito e posicionamento ESG</li>
        <li>Arquitetura de marca (identidade verbal e visual)</li>
        <li>Mensagens-chave para cada stakeholder</li>
        <li>Relatório ESG e material institucional</li>
        <li>Diretrizes de comunicação para evitar greenwashing</li>
      </ul>
      <h3>O que evitamos</h3>
      <p>Não aceitamos projetos que pedem para comunicar algo que a empresa não pratica. Se a atuação real não sustenta a narrativa, nosso primeiro passo é ajustar a operação — depois a comunicação.</p>
    `,
    faq: [
      { p: 'O que é greenwashing e por que é um risco?', r: 'É comunicar benefícios ambientais que não existem na prática. Além do dano reputacional, é crime em vários países e pode gerar sanções e perda de contratos.' },
      { p: 'Minha empresa é pequena. Vale a pena investir em branding ESG?', r: 'Sim, desde que haja ações reais. Consumidores e grandes empresas valorizam fornecedores com práticas sustentáveis comprovadas.' },
      { p: 'Como começamos?', r: 'Fazemos uma auditoria de comunicação e um levantamento das práticas reais. A partir daí, desenhamos o posicionamento adequado ao porte e maturidade da empresa.' }
    ]
  },

  'marketing-digital': {
    categoria: 'Marketing',
    catHref: 'marketing.html',
    titulo: 'Marketing <em>Digital</em>',
    lead: 'Conteúdo relevante, redes sociais com propósito e performance mensurável. Transformamos a atuação ESG em presença digital que gera negócio.',
    meta: [
      { valor: '360°', rot: 'Canais cobertos' },
      { valor: 'ROI', rot: 'Foco em resultado' },
      { valor: '4', rot: 'Etapas de funil' }
    ],
    conteudo: `
      <h3>O que fazemos</h3>
      <ul>
        <li>Estratégia de conteúdo e calendário editorial</li>
        <li>Gestão de redes sociais (LinkedIn, Instagram, YouTube)</li>
        <li>Produção de conteúdo técnico e institucional</li>
        <li>SEO e blog corporativo</li>
        <li>E-mail marketing e automação</li>
        <li>Análise de métricas e otimização contínua</li>
      </ul>
      <h3>Diferencial ESG</h3>
      <p>Não fazemos marketing digital genérico. Todo conteúdo é ancorado em dados reais da operação do cliente — indicadores ambientais, ações sociais, certificações obtidas. Isso gera autoridade genuína e diferencia a marca no mercado.</p>
    `,
    faq: [
      { p: 'Vocês produzem o conteúdo ou só planejam?', r: 'Fazemos os dois. Podemos atuar apenas no planejamento estratégico ou assumir a produção completa, incluindo redação, design e publicação.' },
      { p: 'Em quanto tempo vejo resultado?', r: 'Primeiros sinais de engajamento em 30-60 dias. Resultados de negócio (leads, vendas) costumam aparecer entre 90 e 180 dias.' },
      { p: 'Preciso ter perfil em todas as redes?', r: 'Não. Recomendamos escolher 2 a 3 canais onde seu público realmente está, e fazer bem feito, em vez de estar em todos superficialmente.' }
    ]
  },

  'comunicacao-interna': {
    categoria: 'Marketing',
    catHref: 'marketing.html',
    titulo: 'Comunicação <em>Interna</em>',
    lead: 'A marca começa dentro de casa. Comunicação interna consistente alinha times, engaja colaboradores e reduz turnover.',
    meta: [
      { valor: '+45%', rot: 'Engajamento médio' },
      { valor: '2×', rot: 'Mais retenção' },
      { valor: '1', rot: 'Narrativa única' }
    ],
    conteudo: `
      <h3>Por que importa</h3>
      <p>Quando a comunicação interna é fraca, o colaborador não entende o propósito da empresa, não se sente parte e adoece. Comunicação clara é um dos fatores mais correlacionados com engajamento e retenção.</p>
      <h3>O que entregamos</h3>
      <ul>
        <li>Diagnóstico de canais e ruídos de comunicação</li>
        <li>Plano de comunicação interna</li>
        <li>Newsletter corporativa e comunicados</li>
        <li>Campanhas internas (segurança, ESG, diversidade)</li>
        <li>Rituais de integração e onboarding comunicacional</li>
        <li>Métricas de alcance e engajamento interno</li>
      </ul>
      <h3>Como se conecta ao ESG</h3>
      <p>Metas ambientais e sociais só funcionam quando o colaborador sabe o que a empresa está fazendo e por quê. Comunicação interna é a ponte entre a estratégia ESG e a execução no dia a dia.</p>
    `,
    faq: [
      { p: 'Como medir comunicação interna?', r: 'Pesquisa de clima, taxa de abertura de comunicados, participação em campanhas e NPS interno são os principais indicadores.' },
      { p: 'Vale para empresa com 30 colaboradores?', r: 'Sim. Em empresas pequenas, a comunicação informal pode gerar ruídos ainda maiores. Estruturar canais ajuda a todos.' },
      { p: 'Como se relaciona com o RH?', r: 'É uma frente conjunta. Trabalhamos comunicação interna em parceria com o pilar de RH, garantindo alinhamento de mensagem e cultura.' }
    ]
  },

  /* ---------- QUALIDADE ---------- */
  'iso-9001': {
    categoria: 'Qualidade',
    catHref: 'qualidade.html',
    titulo: 'ISO <em>9001</em>',
    lead: 'A norma de gestão da qualidade mais reconhecida do mundo. Estruturamos processos, padronizamos rotinas e preparamos sua empresa para a certificação.',
    meta: [
      { valor: '6-12', rot: 'Meses até certificar' },
      { valor: '+60', rot: 'Implantações feitas' },
      { valor: '100%', rot: 'Documentação auditável' }
    ],
    conteudo: `
      <h3>O que a ISO 9001 exige</h3>
      <p>Um sistema de gestão da qualidade baseado em sete princípios: foco no cliente, liderança, engajamento das pessoas, abordagem por processos, melhoria contínua, tomada de decisão baseada em evidências e gestão de relacionamentos.</p>
      <h3>Nossa abordagem</h3>
      <ul>
        <li>Diagnóstico de maturidade e gap analysis</li>
        <li>Mapeamento e padronização de processos</li>
        <li>Elaboração de documentação (manual, procedimentos, instruções)</li>
        <li>Treinamento de equipes e formação de auditores internos</li>
        <li>Auditoria interna simulada antes da certificação</li>
        <li>Acompanhamento da auditoria de certificação</li>
      </ul>
      <h3>Diferencial</h3>
      <p>Não entregamos documentação genérica. Cada procedimento é construído com a equipe que o executa, garantindo que seja aplicável e sustentável no dia a dia — não apenas durante auditorias.</p>
    `,
    faq: [
      { p: 'Quanto tempo leva para certificar?', r: 'Entre 6 e 12 meses, dependendo do porte, maturidade e escopo da empresa. Empresas já com processos documentados podem certificar mais rápido.' },
      { p: 'A certificação tem validade?', r: 'Sim, 3 anos. Durante esse período são realizadas auditorias de manutenção anuais. Ao final do ciclo, ocorre uma auditoria de recertificação.' },
      { p: 'Posso integrar com ISO 14001 e 45001?', r: 'Sim, e é altamente recomendado. Sistemas integrados reduzem custos, retrabalho e carga documental.' }
    ]
  },

  'iso-14001': {
    categoria: 'Qualidade',
    catHref: 'qualidade.html',
    titulo: 'ISO <em>14001</em>',
    lead: 'A norma internacional de gestão ambiental. Conecta o sistema de gestão à operação ambiental da empresa, com foco em conformidade e melhoria contínua.',
    meta: [
      { valor: 'ISO', rot: 'Padrão internacional' },
      { valor: '3 anos', rot: 'Ciclo de validade' },
      { valor: 'PGR', rot: 'Integrado' }
    ],
    conteudo: `
      <h3>O que a ISO 14001 exige</h3>
      <p>Um sistema de gestão ambiental que identifica aspectos e impactos ambientais significativos, define controles operacionais, monitora desempenho e garante conformidade legal — tudo com melhoria contínua.</p>
      <h3>Como implantamos</h3>
      <ul>
        <li>Levantamento de aspectos e impactos ambientais</li>
        <li>Avaliação de conformidade legal (licenças, condicionantes)</li>
        <li>Definição de objetivos e metas ambientais</li>
        <li>Controles operacionais documentados</li>
        <li>Programa de monitoramento e medição</li>
        <li>Preparação para emergências ambientais</li>
      </ul>
      <h3>Integração com o núcleo ambiental</h3>
      <p>A ISO 14001 é a formalização do núcleo de gestão ambiental em um sistema certificável. Se a empresa já tem a base ambiental em ordem, o caminho para a certificação é natural e mais rápido.</p>
    `,
    faq: [
      { p: 'ISO 14001 é obrigatória?', r: 'Não é obrigatória por lei. Mas muitas cadeias de fornecimento, especialmente de grandes empresas, exigem a certificação de seus fornecedores.' },
      { p: 'Preciso ter licença ambiental para certificar?', r: 'Sim. A conformidade legal é uma exigência da norma. Empresas com pendências precisam regularizá-las antes ou durante a implantação.' },
      { p: 'Vale para empresas de serviços?', r: 'Sim. Empresas de serviços também geram impactos ambientais (resíduos, energia, deslocamento) que devem ser gerenciados.' }
    ]
  },

  'auditorias': {
    categoria: 'Qualidade',
    catHref: 'qualidade.html',
    titulo: '<em>Auditorias</em> Internas',
    lead: 'Auditorias internas bem feitas são o melhor mecanismo de melhoria contínua. Identificam não conformidades antes que se tornem problemas caros.',
    meta: [
      { valor: 'Anual', rot: 'Mínimo recomendado' },
      { valor: 'PDCA', rot: 'Ciclo aplicado' },
      { valor: '360°', rot: 'Cobertura' }
    ],
    conteudo: `
      <h3>Por que auditar</h3>
      <p>A auditoria interna não é fiscalização — é aprendizado estruturado. Ela revela onde o sistema está funcionando e onde precisa de ajuste, antes que o problema apareça em uma auditoria externa ou em um incidente real.</p>
      <h3>O que entregamos</h3>
      <ul>
        <li>Plano anual de auditorias internas</li>
        <li>Execução por auditores qualificados</li>
        <li>Relatórios com não conformidades e observações</li>
        <li>Registro de ações corretivas e prazos</li>
        <li>Verificação de eficácia das ações</li>
        <li>Formação de auditores internos na sua equipe</li>
      </ul>
      <h3>Formação de multiplicadores</h3>
      <p>Além de auditar, formamos auditores internos na sua equipe. Ao final do projeto, sua empresa tem autonomia para manter o ciclo de auditorias sem depender de consultoria externa.</p>
    `,
    faq: [
      { p: 'Auditoria interna pode ser feita por funcionário?', r: 'Sim, desde que o auditor não audite sua própria área. Formamos auditores internos para que isso seja feito com isenção.' },
      { p: 'Com que frequência auditar?', r: 'Idealmente todas as áreas ao menos uma vez por ano. Áreas críticas ou com histórico de não conformidade devem ser auditadas com mais frequência.' },
      { p: 'O que fazer com as não conformidades encontradas?', r: 'Cada uma deve gerar uma ação corretiva com responsável, prazo e verificação de eficácia. Acompanhamos todo esse ciclo.' }
    ]
  },

  /* ---------- FILOSOFIA DE EMPRESA ---------- */
  'missao-visao-valores': {
    categoria: 'Filosofia de Empresa',
    catHref: 'filosofia-empresa.html',
    titulo: 'Missão, Visão e <em>Valores</em>',
    lead: 'Os três pilares da identidade organizacional. Sem eles, decisões ficam arbitrárias e a cultura se fragmenta em subculturas por área.',
    meta: [
      { valor: '3', rot: 'Pilares fundamentais' },
      { valor: '10+', rot: 'Anos de validade' },
      { valor: '100%', rot: 'Alinhados ao ESG' }
    ],
    conteudo: `
      <h3>Por que definir (bem)</h3>
      <p>Missão, visão e valores não são frases bonitas para pendurar na parede. São os critérios que orientam decisões difíceis: contratar ou não um cliente, entrar ou não em um mercado, demitir ou não um líder que entrega resultado mas destrói o time.</p>
      <h3>Como construímos</h3>
      <ul>
        <li>Workshops com liderança e grupos-chave</li>
        <li>Análise de identidade real vs. identidade desejada</li>
        <li>Redação colaborativa e testes de clareza</li>
        <li>Validação com toda a organização</li>
        <li>Tradução em comportamentos observáveis</li>
        <li>Comunicação e rituais de reforço</li>
      </ul>
      <h3>Integração com ESG</h3>
      <p>Missão, visão e valores precisam contemplar compromissos ambientais e sociais reais. Empresas que fazem ESG sério têm esses compromissos refletidos em sua identidade — não apenas em relatórios.</p>
    `,
    faq: [
      { p: 'Qual a diferença entre missão, visão e valores?', r: 'Missão é o que a empresa faz e por quê. Visão é onde ela quer chegar. Valores são os princípios que guiam o como.' },
      { p: 'Com que frequência revisar?', r: 'Em geral a cada 3-5 anos, ou sempre que houver mudança significativa de estratégia, mercado ou liderança.' },
      { p: 'Como garantir que não vire "frase de parede"?', r: 'Traduzindo em comportamentos observáveis, usando em decisões reais e reforçando em rituais de comunicação. Sem isso, vira decoração.' }
    ]
  },

  'codigo-conduta': {
    categoria: 'Filosofia de Empresa',
    catHref: 'filosofia-empresa.html',
    titulo: 'Código de <em>Conduta</em>',
    lead: 'Um documento que define o que é aceitável e o que não é na empresa. É a base de compliance, integridade e proteção reputacional.',
    meta: [
      { valor: '100%', rot: 'Colaboradores cobertos' },
      { valor: 'Anual', rot: 'Revisão' },
      { valor: 'LGPD', rot: 'Alinhado' }
    ],
    conteudo: `
      <h3>O que precisa estar</h3>
      <ul>
        <li>Princípios éticos e valores inegociáveis</li>
        <li>Política anticorrupção e de conflitos de interesse</li>
        <li>Regras de relacionamento com clientes, fornecedores e poder público</li>
        <li>Política de assédio e discriminação</li>
        <li>Uso de bens e informações da empresa</li>
        <li>Canal de denúncias e proteção ao denunciante</li>
        <li>Consequências por descumprimento</li>
      </ul>
      <h3>Como construímos</h3>
      <p>Não entregamos modelos genéricos. Cada código é desenhado a partir da realidade e dos riscos específicos da empresa, com linguagem acessível e treinamento obrigatório para toda a organização.</p>
      <h3>Integração com compliance</h3>
      <p>O código é a espinha dorsal do programa de compliance. Sem ele, políticas isoladas perdem coerência e a empresa fica exposta a riscos legais e reputacionais.</p>
    `,
    faq: [
      { p: 'Código de conduta é obrigatório?', r: 'Não é exigido por lei para todas as empresas, mas é exigido em licitações, contratos com grandes empresas e é altamente recomendado para qualquer porte.' },
      { p: 'Como fazer cumprir?', r: 'Com treinamento, exemplo da liderança, canal de denúncias ativo e consequências reais para descumprimento. Documento sem enforcement não funciona.' },
      { p: 'Precisa de advogado para elaborar?', r: 'Recomendamos revisão jurídica, especialmente nas cláusulas sobre anticorrupção e LGPD. Nós coordenamos essa etapa.' }
    ]
  },

  'governanca': {
    categoria: 'Filosofia de Empresa',
    catHref: 'filosofia-empresa.html',
    titulo: '<em>Governança</em> Corporativa',
    lead: 'Estrutura de decisão, transparência e prestação de contas. A governança define como a empresa é dirigida e como as decisões são tomadas.',
    meta: [
      { valor: '360°', rot: 'Estrutura completa' },
      { valor: 'ESG', rot: 'Dimensão G' },
      { valor: 'Conselho', rot: 'Opcional' }
    ],
    conteudo: `
      <h3>O que abrange</h3>
      <ul>
        <li>Estrutura de conselho ou comitês consultivos</li>
        <li>Separação clara de papéis (sócios, diretoria, operação)</li>
        <li>Fluxo formal de decisões estratégicas</li>
        <li>Transparência financeira e prestação de contas</li>
        <li>Gestão de riscos corporativos</li>
        <li>Sucessão e desenvolvimento de lideranças</li>
      </ul>
      <h3>Para quem é</h3>
      <p>Empresas familiares em transição, empresas em crescimento acelerado, negócios que buscam investimento externo ou que estão se preparando para fusão ou venda. Governança bem estruturada aumenta o valor da empresa.</p>
      <h3>Como atuamos</h3>
      <p>Fazemos um diagnóstico da estrutura atual, propomos desenho de governança adequado ao porte e momento da empresa e acompanhamos a implementação. Não impomos modelos — adaptamos ao contexto.</p>
    `,
    faq: [
      { p: 'Empresa pequena precisa de governança?', r: 'Sim, ainda que simplificada. Mesmo empresas de 20-30 pessoas se beneficiam de papéis claros e fluxos de decisão definidos.' },
      { p: 'Qual a diferença entre governança e gestão?', r: 'Governança decide o quê e por quê. Gestão executa o como. São camadas complementares, não a mesma coisa.' },
      { p: 'A governança aumenta o valor da empresa?', r: 'Sim. Investidores e compradores pagam mais por empresas com governança bem estruturada, por reduzir risco e aumentar previsibilidade.' }
    ]
  },

  /* ---------- RH ---------- */
  'recrutamento': {
    categoria: 'Recursos Humanos',
    catHref: 'rh.html',
    titulo: '<em>Recrutamento</em> e Seleção',
    lead: 'Contratar bem é a decisão mais barata. Contratar mal custa até 2× o salário anual do profissional. Estruturamos processos seletivos que reduzem esse risco.',
    meta: [
      { valor: '-40%', rot: 'Turnover precoce' },
      { valor: '3', rot: 'Etapas mínimas' },
      { valor: 'Fit', rot: 'Cultural + técnico' }
    ],
    conteudo: `
      <h3>Como estruturamos</h3>
      <ul>
        <li>Definição do perfil da vaga (técnico + comportamental)</li>
        <li>Descrição de cargo e faixa salarial</li>
        <li>Estratégia de atração (canais, employer branding)</li>
        <li>Triagem estruturada e testes situacionais</li>
        <li>Entrevistas por competências</li>
        <li>Fit cultural e referências</li>
        <li>Onboarding estruturado (primeiros 90 dias)</li>
      </ul>
      <h3>O diferencial</h3>
      <p>Não contratamos apenas por competência técnica. Avaliamos alinhamento cultural — porque um profissional tecnicamente excelente mas desalinhado com a cultura gera mais dano que benefício.</p>
      <h3>Integração com Filosofia</h3>
      <p>O recrutamento precisa estar conectado a missão, visão e valores da empresa. Sem isso, a seleção se torna aleatória e a cultura se fragmenta.</p>
    `,
    faq: [
      { p: 'Vocês fazem o recrutamento ou só estruturam?', r: 'Fazemos os dois. Podemos atuar como consultoria (estruturando o processo interno) ou como R&S terceirizado.' },
      { p: 'O que é onboarding estruturado?', r: 'É um plano de integração dos primeiros 90 dias, com metas, encontros e treinamentos. Reduz drasticamente a saída precoce.' },
      { p: 'Vale para vagas operacionais?', r: 'Sim, e é onde o turnover costuma ser mais alto. Estruturar reduz custo de reposição e melhora produtividade.' }
    ]
  },

  'clima-psicossocial': {
    categoria: 'Recursos Humanos',
    catHref: 'rh.html',
    titulo: 'Clima &amp; <em>Riscos Psicossociais</em>',
    lead: 'A NR-01 tornou obrigatória a gestão dos riscos psicossociais. Vamos além da conformidade: usamos dados para construir ambientes de trabalho mais saudáveis.',
    meta: [
      { valor: 'NR-01', rot: 'Conformidade' },
      { valor: 'Anual', rot: 'Pesquisa de clima' },
      { valor: '360°', rot: 'Diagnóstico' }
    ],
    conteudo: `
      <h3>O que são riscos psicossociais</h3>
      <p>São fatores do trabalho que podem afetar a saúde mental do colaborador: sobrecarga, assédio, isolamento, falta de autonomia, metas abusivas, más relações com liderança. A NR-01 exige que sejam identificados e gerenciados.</p>
      <h3>Como atuamos</h3>
      <ul>
        <li>Pesquisa de clima organizacional anônima e estruturada</li>
        <li>Avaliação de riscos psicossociais (questionários validados)</li>
        <li>Entrevistas e grupos focais</li>
        <li>Devolutiva com lideranças e plano de ação</li>
        <li>Apoio à liderança para mudanças de comportamento</li>
        <li>Canal de apoio psicológico quando necessário</li>
      </ul>
      <h3>Integração com Segurança</h3>
      <p>Riscos psicossociais são riscos ocupacionais. Trabalhamos em parceria com o pilar de Segurança do Trabalho para que sejam integrados ao PGR e ao PCMSO de forma consistente.</p>
    `,
    faq: [
      { p: 'Pesquisa de clima é anônima mesmo?', r: 'Sim, sempre. Sem anonimato garantido, as respostas se tornam politicamente corretas e o diagnóstico perde valor.' },
      { p: 'O que fazer com os resultados?', r: 'Todo diagnóstico gera plano de ação com responsáveis e prazos. Diagnóstico sem ação é pior que não fazer pesquisa.' },
      { p: 'Qual a diferença entre clima e cultura?', r: 'Clima é a percepção momentânea (estado). Cultura é o padrão profundo e duradouro (traço). Clima oscila, cultura sustenta.' }
    ]
  },

  'treinamento-lideranca': {
    categoria: 'Recursos Humanos',
    catHref: 'rh.html',
    titulo: 'Treinamento de <em>Lideranças</em>',
    lead: 'Líderes são o principal ponto de alavancagem da cultura. Investir em liderança transforma o ambiente, a retenção e o resultado.',
    meta: [
      { valor: '4-6', rot: 'Meses de programa' },
      { valor: '90%', rot: 'Aplicação prática' },
      { valor: '+30%', rot: 'Engajamento do time' }
    ],
    conteudo: `
      <h3>O que desenvolvemos</h3>
      <ul>
        <li>Feedback estruturado e conversas difíceis</li>
        <li>Delegação e desenvolvimento do time</li>
        <li>Gestão de conflitos e negociação</li>
        <li>Inteligência emocional e autoconhecimento</li>
        <li>Liderança e segurança psicológica</li>
        <li>Gestão de performance e metas</li>
        <li>Diversidade, equidade e inclusão</li>
      </ul>
      <h3>Metodologia</h3>
      <p>Programas vivenciais, com casos reais da própria empresa, sessões de coaching em grupo e acompanhamento individual. Não é treinamento teórico — é transformação de prática.</p>
      <h3>Acompanhamento</h3>
      <p>Após cada módulo, os líderes saem com um plano de aplicação prática. Nas sessões seguintes, revisamos o que funcionou e ajustamos o que não funcionou. Aprendizado real acontece na prática, não na sala.</p>
    `,
    faq: [
      { p: 'Quanto tempo dura?', r: 'Programas típicos variam de 4 a 6 meses, com encontros quinzenais ou mensais. Programas mais curtos tendem a não gerar mudança real.' },
      { p: 'Vale para líderes experientes?', r: 'Sim. Liderança é uma prática que se aprimora continuamente. Líderes experientes costumam ter pontos cegos que só aparecem em processos estruturados.' },
      { p: 'Como medir resultado?', r: 'Combinamos indicadores duros (turnover, clima, produtividade) e pesquisa com os liderados antes/depois do programa.' }
    ]
  },

  /* ---------- TI ---------- */
  'infraestrutura': {
    categoria: 'TI',
    catHref: 'ti.html',
    titulo: '<em>Infraestrutura</em> de TI',
    lead: 'Servidores, redes, nuvem e suporte. Toda operação moderna depende de uma infraestrutura confiável e segura — e é isso que entregamos.',
    meta: [
      { valor: '99,9%', rot: 'Disponibilidade' },
      { valor: 'Cloud', rot: 'Estratégia híbrida' },
      { valor: '24/7', rot: 'Monitoramento' }
    ],
    conteudo: `
      <h3>O que cobrimos</h3>
      <ul>
        <li>Diagnóstico e redesenho de infraestrutura</li>
        <li>Migração para nuvem (AWS, Azure, Google Cloud)</li>
        <li>Gestão de redes, firewall e VPN</li>
        <li>Backup, redundância e continuidade de negócio</li>
        <li>Monitoramento proativo e suporte técnico</li>
        <li>Gestão de fornecedores e contratos de TI</li>
      </ul>
      <h3>Como se conecta ao ESG</h3>
      <p>Data centers são grandes consumidores de energia. Migrar para a nuvem, otimizar recursos e escolher fornecedores com compromissos ambientais são decisões que impactam o desempenho ESG da empresa.</p>
      <h3>Gestão de continuidade</h3>
      <p>Elaboramos planos de continuidade e recuperação de desastres (BCP/DRP) que garantem que a empresa continue operando mesmo diante de falhas, ataques ou desastres naturais.</p>
    `,
    faq: [
      { p: 'Vocês fazem migração completa para nuvem?', r: 'Sim, quando faz sentido. Nem toda carga deve ir para nuvem — avaliamos caso a caso e recomendamos a estratégia mais adequada.' },
      { p: 'Quanto custa manter TI terceirizada?', r: 'Depende do porte e criticidade. Empresas pequenas costumam gastar menos com TI gerenciada do que mantendo equipe interna.' },
      { p: 'Atendem emergências?', r: 'Sim. Oferecemos planos com SLA de resposta em até 1 hora para incidentes críticos.' }
    ]
  },

  'seguranca-informacao': {
    categoria: 'TI',
    catHref: 'ti.html',
    titulo: 'Segurança da <em>Informação</em>',
    lead: 'Proteger dados, sistemas e reputação. Ameaças cibernéticas são reais e crescentes — pequenas e médias empresas são os principais alvos.',
    meta: [
      { valor: 'ISO', rot: '27001 alinhada' },
      { valor: '24/7', rot: 'SOC monitorado' },
      { valor: 'Zero', rot: 'Tolerância a vazamentos' }
    ],
    conteudo: `
      <h3>O que fazemos</h3>
      <ul>
        <li>Política de Segurança da Informação (PSI)</li>
        <li>Análise de vulnerabilidades e testes de invasão</li>
        <li>Firewall, antivírus, EDR e proteção de endpoints</li>
        <li>Gestão de identidades e acessos</li>
        <li>Conscientização e treinamento de colaboradores</li>
        <li>Plano de resposta a incidentes</li>
        <li>Alinhamento à ISO 27001 e LGPD</li>
      </ul>
      <h3>O elo mais fraco</h3>
      <p>Mais de 80% dos incidentes envolvem erro humano. Por isso, treinamos colaboradores continuamente: phishing simulado, workshops e comunicação interna recorrente sobre segurança.</p>
      <h3>Integração com LGPD</h3>
      <p>Segurança da informação é base técnica para conformidade com a LGPD. Trabalhamos as duas frentes em conjunto — política, controles técnicos e governança de dados.</p>
    `,
    faq: [
      { p: 'Minha empresa é pequena. Preciso me preocupar?', r: 'Sim. Criminosos miram pequenas empresas justamente porque acreditam que são mais vulneráveis. O custo de um incidente pode inviabilizar o negócio.' },
      { p: 'O que é teste de invasão (pentest)?', r: 'É uma simulação controlada de ataque cibernético, feita por especialistas, para identificar vulnerabilidades antes que criminosos as encontrem.' },
      { p: 'Vocês fazem gestão contínua ou só projeto pontual?', r: 'Fazemos os dois. A maioria dos clientes opta por gestão contínua, com monitoramento, resposta a incidentes e evolução constante.' }
    ]
  },

  'lgpd-dados': {
    categoria: 'TI',
    catHref: 'ti.html',
    titulo: '<em>LGPD</em> &amp; Governança de Dados',
    lead: 'Conformidade com a Lei Geral de Proteção de Dados não é só questão jurídica — é projeto que envolve TI, processos e cultura.',
    meta: [
      { valor: 'LGPD', rot: 'Conformidade plena' },
      { valor: 'DPO', rot: 'Encarregado' },
      { valor: 'Anual', rot: 'Revisão' }
    ],
    conteudo: `
      <h3>O que a LGPD exige</h3>
      <p>Mapeamento de dados pessoais, base legal para tratamento, políticas de privacidade, gestão de consentimento, atendimento a titulares, notificação de incidentes, indicação de encarregado (DPO) e programa de governança.</p>
      <h3>Como conduzimos o projeto</h3>
      <ul>
        <li>Mapeamento de dados pessoais (data mapping)</li>
        <li>Análise de bases legais e riscos</li>
        <li>Política de privacidade e termos de uso</li>
        <li>Contratos com operadores e parceiros</li>
        <li>Processo para requisições de titulares</li>
        <li>Plano de resposta a incidentes</li>
        <li>Treinamento e cultura de privacidade</li>
        <li>Indicação ou atuação como DPO externo</li>
      </ul>
      <h3>DPO como serviço</h3>
      <p>Atuamos como Encarregado de Dados (DPO) externo para empresas que precisam da função mas não querem contratar internamente. Assumimos o papel com responsabilidade técnica e relatórios periódicos.</p>
    `,
    faq: [
      { p: 'LGPD vale para minha empresa?', r: 'Aplica-se a qualquer empresa que trate dados pessoais de pessoas no Brasil, independente do porte ou setor.' },
      { p: 'Quanto custa uma multa por descumprimento?', r: 'Até 2% do faturamento da empresa no último exercício, limitado a R$ 50 milhões por infração. Além do dano reputacional.' },
      { p: 'Posso terceirizar o DPO?', r: 'Sim, e é comum. A ANPD permite DPO externo, desde que tenha autonomia e recursos para exercer a função.' }
    ]
  }
};

/* ============================================================
   Renderização
   ============================================================ */
(function renderSubpage() {
  const main = document.querySelector('main[data-subpage]');
  if (!main || main.dataset.rendered) return;

  const key = main.dataset.subpage;
  const d = SUBPAGES[key];
  if (!d) {
    main.innerHTML = '<section class="page-hero"><div class="container"><h1>Página não encontrada</h1><p class="page-hero__lead">Verifique se o atributo data-subpage corresponde a uma chave existente em SUBPAGES.</p></div></section>';
    main.dataset.rendered = '1';
    return;
  }

  try {
    main.innerHTML = renderTemplate(d);
    main.dataset.rendered = '1';
  } catch (err) {
    console.error('Falha ao renderizar subpage "' + key + '":', err);
    main.innerHTML = '<section class="page-hero"><div class="container"><h1>Erro ao carregar conteúdo</h1></div></section>';
    return;
  }

  // Notifica app.js para reconectar FAQ, reveal e contadores
  document.dispatchEvent(new CustomEvent('ethos:subpage-rendered'));
})();

/* Título sem tags, com siglas do tipo "NR-35" / "ISO 9001" protegidas
   contra quebra de linha no meio (ex.: "NR-" / "35"). */
function tituloPlano(titulo) {
  return titulo
    .replace(/<[^>]+>/g, '')
    .replace(/\b([A-Z]{2,})([-\s])(\d+)\b/g, '<span style="white-space:nowrap">$1$2$3</span>');
}

function renderTemplate(d) {
  return `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Você está em">
          <a href="index.html">Início</a><span>/</span>
          <a href="gestao-ambiental.html">Gestão Ambiental</a><span>/</span>
          <a href="${d.catHref}">${d.categoria}</a><span>/</span>
          <strong>${tituloPlano(d.titulo)}</strong>
        </nav>
        <h1>${d.titulo}</h1>
        <p class="page-hero__lead">${d.lead}</p>
        <div class="page-hero__meta">
          ${d.meta.map(m => `<div><strong>${m.valor}</strong><span>${m.rot}</span></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="secao">
      <div class="container">
        <div class="prose revelar">${d.conteudo}</div>
      </div>
    </section>

    <section class="secao secao--areia">
      <div class="container">
        <div class="cabecalho cabecalho--centro revelar">
          <span class="eyebrow">Dúvidas frequentes</span>
          <h2 class="titulo">Perguntas sobre <em>${tituloPlano(d.titulo)}</em>.</h2>
        </div>
        <div class="faq revelar" style="max-width:820px;margin-inline:auto">
          ${d.faq.map((f,i) => `
            <div class="faq__item">
              <button class="faq__pergunta" aria-expanded="false">
                ${f.p}
                <span class="faq__icone" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </button>
              <div class="faq__resposta"><p>${f.r}</p></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="secao">
      <div class="container">
        <div class="cta-final revelar">
          <h2>Precisa de apoio com <em>${tituloPlano(d.titulo)}</em>?</h2>
          <p>Fale com um especialista da Ethos e Terra. Diagnóstico inicial sem compromisso.</p>
          <div class="cta-final__acoes">
            <a href="contato.html" class="btn btn--primario">Falar com especialista</a>
            <a href="${d.catHref}" class="btn btn--contorno">Voltar para ${d.categoria}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}