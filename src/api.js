const ACCESS_KEY = 'Bv6racoKAPzT3BjvXAz8ZresC7xUK5EaFpnr0g9pFjQ';
const API_URL = 'https://api.unsplash.com';

export const getPhotos = async (page = 1, perPage = 12) => {
  const response = await fetch(
    `${API_URL}/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=${perPage}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }
  const data = await response.json();
  console.log('Fetched photos:', data);
  return data;
};
