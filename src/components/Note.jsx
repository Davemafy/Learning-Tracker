
const Note = ({ note, className }) => {
  return (
    <li
      className={`flex flex-col gap-2 p-4 border border-grey rounded-[0.625rem] ${className || ""}`}
    >
      <div className="flex gap-2 justify-between">
        <p className="text-[0.8125rem] opacity-50 font-medium">{note.date}</p>
        <p className="text-[0.77rem] opacity-50  flex gap-0.5">
          <span>{note.duration}</span>
        </p>
      </div>
      <h4 className="font-medium">{note.course}</h4>
      <p className="flex-1 text-[0.9375rem] font-medium opacity-70 truncate-multiline leading-6">
        {note.description}
      </p>
      <button className="w-fit text-[0.8125rem] font-medium">View</button>
    </li>
  );
};

export default Note;
