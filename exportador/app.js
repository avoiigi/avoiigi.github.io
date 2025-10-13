// Dados do currículo
const originalData = {
  "personalInfo": {
    "nome": "Giovanna Santos",
    "titulo": "Business Analytics & Dados",
    "subtitulo": "Estudante de Ciência e Tecnologia | Analista de Dados Júnior",
    "email": "ggkiehair@gmail.com",
    "telefone": "(11) 94119-1015",
    "linkedin": "linkedin.com/in/avoiig",
    "localizacao": "São Paulo, SP"
  },
  "objetivo": "Busco posições júnior, assistente ou estágio em Business Analytics e Dados, onde possa aplicar minha experiência em análise de dados, automação de processos e business intelligence para gerar insights estratégicos e apoiar a tomada de decisões baseadas em dados. Busco um ambiente competitivo e meritocrático",
  "sobre": "Graduanda em Ciência e Tecnologia com foco em Engenharia Aeroespacial na UFABC, com experiência prática em Business Operations, análise de dados e automação. Minha trajetória combina estratégia, operações e tecnologia, com foco em transformar dados em insights acionáveis. Experiente em ferramentas de BI, linguagens de programação para análise de dados, e metodologias ágeis. Sou movida pela curiosidade e pelo desejo de transformar desafios complexos em soluções práticas e inovadoras através da análise de dados.",
  "experiencias": [
    {
      "cargo": "Business Operations e Estratégia",
      "empresa": "Avla Brasil",
      "periodo": "setembro de 2024 - Presente",
      "descricao": "• Análise de dados e métricas de crescimento para gerar insights estratégicos\n• Gestão e otimização de CRMs (Pipedrive) com foco em análise de performance\n• Definição, acompanhamento e análise de OKRs e KPIs através de dashboards\n• Automação de fluxos de trabalho (Python, JavaScript, Apps Script)\n• Desenvolvimento de relatórios gerenciais e análises finaceiras (FP&A, P&L)\n• Implementação de pipelines de dados e automações ETL\n• Cruzamento e modelagem de dados em múltiplas fontes para business intelligence"
    },
    {
      "cargo": "Marketing Manager",
      "empresa": "Sirius UFABC", 
      "periodo": "março de 2025 - Presente",
      "descricao": "• Análise de performance de campanhas e métricas de engajamento\n• Criação de dashboards para acompanhamento de KPIs de marketing\n• Análise de dados de redes sociais e comportamento do público\n• Desenvolvimento de relatórios de performance e ROI de campanhas\n• Utilização de ferramentas de analytics para otimização de estratégias"
    },
    {
      "cargo": "Operations Analyst",
      "empresa": "Green Team Hacker Club",
      "periodo": "junho de 2023 - Presente",
      "descricao": "• Análise de operações e otimização de processos através de dados. Conhecimento sobre a LGPD, Modelagem de dados, conhecimento em segurança da informação e administração. \n• Desenvolvimento de automações e análise de eficiência operacional\n• Implementação de métricas e indicadores de performance\n• Análise de dados para tomada de decisões estratégicas"
    },
    {
      "cargo": "Assistente Administrativa",
      "empresa": "Sertrading",
      "periodo": "abril de 2023 - setembro de 2024", 
      "descricao": "• Análise crítica de documentações e tratamento de dados financeiros\n• Automação de processos de triagem de pagamentos e controle de despesas\n• Desenvolvimento de planilhas e relatórios para acompanhamento de transações\n• Análise de dados para apuração de transações e controle administrativo"
    }
  ],
  "formacao": [
    {
      "curso": "Bacharelado em Ciência e Tecnologia",
      "instituicao": "Universidade Federal do ABC - UFABC",
      "detalhes": "Foco em Engenharia Aeroespacial",
      "periodo": "maio de 2023 - dezembro de 2026 • Em curso"
    },
    {
      "curso": "Instituto Confúcio - Língua Chinesa",
      "instituicao": "UNESP - Universidade Estadual Paulista",
      "detalhes": "Língua Chinesa e Literaturas de Língua Chinesa",
      "periodo": "fevereiro de 2025"
    }
  ],
  "habilidades": {
    "analise_dados_bi": [
      "SQL (PostgreSQL, Snowflake, T-SQL)",
      "Python (Pandas, NumPy, Scikit-learn)",
      "Power BI",
      "Looker",
      "Tableau (Estudos)", 
      "QuickSight",
      "Metabase (Estudos)",
      "Excel Avançado - VBA, Power Pivot, Data modeling",
      "Google Sheets",
      "Power Query",
      "Coleta e limpeza de grandes volumes de dados",
      "Análise de APIs, CRMs e logs",
      "Framework: Knime e Asterix"
    ],
    "modelagem_estatistica": [
      "Modelos preditivos",
      "Análises estatísticas", 
      "Previsões de comportamento",
      "Análise de séries temporais",
      "Estatística descritiva e inferencial",
      "Machine Learning supervisionado e não supervisionado (Estudos)"
    ],
    "financeiro_negocio": [
      "FP&A (Financial Planning & Analysis)",
      "Análise de P&L",
      "Elaboração de relatórios gerenciais",
      "Business Analysis",
      "Levantamento de requisitos",
      "Mapeamento de processos",
      "Testes funcionais (regressão e integração)"
    ],
    "automacao_integracao": [
      "Python para automação",
      "JavaScript (Estudos)",
      "Make (Integromat)",
      "Apps Script", 
      "Integração com Pipedrive",
      "APIs REST",
      "ETL (Extract, Transform, Load)",
      "Airflow",
      "dbt (data build tool)",
      "Automação de relatórios"
    ],
    "cloud_infraestrutura": [
      "AWS (Amazon Web Services) (Estudos)",
      "Análise e automação em nuvem (Estudos)",
      "Golang (Estudos)",
      "Pipelines de dados",
      "Monitoramento de sistemas"
    ],
    "machine_learning_ia": [
      "Machine Learning",
      "LLMs (ChatGPT, LLaMA) (Estudos)",
      "Processamento de Linguagem Natural (PNL) (Estudos)",
      "CNN (Convolutional Neural Networks) (Estudos)",
      "Prompter em IA",
      "Análise de chatbots e NLP (Estudos)"
    ],
    "metodologias_comunicacao": [
      "Scrum",
      "Metodologias Ágeis",
      "JIRA",
      "Kanban", 
      "OKRs e KPIs",
      "Interface com stakeholders",
      "Comunicação técnica",
      "Apresentações de dados",
      "Tradução de insights em ações de negócio"
    ],
    "ferramentas_crm": [
      "Pipedrive (gestão e automação)",
      "CRM Analytics",
      "Gestão de pipelines de vendas",
      "Relatórios de performance comercial",
      "Automação de follow-ups",
      "Salesforce (Estudos)"
    ]
  },
  "idiomas": [
    {
      "idioma": "Português", 
      "nivel": "Nativo"
    },
    {
      "idioma": "Espanhol",
      "nivel": "Intermédiario"
    },
    {
      "idioma": "Inglês",
      "nivel": "Avançado (apresentações e negociações)"
    },
    {
      "idioma": "Chinês",
      "nivel": "Básico"
    },
    {
      "idioma": "Coreano", 
      "nivel": "Básico"
    }
  ],
  "certificacoes": [
    "Análise de Malware Starter",
    "Six Sigma: White belt"
  ]
};

