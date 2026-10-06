import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contactForm";

export default function Yoganiños() {
  return (
    <main className="yoga-page">

      {/* ================================
          CABECERA CON IMAGEN
          ================================ */}
      <section className="yoga-hero">


        {/* TEXTO */}
        <div className="yoga-hero-content">

          <span className="yoga-eyebrow">
            JUST BREATHE · BIENESTAR
          </span>

          <h1>
            Yoga para niños
          </h1>

          <p className="yoga-subtitle">
            Muévete, respira y relájate sin necesidad de levantarte.
          </p>

          <Link href="/reservas?servicio=yogasilla">
            <button className="boton-reservar">
              Reservar una clase
            </button>
          </Link>

        </div>
      </section>


      {/* ================================
          ¿QUÉ OFRECEMOS?
          ================================ */}
      <section className="yoga-section">

        <div className="yoga-card-main">

        {/* IMAGEN */}
        <div className="yoga-hero-image">
          <Image
            src="/yoganinos.jpeg"
            alt="Yoga para niños"
            width={700}
            height={500}
            priority
          />
        </div>

          <h2>
            ¿Qué ofrecemos?
          </h2>

          <p className="yoga-highlight">
            Clases particulares de yoga para niños
          </p>

          <p>
            En nuestras clases de yoga para niños, fomentamos la creatividad, la concentración y el bienestar emocional a través de posturas divertidas, juegos y técnicas de respiración adaptadas a su edad. Cada sesión está diseñada para que los niños se sientan cómodos y disfruten del proceso de aprendizaje mientras desarrollan habilidades físicas y mentales.
          </p>

        </div>

      </section>


      {/* ================================
          MODALIDADES
          ================================ */}
      <section className="yoga-section yoga-section-alt">

        <div className="yoga-container">

          <span className="yoga-eyebrow">
            ADAPTADO A TI
          </span>

          <h2>
            Modalidades
          </h2>

          <div className="modalidades-grid">

            {/* INDIVIDUAL */}
            <div className="modalidad-card">

              <div className="modalidad-icon">
                🌿
              </div>

              <h3>
                Clases individuales
              </h3>

              <p>
                Una práctica adaptada a tus necesidades,
                ritmo y objetivos.
              </p>

            </div>


            {/* GRUPAL */}
            <div className="modalidad-card">

              <div className="modalidad-icon">
                🤝
              </div>

              <h3>
                Clases grupales
              </h3>

              <p>
                Comparte la experiencia de practicar yoga
                en un ambiente tranquilo y agradable.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          RESERVA
          ================================ */}
      <section className="yoga-reserva">

        <div className="yoga-reserva-content">

          <span className="yoga-eyebrow">
            EMPIEZA HOY
          </span>

          <h2>
            Regálate un momento para ti
          </h2>

          <p>
            Respira, muévete y encuentra tu momento de calma.
          </p>

          <Link href="/reservas?servicio=yogasilla">
            <button className="boton-reservar boton-reservar-grande">
              Reservar mi clase
            </button>
          </Link>

        </div>

      </section>


      {/* ================================
          CONTACTO
          ================================ */}
      <section
        id="contacto"
        className="yoga-contacto"
      >

        <div className="yoga-container">

          <span className="yoga-eyebrow">
            ¿TIENES ALGUNA DUDA?
          </span>

          <h2>
            Envíanos un mensaje
          </h2>

          <p className="contacto-intro">
            Si quieres más información sobre las clases
            o las reservas, estaremos encantados de ayudarte.
          </p>

          <div className="contact-form-wrapper">
            <ContactForm />
          </div>

        </div>

      </section>

    </main>
  );
}