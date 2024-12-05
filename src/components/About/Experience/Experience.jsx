import ListItemWithImg from "../../ListItemWithImg/ListItemWithImg";

import { electricalExp } from "../../../data";

export default function Experience() {
  return (
    <div className="experiense">
      <h2 className="list-title">Electrical Experience</h2>
      {electricalExp.map((item, index) => {
        return (
          <ListItemWithImg
            key={index}
            img={item.img}
            title={item.title}
            location={item.location}
            date={item.date}
            list={item.tasks}
            hasHr={index === electricalExp.length - 1 ? false : true}
          />
        );
      })}
    </div>
  );
}
