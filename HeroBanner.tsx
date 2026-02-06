 import { motion } from 'framer-motion';
 import { Zap, Timer, Percent } from 'lucide-react';
 
 export function HeroBanner() {
   return (
     <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-secondary/50 to-background py-16">
       {/* Background Effects */}
       <div className="absolute inset-0 overflow-hidden">
         <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
         <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-sale/10 blur-3xl" />
       </div>
 
       <div className="container relative">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center"
         >
           {/* Sale Badge */}
           <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold"
           >
             <Zap className="h-4 w-4" />
             LIMITED TIME OFFER
             <Timer className="h-4 w-4" />
           </motion.div>
 
           {/* Main Heading */}
           <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
             <span className="text-gradient-gold">BLACK FRIDAY</span>
             <br />
             <span className="text-foreground">Course Sale</span>
           </h1>
 
           <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
             Level up your skills with premium courses at unbeatable prices. 
             Use code <span className="font-mono font-bold text-gold">BFSALE25</span> for 50% off paid courses!
           </p>
 
           {/* Stats */}
           <div className="flex flex-wrap items-center justify-center gap-8">
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-4 py-3"
             >
               <Percent className="h-5 w-5 text-sale" />
               <span className="font-semibold">50% OFF</span>
               <span className="text-muted-foreground">with promo</span>
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-4 py-3"
             >
               <span className="text-2xl">🎓</span>
               <span className="font-semibold">5+</span>
               <span className="text-muted-foreground">Courses</span>
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-4 py-3"
             >
               <span className="text-2xl">🆓</span>
               <span className="font-semibold">2 Free</span>
               <span className="text-muted-foreground">Courses</span>
             </motion.div>
           </div>
         </motion.div>
       </div>
     </section>
   );
 }