// Dados atuais (cópia dos dados originais)
let currentData = JSON.parse(JSON.stringify(originalData));

// Variáveis de controle
let currentEditingSection = '';
let currentSkillFilter = 'all';

// Nomes das categorias de habilidades
const categoryNames = {
  'analise_dados_bi': 'Análise de Dados & BI',
  'modelagem_estatistica': 'Modelagem & Estatística', 
  'financeiro_negocio': 'Financeiro & Negócio',
  'automacao_integracao': 'Automação & Integração',
  'cloud_infraestrutura': 'Cloud & Infraestrutura',
  'machine_learning_ia': 'Machine Learning & IA',
  'metodologias_comunicacao': 'Metodologias & Comunicação',
  'ferramentas_crm': 'Ferramentas CRM'
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  loadResumeData();
  setupSkillFilters();
});

// Carregar dados do currículo
function loadResumeData() {
  loadPersonalInfo();
  loadObjective();
  loadAbout();
  loadExperiences();
  loadEducation();
  loadSkills();
  loadLanguages();
  loadCertifications();
}

function loadPersonalInfo() {
  const personal = currentData.personalInfo;
  document.getElementById('display-nome').textContent = personal.nome;
  document.getElementById('display-titulo').textContent = personal.titulo;
  document.getElementById('display-subtitulo').textContent = personal.subtitulo;
  document.getElementById('display-email').textContent = personal.email;
  document.getElementById('display-telefone').textContent = personal.telefone;
  document.getElementById('display-linkedin').textContent = personal.linkedin;
  document.getElementById('display-localizacao').textContent = personal.localizacao;
}

