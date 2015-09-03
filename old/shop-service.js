require( 'seneca' )()
  .use( 'shop' )
  .listen( { port:9002, pin:'role:shop' } )
  .client( { port:9003, pin:'role:shop,info:purchase' } )

