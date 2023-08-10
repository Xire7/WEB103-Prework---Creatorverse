// this component will render the list of creators within homepage route
import { Link } from "react-router-dom";
import CreatorCard from "./CreatorCard";
import classes from './css/CreatorList.module.css'

const CreatorList = ({ creatorList }) => {
//   const hashURL = (url) => {
//     let sum = 0;
//     for (let i = 0; i < url.length; ++i) {
//       sum = sum + url[i].charCodeAt();
//     }
//     return sum % 50; // choose 50 because hash table should be 50 or less..
//   };
        //   const hashed = hashURL(element.url);

  return (
    <div>
      <h2> All Creators </h2>
      <ul>
        {creatorList.map((element) => {
          return (
            <li key={element.id}>
              <Link to={`/${element.id}`}>
                <CreatorCard name={element.name} imageURL={element.imageURL} description={element.description} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreatorList;