function loadObjective() {
  document.getElementById('display-objetivo').textContent = currentData.objetivo;
}

function loadAbout() {
  document.getElementById('display-sobre').textContent = currentData.sobre;
}

function loadExperiences() {
  const container = document.getElementById('experiencias-list');
  container.innerHTML = '';
  
  currentData.experiencias.forEach(exp => {
    const expElement = document.createElement('div');
    expElement.className = 'experience-item';
    expElement.innerHTML = `
      <div class="job-title">${exp.cargo}</div>
      <div class="company-name">${exp.empresa}</div>
      <div class="period">${exp.periodo}</div>
      <div class="job-description">${exp.descricao}</div>
    `;
    container.appendChild(expElement);
  });
}

function loadEducation() {
  const container = document.getElementById('formacao-list');
  container.innerHTML = '';
  
  currentData.formacao.forEach(edu => {
    const eduElement = document.createElement('div');
    eduElement.className = 'education-item';
    eduElement.innerHTML = `
      <div class="course-title">${edu.curso}</div>
      <div class="institution-name">${edu.instituicao}</div>
      <div class="course-details">${edu.detalhes}</div>
      <div class="period">${edu.periodo}</div>
    `;
    container.appendChild(eduElement);
  });
}

function loadSkills() {
  const container = document.getElementById('habilidades-list');
  container.innerHTML = '';
  
  Object.keys(currentData.habilidades).forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'skills-category';
    categoryElement.dataset.category = category;
    
    categoryElement.innerHTML = `
      <h4 class="category-title">
        <i class="fas fa-cog"></i>
        ${categoryNames[category]}
      </h4>
      <div class="skills-list">
        ${currentData.habilidades[category].map(skill => 
          `<div class="skill-item">${skill}</div>`
        ).join('')}
      </div>
    `;
    
    container.appendChild(categoryElement);
  });
  
  updateSkillCounts();
  filterSkills(currentSkillFilter);
}

function loadLanguages() {
  const container = document.getElementById('idiomas-list');
  const languagesGrid = document.createElement('div');
  languagesGrid.className = 'languages-grid';
  
  currentData.idiomas.forEach(lang => {
    const langElement = document.createElement('div');
    langElement.className = 'language-item';
    langElement.innerHTML = `
      <span class="language-name">${lang.idioma}</span>
      <span class="language-level">${lang.nivel}</span>
    `;
    languagesGrid.appendChild(langElement);
  });
  
  container.innerHTML = '';
  container.appendChild(languagesGrid);
}

function loadCertifications() {
  const container = document.getElementById('certificacoes-list');
  const certificationsGrid = document.createElement('div');
  certificationsGrid.className = 'certifications-list';
  
  currentData.certificacoes.forEach(cert => {
    const certElement = document.createElement('div');
    certElement.className = 'certification-item';
    certElement.innerHTML = `
      <i class="fas fa-certificate"></i>
      <span>${cert}</span>
    `;
    certificationsGrid.appendChild(certElement);
  });
  
  container.innerHTML = '';
  container.appendChild(certificationsGrid);
}

// Configurar filtros de habilidades
function setupSkillFilters() {
  const filters = document.querySelectorAll('.skill-filter');
  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Remover classe active de todos os filtros
      filters.forEach(f => f.classList.remove('active'));
      // Adicionar classe active ao filtro clicado
      this.classList.add('active');
      
      // Filtrar habilidades
      currentSkillFilter = category;
      filterSkills(category);
    });
  });
}

function filterSkills(category) {
  const skillCategories = document.querySelectorAll('.skills-category');
  
  skillCategories.forEach(cat => {
    if (category === 'all' || cat.dataset.category === category) {
      cat.classList.remove('hidden');
    } else {
      cat.classList.add('hidden');
    }
  });
}

function updateSkillCounts() {
  // Atualizar contador total
  let totalCount = 0;
  Object.values(currentData.habilidades).forEach(skills => {
    totalCount += skills.length;
  });
  document.getElementById('count-all').textContent = totalCount;
  
  // Atualizar contadores por categoria
  Object.keys(currentData.habilidades).forEach(category => {
    const count = currentData.habilidades[category].length;
    const countElement = document.getElementById(`count-${category}`);
    if (countElement) {
      countElement.textContent = count;
    }
  });
}

