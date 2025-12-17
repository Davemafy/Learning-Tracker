import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex gap-4 items-center p-6.25">
      <h2 className="text-2xl mr-auto"> Landing Page</h2>
      <Link to="/dashboard" >
        <p className="block text-blue-400 underline">Dashboard</p>
      </Link>
      <Link to="/notes">
        <p className="block text-blue-400 underline">Notes</p>
      </Link>
    </div>
  );
}
