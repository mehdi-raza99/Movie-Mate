import { useEffect, useState } from 'react';
import './App.css';
import { data } from "./api";
import Movie from './components/Movie';
import { Search } from './components/search';
import {Footer} from './components/footer';

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false); // To track if no results were found

  useEffect(() => {
    if (movieName) {
      setLoading(true);
      data(movieName)
        .then((responseData) => {
          const list = responseData.results; // responseData consist of an array of results, total pages and other things!

          if (list && list.length > 0) {    // Making sure that array exist and not empty as well
            const filteredList = list.filter((element) =>
              element.original_language === 'en' &&
              element.original_title.toLowerCase().includes(movieName.toLowerCase())    //Some results do not have movieName include in the title, thus filtering that!
            );
            setMovieData(filteredList);
            setNoResults(filteredList.length === 0); // Update noResults based on filtered list
          } else {
            console.error('Expected results to be an array but got:', list);
            setNoResults(true); // Handle unexpected structure
          }
        })
        .catch((error) => {
          console.error('Error processing data:', error);
          setNoResults(true); // Handle errors
        })
        .finally(() => {
          setLoading(false); // Always set loading to false when done
        });
    }
  }, [movieName]);

  return (
    <>
      <h1 className='heading'>Search any Movie, Get All the Details!</h1>

      <Search setMovieName={setMovieName} />

      <div className='Hero'>

      {loading ? (
        <h1 style={{padding: "7px 20px"}}>Loading...</h1>
      ) : noResults ? (
        <h1 style={{padding: "7px 20px"}}>Not Found</h1>
      ) : (
        movieData.map((element) => (
          <Movie
            key={element.id} // Ensure you have a unique key prop
            title={element.original_title}
            overview={element.overview}
            rating={element.vote_average}
            release_date={element.release_date}
            image={element.poster_path}
          />
        ))
      )}

      </div>
      
      <Footer/>
    </>
  );
}

export default App;
