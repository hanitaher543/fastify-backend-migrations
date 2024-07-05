const fastify = require('fastify') ({logger : true});




fastify.get('/', (req, res) => {

    res.send({
        "message" : "Hello World !!"
    });

});



fastify.listen(3000, console.log(`server done in port ${3000}`));