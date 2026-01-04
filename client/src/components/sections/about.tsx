import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-8"
            >
              Biz <span className="text-primary">KAMA</span>. <br/>
              Geleceği Tasarlıyoruz.
            </motion.h2>
          </div>
          
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              KAMA Creative, markaların dijital dünyada yankı uyandırmasını sağlayan multidisipliner bir reklam ajansıdır. 
              Geleneksel reklamcılığın kurallarını yıkıyor, veri odaklı stratejileri sanatsal vizyonla birleştiriyoruz.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Her proje bizim için yeni bir tuval. Hedef kitlenizle derin bağlar kuran, 
              akılda kalıcı ve etkileyici deneyimler yaratmak için buradayız.
            </motion.p>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { number: "50+", label: "Ödül" },
                { number: "120+", label: "Proje" },
                { number: "10+", label: "Yıl Deneyim" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                >
                  <div className="text-3xl font-display font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-primary uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
