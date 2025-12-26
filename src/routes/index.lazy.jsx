import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="text-center">
      <div className="absolute top-0 bottom-0 -z-100 mx-auto left-1/2 transform -translate-x-1/2 w-full h-full overflow-hidden max-w-screen">
        <img
          src="/assets/img/home-shapes-full.svg"
          className="hidden lg:block shapes-pos"
          alt="Shapes"
        />
        <img
          src="/assets/img/home-shapes-tablet.svg"
          className="hidden md:block lg:hidden w-full h-full object-cover"
          alt="Shapes"
        />
        <img
          src="/assets/img/home-shapes-mobile.svg"
          className="md:hidden w-full h-full object-cover"
          alt="Shapes"
        />
      </div>
      <div className="h-screen h-[100dvh] grid grid-rows-[min-content]">
        <header className="w-full px-4.5 sm:px-10 py-4.5">
          <nav className="flex justify-between sm:grid grid-cols-2 sm:grid-cols-3 ">
            <div className="hidden sm:block"></div>
            <div className="sm:mx-auto flex items-center sm:justify-center">
              <img src="/assets/img/brillo.svg" alt="brillo" className="h-8" />
            </div>
            <div className=" flex justify-end gap-2 ">
              <button className="border border-grey px-6 py-2 rounded-[6.25rem]">
                Login
              </button>
              <button className="text-white whitespace-nowrap bg-dark px-6 py-2 rounded-[6.25rem]">
                Sign up
              </button>
            </div>
          </nav>
        </header>
        <section className="h-full grid place-items-center">
          <div className=" grid gap-9.5">
            <div className="grid place-items-center gap-5.5">
              <h1 className="text-6xl sm:text-[4.5rem] font-bold max-w-min max-w-[11ch] sm:leading-[72px]">
                Make learning simple
              </h1>
              <p className="text-accent text-[1.25rem] max-w-[80%] sm:max-w-[40ch] leading-7">
                No more scattered notes or forgotten study sessions. Brillo
                keeps all your learning in one place, helping you log daily
                progress and stay consistent.
              </p>
            </div>
            <div>
              <button className="font-semibold text-white bg-dark px-12 py-4 rounded-[6.25rem]">
                Get started free
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className="flex items-center justify-center">
        <div className="relative mx-auto max-w-[800px] w-auto">
          <img
            src="https://www.letsjive.io/images/marketing/jive-phones.png"
            className="w-full"
            alt="Jive phones"
          />
        </div>
      </section>
      <section on className="grid place-content-center px-6 py-24">
        <div className="flex flex-col items-center gap-11.5">
          <div className="flex flex-col gap-3">
            <h2 className="text-[2.25rem] font-bold">Here’s how it works</h2>
            <p className="text-accent text-xl ">
              More learning, less forgetting.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:px-25 gap-12">
            <article className="flex flex-col items-center gap-3.5">
              <img
                src="/assets/img/feature-1.svg"
                alt="feature-1"
                style={{ height: "48px", width: "48px" }}
              />
              <h3 className="text-2xl font-bold">Log your learning</h3>
              <p className="leading-7 text-[1.125rem] text-accent max-w-[28ch]">
                After each study session, quickly log what you learned in
                Brillo. Everything stays organized in one place.
              </p>
            </article>
            <article className="flex flex-col items-center gap-3.5">
              <img
                src="/assets/img/feature-2.svg"
                alt="feature-2"
                style={{ height: "48px", width: "48px" }}
              />
              <h3 className="text-2xl font-bold">Stay consistent</h3>
              <p className="leading-7 text-[1.125rem] text-accent max-w-[28ch]">
                Brillo tracks your activity and builds streaks so learning
                becomes a habit, not something you forget.
              </p>
            </article>
            <article className="flex flex-col items-center gap-3.5">
              <img
                src="/assets/img/feature-3.svg"
                alt="feature-3"
                style={{ height: "48px", width: "48px" }}
              />
              <h3 className="text-2xl font-bold">Review your progress</h3>
              <p className="leading-7 text-[1.125rem] text-accent max-w-[28ch]">
                Open Brillo anytime to see what you’ve learned and continue
                right where you stopped.
              </p>
            </article>
          </div>
          <button className="bg-dark text-white font-semibold px-12 py-4 rounded-[6.25rem]">
            Start Learning
          </button>
        </div>
      </section>
      <footer className="grid grid-rows-[min-content] p-10">
        <div className="grid gap-5.5">
          <img src="/assets/img/brillo.svg" alt="" className="mx-auto" />
          <p className="text-accent font-normal leading-7">
            Track learning and stay consistent.
          </p>
          <nav className="mx-auto">
            <ul className="mx-auto flex gap-5.5">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <p className="text-accent mt-0.75 text-[0.875rem] ">
            <span>© 2025 </span>
            <a href="/" className="underline">
              Brillo
            </a>
            <span> by </span>
            <a href="https://github.com/Davemafy" className="underline">
              David Ventures
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
