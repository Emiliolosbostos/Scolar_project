const express = require('express');
const passport   = require('passport');
const session    = require('express-session');
const bodyParser = require('body-parser');
const app = express();
//Pour dotenv
const dotenv = require("dotenv");
dotenv.config();
const exphbs = require('express-handlebars');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'td8',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}

//Pour Handlebars
app.set('views', './views')
app.set('view engine', '.hbs');
app.engine(
    'hbs',
    exphbs({
        extname: ".hbs",
        defaultLayout: "",
        layoutsDir: "",
    })
);

/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "TP MYSQL EXPRESS",
            description: "API documentation",
            contact: {
                name: "Ajouter votre nom ici",
            },
            servers: [`http://localhost:${process.env.PORT}/`],
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs",isLoggedIn, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});
app.listen(3000, function(err) {
    if (!err)
        console.log("Le serveur ecoute sur le port 3000");
    else console.log(err)
});

//Models
const models = require("./models");
//Routes
const authRoute = require('./routes/auth.js')(app,passport);

//charger les stratégies passport
require('./config/passport/passport.js')(passport,models.user);

//Sync Database
models.sequelize.sync().then(function() {
    console.log('La base de données fonctionne bien')
}).catch(function(err) {
    console.log(err, "Quelque chose s'est mal passé avec la mise à jour de la base de données!")
});