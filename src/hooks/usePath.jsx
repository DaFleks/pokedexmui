import { useLocation } from 'react-router-dom';

const usePath = () => {
  let isValid = false;

  // Isolate the string from the pathname
  const path = useLocation().pathname.replace('/', '');

  if (isNaN(parseInt(path))) {
    // If it's a word, check that the length is greater than 0
    isValid = path.length > 0;
  } else {
    // If it's a number, check that its greater than 1
    isValid = path > 0;
  }

  //  Return the path valid if its valid, otherwise default to 1 (Bulbasaur - #001)
  return isValid ? path : 1;
};

export default usePath;