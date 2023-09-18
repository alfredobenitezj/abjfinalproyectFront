import styles from "./listcomment.module.scss";

export function ListComment() {
  return (
    <>
      <section className={styles.list}>
        <div className={styles.text}>
          <h2>Lista de comentarios </h2>
          <p>
            Todavia no esta implementada,estamos en negociación con un back
            maravilloso que hemos encontrado,un poco de paciencia que merecerá
            la pena.
          </p>
        </div>
      </section>
    </>
  );
}