// Função REAL de exportação PDF usando jsPDF
function exportPDF() {
  try {
    // Inicializar jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurações
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    let yPosition = margin;
    
    // Cores
    const primaryColor = [37, 99, 235]; // #2563eb
    const secondaryColor = [100, 116, 139]; // #64748b
    const textColor = [31, 41, 55]; // #1f2937
    
    // Função para adicionar nova página se necessário
    function checkPageBreak(requiredHeight = 20) {
      if (yPosition + requiredHeight > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
        return true;
      }
      return false;
    }
    
    // Função para adicionar texto com quebra de linha
    function addWrappedText(text, x, y, maxWidth, fontSize = 10) {
      doc.setFontSize(fontSize);
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((line, index) => {
        checkPageBreak();
        doc.text(line, x, y + (index * fontSize * 0.4));
      });
      return lines.length * fontSize * 0.4;
    }
    
    // CABEÇALHO
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, pageWidth, 60, 'F');
    
    // Nome
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont(undefined, 'bold');
    doc.text(currentData.personalInfo.nome, margin, 25);
    
    // Título
    doc.setFontSize(16);
    doc.setFont(undefined, 'normal');
    doc.text(currentData.personalInfo.titulo, margin, 35);
    
    // Subtítulo
    doc.setFontSize(12);
    doc.text(currentData.personalInfo.subtitulo, margin, 45);
    
    yPosition = 70;
    
    // INFORMAÇÕES DE CONTATO
    doc.setTextColor(...textColor);
    doc.setFontSize(10);
    
    const contactInfo = [
      `📧 ${currentData.personalInfo.email}`,
      `📱 ${currentData.personalInfo.telefone}`,
      `🔗 ${currentData.personalInfo.linkedin}`,
      `📍 ${currentData.personalInfo.localizacao}`
    ];
    
    contactInfo.forEach((info, index) => {
      doc.text(info, margin + (index % 2) * 95, yPosition + Math.floor(index / 2) * 8);
    });
    
    yPosition += 25;
    
    // OBJETIVO PROFISSIONAL
    checkPageBreak(30);
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('OBJETIVO PROFISSIONAL', margin, yPosition);
    yPosition += 8;
    
    doc.setTextColor(...textColor);
    doc.setFont(undefined, 'normal');
    const objectiveHeight = addWrappedText(currentData.objetivo, margin, yPosition, pageWidth - 2 * margin, 10);
    yPosition += objectiveHeight + 15;
    
    // SOBRE MIM
    checkPageBreak(30);
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('SOBRE MIM', margin, yPosition);
    yPosition += 8;
    
    doc.setTextColor(...textColor);
    doc.setFont(undefined, 'normal');
    const aboutHeight = addWrappedText(currentData.sobre, margin, yPosition, pageWidth - 2 * margin, 10);
    yPosition += aboutHeight + 15;
    
    // EXPERIÊNCIA PROFISSIONAL
    checkPageBreak(30);
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('EXPERIÊNCIA PROFISSIONAL', margin, yPosition);
    yPosition += 10;
    
    currentData.experiencias.forEach(exp => {
      checkPageBreak(40);
      
      // Cargo
      doc.setTextColor(...textColor);
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text(exp.cargo, margin, yPosition);
      yPosition += 6;
      
      // Empresa e período
      doc.setTextColor(...secondaryColor);
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.text(`${exp.empresa} | ${exp.periodo}`, margin, yPosition);
      yPosition += 8;
      
      // Descrição
      doc.setTextColor(...textColor);
      const descHeight = addWrappedText(exp.descricao, margin, yPosition, pageWidth - 2 * margin, 9);
      yPosition += descHeight + 10;
    });
    
    yPosition += 5;
    
    // FORMAÇÃO ACADÊMICA
    checkPageBreak(30);
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('FORMAÇÃO ACADÊMICA', margin, yPosition);
    yPosition += 10;
    
    currentData.formacao.forEach(edu => {
      checkPageBreak(25);
      
      // Curso
      doc.setTextColor(...textColor);
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text(edu.curso, margin, yPosition);
      yPosition += 6;
      
      // Instituição e período
      doc.setTextColor(...secondaryColor);
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.text(`${edu.instituicao} | ${edu.periodo}`, margin, yPosition);
      yPosition += 5;
      
      // Detalhes
      doc.setTextColor(...textColor);
      doc.text(edu.detalhes, margin, yPosition);
      yPosition += 12;
    });
    
    yPosition += 5;
    
    // HABILIDADES E COMPETÊNCIAS
    checkPageBreak(30);
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('HABILIDADES E COMPETÊNCIAS', margin, yPosition);
    yPosition += 10;
    
    Object.keys(currentData.habilidades).forEach(category => {
      checkPageBreak(20);
      
      // Título da categoria
      doc.setTextColor(...primaryColor);
      doc.setFontSize(11);
      doc.setFont(undefined, 'bold');
      doc.text(categoryNames[category], margin, yPosition);
      yPosition += 6;
      
      // Habilidades da categoria
      const skillsText = currentData.habilidades[category].join(' • ');
      doc.setTextColor(...textColor);
      doc.setFontSize(9);
      doc.setFont(undefined, 'normal');
      const skillsHeight = addWrappedText(skillsText, margin, yPosition, pageWidth - 2 * margin, 9);
      yPosition += skillsHeight + 8;
    });
    
    yPosition += 5;
    
    // IDIOMAS
    checkPageBreak(30);
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('IDIOMAS', margin, yPosition);
    yPosition += 10;
    
    currentData.idiomas.forEach(lang => {
      checkPageBreak(8);
      doc.setTextColor(...textColor);
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.text(`${lang.idioma}: ${lang.nivel}`, margin, yPosition);
      yPosition += 7;
    });
    
    yPosition += 10;
    
    // CERTIFICAÇÕES
    if (currentData.certificacoes.length > 0) {
      checkPageBreak(30);
      doc.setTextColor(...primaryColor);
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.text('CERTIFICAÇÕES', margin, yPosition);
      yPosition += 10;
      
      currentData.certificacoes.forEach(cert => {
        checkPageBreak(8);
        doc.setTextColor(...textColor);
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.text(`• ${cert}`, margin, yPosition);
        yPosition += 7;
      });
    }
    
    // Salvar o PDF
    const fileName = `Curriculo_${currentData.personalInfo.nome.replace(/\s+/g, '_')}.pdf`;
    doc.save(fileName);
    
    showToast('PDF exportado com sucesso!');
    
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    showToast('Erro ao exportar PDF. Tente novamente.');
  }
}

