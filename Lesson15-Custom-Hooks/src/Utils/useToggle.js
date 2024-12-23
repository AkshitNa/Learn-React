import { useState } from 'react';

function useToggle() {
    
  const [value, setValue] = useState(false);

  const toggle = () => setValue(!value);

  return [value, toggle];//value is false by default and 
              // toggle is a function here defined above.
}

export default useToggle;
