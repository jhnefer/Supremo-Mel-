// js/data.js

// Função para carregar componentes HTML externos (Navbar/Footer)
async function carregarComponente(id, path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Erro ao buscar: ${path}`);
        const html = await response.text();
        const el = document.getElementById(id);
        
        if (el) {
            el.innerHTML = html;
            // Forma correta e moderna de inicializar o Alpine em conteúdos dinâmicos
            if (window.Alpine) {
                window.Alpine.initTree(el);
            }
        }
    } catch (error) {
        console.error("Erro ao carregar o componente:", path, error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CARREGAMENTO DE COMPONENTES  Footer
    carregarComponente('footer-placeholder', 'components/footer.html');

    // --- 2. VITRINES DE PRODUTOS (Carrosséis) ---
    criarCarrossel('vitrine-mel', 'Mel e Derivados', [
        { nome: 'Mel Cremoso', img: 'img/produtos/mel_cremoso.webp' },
        { nome: 'Mel Puro', img: 'img/produtos/mel_puro.webp' },
        { nome: 'Pólen Desidratado', img: 'img/produtos/polen.webp' },
        { nome: 'Extrato de Própolis', img: 'img/produtos/propolis.webp' },
        { nome: 'Mel Gourmet', img: 'img/produtos/mel_gourmet.webp' }
    ]);

    criarCarrossel('vitrine-farinhas', 'Farinhas Naturais', [
        { nome: 'Cacau em Pó', img: 'img/produtos/Farinhas Naturais/Cacau em Pó.jpg' },
        { nome: 'Farinha de Beterraba', img: 'img/produtos/Farinhas Naturais/Farinha de Beteraba.jpeg', extraClass: 'scale-125' },
        { nome: 'Maca Peruana', img: 'img/produtos/Farinhas Naturais/Maca Peruana Vermelha.jpg' },
        { nome: 'Farinha de Feno Grego', img: 'img/produtos/Farinhas Naturais/Farinha de Feno Grego.jpg' },
        { nome: 'Farinha de Maçã', img: 'img/produtos/Farinhas Naturais/Farinha de Maça.jpg' },
        { nome: 'Farinha de Uva', img: 'img/produtos/Farinhas Naturais/Farinha de Uva.jpg' },
        { nome: 'Maca Peruana Negra', img: 'img/produtos/Farinhas Naturais/Macca Peruana Negra.jpg' }
    ]);

    criarCarrossel('vitrine-cereais', 'Cereais e Oleaginosas', [
        { nome: 'Amêndoas', img: 'img/produtos/Fotos Cereais e Oleaginosas/Amendoas.jpg' },
        { nome: 'Arroz Preto', img: 'img/produtos/Fotos Cereais e Oleaginosas/Arroz Preto.jpg'},
        { nome: 'Arroz Vermelho', img: 'img/produtos/Fotos Cereais e Oleaginosas/Arroz Vermelho.jpg'},
        { nome: 'Castanha de Caju', img: 'img/produtos/Fotos Cereais e Oleaginosas/Castanha de Caju.jpg' },
        { nome: 'Castanha do Pará', img: 'img/produtos/Fotos Cereais e Oleaginosas/Castanha Para.jpg' },
        { nome: 'Granola', img: 'img/produtos/Fotos Cereais e Oleaginosas/Granola.jpg'},
        { nome: 'Linhaça Dourada', img: 'img/produtos/Fotos Cereais e Oleaginosas/Linhaça Dourada.jpg' }
    ]);

    criarCarrossel('vitrine-especiarias', 'Especiarias', [
        { nome: 'Cardamomo', img: 'img/produtos/Fotos Especiarias/Cardamomo.jpg' },
        { nome: 'Ervas Finas', img: 'img/produtos/Fotos Especiarias/Ervas Finas.jpg' },
        { nome: 'Orange Pepper', img: 'img/produtos/Fotos Especiarias/Orange-Pepper.jpg' },
        { nome: 'Tempero Mineiro', img: 'img/produtos/Fotos Especiarias/TEMPEROMINEIRO.jpg'},
        { nome: 'Tempero Sírio Bahar', img: 'img/produtos/Fotos Especiarias/Tempero Sirio Bahar.jpg' },
        { nome: 'Tomilho em Pó', img: 'img/produtos/Fotos Especiarias/tomilho_em_po.jpg' },
        { nome: 'Zaatar', img: 'img/produtos/Fotos Especiarias/Zaatar.jpg' }
    ]);

    criarCarrossel('vitrine-fitness', 'Fitness e Estética', [
        { nome: 'Spirulina', img: 'img/produtos/Fitenn e Estetica/Spirulina.jpg' },
        { nome: 'Albumina', img: 'img/produtos/Fitenn e Estetica/Albumina.jpg' },
        { nome: 'Tribulius', img: 'img/produtos/Fitenn e Estetica/Tribulius.jpg' },
        { nome: 'Argila Amarela', img: 'img/produtos/Fitenn e Estetica/Argila Amarela.jpg' },
        { nome: 'Argila Preta', img: 'img/produtos/Fitenn e Estetica/Argila Preta.jpg' },
        { nome: 'Argila Vermelha', img: 'img/produtos/Fitenn e Estetica/argila_vermelha.jpg' }
    ]);

    // --- 3. DIFERENCIAIS (Cards Superiores) ---
    gerarDiferenciaisPrincipais('cards-principais-diferenciais', [
        {
            icone: 'eco',
            animacao: 'animate-[wiggle_3s_ease-in-out_infinite]',
            titulo: '100% Natural',
            texto: 'Nosso mel é colhido e engarrafado em sua forma mais pura, sem qualquer aditivo, preservando a essência da mata.'
        },
        {
            icone: 'agriculture',
            animacao: 'animate-[tractor_2s_ease-in-out_infinite]',
            titulo: 'Processo Artesanal',
            texto: 'Cada etapa da produção é realizada com rigoroso controle de qualidade, respeitando o ciclo natural das abelhas.'
        }
    ]);

    // --- 4. FLORADAS EXCLUSIVAS (Grade Inferior) ---
    gerarFloradas('grid-floradas', [
        {
            titulo: 'Fava de Bolota',
            img: 'img/floradas/fava-de-bolota-feature.webp',
            descricao: 'Uma árvore nativa que produz um mel amargo, com propriedades medicinais e um sabor marcante.'
        },
        {
            titulo: 'Jitirana',
            img: 'img/floradas/Jitirana.webp',
            descricao: 'Um pasto apícola rico em néctar, resultando em um mel suave e floral, perfeito para paladares delicados.'
        },
        {
            titulo: 'Vassourinha',
            img: 'img/floradas/vassourinha.webp',
            descricao: 'Conhecida popularmente, oferece um mel claro e refrescante, ideal para adoçar bebidas e receitas finas.'
        },
        {
            titulo: 'Angico',
            img: 'img/floradas/angico-de-bezerro.webp',
            descricao: 'Mel monofloral com propriedades medicinais, sabor suave e frutado de coloração límpida e clara.'
        },
        {
            titulo: 'Outras Espécies',
            img: 'img/floradas/outras_especies.webp',
            descricao: 'Contribuições do marmelo, velame e bamburral, típicos da biodiversidade entre Maranhão e Piauí.'
        }
    ]);
});