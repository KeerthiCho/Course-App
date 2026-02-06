 import { Link } from 'react-router-dom';
 import { motion } from 'framer-motion';
 import { Badge } from '@/components/ui/badge';
 import { Card, CardContent } from '@/components/ui/card';
 import { Sparkles, Clock, Users } from 'lucide-react';
 
 interface Course {
   id: string;
   title: string;
   description: string;
   price: number;
   image_url: string | null;
 }
 
 interface CourseCardProps {
   course: Course;
   index: number;
 }
 
 export function CourseCard({ course, index }: CourseCardProps) {
   const isFree = course.price === 0;
 
   return (
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: index * 0.1, duration: 0.5 }}
     >
       <Link to={`/course/${course.id}`}>
         <Card className="group relative overflow-hidden border-border/50 bg-gradient-card transition-all duration-300 hover:border-gold/50 hover:shadow-gold-sm">
           <div className="absolute inset-0 animate-shine opacity-0 transition-opacity group-hover:opacity-100" />
           
           {/* Course Image Placeholder */}
           <div className="relative h-44 overflow-hidden bg-secondary">
             <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-sale/20" />
             <div className="flex h-full items-center justify-center">
               <Sparkles className="h-12 w-12 text-gold/40" />
             </div>
             
             {/* Price Badge */}
             <div className="absolute right-3 top-3">
               {isFree ? (
                 <Badge variant="free" className="shadow-lg">
                   FREE
                 </Badge>
               ) : (
                 <Badge variant="sale" className="shadow-lg">
                   ${course.price}
                 </Badge>
               )}
             </div>
 
             {/* Black Friday Tag */}
             {!isFree && (
               <div className="absolute left-3 top-3">
                 <Badge variant="blackfriday">
                   🔥 BLACK FRIDAY
                 </Badge>
               </div>
             )}
           </div>
 
           <CardContent className="p-5">
             <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-gold">
               {course.title}
             </h3>
             <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
               {course.description}
             </p>
             
             <div className="flex items-center gap-4 text-xs text-muted-foreground">
               <span className="flex items-center gap-1">
                 <Clock className="h-3 w-3" />
                 Self-paced
               </span>
               <span className="flex items-center gap-1">
                 <Users className="h-3 w-3" />
                 1.2k enrolled
               </span>
             </div>
           </CardContent>
         </Card>
       </Link>
     </motion.div>
   );
 }