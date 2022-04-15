//import module
const { fetchBreedDescription } = require('./breedFetcher');

//get input from user
//const breedName = process.argv[2];
const breedName = process.argv[2];

//call function
fetchBreedDescription(breedName, (error, desc) => {
  //print error message if any
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc); //print breed description
  }
});