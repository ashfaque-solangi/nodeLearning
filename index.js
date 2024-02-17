
// const http = require('http');
// const data = require('./data');

// http.createServer((req, resp) => {
//     resp.writeHead(200, {'Content-type' : 'appilicatioin\json'});
//     resp.write(JSON.stringify(data));   
//     resp.end();
// }).listen(4500);


// console.log("process", process.argv[3]);


// let a = 50;
// let b = 5;

// let dataValue = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(30);
//     }, 2000);
// })

// dataValue.then((data) => {
//     b = data;
//     console.log(a+b);
// });


// const express = require('express');
// const app     = express();

// app.get('', (req, resp) => {
//     // resp.send('hello '+req.query.name);
//     resp.send(`
//         <h1>Welcome To Home Page</h1>
//         <input type="text" value="${req.query.name}" />
//         <h6><a href="/about">Go to About Page</a></h6>
//     `);
// });

// app.get('/about', (req, resp) => {
//     // resp.send('about');
//     resp.send(`
//         <h1>Welcome To About Page</h1>
//         <input type="text" value="${req.query.name}" />
//         <h6><a href="/">Go to Home Page</a></h6>
//     `);
// });

// app.get('/contact', (req, resp) => {
//     // resp.send('about');
//     resp.send(`
//         <h1>Welcome To Contact Page</h1>
//         <input type="text" value="${req.query.name}" />
//         <h6><a href="/contact">Go to Home Page</a></h6>
//     `);
// });


const express = require('express');
const path    = require('path');

const app        = express();
const publicPath = path.join(__dirname, 'expressProject');

app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));

// app.use(express.static(publicPath));

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
});

app.get('/home', (_, resp) => {
    resp.sendFile(`${publicPath}/home.html`);
});

app.get('/profile', (_, resp) => {
    const user = {
        name : 'ashfaque',
        email : 'ashfaque@gmail.com',
        contact : '128912321',
        city : 'lahore',
        skills : ['php', 'laravel', 'js', 'node']
    };
    resp.render('profile', {user});
});

app.get('/abc', (_, resp) => {
    resp.render('abc');
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/404.html`);
});


app.listen(8000);