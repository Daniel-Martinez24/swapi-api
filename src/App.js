import React, { useState, useEffect } from 'react';
import './App.css';
import {Store} from './Store';

import Info from './pages/info';
import Films from './pages/films';
import Planets from './pages/planets';
import Species from './pages/species';
import Starships from './pages/starships';
import Vehicles from './pages/vehicles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const store = new Store();
  const [list, setList] = useState(['name', 'herrr']);
  const [films, setFilms] = useState(['name', 'herrr']);
  const [planets, setPlanets] = useState(['name', 'herrr']);
  const [species, setSpecies] = useState(['name', 'herrr']);
  const [starships, setStarships] = useState(['name', 'herrr']);
  const [vehicles, setVehicles] = useState(['name', 'herrr']);
  const [number, setNumber] = useState(0);

  useEffect(() => {
      store.data('people')
      .then((result) => {
          setList(result)
      })
      .catch((error ) => {console.log(error)})
      store.data('films')
      .then((result) => {
          setFilms(result)
      })
      .catch((error ) => {console.log(error)})
      store.data('planets')
      .then((result) => {
          setPlanets(result)
      })
      .catch((error ) => {console.log(error)})
      store.data('species')
      .then((result) => {
          setSpecies(result)
      })
      .catch((error ) => {console.log(error)})
      store.data('starships')
      .then((result) => {
          setStarships(result)
      })
      .catch((error ) => {console.log(error)})
      store.data('vehicles')
      .then((result) => {
          setVehicles(result)
      })
      .catch((error ) => {console.log(error)})
  });

  return (
    <div className="App">
      <h1>Star wars</h1>
      <Router>
        <ul>
          <li> <Link to="/films">Films</Link> </li>
          <li> <Link to="/people">People</Link> </li>
          <li> <Link to="/planets">Planets</Link> </li>
          <li> <Link to="/species">Species</Link> </li>
          <li> <Link to="/starships">Starships</Link> </li>
          <li> <Link to="/vehicles">Vehicles</Link> </li>
        </ul>


        <Switch>
          <Route path="/films">
            <Films 
            list={films} 
            number = {number} 
            quit={() => number> 0 ? setNumber(number - 1) : setNumber(5) }
            add={() => number < 5 ? setNumber(number + 1) : setNumber(0)}
            />
          </Route>
          <Route path="/people">
            <Info 
            list={list} 
            number = {number} 
            quit={() => number> 0 ? setNumber(number - 1) : setNumber(9) }
            add={() => number < 9 ? setNumber(number + 1) : setNumber(0)}
            />
          </Route>
          <Route path="/planets">
            <Planets 
            list={planets} 
            number = {number} 
            quit={() => number> 0 ? setNumber(number - 1) : setNumber(9) }
            add={() => number < 9 ? setNumber(number + 1) : setNumber(0)}
            />
          </Route>
          <Route path="/species">
            <Species 
            list={species} 
            number = {number} 
            quit={() => number> 0 ? setNumber(number - 1) : setNumber(9) }
            add={() => number < 9 ? setNumber(number + 1) : setNumber(0)}/>
          </Route>
          <Route path="/starships">
            <Starships 
            list={starships} 
            number = {number} 
            quit={() => number> 0 ? setNumber(number - 1) : setNumber(9) }
            add={() => number < 9 ? setNumber(number + 1) : setNumber(0)}/>
          </Route>
          <Route path="/vehicles">
            <Vehicles 
            list={vehicles} 
            number = {number} 
            quit={() => number> 0 ? setNumber(number - 1) : setNumber(9) }
            add={() => number < 9 ? setNumber(number + 1) : setNumber(0)}
            />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
