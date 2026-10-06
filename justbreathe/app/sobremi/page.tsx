import Image from "next/image";
import Link from "next/link";

export default function SobreMi() {
  return (
    <main className="sobre-mi-page">
      <section className="sobre-mi-hero">
        <div className="sobre-mi-hero-content">
          <span className="yoga-eyebrow">
            JUST BREATHE · CONÓCEME
          </span>

          <h1>Sobre mí</h1>

          <p>
            Detrás de Just Breathe hay una persona que cree en el poder
            de parar, respirar y volver a conectar con uno mismo.
          </p>
        </div>
      </section>

      <section className="sobre-mi-intro">
        <div className="sobre-mi-image">
          <Image
            src="/logo.jpeg"
            alt="[Christina]"
            width={700}
            height={850}
          />
        </div>

        <div className="sobre-mi-text">
          <span className="yoga-eyebrow">
            HOLA, SOY [Christina]
          </span>

          <h2>Bienvenido/a a Just Breathe</h2>

          <p>
            Para mí, el yoga no consiste solamente en hacer posturas.
            Es un espacio para escucharnos, respirar y aprender a
            sentirnos mejor tanto por dentro como por fuera.
          </p>
        </div>
      </section>

      <section className="sobre-mi-filosofia">
        <div className="sobre-mi-filosofia-content">
          <span className="yoga-eyebrow">MI FILOSOFÍA</span>

          <h2>Respira. Muévete. Conecta.</h2>

          <p>
            Creo que cada persona necesita encontrar su propia manera
            de practicar. No importa tu edad, tu experiencia o tu
            condición física: siempre hay una forma de empezar.
          </p>
        </div>
      </section>

      <section className="sobre-mi-valores">
        <div className="sobre-mi-header">
          <span className="yoga-eyebrow">LO QUE QUIERO TRANSMITIR</span>

          <h2>Mucho más que una clase</h2>
        </div>

        <div className="sobre-mi-grid">
          <article>
            <div className="sobre-mi-icon">01</div>
            <h3>Bienestar</h3>
            <p>
              Crear un espacio donde puedas desconectar del ritmo
              diario y dedicarte un momento a ti.
            </p>
          </article>

          <article>
            <div className="sobre-mi-icon">02</div>
            <h3>Cercanía</h3>
            <p>
              Una práctica adaptada a cada persona, sin exigencias
              ni comparaciones.
            </p>
          </article>

          <article>
            <div className="sobre-mi-icon">03</div>
            <h3>Conexión</h3>
            <p>
              Aprender a escuchar nuestro cuerpo, nuestra respiración
              y todo aquello que necesitamos.
            </p>
          </article>
        </div>
      </section>

      <section className="sobre-mi-cta">
        <span className="yoga-eyebrow">¿EMPEZAMOS?</span>

        <h2>Regálate un momento para ti</h2>

        <p>
          Descubre las clases de Just Breathe y encuentra la práctica
          que mejor encaje contigo.
        </p>

        <Link href="/reservas" className="sobre-mi-button">
          Reservar una clase
        </Link>
      </section>
    </main>
  );
}