// Funções de edição
function editPersonalInfo() {
  currentEditingSection = 'personalInfo';
  const personal = currentData.personalInfo;
  
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Nome</label>
        <input type="text" class="form-control" id="edit-nome" value="${personal.nome}">
      </div>
      <div class="form-group">
        <label class="form-label">Título</label>
        <input type="text" class="form-control" id="edit-titulo" value="${personal.titulo}">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Subtítulo</label>
      <input type="text" class="form-control" id="edit-subtitulo" value="${personal.subtitulo}">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" id="edit-email" value="${personal.email}">
      </div>
      <div class="form-group">
        <label class="form-label">Telefone</label>
        <input type="tel" class="form-control" id="edit-telefone" value="${personal.telefone}">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">LinkedIn</label>
        <input type="text" class="form-control" id="edit-linkedin" value="${personal.linkedin}">
      </div>
      <div class="form-group">
        <label class="form-label">Localização</label>
        <input type="text" class="form-control" id="edit-localizacao" value="${personal.localizacao}">
      </div>
    </div>
  `;
  
  document.getElementById('modal-title').textContent = 'Editar Informações Pessoais';
  showModal();
}

function editObjective() {
  currentEditingSection = 'objetivo';
  
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <div class="form-group">
      <label class="form-label">Objetivo Profissional</label>
      <textarea class="form-control" id="edit-objetivo" rows="4">${currentData.objetivo}</textarea>
    </div>
  `;
  
  document.getElementById('modal-title').textContent = 'Editar Objetivo Profissional';
  showModal();
}

