import { motion } from "framer-motion";
import img1 from "@assets/stock_images/minimalist_luxury_br_40e4a6c6.jpg";
import img2 from "@assets/stock_images/modern_abstract_3d_g_0590a05d.jpg";
import img3 from "@assets/stock_images/high_fashion_editori_ad1ab1f7.jpg";
import img4 from "@assets/stock_images/modern_architectural_6326b14d.jpg";

const projects = [
  {
    id: 1,
    title: "Lumina Kozmetik",
    category: "Marka Kimliği",
    image: img1,
    size: "large"
  },
  {
    id: 2,
    title: "Nova Tech",
    category: "3D Tasarım",
    image: img2,
    size: "small"
  },
  {
    id: 3,
    title: "Vogue Dergi",
    category: "Moda Çekimi",
    image: img3,
    size: "small"
  },
  {
    id: 4,
    title: "Urban Loft",
    category: "Mimari Konsept",
    image: img4,
    size: "large"
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
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                project.size === "large" ? "md:row-span-2 aspect-[4/5]" : "aspect-[4/3]"
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary text-sm uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
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
