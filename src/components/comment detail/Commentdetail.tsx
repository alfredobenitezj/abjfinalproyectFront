import { Link } from "react-router-dom";
import styles from "./comments.module.scss";
import { commentModel } from "../../models/comment.model";

type PropsType = {
  comment: commentModel;
};
export default function CommentPage({ comment }: PropsType) {
  return (
    <section>
      <div className="app-Route">
        <div className={styles.comments}>
          <h2>Detalle del comentario </h2>
        </div>
      </div>
      <h2>Comment </h2>
      <Link to={"commentinfo/" + comment.id}>
        <li key={comment.id}>
          <p>{comment.message}</p>

          <img src={comment.image.url} width="140" height="170" />
        </li>
      </Link>
    </section>
  );
}
