import { createLazyFileRoute } from "@tanstack/react-router";
import { useCourses } from "../../hooks/useCourses";
import { useTheme } from "../../hooks/useTheme";

export const Route = createLazyFileRoute("/_authenticated/courses")({
  component: Courses,
});

function Courses() {
  const [courses] = useCourses();
  const [theme] = useTheme();
  const darkMode = theme.current === "dark";

  return (
    <section className="p-8.25">
      <div className="grid sm:gricol2 md:grid-cols-3 gap-6.25 ">
        {courses.map((course) => {
          return (
            <article className={`flex flex-col gap-4 border border-grey p-4`}>
              <header>
                <h2>{course.title}</h2>
              </header>
              <div
                className={`h-4 overflow-hidden ${darkMode ? "bg-[#4446]" : "bg-[#746f6f18]"} w-full rounded-2xl `}
              >
                <div
                  className={`h-4 ${darkMode ? "bg-grey" : "bg-darkgrey"}  rounded-2xl `}
                  style={{
                    transform: `translateX(-${100 - course.progress}%)`,
                  }}
                ></div>
              </div>
              <p>{course.progress}% completed</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
