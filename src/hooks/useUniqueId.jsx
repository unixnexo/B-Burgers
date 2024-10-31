import { useRef } from 'react';

const useUniqueId = () => {
  const uniqueIds = useRef(new Set());

  const generateUniqueId = () => {
    let id;
    do {
      id = Math.floor(Math.random() * 1000000);
    } while (uniqueIds.current.has(id));

    uniqueIds.current.add(id);
    return id;
  };

  return generateUniqueId;
};

export default useUniqueId;
