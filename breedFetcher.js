//import module
const request = require('request');

const breed = process.argv[2];

//get data from https://api.thecatapi.com/
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //print error message if request failed
  if (error) {
    console.error(`This site can't be reached. Check if there was a typo in the URL.`);
    return;
  }

  //parse data into an object
  const data = JSON.parse(body);

  //print error message if breed not found
  if (!data.length) {
    console.log(`Couldn't find this breed: ${breed}`);
    return;
  }

  //print description
  console.log(data[0].description);

});