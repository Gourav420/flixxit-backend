const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  // .connect("mongodb://localhost:27017/netflix", {
    .connect("mongodb+srv://Gourav_Roy:Mongo%26%40890@flixxitcluster.mtne2k2.mongodb.net/?retryWrites=true&w=majority", {


    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

//search code

var  movies = [{"type" : "Marvel","link" : "https;//abcfghj"},
               {"type" : "The BeeKeper","link" : "https;//abcfghj"},
               {"type" : "DeadPool","link" : "https;//abcfghj"},
               {"type" : "Avengers","link" : "https;//abcfghj"},
               {"type" : "Wonka","link" : "https;//abcfghj"},
               {"type" : "Halo","link" : "https;//abcfghj"},
               {"type" : "True detectvie","link" : "https;//abcfghj"},
               {"type" : "Oppenheimer","link" : "https;//abcfghj"},
]
app.get('/api/data', (req, res) => {
  
//   const data = { message: 'This is your data' };
  res.json(movies);
});

app.post('/payment', async (req, res) => {
  try {
    const { amount, currency, source, description } = req.body;
    db.collection(collectionName).insertOne({ amount, currency, source, description }, (err, result) => {
      if (err) {
          console.error('Error inserting payment data:', err);
          res.status(500).json({ message: 'Failed to process payment' });
          return;
} 
res.status(201).json({ message: 'Payment processed successfully', payment:  { amount, currency, source, description } });
res.status(201).json({ message: 'Payment processed successfully', payment:  { amount, currency, source, description } });
    })
    
    
    const pay = new Payment({
      amount    : 299, 
      currency  : "Rupeese" ,
      source    : "Gpay" ,  
      description  : "Flixxit Ammount",
      status    : 'success',
    });
    await pay.save().then(paymentDone => console.log("user data is saved successfully" , paymentDone));

    // res.status(200).json({ message: 'Payment successful', Payment });
  } catch (error) {
    console.error('Error processing payment:', error);
res.status(500).json({ error: 'An error occurred while processing your payment.' });
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
