import { education } from "../../../data";
import ListItemWithImg from "../../ListItemWithImg/ListItemWithImg";
export default function Education() {
  return (
    <div className="education">
      {education.map((educationItems, index) => {
        return (
          <ListItemWithImg
            img={educationItems.img}
            title={educationItems.title}
            location={educationItems.location}
            date={educationItems.date}
            hasHr={index === education.length - 1 ? false : true}
          />
        );
      })}
    </div>
  );
}
