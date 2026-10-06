import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* CABECERA */}
      <section className="clases-header">
        <h1 className="titulo-seccion">NUESTRAS CLASES DE YOGA</h1>

        <p>
          Bienvenidos a Just Breathe, tu espacio de bienestar y equilibrio.
        </p>
      </section>

      {/* TARJETAS DE CLASES */}
      <div className="cursos-grid">

        {/* YOGA EN SILLA */}
        <Link href="/yogasilla" className="curso-card">
          <div className="curso-info">
            <h3>YOGA EN SILLA</h3>
            <p>
              Ejercicios adaptados para personas con movilidad reducida o
              limitaciones físicas.
            </p>
          </div>

          <Image
            src="/yogasilla.jpeg"
            alt="Yoga en silla"
            width={320}
            height={220}
            className="curso-img"
          />
        </Link>

        {/* YOGA PARA MAYORES */}
        <Link href="/yogamayores" className="curso-card">
          <div className="curso-info">
            <h3>YOGA PARA MAYORES</h3>
            <p>
              Ejercicios adaptados para mantener la flexibilidad y el bienestar
              en la edad avanzada.
            </p>
          </div>

          <Image
            src="/yogamayores.jpeg"
            alt="Yoga para mayores"
            width={320}
            height={220}
            className="curso-img"
          />
        </Link>

        {/* YOGA LOW IMPACT */}
        <Link href="/yogalowimpact" className="curso-card">
          <div className="curso-info">
            <h3>YOGA LOW IMPACT</h3>
            <p>
              Ejercicios suaves y adaptados para personas con movilidad
              reducida o limitaciones físicas.
            </p>
          </div>

          <Image
            src="/yogalowimpact.jpeg"
            alt="Yoga Low Impact"
            width={320}
            height={220}
            className="curso-img"
          />
        </Link>

        {/* POWER YOGA */}
        <Link href="/poweryoga" className="curso-card">
          <div className="curso-info">
            <h3>POWER YOGA</h3>
            <p>
              Ejercicios intensos y dinámicos para mejorar la fuerza,
              la flexibilidad y la resistencia.
            </p>
          </div>

          <Image
            src="/poweryoga.jpeg"
            alt="Power Yoga"
            width={320}
            height={220}
            className="curso-img"
          />
        </Link>

        {/* YOGA PARA NIÑOS */}
        <Link href="/yoganinos" className="curso-card">
          <div className="curso-info">
            <h3>YOGA PARA NIÑOS</h3>
            <p>
              Ejercicios para los más pequeños, fomentando la concentración,
              la coordinación y la relajación.
            </p>
          </div>

          <Image
            src="/yoganinos.jpeg"
            alt="Yoga para niños"
            width={320}
            height={220}
            className="curso-img"
          />
        </Link>

      </div>

      {/* SECCIÓN RESERVAR / OPINIÓN */}
      <section className="experiencia-section">
        <div className="experiencia-contenido">

          <span className="experiencia-icono">✦</span>

          <h2>Tu bienestar empieza aquí</h2>

          <p>
            Reserva tu próxima clase o comparte tu experiencia con nosotros.
            Nos encantará acompañarte en este camino.
          </p>

          <div className="experiencia-botones">

            <Link href="/reservas" className="boton-reservar">
              Reservar una clase
            </Link>

            <Link href="/opinion" className="boton-opinion">
              Dejar una opinión
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}