function editAbout() {
  currentEditingSection = 'sobre';
  
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <div class="form-group">
      <label class="form-label">Sobre Mim</label>
      <textarea class="form-control" id="edit-sobre" rows="6">${currentData.sobre}</textarea>
    </div>
  `;
  
  document.getElementById('modal-title').textContent = 'Editar Sobre Mim';
  showModal();
}

function editExperience() {
  currentEditingSection = 'experiencias';
  
  const modalBody = document.getElementById('modal-body');
  let html = '<div class="dynamic-list" id="experiencias-edit-list">';
  
  currentData.experiencias.forEach((exp, index) => {
    html += `
      <div class="dynamic-item" data-index="${index}">
        <button type="button" class="remove-item" onclick="removeExperience(${index})">×</button>
        <div class="form-group">
          <label class="form-label">Cargo</label>
          <input type="text" class="form-control" data-field="cargo" value="${exp.cargo}">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Empresa</label>
            <input type="text" class="form-control" data-field="empresa" value="${exp.empresa}">
          </div>
          <div class="form-group">
            <label class="form-label">Período</label>
            <input type="text" class="form-control" data-field="periodo" value="${exp.periodo}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Descrição</label>
          <textarea class="form-control" data-field="descricao" rows="4">${exp.descricao}</textarea>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  html += '<button type="button" class="add-item-btn" onclick="addExperience()"><i class="fas fa-plus"></i> Adicionar Experiência</button>';
  
  modalBody.innerHTML = html;
  document.getElementById('modal-title').textContent = 'Editar Experiências';
  showModal();
}

