import { motion } from "framer-motion";
import { PenTool, Megaphone, Monitor, Palette, Camera, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Reklam & Kampanya",
    description: "Hedef kitlenizi harekete geçiren, ses getiren 360 derece reklam kampanyaları kurguluyoruz."
  },
  {
    icon: Palette,
    title: "Marka Kimliği",
    description: "Logodan kurumsal dile, markanızın DNA'sını oluşturan özgün ve zamansız tasarımlar."
  },
  {
    icon: Monitor,
    title: "Dijital Pazarlama",
    description: "Veri odaklı stratejilerle dijital dünyada görünürlüğünüzü ve dönüşümünüzü artırın."
  },
  {
    icon: Camera,
    title: "Kreatif İçerik",
    description: "Fotoğraf, video ve animasyon prodüksiyonlarıyla markanızın hikayesini görselleştiriyoruz."
  },
  {
    icon: PenTool,
    title: "UI/UX Tasarım",
    description: "Kullanıcı deneyimini merkeze alan, estetik ve fonksiyonel web ve mobil arayüzler."
  },
  {
    icon: BarChart3,
    title: "Sosyal Medya",
    description: "Topluluk yönetimi ve etkileşim odaklı içerik stratejileriyle markanızı büyütüyoruz."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-widest uppercase text-sm block mb-4"
          >
            Hizmetlerimiz
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white max-w-2xl mx-auto"
          >
            Markanız İçin <span className="font-expressive italic font-normal text-primary">Kapsamlı</span> Çözümler
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
