import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row> 
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Trending now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      

    </div>
  );
}

export default App;
