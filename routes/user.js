const fastify = require('fastify');
const User = require ('../models/user');
const bcrybt = require ('bcrypt');




const Router = (fastify, options, done) => {


    //API POST : REGISTER
    fastify.post('/register', async (req, res) =>{

         //1 : Read data from request body 
        const {  fullname, email, password, telephone  } = req.body;

        try {
            // crypt my password
            const hashrdPassword = await bcrybt.hash(password, 10);

            //Create instance from my model user
            const newUser = await User.create({
                fullname,
                email,
                password,
                telephone,
            });

            res.status(2000).send({message : 'User registered successfully!!', user : newUser});

        } catch (error) {
            res.status(500).send({error: 'User registration failed!!', details: error});
        }

    });

    // API POST : LOGIN
    fastify.post('/login', async (req, res) => {

        //Read data from request body
        const { fullname, password} = req.body;

        try {

            //Get user by email from DB
            const user = await User.findOne({ where : { email }});

            // 3: verifiy if user exist or no using mail
            if(!user){
                return res.status(404).send({ error :'email or password invalid!!'});
            }

             //verify if user exist or no using password
             const isPasswordValid = await bcrypt.compare(password, user.password);
             if(!isPasswordValid){
                 return res.code(401).send({ error: 'Invalid password !!' });
             }

            // Create Access Token & Refresh Token
            const accessToken   =   jwt.sign({ id: user.id }, 'mkljbhghvbkjcghjklmlkjhghj',  { expiresIn: '15m' });
            const refreshToken  =   jwt.sign({ id: user.id }, 'kjhvcxcfghjkjhgghjkllkjhgvc', { expiresIn: '7d' });

            await Token.create({accessToken : accessToken , refreshToken : refreshToken,  userId : user.id})

            res.status(200).send({message : 'Login successful', accessToken, refreshToken});
 

        }catch(error){
            res.status(500).send({error: 'Login failed', details: error});
        }



    });




    //Running Router
    done();

};





module.exports = Router;