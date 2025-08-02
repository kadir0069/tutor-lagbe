// src/hooks/useRealTimeTutors.js
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

const useRealTimeTutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "tutors"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTutors(data);
    });

    return () => unsub(); // Cleanup
  }, []);

  return tutors;
};

export default useRealTimeTutors;
