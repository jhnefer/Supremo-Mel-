// js/carousel.js
function criarCarrossel(idAlvo, tituloLinha, produtos) {
    const container = document.getElementById(idAlvo);
    if(!container) return;

    // Duplica os itens para permitir o scroll infinito
    const produtosInfinity = [...produtos, ...produtos, ...produtos];

    const cardsHTML = produtosInfinity.map(p => `
        <div class="snap-center shrink-0 w-[280px] md:w-[320px] h-[420px] relative transition-all duration-500 hover:scale-105 group">
            <div class="absolute inset-0 bg-amber-400/20 rounded-full blur-[60px] transform scale-75 group-hover:scale-110 transition-transform"></div>
            <div class="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40">
                <img src="${p.img}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${p.extraClass || ''}">
                <div class="absolute inset-0 bg-gradient-to-t from-[#4a2c0a]/90 via-black/10 flex flex-col justify-end items-center p-8 text-center">
                    <h3 class="text-white text-xl md:text-2xl font-display font-bold italic tracking-wide drop-shadow-lg">${p.nome}</h3>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
    <section class="py-24 relative overflow-hidden bg-white border-b border-amber-50">
        <div class="absolute inset-0 z-0"><img src="img/fundo_produtos.jpg" class="w-full h-full object-cover opacity-70"></div>
        <div class="container mx-auto px-4 relative z-10 max-w-[98%]" 
             x-data="{ 
                scrollNext() { 
                    let el = this.$refs.container;
                    el.scrollBy({ left: 320, behavior: 'smooth' });
                    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 200) {
                        setTimeout(() => { el.scrollLeft = el.scrollWidth / 3 }, 500);
                    }
                }, 
                scrollPrev() { 
                    let el = this.$refs.container;
                    el.scrollBy({ left: -320, behavior: 'smooth' });
                    if (el.scrollLeft <= 200) {
                        setTimeout(() => { el.scrollLeft = el.scrollWidth / 3 }, 500);
                    }
                } 
             }"
             x-init="setTimeout(() => { $refs.container.scrollLeft = $refs.container.scrollWidth / 3 }, 300)">
            <div class="mb-12 relative text-left md:pl-10">
                <span class="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">Seleção Exclusiva</span>
                <h2 class="text-3xl md:text-5xl font-display font-extrabold text-[#4a2c0a] mb-2">Linha <span class="text-amber-500">${tituloLinha}</span></h2>
                <div class="h-1 w-24 bg-amber-500 rounded-full"></div>
            </div>
            <button @click="scrollPrev()" class="absolute left-4 top-[50%] -translate-y-1/2 z-30 bg-white/90 p-4 rounded-full shadow-2xl text-[#4a2c0a] md:block hidden border border-amber-100 hover:bg-amber-500 hover:text-white"><span class="material-icons">chevron_left</span></button>
            <button @click="scrollNext()" class="absolute right-4 top-[50%] -translate-y-1/2 z-30 bg-white/90 p-4 rounded-full shadow-2xl text-[#4a2c0a] md:block hidden border border-amber-100 hover:bg-amber-500 hover:text-white"><span class="material-icons">chevron_right</span></button>
            <div x-ref="container" class="flex overflow-x-auto gap-8 pb-10 pt-4 px-6 scroll-smooth scrollbar-hide snap-x h-[520px] items-center cursor-grab active:cursor-grabbing">
                ${cardsHTML}
            </div>
        </div>
    </section>`;
}