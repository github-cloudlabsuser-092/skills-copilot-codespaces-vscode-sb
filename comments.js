// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const comments = [
    {
        id: 1,
        text: 'This is a comment'
    },
    {
        id: 2,
        text: 'This is another comment'
        
    }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
    
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.json(comment);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
}
);