import { motion } from "framer-motion";
import img1 from "@assets/6990af236536969.Y3JvcCwxOTIwLDE1MDEsMCww_1767601066645.jpg";
import img2 from "@assets/6b0bce129988705.6176e1909fcf4_1767601544418.gif";
import img3 from "@assets/kadi_1767601086004.png";
import img4 from "@assets/m_1767601094119.jpg";

const projects = [
  {
    id: 1,
    title: "Newada Kampanya",
    category: "Reklam & Prodüksiyon",
    image: img1,
    size: "small"
  },
  {
    id: 2,
    title: "Braxis Fren Sistemleri",
    category: "Dijital Pazarlama",
    image: img2,
    size: "small"
  },
  {
    id: 3,
    title: "Kraftvoll Performans",
    category: "Kreatif Kampanya",
    image: img3,
    size: "small"
  },
  {
    id: 4,
    title: "Eurocell Enerji",
    category: "Marka Kimliği",
    image: img4,
    size: "small"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
            >
              Seçilmiş <span className="font-expressive italic font-normal text-primary">İşler</span>
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="text-white hover:text-primary transition-colors text-lg font-medium border-b border-white/20 hover:border-primary pb-1 hidden md:block"
          >
            Tüm Projeleri Gör
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[16/10]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary text-sm uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 font-bold">
                  {project.category}
                </span>
                <h3 className="text-3xl font-display font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-white hover:text-primary transition-colors text-lg font-medium border-b border-white/20 hover:border-primary pb-1">
            Tüm Projeleri Gör
          </a>
        </div>
      </div>
    </section>
  );
}
