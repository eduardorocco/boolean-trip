import { GlobalContext } from './GlobalContext';
import { useContext } from 'react';

export function Filter({ placeholder }) {
  const { string, setString } = useContext(GlobalContext);

  function handleSearch(e) {
    console.log(e.target.value);
    setString(e.target.value);
  }

  return (
    <div>
      <input
        className=""
        type="text"
        name="search"
        placeholder={placeholder}
        value={string}
        onChange={(e) => {
          handleSearch(e);
        }}
      />
    </div>
  );
}
