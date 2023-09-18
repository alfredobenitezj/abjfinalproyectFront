import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../commentform/form.module.scss";
import { useComment } from "../../hooks/use.comment";

export function CommentForm() {
  const navigate = useNavigate();
  const { handleAddComment } = useComment();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const contentInput = form.elements.namedItem("content") as HTMLInputElement;
    const imageInput = form.elements.namedItem("image") as HTMLInputElement;

    const newComment = new FormData();
    newComment.append("content", contentInput.value);
    if (imageInput.files && imageInput.files.length > 0) {
      newComment.append("image", imageInput.files[0]);
    }

    if (!newComment.get("content") || !newComment.get("image")) {
      alert("Por favor, completa todos los campos.");
      return; // Early return para evitar una anidación adicional
    }

    const result = await handleAddComment(newComment);
    if (result) navigate("/comments");
  };

  return (
    <section className={styles.form}>
      <form className="Comment-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">Comentario:</label>
          <textarea id="content" name="content" required></textarea>
        </div>

        <div>
          <label htmlFor="image">Subir Imagen:</label>
          <input type="file" id="image" name="image" required />
        </div>

        <button type="submit">Publicar comentario</button>
      </form>
    </section>
  );
}
