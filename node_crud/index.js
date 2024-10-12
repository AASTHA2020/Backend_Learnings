require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


/*
   GET request ka kaam data ko retrieve karna hota hai.
   Is route me hum server se users ki list mang rahe hain.
   Future me yaha aap database se data fetch karenge.
*/
app.get('/users', (req, res) => {
    res.send('Hello Jiiiiii!!');
});



/*
   POST request ka kaam hota hai naya data server ko dena, jaise koi naya user banwana.
   Yaha hum `req.body` se naya user ka data le rahe hain aur usko server pe process kar rahe hain.
*/
app.post('/users', (req, res) => {
    const newUser = req.body;
    console.log('Creating new user'+ newUser);
    res.send('New user created'+ JSON.stringify(newUser));
});


/*
   PUT request ka kaam hota hai existing resource ko update karna.
   Yaha hum `req.params.id` se user ID nikal rahe hain, jo URL me aa rahi hai (e.g. /users/123).
   Updated user data ko `req.body` se le rahe hain aur server me uska update show kar rahe hain.
*/
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    console.log(`Updating user with ID ${userId}`);
    res.send(`User with ID ${userId} updated`);
});


/*
   PATCH request is used for partial updates.
   Yaha `req.body` me jo fields bheje gaye hain, sirf unhi ko update karte hain (not the entire resource).
   For example, sirf email address update karna ho, to user ka baki data change nahi hoga, sirf email change hoga.
*/
app.patch('/users/:id', (req, res) => {
    const userId = req.params.id;  // Extract user ID from the URL
    const partialUpdate = req.body;  // Get partial data from the request body
    console.log(`Partially updating user with ID: ${userId}`, partialUpdate);
    res.send(`User with ID: ${userId} has been partially updated with data: ${JSON.stringify(partialUpdate)}`);
});


app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;  // Extract the user ID from the URL
    console.log(`Deleting user with ID: ${userId}`);  // Log the user ID to be deleted
    res.send(`User with ID: ${userId} has been deleted.`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});