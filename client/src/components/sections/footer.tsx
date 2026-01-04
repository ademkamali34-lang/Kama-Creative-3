export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              KAMA<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Markanızın hikayesini geleceğin diliyle anlatıyoruz. Sınırları zorlayan, yenilikçi kreatif ajans.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6">Hızlı Linkler</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Hizmetler</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Projeler</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="text-muted-foreground">hello@kama.com</li>
              <li className="text-muted-foreground">+90 (212) 555 0123</li>
              <li className="text-muted-foreground">Levent, İstanbul, TR</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-6">Bülten</h3>
            <p className="text-muted-foreground mb-4">En son trendlerden haberdar olun.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary w-full"
              />
              <button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-2 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 KAMA Creative. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
