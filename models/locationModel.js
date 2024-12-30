require('dotenv').config({path: '.env'});
const { MongoClient } = require('mongodb');
const fs = require('fs');

async function getAllLocations() {
    const client = new MongoClient(process.env.MONGODB_URI);
  
    try {
      await client.connect();
      console.log('Connected to MongoDB');
  
      const db = client.db('AppData');
      const collection = db.collection('LOCATION');
  
      // Sử dụng .find() và .toArray() để lấy tất cả record
      const allRecords = await collection.find({}).toArray();
  
      if (allRecords.length > 0) {
        console.log('Found', allRecords.length, 'records in LOCATION.');
  
        // Lưu vào file JSON
        // fs.writeFileSync('./data/LOCATION.json', JSON.stringify(allRecords, null, 2));
        // console.log('All records saved to locations.json');
        console.log('hihi');
        return allRecords;
      } else {
        console.log('No locations found in the database.');
        return [];
      }
    } catch (error) {
      console.error('Error connecting to MongoDB or fetching data:', error);
      return [];
    } finally {
      await client.close();
      console.log('Disconnected from MongoDB');
    }
  }
  
getAllLocations();
  
module.exports = { getAllLocations };