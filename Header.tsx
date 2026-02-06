 import { Link, useNavigate } from 'react-router-dom';
 import { Button } from '@/components/ui/button';
 import { useAuth } from '@/lib/auth';
 import { LogOut, BookOpen, Zap } from 'lucide-react';
 import { motion } from 'framer-motion';
 
 export function Header() {
   const { user, signOut } = useAuth();
   const navigate = useNavigate();
 
   const handleSignOut = async () => {
     await signOut();
     navigate('/auth');
   };
 
   return (
     <motion.header
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl"
     >
       <div className="container flex h-16 items-center justify-between">
         <Link to="/" className="flex items-center gap-2">
           <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold shadow-gold-sm">
             <Zap className="h-5 w-5 text-primary-foreground" />
           </div>
           <span className="text-xl font-bold tracking-tight">
             <span className="text-gradient-gold">Black</span>
             <span className="text-foreground">Friday</span>
           </span>
         </Link>
 
         <nav className="flex items-center gap-4">
           {user ? (
             <>
               <Link to="/">
                 <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                   Courses
                 </Button>
               </Link>
               <Link to="/my-courses">
                 <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                   <BookOpen className="mr-2 h-4 w-4" />
                   My Courses
                 </Button>
               </Link>
               <Button
                 variant="outline"
                 size="sm"
                 onClick={handleSignOut}
                 className="border-border hover:bg-secondary"
               >
                 <LogOut className="mr-2 h-4 w-4" />
                 Sign Out
               </Button>
             </>
           ) : (
             <Link to="/auth">
               <Button variant="gold" size="sm">
                 Sign In
               </Button>
             </Link>
           )}
         </nav>
       </div>
     </motion.header>
   );
 }