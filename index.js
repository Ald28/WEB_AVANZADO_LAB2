const express = require('express');
const app = express();
const routes = require('./rutas.js');
const port = 3000

app.use(express.static('static'));
app.use(routes)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

// app.get('/', (req, res) => {
//     res.sendFile('./static/index.html',{
//         root: __dirname
//     });
// })

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });