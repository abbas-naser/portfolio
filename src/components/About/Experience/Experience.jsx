import ListItemWithImg from "../../ListItemWithImg/ListItemWithImg";

import { experienses } from "../../../data";

export default function Experience() {
  return (
    <div className="experiense">
      {/* <h2 className="list-title">Electrical Experience</h2> */}
      {experienses.map((item, index) => {
        return (
          <ListItemWithImg
            key={index}
            img={item.img}
            title={item.title}
            location={item.location}
            date={item.date}
            list={item.tasks}
            hasHr={index === experienses.length - 1 ? false : true}
          />
        );
      })}
    </div>
  );
}
