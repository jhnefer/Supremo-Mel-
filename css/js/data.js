window.addEventListener('DOMContentLoaded', () => {
    criarCarrossel('vitrine-mel', 'Mel e Derivados', [
    { nome: 'Mel Cremoso', img: 'img/produtos/mel_cremoso.jpeg' },
    { nome: 'Mel Puro', img: 'img/produtos/mel_puro.jpeg' },
    { nome: 'Pólen Desidratado', img: 'img/produtos/polen.jpeg' },
    { nome: ' Extrato de Própolis', img: 'img/produtos/propolis.jpeg' },
    { nome: 'Mel Gourmet', img: 'img/produtos/mel_gourmet.jpeg' }
]);

// Chamada para Farinhas Naturais
criarCarrossel('vitrine-farinhas', 'Farinhas Naturais', [
    { nome: 'Cacau em Pó', img: 'img/produtos/Farinhas Naturais/Cacau em Pó.jpg' },
    { nome: 'Farinha de Beterraba', img: 'img/produtos/Farinhas Naturais/Farinha de Beteraba.jpeg', extraClass: 'scale-125' },
    { nome: 'Maca Peruana', img: 'img/produtos/Farinhas Naturais/Maca Peruana Vermelha.jpg' },
    { nome: 'Farinha de Feno Grego', img: 'img/produtos/Farinhas Naturais/Farinha de Feno Grego.jpg' },
    { nome: 'Farinha de Maçã', img: 'img/produtos/Farinhas Naturais/Farinha de Maça.jpg' },
    { nome: 'Farinha de Uva', img: 'img/produtos/Farinhas Naturais/Farinha de Uva.jpg' },
    { nome: 'Maca Peruana Negra', img: 'img/produtos/Farinhas Naturais/Macca Peruana Negra.jpg' }
]);

// Chamada para Cereais e Oleogenosas
criarCarrossel('vitrine-cereais', 'Cereais e Oleaginosas', [
    { nome: 'Amêndoas', img: 'img/produtos/Fotos Cereais e Oleaginosas/Amendoas.jpg' },
    { nome: 'Arroz Preto', img: 'img/produtos/Fotos Cereais e Oleaginosas/Arroz Preto.jpg'},
    { nome: 'Arroz Vermelho', img: 'img/produtos/Fotos Cereais e Oleaginosas/Arroz Vermelho.jpg'},
    { nome: 'Castanha de Caju', img: 'img/produtos/Fotos Cereais e Oleaginosas/Castanha de Caju.jpg' },
    { nome: 'Castanha do Pará', img: 'img/produtos/Fotos Cereais e Oleaginosas/Castanha Para.jpg' },
    { nome: 'Granola', img: 'img/produtos/Fotos Cereais e Oleaginosas/Granola.jpg'},
    { nome: 'Linhaça Dourada', img: 'img/produtos/Fotos Cereais e Oleaginosas/Linhaça Dourada.jpg' }
]);

// Chamada para Especiarias
criarCarrossel('vitrine-especiarias', 'Especiarias', [
    {nome: 'Cardamomo', img: 'img/produtos/Fotos Especiarias/Cardamomo.jpg' },
    {nome: 'Ervas Finas', img: 'img/produtos/Fotos Especiarias/Ervas Finas.jpg' },
    {nome: 'Orange Pepper', img: 'img/produtos/Fotos Especiarias/Orange-Pepper.jpg' },
    {nome: 'Tempero Mineiro', img: 'img/produtos/Fotos Especiarias/TEMPEROMINEIRO.jpg'},
    {nome: 'Tempero Sírio Bahar', img: 'img/produtos/Fotos Especiarias/Tempero Sirio Bahar.jpg' },
    {nome: 'Tomilho em Pó', img: 'img/produtos/Fotos Especiarias/tomilho_em_po.jpg' },
    {nome: 'Zaatar', img: 'img/produtos/Fotos Especiarias/Zaatar.jpg' }
]);


// Chamada para Fitness e Estética
criarCarrossel('vitrine-fitness', 'Fitness e Estética', [
    {nome: 'Spirulina', img: 'img/produtos/Fitenn e Estetica/Spirulina.jpg' },
    { nome: 'Albumina', img: 'img/produtos/Fitenn e Estetica/Albumina.jpg' },
    { nome: 'Tribulius', img: 'img/produtos/Fitenn e Estetica/Tribulius.jpg' },
    { nome: 'Argila Amarela', img: 'img/produtos/Fitenn e Estetica/Argila Amarela.jpg' },
    { nome: 'Argila Preta', img: 'img/produtos/Fitenn e Estetica/Argila Preta.jpg' },
    { nome: 'Argila Vermelha', img: 'img/produtos/Fitenn e Estetica/argila_vermelha.jpg' }
]);

});