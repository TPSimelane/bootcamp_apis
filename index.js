import express from "express";

import longestWord from "./bootcamp/longestWord.js";
import shortestWord from "./bootcamp/shortestWord.js";
import wordLengths from "./bootcamp/wordLengths.js";

const app = express();

app.use(express.static('public'));

app.get('/api/word_game', function(req,res){

    const sentence = req.query.sentence;
    
    if(!sentence){
        res.json({
            error:'Please type in a sentence to analyze'
        })
    }
    
    res.json({
        "message":sentence,
        "longestWord":longestWord(sentence),
        "shortestWord":shortestWord(sentence),
        "sum": wordLengths(sentence)
    });
});

const PORT=6007;
app.listen(PORT, function(){
    console.log("api started on port ",PORT)
})
