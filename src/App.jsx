import './App.css';
import { getPhotos } from './api';
import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const notification = () =>
    toast.error('Lütfen Arama Yapmak İçin Metin Giriniz');
  const submitHandler = e => {
    console.log('Form submitted');
    e.preventDefault();
    const query = e.target.elements[0].value;
    console.log('Search query:', query);
    // Implement search functionality here
  };
  const searchBarHandler = e => {
    console.log('Search input changed:', e.target.value);
    // Handle search input change here
  };
  const searchBarClickHandler = e => {
    if (e.target.previousElementSibling.value.trim() === '') {
      notification();
    }
  };
  /* useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photos = await getPhotos();
        console.log(photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);*/

  // Render your app components here

  return (
    <>
      <SearchBar
        onSubmit={submitHandler}
        onChange={searchBarHandler}
        buttonOnClick={searchBarClickHandler}
      />
      <div className="app-content">
        {/* Other components or content can go here */}
      </div>
      <Toaster />
    </>
  );
}

export default App;
