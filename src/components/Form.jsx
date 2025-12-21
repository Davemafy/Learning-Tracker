import { useState, useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import { useRecord } from "../hooks/useRecord";
import { useCourses } from "../hooks/useCourses";

const Form = () => {
  const [selectedCourse, setSelectedCourse] = useState("React Basics");
  const [record, setRecord] = useRecord();
  const [courses, setCourses] = useCourses();
  const [theme] = useTheme();
  const darkMode = theme.current === "dark";

  const [duration, setDuration] = useState("00:00");
  const durationRef = useRef(null);

  const now = new Date();
  const currentDate = now.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const recordEmpty = record.length === 0;
  const userLogged =
    !(record.length === 0) &&
    record[0].date === currentDate &&
    record[0].notes.some((note) => note.course === selectedCourse);

  function handleSelect(e) {
    setSelectedCourse(e.target.value);
  }

  function showDurationPicker() {
    if (durationRef.current && typeof durationRef.current.showPicker === "function") {
      durationRef.current.showPicker();
    }
  }

  function getDuration(time) {
    const format = time.replace(":", "hrs ");
    return format.concat("mins");
  }

  function handleSubmit(formData) {
    const newNote = {
      id: crypto.randomUUID(),
      date: currentDate,
      course: formData.get("course"),
      duration: getDuration(formData.get("duration")),
      description: formData.get("description"),
    };

    setCourses(
      courses.map((course) => {
        if (course.title === newNote.course) {
          return { ...course, progress: course.progress + newNote.timeSpent };
        }
        return course;
      }),
    );

    if (!recordEmpty && record[0].date === currentDate) {
      if (record.length === 1) {
        setRecord([
          { date: record[0].date, notes: [newNote, ...record[0].notes] },
        ]);

        return;
      }

      setRecord(
        [{ date: record[0].date, notes: [newNote, ...record[0].notes] }].concat(
          record.slice(1),
        ),
      );
      return;
    }

    setRecord([{ date: currentDate, notes: [newNote] }, ...record]);
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-5
       p-8.5 "
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="course" className="font-medium">
          Course
        </label>
        <div className="dropdown w-fit">
          <select
            name="course"
            id="course"
            autoFocus
            onChange={handleSelect}
            value={selectedCourse}
            className="border border-grey w-[28ch] rounded-2xl p-4 font-medium"
          >
            {courses.map((course, index) => {
              return (
                <option
                  key={index}
                  value={course.title}
                  className={`${theme.themes[theme.current].style}`}
                >
                  {course.title}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="start-time" className="font-medium">
          Duration (hrs)
        </label>
        <input
          type="time"
          name="duration"
          ref={durationRef}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          onFocus={showDurationPicker}
          required
          className={`max-w-24 font-medium border border-grey rounded-2xl p-2 py-2 ${theme.current == "dark" ? "darkmode" : ""}`}
        />
      </div>
      <textarea
        name="description"
        placeholder="What did you learn today..."
        required
        className="p-6 font-medium focus:placeholder:text-[#555] focus:outline-0 focus:shadow-xl border border-grey  rounded-2xl"
      ></textarea>
      <button
        type="submit"
        disabled={userLogged}
        className={`p-4 px-8.25 font-medium ${darkMode ? "bg-[#fff1] text-inherit" : "bg-[#222] text-white "} w-fit rounded-[0.625rem] transition hover:shadow-2xl disabled:bg-[#555] disabled:text-[#eee] disabled:shadow-none`}
      >
        Log Today
      </button>
    </form>
  );
};

export default Form;
