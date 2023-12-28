//HOME PAGE
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="navbar">
            <h1>E-commerce</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="hero">
        <h2>Welcome to our E-commerce Store</h2>
    </div>
    <main>
        

        <section class="product-card">
            <img src="pexels-vlad-chețan-3121979.jpg" alt="Product 1">
            <h2>Phones</h2>
            <p>Description of Product 1.</p>
            
            <button>View More</button>
        </section>

        <section class="product-card">
            <img src="pexels-sarah-chai-7282376.jpg" alt="Product 2">
            <h2>Washing Machines</h2>
            <p>Description of Product 2.</p>
            <a href="https://www.flipkart.com/all/~cs-ltb2mc2dwp/pr?sid=all&collection-tab-name=Washing+Machines&otracker=clp_creative_card_4_3.creativeCard.CREATIVE_CARD_tvs-and-appliances-new-clp-store_CYLSA9XC7X25&fm=neo%2Fmerchandising&iid=M_2cc0a361-388e-471e-bf8e-2dea648448ba_3.CYLSA9XC7X25&ppt=browse&ppn=browse&ssid=joegwfz98w0000001693811625707">
            <button>View More</button>
        </a>
        </section>

        <section class="product-card">
            <img src="pexels-karolina-grabowska-4887246.jpg" alt="Product 2">
            <h2>Headphones</h2>
            <p>Description of Product 3.</p>
            
            <button>View More</button>
        </section>

        <section class="product-card">
            <img src="pexels-elvis-2528118.jpg" alt="Product 2">
            <h2>Laptops</h2>
            <p>Description of Product 4.</p>
            
            <button>View More</button>
        </section>

        <section class="product-card">
            <img src="pexels-charlotte-may-5825422.jpg" alt="Product 2">
            <h2>Refrigerators</h2>
            <p>Description of Product 5.</p>
            <a href="https://www.flipkart.com/all/~cs-y9aiovy7zl/pr?sid=all&collection-tab-name=Premium+Refrigerators&otracker=clp_creative_card_3_4.creativeCard.CREATIVE_CARD_tvs-and-appliances-new-clp-store_FL1FWDOUYDFH&fm=neo%2Fmerchandising&iid=M_3326aac0-70db-4ae7-a390-7dcf2584b586_4.FL1FWDOUYDFH&ppt=clp&ppn=tvs-and-appliances-new-clp-store&ssid=1nchpgqpxc0000001693811600029"></a>
            <button>View More</button>
        </a>
        </section>

    </main>

    <footer>
        <ul class="footer-icons">
            <li><a href="#"> About us</a></li>
            <li><a href="#"> Terms and conditions</a></li>
            <li><a href="#"> Support</a></li>
            <li><a href="#"> Contact us</a></li>
            </ul>
            <p>&copy; 2023 My E-commerce Store</p>
        </footer>
</body>
</html>
// CONTACT US PAGE
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="navbar">
            <h1>E-commerce</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Logout</a></li>
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section>
            <h2 class="contactus">Contact Us</h2>
            <form action="/contact" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 E-commerce Website</p>
    </footer>
</body>
</html>
//LOGIN PAGE
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="navbar">
            <h1>E-commerce</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section>
            <h2 class="loginheader">Login</h2>
            <form action="/login" method="post">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Login</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 E-commerce Website</p>
    </footer>
</body>
</html>
//BACKEND
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