function editEducation() {
  currentEditingSection = 'formacao';
  
  const modalBody = document.getElementById('modal-body');
  let html = '<div class="dynamic-list" id="formacao-edit-list">';
  
  currentData.formacao.forEach((edu, index) => {
    html += `
      <div class="dynamic-item" data-index="${index}">
        <button type="button" class="remove-item" onclick="removeEducation(${index})">×</button>
        <div class="form-group">
          <label class="form-label">Curso</label>
          <input type="text" class="form-control" data-field="curso" value="${edu.curso}">
        </div>
        <div class="form-group">
          <label class="form-label">Instituição</label>
          <input type="text" class="form-control" data-field="instituicao" value="${edu.instituicao}">
        </div>
        <div class="form-group">
          <label class="form-label">Detalhes</label>
          <input type="text" class="form-control" data-field="detalhes" value="${edu.detalhes}">
        </div>
        <div class="form-group">
          <label class="form-label">Período</label>
          <input type="text" class="form-control" data-field="periodo" value="${edu.periodo}">
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  html += '<button type="button" class="add-item-btn" onclick="addEducation()"><i class="fas fa-plus"></i> Adicionar Formação</button>';
  
  modalBody.innerHTML = html;
  document.getElementById('modal-title').textContent = 'Editar Formação';
  showModal();
}

function editSkills() {
  currentEditingSection = 'habilidades';
  
  const modalBody = document.getElementById('modal-body');
  let html = '<div class="dynamic-list">';
  
  Object.keys(currentData.habilidades).forEach(category => {
    html += `
      <div class="dynamic-item">
        <h5>${categoryNames[category]}</h5>
        <div class="form-group">
          <label class="form-label">Habilidades (uma por linha)</label>
          <textarea class="form-control" data-category="${category}" rows="6">${currentData.habilidades[category].join('\n')}</textarea>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  modalBody.innerHTML = html;
  document.getElementById('modal-title').textContent = 'Editar Habilidades';
  showModal();
}

function editLanguages() {
  currentEditingSection = 'idiomas';
  
  const modalBody = document.getElementById('modal-body');
  let html = '<div class="dynamic-list" id="idiomas-edit-list">';
  
  currentData.idiomas.forEach((lang, index) => {
    html += `
      <div class="dynamic-item" data-index="${index}">
        <button type="button" class="remove-item" onclick="removeLanguage(${index})">×</button>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Idioma</label>
            <input type="text" class="form-control" data-field="idioma" value="${lang.idioma}">
          </div>
          <div class="form-group">
            <label class="form-label">Nível</label>
            <input type="text" class="form-control" data-field="nivel" value="${lang.nivel}">
          </div>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  html += '<button type="button" class="add-item-btn" onclick="addLanguage()"><i class="fas fa-plus"></i> Adicionar Idioma</button>';
  
  modalBody.innerHTML = html;
  document.getElementById('modal-title').textContent = 'Editar Idiomas';
  showModal();
}

function editCertifications() {
  currentEditingSection = 'certificacoes';
  
  const modalBody = document.getElementById('modal-body');
  let html = '<div class="dynamic-list" id="certificacoes-edit-list">';
  
  currentData.certificacoes.forEach((cert, index) => {
    html += `
      <div class="dynamic-item" data-index="${index}">
        <button type="button" class="remove-item" onclick="removeCertification(${index})">×</button>
        <div class="form-group">
          <label class="form-label">Certificação</label>
          <input type="text" class="form-control" data-field="nome" value="${cert}">
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  html += '<button type="button" class="add-item-btn" onclick="addCertification()"><i class="fas fa-plus"></i> Adicionar Certificação</button>';
  
  modalBody.innerHTML = html;
  document.getElementById('modal-title').textContent = 'Editar Certificações';
  showModal();
}

// Funções para adicionar/remover itens
function addExperience() {
  const list = document.getElementById('experiencias-edit-list');
  const index = list.children.length;
  
  const newItem = document.createElement('div');
  newItem.className = 'dynamic-item';
  newItem.dataset.index = index;
  newItem.innerHTML = `
    <button type="button" class="remove-item" onclick="removeExperience(${index})">×</button>
    <div class="form-group">
      <label class="form-label">Cargo</label>
      <input type="text" class="form-control" data-field="cargo" value="">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Empresa</label>
        <input type="text" class="form-control" data-field="empresa" value="">
      </div>
      <div class="form-group">
        <label class="form-label">Período</label>
        <input type="text" class="form-control" data-field="periodo" value="">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Descrição</label>
      <textarea class="form-control" data-field="descricao" rows="4"></textarea>
    </div>
  `;
  
  list.appendChild(newItem);
}

function removeExperience(index) {
  const item = document.querySelector(`[data-index="${index}"]`);
  if (item) {
    item.remove();
  }
}

function addEducation() {
  const list = document.getElementById('formacao-edit-list');
  const index = list.children.length;
  
  const newItem = document.createElement('div');
  newItem.className = 'dynamic-item';
  newItem.dataset.index = index;
  newItem.innerHTML = `
    <button type="button" class="remove-item" onclick="removeEducation(${index})">×</button>
    <div class="form-group">
      <label class="form-label">Curso</label>
      <input type="text" class="form-control" data-field="curso" value="">
    </div>
    <div class="form-group">
      <label class="form-label">Instituição</label>
      <input type="text" class="form-control" data-field="instituicao" value="">
    </div>
    <div class="form-group">
      <label class="form-label">Detalhes</label>
      <input type="text" class="form-control" data-field="detalhes" value="">
    </div>
    <div class="form-group">
      <label class="form-label">Período</label>
      <input type="text" class="form-control" data-field="periodo" value="">
    </div>
  `;
  
  list.appendChild(newItem);
}

function removeEducation(index) {
  const item = document.querySelector(`[data-index="${index}"]`);
  if (item) {
    item.remove();
  }
}

function addLanguage() {
  const list = document.getElementById('idiomas-edit-list');
  const index = list.children.length;
  
  const newItem = document.createElement('div');
  newItem.className = 'dynamic-item';
  newItem.dataset.index = index;
  newItem.innerHTML = `
    <button type="button" class="remove-item" onclick="removeLanguage(${index})">×</button>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Idioma</label>
        <input type="text" class="form-control" data-field="idioma" value="">
      </div>
      <div class="form-group">
        <label class="form-label">Nível</label>
        <input type="text" class="form-control" data-field="nivel" value="">
      </div>
    </div>
  `;
  
  list.appendChild(newItem);
}

function removeLanguage(index) {
  const item = document.querySelector(`[data-index="${index}"]`);
  if (item) {
    item.remove();
  }
}

function addCertification() {
  const list = document.getElementById('certificacoes-edit-list');
  const index = list.children.length;
  
  const newItem = document.createElement('div');
  newItem.className = 'dynamic-item';
  newItem.dataset.index = index;
  newItem.innerHTML = `
    <button type="button" class="remove-item" onclick="removeCertification(${index})">×</button>
    <div class="form-group">
      <label class="form-label">Certificação</label>
      <input type="text" class="form-control" data-field="nome" value="">
    </div>
  `;
  
  list.appendChild(newItem);
}

function removeCertification(index) {
  const item = document.querySelector(`[data-index="${index}"]`);
  if (item) {
    item.remove();
  }
}

// Funções do modal
function showModal() {
  document.getElementById('edit-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('edit-modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
  currentEditingSection = '';
}

function saveChanges() {
  switch(currentEditingSection) {
    case 'personalInfo':
      savePersonalInfo();
      break;
    case 'objetivo':
      saveObjective();
      break;
    case 'sobre':
      saveAbout();
      break;
    case 'experiencias':
      saveExperiences();
      break;
    case 'formacao':
      saveEducation();
      break;
    case 'habilidades':
      saveSkills();
      break;
    case 'idiomas':
      saveLanguages();
      break;
    case 'certificacoes':
      saveCertifications();
      break;
  }
  
  closeModal();
  showToast('Alterações salvas com sucesso!');
}

function savePersonalInfo() {
  currentData.personalInfo = {
    nome: document.getElementById('edit-nome').value,
    titulo: document.getElementById('edit-titulo').value,
    subtitulo: document.getElementById('edit-subtitulo').value,
    email: document.getElementById('edit-email').value,
    telefone: document.getElementById('edit-telefone').value,
    linkedin: document.getElementById('edit-linkedin').value,
    localizacao: document.getElementById('edit-localizacao').value
  };
  loadPersonalInfo();
}

function saveObjective() {
  currentData.objetivo = document.getElementById('edit-objetivo').value;
  loadObjective();
}

function saveAbout() {
  currentData.sobre = document.getElementById('edit-sobre').value;
  loadAbout();
}

function saveExperiences() {
  const items = document.querySelectorAll('#experiencias-edit-list .dynamic-item');
  currentData.experiencias = [];
  
  items.forEach(item => {
    const exp = {
      cargo: item.querySelector('[data-field="cargo"]').value,
      empresa: item.querySelector('[data-field="empresa"]').value,
      periodo: item.querySelector('[data-field="periodo"]').value,
      descricao: item.querySelector('[data-field="descricao"]').value
    };
    
    if (exp.cargo && exp.empresa) {
      currentData.experiencias.push(exp);
    }
  });
  
  loadExperiences();
}

function saveEducation() {
  const items = document.querySelectorAll('#formacao-edit-list .dynamic-item');
  currentData.formacao = [];
  
  items.forEach(item => {
    const edu = {
      curso: item.querySelector('[data-field="curso"]').value,
      instituicao: item.querySelector('[data-field="instituicao"]').value,
      detalhes: item.querySelector('[data-field="detalhes"]').value,
      periodo: item.querySelector('[data-field="periodo"]').value
    };
    
    if (edu.curso && edu.instituicao) {
      currentData.formacao.push(edu);
    }
  });
  
  loadEducation();
}

function saveSkills() {
  const textareas = document.querySelectorAll('[data-category]');
  
  textareas.forEach(textarea => {
    const category = textarea.dataset.category;
    const skills = textarea.value.split('\n').filter(skill => skill.trim() !== '');
    currentData.habilidades[category] = skills;
  });
  
  loadSkills();
}

function saveLanguages() {
  const items = document.querySelectorAll('#idiomas-edit-list .dynamic-item');
  currentData.idiomas = [];
  
  items.forEach(item => {
    const lang = {
      idioma: item.querySelector('[data-field="idioma"]').value,
      nivel: item.querySelector('[data-field="nivel"]').value
    };
    
    if (lang.idioma && lang.nivel) {
      currentData.idiomas.push(lang);
    }
  });
  
  loadLanguages();
}

function saveCertifications() {
  const items = document.querySelectorAll('#certificacoes-edit-list .dynamic-item');
  currentData.certificacoes = [];
  
  items.forEach(item => {
    const cert = item.querySelector('[data-field="nome"]').value;
    if (cert.trim() !== '') {
      currentData.certificacoes.push(cert);
    }
  });
  
  loadCertifications();
}

// Funções de confirmação
function showConfirmationModal(title, message, confirmCallback) {
  document.getElementById('confirmation-title').textContent = title;
  document.getElementById('confirmation-body').textContent = message;
  document.getElementById('confirm-btn').onclick = confirmCallback;
  document.getElementById('confirmation-modal').classList.remove('hidden');
}

function closeConfirmationModal() {
  document.getElementById('confirmation-modal').classList.add('hidden');
}

// Reset dos dados
function resetData() {
  showConfirmationModal(
    'Resetar Currículo',
    'Tem certeza que deseja resetar todas as alterações e voltar à versão original?',
    function() {
      currentData = JSON.parse(JSON.stringify(originalData));
      loadResumeData();
      closeConfirmationModal();
      showToast('Currículo resetado para a versão original!');
    }
  );
}

// Toast de feedback
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  toastMessage.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 300);
  }, 3000);
}