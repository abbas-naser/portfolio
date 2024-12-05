import "./ListItemWithImg.css";

export default function ListItemWithImg({
  img,
  title,
  location,
  date,
  list,
  hasHr = true,
}) {
  return (
    <div className="list-item-with-img-container">
      <div className="list-item-with-img">
        <div className="list-item-with-img-imageAndTitle">
          <img src={img} alt="logo" />
          <div>
            <p className="list-item-title">{title}</p>
            <p>{location}</p>
          </div>
        </div>
        <p className="list-item-with-img-date">{date}</p>
      </div>

      {list && (
        <div className="list-tasks">
          <p className="underline">Tasks:</p>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      )}
      {hasHr && <hr />}
    </div>
  );
}
