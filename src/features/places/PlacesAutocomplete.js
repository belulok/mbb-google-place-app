import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

const PlacesAutocomplete = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Ensure you have your API key stored in .env
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Autocomplete>
      {(autocomplete) => (
        <input
          type="text"
          placeholder="Search places..."
        />
      )}
    </Autocomplete>
  );
};

export default PlacesAutocomplete;
