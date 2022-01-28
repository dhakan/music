import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music - Dannie Håkansson</title>
      </Head>
      <main>
        <h1>Transcriptions</h1>

        <h2>Chrono Trigger - Sad Theme</h2>
        <small>Key of Dmin (relative to F)</small>
        <section className={styles.chords}>
          <p>
            <small className={styles.chordHeading}>Intro</small>
            Dm9 (i) - Gm11 (iv) - B♭add9 (VI) - Fadd9 (iii) - Gm7 half dim -
            (iv) - Gdim7 (iv)
            <br />
            Dm9 (i) - Gm11 (iv) - B♭add9 (VI) - Cadd9 (VII) - Dsus2 (i) - Dadd9
            (i)
          </p>
          <small className={styles.chordHeading}>Main</small>
          Gmadd9 (iv) - Cadd9 (VII) - A7 (V) - Dm (i) - Cadd9 (VII) - B♭add9
          (VI) - Gm (iv) - Csus4 (VII) - C (VII){" "}
        </section>
      </main>
    </div>
  );
}
