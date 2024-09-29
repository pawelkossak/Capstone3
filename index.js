import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
var posts = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index.ejs", {
        posts: posts
    });
});

app.get('/create', (req, res) => {
    res.render("create.ejs", {

    })
})

app.post('/submit', (req, res) => {
    const odpowiedzi = req.body;
    let newPost = [];
    for (const [key, value] of Object.entries(odpowiedzi)){
        newPost.push(value);
    }
    newPost.push(new Date().toUTCString());
    posts.push(newPost);
    res.redirect("/create");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))