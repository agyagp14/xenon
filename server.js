const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://agyagp14:agya1403@cluster0.dkbi4wr.mongodb.net/?retryWrites=true&w=majority', 
{ 
    useNewUrlParser: true,
     useUnifiedTopology: true 
    });


const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});


const UserModel = mongoose.model('User', userSchema);
const ContactModel = mongoose.model('Contact', contactSchema);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', async (req, res) => {
  
  const { username, password } = req.body;

  try {
   
    const user = await UserModel.findOne({ username, password });
    
    if (user) {
 
      res.send('Login successful!');
    } else {
     
      res.send('Invalid username or password');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.post('/contact', async (req, res) => {
  
  const { name, email, message } = req.body;

  try {

    const contact = new ContactModel({ name, email, message });
    await contact.save();
    
    
    res.send('Contact form submitted successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
