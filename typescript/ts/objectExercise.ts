// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type movieBoxOffice = {
    boxOffice: {
        budget: number,
        grossUS: number,
        grossWorldwide: number
    }
}
type movieContent= {
    title: string,
    originalTitle?: string,
    director: string,
    releaseYear: number,
}


type Movie = movieContent & movieBoxOffice;

const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
      budget: 165000000,
      grossUS: 108327830,
      grossWorldwide: 400671789,
    },
  };
  
  const cats: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
      budget: 95000000,
      grossUS: 27166770,
      grossWorldwide: 73833348,
    },
  };



  
  // Write a function called getProfit that accepts a single Movie object
  // It should return the movie's worldwide gross minus its budget
const getProfit = (inputMovie: Movie): number  => {
    return inputMovie.boxOffice.grossWorldwide - inputMovie.boxOffice.budget;
}

const getProfit2 = (inputMovie: Movie): number => {
    const {grossWorldwide, budget} = inputMovie.boxOffice
    return grossWorldwide - budget;
}

const getProfit3 = ({boxOffice: {
    budget, grossWorldwide
}}: Movie): number => {
    return grossWorldwide - budget
}

  // For example...
  // getProfit(cats) => -21166652
  