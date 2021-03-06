const express = require('express');
const app = express();
//routes
const authRoutes = require('./routes/auth-routes')

//middlewares
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');


app.use(authRoutes);

app.listen(3001, '127.0.0.1', () => {
    console.log('server started at port 3001');
});
