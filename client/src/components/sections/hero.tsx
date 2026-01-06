import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_deep_blue_and_teal_fluid_gradient_background_for_creative_agency.png";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract Creative Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-background/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20 flex flex-col items-center text-center">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold leading-[0.9] text-white mb-8 tracking-tighter text-center">
              Markanızın <br />
              <span className="font-expressive italic font-normal text-gradient-primary">Geleceğini</span> <br />
              Tasarlıyoruz
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed text-center">
              KAMA Creative olarak, markanızın dijital dünyada öne çıkmasını sağlayan stratejik, estetik ve yenilikçi çözümler üretiyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 text-white font-medium">
                Projelerimizi Keşfedin
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-white/20 text-white hover:bg-white/10 hover:text-white">
                Bize Ulaşın
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest">Kaydır</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
