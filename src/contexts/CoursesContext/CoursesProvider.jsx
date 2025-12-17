import { useState, useEffect } from "react";
import { CoursesContext } from "./CoursesContext";

function useSemiPersistentState(key, initialValue) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialValue,
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export const CoursesProvider = ({ children }) => {
  const defaultCourses = [
    { title: "React Basics", duration: 100, progress: 0 },
    { title: "Javascript Deep Dive", duration: 100, progress: 0 },
    { title: "CSS Mastery", duration: 100, progress: 0 },
    { title: "Frontend Project Workshop", duration: 100, progress: 0 },
    { title: "TypeScript Fundamentals", duration: 100, progress: 0 },
    { title: "Node.js Basics", duration: 100, progress: 0 },
    { title: "Data Structures & Algorithms", duration: 100, progress: 0 },
  ];

  const coursesHook = useSemiPersistentState("courses", defaultCourses);

  return (
    <CoursesContext.Provider value={coursesHook}>
      {children}
    </CoursesContext.Provider>
  );
};
