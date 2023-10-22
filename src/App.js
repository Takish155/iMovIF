import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/home/Home";
import { HomeProvider } from "./pages/home/HomeContext";
import MovieInfo from "./pages/movies/movieinfo/MovieInfo";
import { MovieInfoProvider } from "./pages/movies/movieinfo/MovieInfoContext";
import Movies from "./pages/movies/movies/Movies";
import { MovieProvider } from "./pages/movies/movies/MovieContext";
import Search from "./pages/search/Search";
import { SearchProvider } from "./pages/search/SearchContext";
import People from "./pages/people/People";
import { PeopleProvider } from "./pages/people/PeopleContext";
import PeopleInfo from "./pages/peopleinfo.js/PeopleInfo";
import { PeopleInfoProvider } from "./pages/peopleinfo.js/PeopleContext";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomeProvider>
              <Home />
              <Footer />
            </HomeProvider>
          }
        />
        <Route
          path="/movies/info/:id"
          element={
            <MovieInfoProvider>
              <MovieInfo />
              <Footer />
            </MovieInfoProvider>
          }
        />
        <Route
          path="/movies/search"
          element={
            <SearchProvider>
              <Search />
            </SearchProvider>
          }
        />
        <Route
          path="/movies"
          element={
            <MovieProvider>
              <Movies />
            </MovieProvider>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <MovieProvider>
              <Movies />
              <Footer />
            </MovieProvider>
          }
        />
        <Route
          path="/people"
          element={
            <PeopleProvider>
              <People />
            </PeopleProvider>
          }
        />
        <Route
          path="/people/info/:id"
          element={
            <PeopleInfoProvider>
              <PeopleInfo />
              <Footer />
            </PeopleInfoProvider>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
