import { createLazyFileRoute, Link } from "@tanstack/react-router";
import Note from "../../components/Note";
import { ChevronRightCircleIcon, FolderOpenDot } from "lucide-react";
import { useRecord } from "../../hooks/useRecord";
import { useCourses } from "../../hooks/useCourses";
import Form from "../../components/Form";
import { useTheme } from "../../hooks/useTheme";

export const Route = createLazyFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [record, setRecord] = useRecord();
  const [courses, setCourses] = useCourses();
  const [theme] = useTheme();

  const darkMode = theme.current === "dark";

  const today = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const recordEmpty = record.length === 0;

  const recentNotes = record
    .slice(0, 3)
    .reduce((acc, current) => {
      return acc.concat(current.notes);
    }, [])
    .slice(0, 3);

  function getTimeSpent(startTime, endTime) {
    const start = startTime.replace(":", "");
    const end = endTime.replace(":", "");

    const diff = end - start;
    console.log(diff);
    const timeDiff = String(
      Math.abs(diff) === diff ? diff : diff + 2400,
    ).padStart(4, 0);

    let format = `${timeDiff[0] === "0" ? timeDiff[1] : timeDiff.slice(0, 2)} ${timeDiff.slice(-2, -1) === "0" ? timeDiff.slice(-1) : timeDiff.slice(-2)}`;

    if (diff < 0) {
      format = "N/A";
      console.log(true);
    } else if (+timeDiff.slice(-2) > 59) {
      format = `${timeDiff[0] === "0" ? timeDiff[1] : timeDiff.slice(0, 2)} ${timeDiff.slice(-2) - 40}`;
    }

    return +format.replace(" ", ".");
  }

  function handleSubmit(formData) {
    const newNote = {
      id: crypto.randomUUID(),
      date: today,
      course: formData.get("course"),
      startTime: formData.get("start-time"),
      endTime: formData.get("end-time"),
      timeSpent: getTimeSpent(
        formData.get("start-time"),
        formData.get("end-time"),
      ),
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

    if (!recordEmpty && record[0].date === today) {
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

    setRecord([{ date: today, notes: [newNote] }, ...record]);
  }

  return (
    <div className="w-full h-full overflow-auto">
      <Form record={record} courses={courses} handleSubmit={handleSubmit} />

      <section className="p-8.25 flex flex-col gap-4 ">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl">Recent</h3> <FolderOpenDot />
          </div>
          {!recordEmpty && (
            <div className="flex justify-end sm:justify-end w-full items-center text-[#0007] hover:text-black">
              <Link to="/notes">
                <p className=" flex gap-2 p-4 py-2 border-[#0007]  border rounded-2xl hover:bg-black hover:text-white w-fit">
                  View all
                  <ChevronRightCircleIcon fontWeight={300} />
                </p>
              </Link>
            </div>
          )}
        </div>
        <ul
          className={`grid sm:grid-cols gap-4 flex-wrap md:grid-cols-2 ${recentNotes.length === 3 ? "md:grid-cols-3" : ""}`}
        >
          {!recordEmpty ? (
            <>
              {recentNotes.map((note, index) => (
                <Note key={index} note={note} className={""} />
              ))}
            </>
          ) : (
            <li>
              <p className={`${darkMode ? "text-darkgrey" : "text-[#0009]"}`}>
                No recents found.
              </p>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
