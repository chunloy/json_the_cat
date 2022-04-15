//import module
const request = require('request');

//function definition
const fetchBreedDescription = function(breedName, callback) {
  //get data from https://api.thecatapi.com/
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    //check for error
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body); //convert to array
    const breed = data[0]; //get object

    //check for valid breed
    if (breed) {
      callback(null, breed.description);
    } else {
      callback('breed not found', null);
    }
  });
};

//export module
module.exports = { fetchBreedDescription };