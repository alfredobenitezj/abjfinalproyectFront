import styles from "./error.module.scss";
export default function Errorpage() {
  return (
    <>
      <div className={styles.Error}>
        <h1>Este no es tu camino ninja</h1>
        <h2>Error 404</h2>
      </div>
    </>
  );
}
