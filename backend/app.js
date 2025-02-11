let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');

let app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

let articleSchema = mongoose.Schema({
    name: String,
    body: String
});

let Article = mongoose.model("article", articleSchema);

app.get('/', function(_, res) {
    const data = [
        
    ];
    res.json(data);
});

app.post('/addarticle', async function(req, res) {
    try {
        let article = new Article(req.body);
        await article.save();
        res.json({ message: "Article added" });
    } catch (err) {
        res.status(500).json({ message: "Failed to add article", error: err.message });
    }
});

app.listen(3001, function() {
    console.log("Server started");
});