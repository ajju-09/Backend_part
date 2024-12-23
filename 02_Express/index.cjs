const express = require('express');

const app = express();
const port = 3000;

app.use(express.json()); // It mean we only accepts json data format

let data = [];
let nextId = 1;

app.post("/info", (req, res) => {
    const {name, price} = req.body;
    const newInfo = {id: nextId++, name, price};
    data.push(newInfo);
    res.status(201).send(newInfo)
})

app.get("/info", (req, res) => {
    res.status(200).send(data);
})

app.get("/info/:id", (req, res) => {
    const user = data.find(t => t.id === parseInt(req.params.id)); // Params is use to get data via URL
    if(!user){
        return res.status(404).send('Data not found');
    }
    res.status(200).send(user);
})

app.put('/info/:id', (req,res) => {
    const user = data.find(t => t.id === parseInt(req.params.id));
    if(!user){
        return res.status.apply(404).send('Data not found');
    }

    const {name, price} = req.body;
    user.name = name;
    user.price = price;
    res.status(200).send(user);
})

app.delete('/info/:id', (req, res) => {
    const index = data.findIndex(t => t.id === parseInt(req.params.id));
    if(index === -1){
        return res.status(404).send("data not found");
    }
    data.splice(index, 1)
    return res.status(200).send("deleted")
})


app.listen(port, () => {
    console.log(`Server is listing at port : ${port}...`);    
});