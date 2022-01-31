import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import router from './router.js';

const DB_URL =
  'mongodb+srv://<username>:<password>@cluster0.p7awp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(express.static('static'));

app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(4200, () => console.log('Server is running on port 4200'));
  } catch (error) {
    console.log(error);
  }
};

start();
