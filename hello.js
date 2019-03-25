var http =  require ( ' http ' );
http . createServer ( function ( req , res ) {
   res . writeHead ( 200 , { ' Content-Type ' :  ' text / plain ' }));
   res . end ( ' Hello Travis! \ n ' ); // la construction devrait passer maintenant! 
}). écoute ( 1337 , '127,0,0,1 ' );
console . log ( 'Le serveur tourne à http://127.0.0.1:1337/ ' );