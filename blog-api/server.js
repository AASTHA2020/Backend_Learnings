const express = require('express');
const app = express();
const port = 5000;

// Middleware function
const requestLogger = (req, res, next) => {
    const currentDateTime = new Date().toLocaleString(); // Current date and time
    const ip = req.ip; // Get the IP address of the request
    console.log(`[${currentDateTime}] ${req.method} request received at ${req.originalUrl} from ${ip}`); // Log request details
    next(); // Call the next middleware or route handler
};

app.use(requestLogger); // Use the middleware for all routes


app.use(express.json());

let items = [];

// GET request
app.get('/items', (req, res) => {
    console.log("Sari cheeze nikal rhi h...");
    res.json({ msg: "Lo bhai, ye rahi tumhari sari items!", items }); 
});

// POST request 
app.post('/items', (req, res) => {
    const newItem = req.body; // Take the new item data that came from the postman.
    newItem.id = items.length + 1; // We assign an ID to this new item by using the current length of the array + 1.
    items.push(newItem); // Add this new item to our array.
    console.log("Naya item add kar diya:", newItem); // Log it to the console so we know it’s added.
    res.status(201).json({  msg :"Naya item aa gaya bhyi!", item: newItem }); // Send a response back to the client.
});


// PUT request 
app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id); // Convert the ID from the URL (which is a string) into an integer.
    const updatedItem = req.body; // Take the updated data for the item from the request body.

    const itemIndex = items.findIndex(item => item.id === itemId); // Find the index of the item we want to update by its ID.

    if (itemIndex >= 0) {
        items[itemIndex] = { ...items[itemIndex], ...updatedItem }; // Update the item by merging old and new data.
        console.log(`Item with ID ${itemId} ko update kar diya.`, items[itemIndex]); // Log the update in the console.
        res.json({ message: `Item ${itemId} ko update kar diya!`, item: items[itemIndex] }); // Respond to the client.
    } else {
        res.status(404).json({ message: `Item ${itemId} nhi h re!` }); // If the item isn't found, return a 404 error.
    }
});


// DELETE request
app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id); // Get the item ID from the URL

    const itemIndex = items.findIndex(item => item.id === itemId); // Find the index of the item

    if (itemIndex >= 0) {
        const deletedItem = items.splice(itemIndex, 1); // Remove the item from the array
        console.log(`Item with ID ${itemId} ko delete kar diya.`, deletedItem); 
        res.json({ message: `Item ${itemId} gaya bhai, delete ho gaya!`, deletedItem }); // Send a delete success response
    } else {
        res.status(404).json({ message: `Item ${itemId} nhi h ree!` }); 
    }
});


app.listen(port, () => {
    console.log(`Server sstarted on port ${port} !`);
});
