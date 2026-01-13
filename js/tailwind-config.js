// js/tailwind-config.js
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Cores Identidade Supremo Mel
                primary: "#D4AF37",           // Dourado Principal
                "primary-hover": "#e6b219",    // Dourado Brilhante
                "amber-deep": "#b45309",       // Ocre/Âmbar Fechado
                "amber-gold": "#b88f14",       // Tom da Borda Fixa
                
                // Cores de Fundo e Interface
                "background-light": "#FFFBF0", // Creme Suave
                "background-accent": "#fdfcf7", // Fundo Diferenciais
                "background-dark": "#1A1A1A",
                
                // Cores de Texto
                "text-brown": "#4a2c0a",       // Marrom Títulos
                "text-body": "#5d4037",        // Marrom Texto comum
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                body: ["Roboto", "sans-serif"],
            },
            boxShadow: {
                'gold-glow': '0 0 20px rgba(180, 83, 9, 0.3)',
                'gold-strong': '0 0 45px rgba(234, 179, 8, 0.9)',
            }
        }
    }
};