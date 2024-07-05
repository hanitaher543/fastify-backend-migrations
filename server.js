// IMPORTS
const fastify = require('fastify') ({logger : true});
const PORT = 3000;



// Routing
fastify.get('/', (req, res) => {

    res.send({
        "message" : "Hello World !!"
    });

});



// Run server
fastify.listen(PORT, console.log(`Server is running on port ${PORT}`));