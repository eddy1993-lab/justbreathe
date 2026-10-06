"use client";

import { useState } from "react";

export default function Opiniones() {
  const [enviado, setEnviado] = useState(false);

  return (
    <main className="opiniones-page">
      <section className="opiniones-hero">
        <div className="opiniones-hero-content">
          <span className="yoga-eyebrow">
            JUST BREATHE · BIENESTAR
          </span>

          <h1>Opiniones</h1>

          <p>
            Queremos conocer tu experiencia. Comparte con nosotros cómo
            has vivido tus clases en Just Breathe.
          </p>
        </div>
      </section>

      <section className="opiniones-section">
        <div className="opiniones-header">
          <span className="yoga-eyebrow">TU EXPERIENCIA</span>

          <h2>Déjanos tu opinión</h2>

          <p>
            Tu opinión puede ayudar a otras personas a descubrir
            Just Breathe.
          </p>
        </div>

        {!enviado ? (
          <form
            className="opinion-form"
            onSubmit={(e) => {
              e.preventDefault();
              setEnviado(true);
            }}
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="clase">Clase</label>

              <select id="clase" name="clase" defaultValue="" required>
                <option value="" disabled>
                  Selecciona una clase
                </option>

                <option value="Yoga en silla">
                  Yoga en silla
                </option>

                <option value="Yoga para mayores">
                  Yoga para mayores
                </option>

                <option value="Yoga Low Impact">
                  Yoga Low Impact
                </option>

                <option value="Power Yoga">
                  Power Yoga
                </option>

                <option value="Yoga para niños">
                  Yoga para niños
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="valoracion">Valoración</label>

              <select
                id="valoracion"
                name="valoracion"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecciona tu valoración
                </option>

                <option value="5">★★★★★ · 5 estrellas</option>
                <option value="4">★★★★☆ · 4 estrellas</option>
                <option value="3">★★★☆☆ · 3 estrellas</option>
                <option value="2">★★☆☆☆ · 2 estrellas</option>
                <option value="1">★☆☆☆☆ · 1 estrella</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="opinion">Tu opinión</label>

              <textarea
                id="opinion"
                name="opinion"
                rows={6}
                placeholder="Cuéntanos tu experiencia..."
                required
              />
            </div>

            <button type="submit" className="opinion-submit">
              Enviar opinión
            </button>
          </form>
        ) : (
          <div className="opinion-success">
            <div className="success-icon">✓</div>

            <h2>¡Gracias por tu opinión!</h2>

            <p>
              Hemos recibido tu experiencia correctamente.
              La revisaremos antes de publicarla.
            </p>
          </div>
        )}
      </section>

      <section className="opiniones-publicadas">
        <div className="opiniones-header">
          <span className="yoga-eyebrow">
            NUESTRA COMUNIDAD
          </span>

          <h2>Opiniones</h2>

          <p>
            Todavía no hay opiniones publicadas.
            ¡Sé la primera persona en compartir tu experiencia!
          </p>
        </div>
      </section>
    </main>
  );
}
