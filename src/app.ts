import express from 'express';
import og from 'open-graph-scraper';
import { userInfo } from 'os';

var port = '3000'
const app = express();
app.use(express.json());
var dbAdd = 'mongodb://localhost:27017'
var Client = require('mongodb').MongoClient;
//var database;


app.post('/metadata', (req : any, res : any)=>{
  og(req.body, (error : any, results : any)=>{

    console.log(results);
    res.send(results);

    Client.connect(dbAdd, (error : any, client : any) => {
      var db = client.db('JSON');
      var collection = db.collection('Object');
      if(error) {
          console.log(error);
      } else {
          var json = results;
          collection.insertOne({json});
      }
    }
  );
  });
})

app.get('/metadatas', (req, res) => {
  Client.connect(dbAdd, (error : any, Client : any) => {
    if(error) {
        console.log(error);
    } else {
      var db = Client.db('JSON');
      var cursor = db.collection('Object').find().toArray()
      .then((results : any) => {
        console.log(results)
        res.send(results)
      })
      .catch((error : any) => console.error(error));
    }
});
})

app.listen(port, () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: ${port} 🛡️
  ################################################
`);
});