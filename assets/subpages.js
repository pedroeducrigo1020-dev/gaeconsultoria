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
    titulo: 'Etapas da <em>Gestão de Marketing</em>',
    lead: 'Para funcionar de forma eficiente, a gestão de marketing segue um ciclo contínuo: pesquisa, estratégia, plano, execução e mensuração.',
    meta: [
      { valor: '5', rot: 'Etapas do ciclo' },
      { valor: 'STP', rot: 'Segmentação, Target e Posicionamento' },
      { valor: 'A/B', rot: 'Testes para melhorar o ROI' }
    ],
    conteudo: `
      <h3>1. Pesquisa e análise de mercado</h3>
      <ul>
        <li>Mapeamento do comportamento do consumidor, concorrentes e tendências do setor.</li>
        <li>Análise de pontos fortes, fracos, oportunidades e ameaças (Matriz SWOT/FOFA).</li>
      </ul>
      <h3>2. Estratégia (Segmentação, Target e Posicionamento — STP)</h3>
      <ul>
        <li><strong>Segmentação:</strong> divisão do mercado em grupos com necessidades semelhantes.</li>
        <li><strong>Target (público-alvo/persona):</strong> escolha de qual segmento específico a empresa vai focar.</li>
        <li><strong>Posicionamento:</strong> como a marca quer ser lembrada na mente do cliente em relação aos concorrentes.</li>
      </ul>
      <h3>3. Elaboração do plano de marketing</h3>
      <ul>
        <li>Definição de metas claras (por exemplo, aumentar as vendas em 25% no semestre ou reduzir o custo de aquisição de clientes).</li>
        <li>Escolha das estratégias e táticas (Inbound Marketing, Outbound, Marketing de Conteúdo, SEO, Tráfego Pago etc.).</li>
        <li>Alocação de orçamento e cronograma de ações.</li>
      </ul>
      <h3>4. Execução operacional</h3>
      <ul>
        <li>Produção de campanhas, peças publicitárias, eventos, landing pages, e-mails e materiais de vendas.</li>
        <li>Alinhamento direto com a equipe comercial/vendas para garantir o aproveitamento dos leads gerados.</li>
      </ul>
      <h3>5. Mensuração e otimização</h3>
      <ul>
        <li>Acompanhamento contínuo dos indicadores de desempenho (KPIs).</li>
        <li>Reajuste de estratégias e realização de testes A/B para melhorar o retorno sobre o investimento (ROI).</li>
      </ul>
    `,
    faq: [
      { p: 'O que é a Matriz SWOT/FOFA?', r: 'É a análise de pontos fortes, fracos, oportunidades e ameaças, feita na etapa de pesquisa e análise de mercado.' },
      { p: 'O que significa STP?', r: 'Segmentação, Target e Posicionamento: dividir o mercado em grupos, escolher o segmento em que a empresa vai focar e definir como a marca quer ser lembrada em relação aos concorrentes.' },
      { p: 'Para que servem os testes A/B?', r: 'Para reajustar estratégias na etapa de mensuração e otimização e melhorar o retorno sobre o investimento (ROI).' }
    ]
  },

  'marketing-digital': {
    categoria: 'Marketing',
    catHref: 'marketing.html',
    titulo: 'Plano de <em>Marketing</em>',
    lead: 'Elaborar um plano de marketing estruturado é o que transforma o marketing de um custo incerto em um motor previsível de vendas. O roteiro vai do diagnóstico à mensuração dos resultados.',
    meta: [
      { valor: '7', rot: 'Passos do plano' },
      { valor: 'SMART', rot: 'Metas específicas e mensuráveis' },
      { valor: '4', rot: 'Canais na tabela de alocação' }
    ],
    conteudo: `
      <h3>Diagnóstico e definição</h3>
      <p><strong>1. Diagnóstico de mercado e análise SWOT — onde a empresa está hoje?</strong></p>
      <ul>
        <li><strong>Análise interna:</strong> liste forças (atendimento ágil, produto exclusivo) e fraquezas (marca pouco conhecida, site desatualizado).</li>
        <li><strong>Análise externa:</strong> liste oportunidades do mercado (crescimento de um novo nicho) e ameaças (entrada de concorrentes com preços mais baixos).</li>
        <li><strong>Mapeamento de concorrentes:</strong> identifique os três principais concorrentes diretos, analisando o que fazem bem e onde deixam a desejar.</li>
      </ul>
      <p><strong>2. Definição de público-alvo e persona — com quem a empresa vai falar?</strong> Evite tentar falar com “todo mundo”.</p>
      <ul>
        <li><strong>Perfil demográfico:</strong> idade, gênero, localização, cargo ou faixa de renda.</li>
        <li><strong>Dores e necessidades:</strong> qual problema urgente essa pessoa tem que o produto ou serviço resolve?</li>
        <li><strong>Comportamento de compra:</strong> onde ela busca informação (Instagram, Google, LinkedIn, indicação de amigos)?</li>
        <li><strong>Interesses:</strong> assuntos e atividades que despertam o interesse desse consumidor.</li>
        <li><strong>Hábitos de consumo:</strong> como, quando e onde essa pessoa costuma comprar.</li>
        <li><strong>Motivações de compra:</strong> fatores que influenciam a decisão de adquirir um produto ou serviço.</li>
      </ul>
      <p><strong>3. Posicionamento e Proposta Única de Valor (PUV) — como a empresa quer ser vista?</strong> Defina claramente o diferencial competitivo.</p>
      <ul>
        <li>Responda: “Por que o cliente deve escolher a sua empresa e não o concorrente?”</li>
        <li>Defina o tom de voz da marca (formal, descontraído, educacional, especialista) e a oferta central.</li>
      </ul>
      <p><strong>4. Objetivos e metas SMART — onde a empresa quer chegar?</strong> As metas devem ser específicas, mensuráveis, atingíveis, relevantes e temporais.</p>
      <ul>
        <li><strong>Exemplo ruim:</strong> “Quero vender mais no Instagram.”</li>
        <li><strong>Exemplo SMART:</strong> “Aumentar a geração de leads qualificados em 35% nos próximos 6 meses através do site e tráfego pago.”</li>
      </ul>
      <p><strong>5. Estratégias de comunicação e canais — quais canais e táticas utilizar?</strong> Escolha canais alinhados a onde a persona costuma estar.</p>
      <ul>
        <li><strong>Inbound Marketing / Conteúdo:</strong> blog posts, e-books, vídeos educativos e redes sociais para atrair clientes organicamente.</li>
        <li><strong>Mídia paga (tráfego pago):</strong> Google Ads (para captar quem já busca pelo produto) e Meta Ads (Instagram e Facebook), para aumentar o reconhecimento da marca, atrair clientes e gerar conversões.</li>
        <li><strong>Outbound / vendas diretas:</strong> prospecção ativa via e-mail ou telefone (comum em negócios B2B).</li>
        <li><strong>Marketing de relacionamento:</strong> automação de e-mail marketing, réguas de relacionamento via WhatsApp e programas de fidelidade, respeitando a autorização dos clientes.</li>
      </ul>
      <h3>Planejamento, execução e resultados</h3>
      <p><strong>6. Orçamento, cronograma e responsáveis — quanto vai custar e quem faz o quê?</strong></p>
      <ul>
        <li><strong>Orçamento (budget):</strong> qual o investimento mensal ou anual disponível para anúncios, ferramentas, equipe e agências?</li>
        <li><strong>Cronograma de ações:</strong> calendário com prazos para o lançamento de campanhas e a produção de conteúdo.</li>
        <li><strong>Matriz de responsabilidade:</strong> quem executará cada tarefa (equipe interna, consultor ou agência terceirizada)?</li>
      </ul>
      <p><strong>7. KPIs e ciclo de otimização — como saber se está funcionando?</strong> Determine as métricas acompanhadas semanal ou mensalmente.</p>
      <ul>
        <li><strong>Atração:</strong> visitantes no site, alcance nas redes sociais e taxa de cliques (CTR).</li>
        <li><strong>Conversão:</strong> número de leads gerados e custo por lead (CPL).</li>
        <li><strong>Negócio:</strong> CAC, ROI e faturamento gerado pelo marketing.</li>
        <li><strong>Retenção:</strong> percentual de clientes que continuam utilizando os produtos ou serviços durante determinado período.</li>
      </ul>
      <h3>Resumo: tabela de alocação de canais</h3>
      <ul>
        <li><strong>Google Ads:</strong> capturar demanda pronta (fundo de funil), com anúncios de pesquisa para palavras-chave com intenção de compra. Frequência: contínuo.</li>
        <li><strong>Instagram / TikTok:</strong> gerar autoridade e atrair novos públicos, com vídeos curtos (Reels), bastidores e caixas de perguntas nos Stories. Frequência: 3 a 5 vezes por semana.</li>
        <li><strong>E-mail / WhatsApp:</strong> nutrir o relacionamento e converter em reuniões/vendas, com sequências automáticas de boas-vindas e ofertas para clientes cadastrados, mediante autorização. Frequência: semanal.</li>
        <li><strong>Site / Blog:</strong> posicionamento orgânico (SEO) no Google, com artigos educativos que tiram as dúvidas mais comuns dos clientes. Frequência: quinzenal.</li>
      </ul>
    `,
    faq: [
      { p: 'O que é uma meta SMART?', r: 'Uma meta específica, mensurável, atingível, relevante e temporal. Exemplo: aumentar a geração de leads qualificados em 35% nos próximos 6 meses através do site e tráfego pago.' },
      { p: 'O que é uma persona?', r: 'É a representação do cliente ideal: perfil demográfico, dores e necessidades, comportamento de compra, interesses, hábitos de consumo e motivações de compra.' },
      { p: 'Qual a diferença entre Google Ads e Meta Ads?', r: 'O Google Ads capta quem já busca pelo produto; o Meta Ads (Instagram e Facebook) é usado para aumentar o reconhecimento da marca, atrair clientes e gerar conversões.' },
      { p: 'Com que frequência cada canal é trabalhado?', r: 'Google Ads é contínuo; Instagram/TikTok, de 3 a 5 vezes por semana; e-mail/WhatsApp, semanal; site/blog, quinzenal.' }
    ]
  },

  'comunicacao-interna': {
    categoria: 'Marketing',
    catHref: 'marketing.html',
    titulo: 'KPIs e <em>Tendências</em>',
    lead: 'Uma gestão de marketing orientada a dados (data-driven) acompanha métricas de desempenho e se mantém atenta às tendências do setor.',
    meta: [
      { valor: '5', rot: 'Indicadores principais' },
      { valor: '3', rot: 'Tendências atuais' },
      { valor: 'Data-driven', rot: 'Gestão orientada a dados' }
    ],
    conteudo: `
      <h3>Principais indicadores de desempenho (KPIs)</h3>
      <ul>
        <li><strong>CAC (Custo de Aquisição de Cliente):</strong> valor médio que a empresa investe em marketing e vendas para conquistar cada novo cliente.</li>
        <li><strong>LTV (Lifetime Value):</strong> valor total que um cliente gera para a empresa durante todo o período de relacionamento com a marca.</li>
        <li><strong>ROI (Retorno sobre o Investimento):</strong> indicador que mede o retorno financeiro em relação ao que foi investido.</li>
        <li><strong>Taxa de conversão:</strong> porcentagem de visitantes ou leads que realizam a ação desejada (por exemplo, preencher um formulário ou comprar um produto).</li>
        <li><strong>NPS (Net Promoter Score):</strong> mede a disposição dos clientes em recomendar uma empresa, produto ou serviço a outras pessoas.</li>
      </ul>
      <h3>Tendências atuais na gestão de marketing</h3>
      <ul>
        <li><strong>Marketing de Conteúdo e Inbound:</strong> atrair potenciais clientes criando conteúdo relevante e educativo, em vez de apenas “empurrar” anúncios.</li>
        <li><strong>Uso de Inteligência Artificial:</strong> personalização de ofertas em massa, automação de e-mails, análise preditiva e criação assistida de conteúdo.</li>
        <li><strong>Omnichannel:</strong> integração fluida entre todos os canais de contato do cliente (loja física, WhatsApp, e-commerce e redes sociais).</li>
      </ul>
    `,
    faq: [
      { p: 'O que o CAC mede?', r: 'O valor médio que a empresa investe em marketing e vendas para conquistar cada novo cliente.' },
      { p: 'Qual a diferença entre ROI e LTV?', r: 'O ROI mede o retorno financeiro em relação ao que foi investido; o LTV mede o valor total que um cliente gera durante todo o relacionamento com a marca.' },
      { p: 'O que é omnichannel?', r: 'É a integração fluida entre todos os canais de contato do cliente: loja física, WhatsApp, e-commerce e redes sociais.' }
    ]
  },

  /* ---------- QUALIDADE ---------- */
  'iso-9001': {
    categoria: 'Qualidade',
    catHref: 'qualidade.html',
    titulo: 'ISO <em>9001</em> e GQT / TQM',
    lead: 'Gestão da qualidade para padronizar processos, reduzir erros e desperdícios e aumentar a satisfação dos clientes e a competitividade da empresa.',
    meta: [
      { valor: 'ISO 9001', rot: 'Gestão da qualidade' },
      { valor: 'TQM', rot: 'Todos os setores envolvidos' },
      { valor: 'Cliente', rot: 'Foco na satisfação' }
    ],
    conteudo: `
      <h3>GQT / TQM (Gestão da Qualidade Total)</h3>
      <ul>
        <li>Envolve todos os setores da empresa na busca pela qualidade e na eliminação de falhas.</li>
        <li>Tem foco no cliente, na melhoria contínua e no trabalho em equipe.</li>
        <li>Gera mais eficiência, reduz custos e aumenta a satisfação dos clientes.</li>
      </ul>
      <p><em>Qualidade é responsabilidade de todos!</em></p>
      <h3>ISO 9001 — Gestão da Qualidade</h3>
      <ul>
        <li>Norma internacional para o Sistema de Gestão da Qualidade (SGQ).</li>
        <li>Ajuda a padronizar processos, reduzir falhas e melhorar os serviços.</li>
        <li>Aumenta a satisfação dos clientes e a competitividade da empresa.</li>
      </ul>
      <h3>Atuação da consultoria</h3>
      <p>Ajudamos na implementação e na certificação da ISO 9001, identificando problemas e oportunidades de melhoria e aplicando as ferramentas da qualidade.</p>
    `,
    faq: [
      { p: 'O que é GQT / TQM?', r: 'É a Gestão da Qualidade Total, que envolve todos os setores na busca por qualidade e eliminação de falhas.' },
      { p: 'O que a ISO 9001 ajuda a fazer?', r: 'Padronizar processos, reduzir falhas, melhorar serviços, aumentar a satisfação dos clientes e a competitividade da empresa.' },
      { p: 'Quais benefícios o TQM traz?', r: 'Maior eficiência, redução de custos e aumento da satisfação dos clientes, com foco no cliente, melhoria contínua e trabalho em equipe.' },
      { p: 'O que é o SGQ?', r: 'É o Sistema de Gestão da Qualidade, para o qual a ISO 9001 é a norma internacional.' }
    ]
  },

  'iso-14001': {
    categoria: 'Qualidade',
    catHref: 'qualidade.html',
    titulo: 'ISO <em>14001</em> e SGA',
    lead: 'A norma internacional do Sistema de Gestão Ambiental ajuda a controlar impactos ambientais e a cumprir obrigações legais, promovendo o desenvolvimento sustentável.',
    meta: [
      { valor: 'ISO 14001', rot: 'Gestão ambiental' },
      { valor: 'SGA', rot: 'Sistema de Gestão Ambiental' },
      { valor: '3', rot: 'Recursos: resíduos, água e energia' }
    ],
    conteudo: `
      <h3>ISO 14001 — Gestão Ambiental</h3>
      <ul>
        <li>Norma internacional para o Sistema de Gestão Ambiental.</li>
        <li>Ajuda a controlar os impactos ambientais, como resíduos, consumo de água e energia, e o cumprimento de obrigações legais.</li>
        <li>Contribui para o desenvolvimento sustentável da empresa.</li>
      </ul>
      <h3>SGA — Sistema de Gestão Ambiental</h3>
      <p>Conjunto de processos que controla os aspectos e impactos ambientais, incluindo resíduos, água, energia, licenças e conformidade legal.</p>
      <h3>Atuação da consultoria</h3>
      <p>Orientamos empresas na redução de impactos ambientais e ajudamos na implementação e certificação da ISO 14001.</p>
    `,
    faq: [
      { p: 'O que é a ISO 14001?', r: 'É a norma internacional do Sistema de Gestão Ambiental (SGA), que ajuda a controlar impactos ambientais e cumprir obrigações legais.' },
      { p: 'O que o SGA controla?', r: 'Aspectos e impactos ambientais, incluindo resíduos, água, energia, licenças e conformidade legal.' },
      { p: 'Qual o objetivo da ISO 14001?', r: 'Promover o desenvolvimento sustentável, controlando impactos ambientais e cumprindo as obrigações legais.' }
    ]
  },

  'auditorias': {
    categoria: 'Qualidade',
    catHref: 'qualidade.html',
    titulo: 'Ferramentas da <em>Qualidade</em>',
    lead: 'PDCA, 5S, Ishikawa e Kaizen: métodos de melhoria contínua e de organização que ajudam a padronizar processos e reduzir erros e desperdícios.',
    meta: [
      { valor: '4', rot: 'Ferramentas' },
      { valor: 'PDCA', rot: 'Ciclo de 4 etapas' },
      { valor: '5S', rot: '5 sensos' }
    ],
    conteudo: `
      <h3>PDCA</h3>
      <p>Método de melhoria contínua, com 4 etapas:</p>
      <ul>
        <li><strong>Planejar:</strong> definir o problema, estabelecer metas e planejar ações.</li>
        <li><strong>Executar:</strong> colocar o plano em prática.</li>
        <li><strong>Checar:</strong> verificar os resultados e comparar com as metas.</li>
        <li><strong>Agir:</strong> corrigir falhas e padronizar o que funcionou.</li>
      </ul>
      <p><strong>Exemplo:</strong> corrigir erros em relatórios, investigar a causa e criar procedimentos para evitar que se repitam.</p>
      <h3>5S</h3>
      <p>Método de organização do ambiente de trabalho, com 5 sensos. Melhora a produtividade e reduz desperdícios.</p>
      <ul>
        <li><strong>Seiri (Utilização):</strong> manter apenas o necessário.</li>
        <li><strong>Seiton (Organização):</strong> organizar os materiais.</li>
        <li><strong>Seiso (Limpeza):</strong> manter o ambiente limpo.</li>
        <li><strong>Seiketsu (Padronização):</strong> criar padrões e procedimentos.</li>
        <li><strong>Shitsuke (Disciplina):</strong> seguir e manter os padrões.</li>
      </ul>
      <h3>Ishikawa (Espinha de Peixe)</h3>
      <ul>
        <li>Ferramenta para identificar as possíveis causas de um problema.</li>
        <li>Analisa diferentes categorias (por exemplo: pessoas, processos, materiais, máquinas, métodos e meio ambiente).</li>
        <li>Ajuda a encontrar a causa raiz, e não apenas os sintomas.</li>
      </ul>
      <h3>Kaizen</h3>
      <ul>
        <li>Filosofia de melhoria contínua.</li>
        <li>Incentiva pequenas mudanças constantes nos processos.</li>
        <li>Envolve toda a equipe e gera grandes resultados ao longo do tempo.</li>
      </ul>
      <p><em>Pequenas melhorias geram grandes resultados!</em></p>
    `,
    faq: [
      { p: 'Quais são as etapas do PDCA?', r: 'Planejar (definir problema e metas), Executar (colocar em prática), Checar (verificar resultados) e Agir (corrigir falhas e padronizar).' },
      { p: 'Quais são os 5 sensos do 5S?', r: 'Seiri (Utilização), Seiton (Organização), Seiso (Limpeza), Seiketsu (Padronização) e Shitsuke (Disciplina).' },
      { p: 'Para que serve o diagrama de Ishikawa?', r: 'Para identificar a causa raiz de um problema, analisando categorias como pessoas, processos, materiais, máquinas, métodos e meio ambiente.' },
      { p: 'O que é Kaizen?', r: 'Uma filosofia de melhoria contínua que incentiva pequenas mudanças constantes nos processos, envolvendo toda a equipe para gerar grandes resultados.' },
      { p: 'Qual um exemplo de uso do PDCA?', r: 'Corrigir erros em relatórios, investigar a causa e criar procedimentos para evitar que se repitam.' }
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
    titulo: 'Atração, <em>Recrutamento</em> e Seleção',
    lead: 'Atrair, avaliar e selecionar os melhores talentos do mercado, alinhados à cultura e às competências exigidas pela empresa cliente, com uma proposta competitiva que atraia e retenha profissionais qualificados.',
    meta: [
      { valor: '4', rot: 'Etapas do funil de vagas' },
      { valor: 'Fit', rot: 'Cultural + técnico' },
      { valor: 'PDI', rot: 'Próximo passo após a admissão' }
    ],
    conteudo: `
      <h3>Métodos e etapas de execução</h3>
      <ul>
        <li><strong>Alinhamento de perfil:</strong> reunião com a liderança para mapear as competências técnicas (hard skills) e comportamentais (soft skills) necessárias para o cargo.</li>
        <li><strong>Seleção e estruturação do pacote de benefícios:</strong> pesquisa de mercado, composição do pacote e uso dele como diferencial competitivo (detalhes abaixo).</li>
        <li><strong>Divulgação estratégica da vaga:</strong> publicação em portais de emprego especializados, redes profissionais (LinkedIn) e parcerias com instituições de ensino e escolas técnicas da região.</li>
        <li><strong>Triagem e seleção (funil de vagas):</strong> triagem de currículos, entrevista com o RH, testes técnicos e dinâmicas, e entrevista com o gestor.</li>
        <li><strong>Proposta e admissão:</strong> apresentação da proposta salarial, alinhamento de expectativas e condução do processo burocrático de admissão.</li>
      </ul>
      <h3>Pacote de benefícios</h3>
      <ul>
        <li><strong>Pesquisa de mercado:</strong> análise dos benefícios oferecidos pelo setor para garantir competitividade.</li>
        <li><strong>Composição do pacote:</strong> benefícios flexíveis e corporativos, como vale-refeição/alimentação, plano de saúde, auxílio-educação, suporte à saúde mental e day off de aniversário. Os benefícios são analisados caso a caso, conforme a vontade da empresa.</li>
        <li><strong>Diferencial competitivo:</strong> uso do pacote como ferramenta de Employer Branding, fortalecendo a marca da empresa frente ao mercado.</li>
      </ul>
      <h3>Funil de vagas</h3>
      <ul>
        <li><strong>Triagem de currículos:</strong> filtragem inicial e mapeamento ativo de candidatos.</li>
        <li><strong>Entrevista (RH):</strong> avaliação do alinhamento entre os valores do candidato e a cultura da empresa.</li>
        <li><strong>Testes técnicos e dinâmicas:</strong> casos práticos para avaliar a capacidade de resolução de problemas e o trabalho em equipe.</li>
        <li><strong>Entrevista com o gestor:</strong> apresentação dos finalistas recomendados para a decisão final da liderança.</li>
      </ul>
      <h3>Da admissão à integração</h3>
      <p>Na proposta e admissão, o profissional é preparado para a etapa de Integração e PDI, que dá continuidade ao ciclo de RH.</p>
    `,
    faq: [
      { p: 'Como é definido o perfil da vaga?', r: 'Em reunião com a liderança, mapeando as competências técnicas (hard skills) e comportamentais (soft skills) necessárias para o cargo.' },
      { p: 'Quais benefícios podem compor o pacote?', r: 'Vale-refeição/alimentação, plano de saúde, auxílio-educação, suporte à saúde mental e day off de aniversário, entre outros. Os benefícios são analisados para cada caso e conforme a vontade da empresa.' },
      { p: 'Quais são as etapas do funil de vagas?', r: 'Triagem de currículos, entrevista com o RH, testes técnicos ou dinâmicas e entrevista com o gestor, que decide entre os finalistas recomendados.' },
      { p: 'Onde as vagas são divulgadas?', r: 'Em portais de emprego especializados, em redes profissionais como o LinkedIn e por meio de parcerias com instituições de ensino e escolas técnicas da região.' }
    ]
  },

  'clima-psicossocial': {
    categoria: 'Recursos Humanos',
    catHref: 'rh.html',
    titulo: 'Avaliação do <em>Cenário Atual</em> e Pós-mudanças',
    lead: 'Entender a situação da empresa e saber os pontos que precisam melhorar. Ao final do ciclo, os mesmos métodos são usados para medir o que mudou.',
    meta: [
      { valor: '9', rot: 'Métodos de avaliação' },
      { valor: '180° / 360°', rot: 'Avaliações de desempenho' },
      { valor: 'Passo 1 e 5', rot: 'Mesmas métricas na reavaliação' }
    ],
    conteudo: `
      <h3>Objetivo</h3>
      <p>Entender a situação da empresa e saber os pontos que precisam melhorar.</p>
      <h3>Métodos</h3>
      <ul>
        <li><strong>Entrevistas de acompanhamento:</strong> conversar com o funcionário para saber como está sendo a experiência.</li>
        <li><strong>Feedback do supervisor:</strong> verificar suas dificuldades e oferecer orientações.</li>
        <li><strong>Avaliação 180°:</strong> o funcionário é avaliado pelo gestor e pode participar da avaliação conjunta.</li>
        <li><strong>Avaliação 360°:</strong> reúne opiniões de gestores, colegas, subordinados (quando houver) e do próprio funcionário.</li>
        <li><strong>Avaliação por metas:</strong> verifica se os objetivos estabelecidos foram alcançados.</li>
        <li><strong>Avaliação por competências:</strong> analisa habilidades como comunicação, organização, liderança e trabalho em equipe.</li>
        <li><strong>Pesquisa de satisfação:</strong> verifica se os funcionários estão satisfeitos com o ambiente de trabalho.</li>
        <li><strong>Análise da taxa de turnover:</strong> calcula a frequência com que os funcionários são substituídos.</li>
        <li><strong>Análise do clima organizacional:</strong> identifica problemas de relacionamento, liderança, motivação e condições de trabalho.</li>
      </ul>
      <h3>Avaliação pós-mudanças</h3>
      <p>Reavaliação do cenário para entender os avanços, os retrocessos e o que continua igual, usando as mesmas métricas do passo 1.</p>
    `,
    faq: [
      { p: 'Qual a diferença entre a avaliação 180° e a 360°?', r: 'Na 180°, o funcionário é avaliado pelo gestor e pode participar da avaliação conjunta. Na 360°, reúnem-se também as opiniões de colegas, de subordinados (quando houver) e do próprio funcionário.' },
      { p: 'O que a análise de clima organizacional identifica?', r: 'Problemas de relacionamento, liderança, motivação e condições de trabalho.' },
      { p: 'O que é a análise da taxa de turnover?', r: 'É o cálculo da frequência com que os funcionários são substituídos na empresa.' },
      { p: 'Como é feita a avaliação pós-mudanças?', r: 'Reavalia-se o cenário com as mesmas métricas do passo 1, para entender os avanços, os retrocessos e o que continua igual.' }
    ]
  },

  'treinamento-lideranca': {
    categoria: 'Recursos Humanos',
    catHref: 'rh.html',
    titulo: 'Integração, <em>PDI</em> e Desligamento',
    lead: 'A integração e o desenvolvimento estão entre as ações mais satisfatórias do RH. Já o desligamento é conduzido com conversa, transparência e apoio ao funcionário.',
    meta: [
      { valor: 'PDI', rot: 'Plano individual' },
      { valor: '2', rot: 'Etapas: integração e desligamento' },
      { valor: '1:1', rot: 'Reunião antes do desligamento' }
    ],
    conteudo: `
      <h3>Integração e acolhimento</h3>
      <p>A integração e o desenvolvimento estão entre as ações mais satisfatórias do RH. A partir delas vemos o crescimento dos nossos colaboradores.</p>
      <p>A empresa planeja usar a criação de um PDI para que cada membro da equipe tenha seu próprio desenvolvimento, focado nas suas necessidades.</p>
      <h3>O que é PDI?</h3>
      <p>É um plano de desenvolvimento dos colaboradores focado em suas habilidades e competências. Com ele, é mais fácil alocar o talento certo em cargos, funções e atividades alinhados com suas competências, o que, ao se tornar uma rotina, ajuda a criar experiência e conhecimento.</p>
      <h3>Considerações finais</h3>
      <p>O PDI é uma necessidade caso a empresa valorize os membros da equipe como indivíduos e queira que cada um tenha seu próprio progresso individual para atingir a máxima eficiência.</p>
      <h3>Desligamento</h3>
      <p>O desligamento pode ter vários motivos: falta de desempenho, problema de gestão de clima, corte de gastos, pedido de demissão, entre outros.</p>
      <p>Antes do desligamento, será feita uma reunião com o funcionário para conversar e entender a situação, saber o motivo de querer sair e auxiliar caso ele tenha alguma dificuldade.</p>
      <p><strong>Corte de gastos:</strong> nesse cenário, será feita uma reunião com o funcionário e o motivo será explicado. Se necessário, ele terá um tempo para conseguir um emprego antes de ser desligado definitivamente.</p>
    `,
    faq: [
      { p: 'O que é um PDI?', r: 'É um plano de desenvolvimento dos colaboradores, focado em suas habilidades e competências.' },
      { p: 'Qual a vantagem de usar o PDI?', r: 'Facilita alocar o talento certo em cargos, funções e atividades alinhados às suas competências, o que, ao virar rotina, ajuda a criar experiência e conhecimento.' },
      { p: 'O que acontece antes de um desligamento?', r: 'Uma reunião com o funcionário para conversar, entender a situação, saber o motivo de querer sair e auxiliá-lo caso tenha alguma dificuldade.' },
      { p: 'Como funciona o desligamento por corte de gastos?', r: 'É feita uma reunião em que o motivo é explicado. Se necessário, o funcionário terá um tempo para conseguir um emprego antes de ser desligado definitivamente.' }
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