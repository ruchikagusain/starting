// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON body
// app.use(express.json())

// let dataArray = [];

// app.get("/", (req, res) => {
//     res.send('test')
// })

// app.post('/add', (req, res) => {
//     const { id, name } = req.body;

//     if (!id || !name) {
//         return res.status(400).json({ message: 'id and name are required' });
//     }

//     dataArray.push({ id, name });

//     res.status(200).json({
//         message: 'Data added successfully',
//         data: dataArray
//     });
// })



// app.get('/data', (req, res) => {
//     res.json(dataArray);
// }); 



// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });




                                                               //CRUD



const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json())

let dataArray = [];

app.get("/", (req, res) => {
    res.send('test')
})

app.post('/add', (req, res) => {                                             //post
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json({ message: 'id and name are required' });
    }

    dataArray.push({ id, name });

    res.status(200).json({
        message: 'Data added successfully',
        data: dataArray
    });
})



app.put('/update/:id', (req, res) => {                                        // put
    const { id } = req.params;
    const { name } = req.body;


    if (!name) {
        return res.status(400).json({ message: 'Name is required to update' });
    }

    const itemIndex = dataArray.findIndex(item => item.id === String(id));

    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    dataArray[itemIndex].name = name;

    res.status(200).json({
        message: 'Data updated successfully',
        data: dataArray[itemIndex]
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    const itemIndex = dataArray.findIndex(item => String(item.id) === String(id));

    if (itemIndex === -1) {
        return res.status(400).json({ message: 'Item not found' });                 // delete
    }

    const deletedItem = dataArray.splice(itemIndex, 1);

    res.status(200).json({
        message: 'Data deleted successfully',
        deleted: deletedItem[0]
    });
});


app.get('/data', (req, res) => {
    res.json(dataArray);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

