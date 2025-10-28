// Dados de exemplo - Em produção, isso viria de uma API
const newsData = [
    {
        id: 1,
        title: "SEDUC-SP anuncia novo programa de formação continuada para professores",
        summary: "A Secretaria de Educação do Estado de São Paulo lançou um programa de formação com foco em metodologias ativas e tecnologias educacionais. O programa terá início em março e oferecerá 120 horas de capacitação para professores da rede estadual.",
        source: "Diário Oficial SP",
        link: "#",
        isOfficial: true,
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "MEC define novas diretrizes para o ensino médio em 2024",
        summary: "O Ministério da Educação publicou portaria com ajustes na implementação do Novo Ensino Médio. As mudanças incluem maior flexibilidade na oferta de itinerários formativos e revisão dos componentes curriculares.",
        source: "MEC",
        link: "#",
        isOfficial: true,
        date: "2024-01-15"
    },
    {
        id: 3,
        title: "Professores da rede estadual terão reajuste salarial a partir de abril",
        summary: "O governador de SP confirmou o reajuste de 6,5% para os professores da rede estadual. O aumento será implementado progressivamente ao longo do ano, com a primeira parcela em abril.",
        source: "Folha de S.Paulo",
        link: "#",
        isOfficial: false,
        date: "2024-01-15"
    },
    {
        id: 4,
        title: "Resolução SEDUC 123/2024 - Alterações no calendário escolar",
        summary: "Publicada no DOE de hoje, a resolução estabelece ajustes no calendário letivo de 2024, com a inclusão de dois dias letivos extras para recuperação de conteúdos e reorganização do período de férias.",
        source: "Diário Oficial SP",
        link: "#",
        isOfficial: true,
        date: "2024-01-15"
    },
    {
        id: 5,
        title: "Escolas estaduais receberão novos kits de laboratório de ciências",
        summary: "Cerca de 800 escolas da rede estadual serão beneficiadas com a entrega de novos equipamentos para laboratórios de ciências. A previsão é que os kits cheguem até o final do semestre.",
        source: "Estadão",
        link: "#",
        isOfficial: false,
        date: "2024-01-15"
    },
    {
        id: 6,
        title: "Inscrições abertas para o Prêmio Professor Destaque 2024",
        summary: "Professores da rede pública podem se inscrever até 30 de abril para a 5ª edição do prêmio que reconhece práticas pedagógicas inovadoras. Serão premiados projetos em 8 categorias diferentes.",
        source: "SEDUC-SP",
        link: "#",
        isOfficial: true,
        date: "2024-01-15"
    },
    {
        id: 7,
        title: "Pesquisa aponta aumento no uso de tecnologia em sala de aula pós-pandemia",
        summary: "Estudo da USP mostra que 78% dos professores utilizam regularmente recursos digitais em suas aulas. A pesquisa ouviu mais de 2 mil educadores em todo o país.",
        source: "UOL Educação",
        link: "#",
        isOfficial: false,
        date: "2024-01-15"
    },
    {
        id: 8,
        title: "Resolução SEDUC 124/2024 - Critérios para atribuição de aulas",
        summary: "Nova resolução estabelece critérios atualizados para a atribuição de aulas na rede estadual, com prioridade para professores com maior tempo de serviço e titulação.",
        source: "Diário Oficial SP",
        link: "#",
        isOfficial: true,
        date: "2024-01-15"
    },
    {
        id: 9,
        title: "Programa de intercâmbio para professores é ampliado",
        summary: "O programa que leva professores da rede pública para experiências internacionais será ampliado para mais 10 países este ano. As inscrições começam em maio.",
        source: "G1 Educação",
        link: "#",
        isOfficial: false,
        date: "2024-01-15"
    },
    {
        id: 10,
        title: "Currículo Paulista terá revisão com foco em competências socioemocionais",
        summary: "A SEDUC-SP anunciou que irá revisar o Currículo Paulista para incluir com mais ênfase o desenvolvimento de competências socioemocionais. A revisão contará com a participação de especialistas e professores.",
        source: "Diário Oficial SP",
        link: "#",
        isOfficial: true,
        date: "2024-01-15"
    }
];

// Elementos DOM
const newsContainer = document.getElementById('newsContainer');
const loadingElement = document.getElementById('loading');
const lastUpdateElement = document.getElementById('lastUpdate');
const refreshButton = document.getElementById('refreshBtn');

// Função para simular carregamento
function simulateLoading() {
    loadingElement.style.display = 'block';
    newsContainer.style.display = 'none';
    
    setTimeout(() => {
        loadingElement.style.display = 'none';
        newsContainer.style.display = 'grid';
        renderNews();
    }, 1000);
}

// Função para renderizar as notícias
function renderNews() {
    newsContainer.innerHTML = '';
    
    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        
        const sourceClass = news.isOfficial ? 'news-source official' : 'news-source';
        
        newsCard.innerHTML = `
            <div class="news-content">
                <span class="${sourceClass}">${news.source}</span>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-summary">${news.summary}</p>
                <a href="${news.link}" class="news-link" target="_blank">
                    Ler notícia completa →
                </a>
            </div>
        `;
        
        newsContainer.appendChild(newsCard);
    });
    
    updateLastUpdateTime();
}

// Função para atualizar o horário da última atualização
function updateLastUpdateTime() {
    const now = new Date();
    const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit', 
        minute: '2-digit' 
    };
    
    lastUpdateElement.textContent = 
        `Última atualização: ${now.toLocaleDateString('pt-BR', options)} às ${now.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}`;
}

// Função para verificar atualização automática às 6h30
function checkAutoUpdate() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Se for 6h30, atualiza as notícias (em produção, isso seria no backend)
    if (currentHour === 6 && currentMinute === 30) {
        simulateLoading();
    }
}

// Event Listeners
refreshButton.addEventListener('click', simulateLoading);

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    simulateLoading();
    
    // Verificar atualização automática a cada minuto
    setInterval(checkAutoUpdate, 60000);
    
    // Atualizar o horário a cada minuto
    setInterval(updateLastUpdateTime, 60000);
});

// Adicionar efeito de carregamento no botão
refreshButton.addEventListener('click', function() {
    this.innerHTML = '⏳ Atualizando...';
    this.disabled = true;
    
    setTimeout(() => {
        this.innerHTML = '🔄 Atualizar Agora';
        this.disabled = false;
    }, 1000);
});
