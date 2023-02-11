import "./posts.css";
import Like from "./Like";

export default function Posts({ thumbnail, category, cigartitle }) {
  return (
    <>
      <div>
        <div className="cigarcard">
          <img className="cigarcard-header" src={thumbnail} />

          <p className="category">{category}</p>

          <h3 className="title">{cigartitle}</h3>
          <Like />
        </div>
      </div>
    </>
  );
}
