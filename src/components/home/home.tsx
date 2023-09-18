import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <div className="Text">
          <h2>Home</h2>
          <p>
            Bienvenidos a este fantastico lugar donde tus opiniones tendrán voz
            y voto,registrate ahora y empieza a interactuar
          </p>
        </div>
      </section>
    </>
  );
}
