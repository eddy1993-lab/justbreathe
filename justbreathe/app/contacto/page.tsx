"use client";

import { FormEvent, useState } from "react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main className="contacto-page">

      {/* HERO */}

      <section className="contacto-hero">

        <span className="contacto-eyebrow">
          JUST BREATHE
        </span>

        <h1>CONTACTA CON NOSOTROS</h1>

        <p>
          Estamos aquí para ayudarte. Si tienes alguna duda sobre nuestras
          clases de yoga, horarios o reservas, escríbenos.
        </p>

      </section>


      {/* INFORMACIÓN */}

      <section className="contacto-info-grid">

        <div className="contacto-info-card">

          <div className="contacto-icon">
            📍
          </div>

          <h3>Estamos aquí</h3>

          <p>
            Ven a conocernos y descubre un espacio pensado para tu bienestar en Nerja
          </p>

        </div>


        <div className="contacto-info-card">

          <div className="contacto-icon">
            ✉️
          </div>

          <h3>Email</h3>

          <p>
            Escríbenos y te responderemos lo antes posible.
          </p>

          <a href="mailto:info@justbreathe.com">
            info@justbreathe.com
          </a>

        </div>


        <div className="contacto-info-card">

          <div className="contacto-icon">
            📞
          </div>

          <h3>Teléfono</h3>

          <p>
            También puedes contactar con nosotros directamente.
          </p>

          <a href="tel:+34642433686">
            642 43 36 86
          </a>

        </div>

      </section>


      {/* FORMULARIO */}

      <section className="contacto-form-section">

        <div className="contacto-form-wrapper">

          {!enviado ? (
            <>

              <div className="contacto-form-header">

                <span className="contacto-small-icon">
                  🌿
                </span>

                <h2>¿En qué podemos ayudarte?</h2>

                <p>
                  Déjanos tu mensaje y nos pondremos en contacto contigo.
                </p>

              </div>


              <form
                className="contacto-form"
                onSubmit={handleSubmit}
              >

                <div className="contacto-form-row">

                  <div className="contacto-form-group">

                    <label htmlFor="nombre">
                      Nombre
                    </label>

                    <input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      required
                    />

                  </div>


                  <div className="contacto-form-group">

                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="tuemail@ejemplo.com"
                      required
                    />

                  </div>

                </div>


                <div className="contacto-form-group">

                  <label htmlFor="asunto">
                    Asunto
                  </label>

                  <select
                    id="asunto"
                    defaultValue=""
                    required
                  >

                    <option value="" disabled>
                      Selecciona una opción
                    </option>

                    <option value="clases">
                      Información sobre las clases
                    </option>

                    <option value="reservas">
                      Reservas
                    </option>

                    <option value="horarios">
                      Horarios
                    </option>

                    <option value="precios">
                      Precios
                    </option>

                    <option value="otro">
                      Otra consulta
                    </option>

                  </select>

                </div>


                <div className="contacto-form-group">

                  <label htmlFor="mensaje">
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    rows={6}
                    placeholder="Escribe aquí tu mensaje..."
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="contacto-submit"
                >
                  Enviar mensaje
                </button>

              </form>

            </>
          ) : (

            <div className="contacto-exito">

              <div className="contacto-exito-icon">
                ✓
              </div>

              <h2>¡Mensaje enviado!</h2>

              <p>
                Gracias por contactar con nosotros.
              </p>

              <p>
                Te responderemos lo antes posible.
              </p>

              <button
                className="contacto-nuevo"
                onClick={() => setEnviado(false)}
              >
                Enviar otro mensaje
              </button>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}