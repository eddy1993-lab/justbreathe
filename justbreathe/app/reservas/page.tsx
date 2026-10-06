"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ReservarPage() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");
  const [guardando, setGuardando] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setGuardando(true);

    const formData = new FormData(e.currentTarget);

    const { error: supabaseError } = await supabase
      .from("reservas")
      .insert({
        nombre: formData.get("nombre") as string,
        email: formData.get("email") as string,
        telefono: formData.get("telefono") as string,
        servicio: formData.get("clase") as string,
        fecha: formData.get("fecha") as string,
        hora: formData.get("hora") as string,
        mensaje: formData.get("mensaje") as string,
      });

    setGuardando(false);

    if (supabaseError) {
      console.error("Error al guardar la reserva:", supabaseError);
      setError(
        "No hemos podido enviar la reserva. Inténtalo de nuevo."
      );
      return;
    }

    setEnviado(true);
  };

  return (
    <main className="reserva-page">

      {/* CABECERA */}
      <section className="reserva-hero">
        <span className="reserva-eyebrow">JUST BREATHE</span>

        <h1>RESERVA TU CLASE</h1>

        <p>
          Regálate un momento para ti. Elige tu clase, selecciona el horario
          que prefieras y disfruta de tu práctica de yoga.
        </p>
      </section>

      {/* FORMULARIO */}
      <section className="reserva-section">

        <div className="reserva-form-wrapper">

          {!enviado ? (
            <>
              <div className="reserva-form-header">
                <span className="reserva-icono">🧘</span>

                <h2>Datos de tu reserva</h2>

                <p>
                  Completa los siguientes datos y nos pondremos en contacto
                  contigo para confirmar tu reserva.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="reserva-form">

                {/* NOMBRE */}
                <div className="form-group">
                  <label htmlFor="nombre">
                    Nombre y apellidos
                  </label>

                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label htmlFor="email">
                    Correo electrónico
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tuemail@ejemplo.com"
                    required
                  />
                </div>

                {/* TELÉFONO */}
                <div className="form-group">
                  <label htmlFor="telefono">
                    Teléfono
                  </label>

                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="Tu número de teléfono"
                    required
                  />
                </div>

                {/* CLASE */}
                <div className="form-group">
                  <label htmlFor="clase">
                    Elige tu clase
                  </label>

                  <select
                    id="clase"
                    name="clase"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona una clase
                    </option>

                    <option value="yoga-silla">
                      Yoga en silla
                    </option>

                    <option value="yoga-mayores">
                      Yoga para mayores
                    </option>

                    <option value="yoga-low-impact">
                      Yoga Low Impact
                    </option>

                    <option value="power-yoga">
                      Power Yoga
                    </option>

                    <option value="yoga-ninos">
                      Yoga para niños
                    </option>
                  </select>
                </div>

                {/* FECHA Y HORA */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="fecha">
                      Fecha
                    </label>

                    <input
                      id="fecha"
                      name="fecha"
                      type="date"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hora">
                      Hora
                    </label>

                    <select
                      id="hora"
                      name="hora"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una hora
                      </option>

                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                    </select>
                  </div>

                </div>

                {/* MENSAJE */}
                <div className="form-group">
                  <label htmlFor="mensaje">
                    ¿Quieres contarnos algo?
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Escribe aquí cualquier información que consideres importante..."
                  />
                </div>

                {error && (
                  <p
                    style={{
                      color: "red",
                      marginTop: "10px",
                    }}
                  >
                    {error}
                  </p>
                )}

                {/* BOTÓN */}
                <button
                  type="submit"
                  className="reserva-submit"
                  disabled={guardando}
                >
                  {guardando
                    ? "Enviando..."
                    : "Confirmar reserva"}
                </button>

              </form>
            </>
          ) : (

            /* CONFIRMACIÓN */
            <div className="reserva-exito">

              <div className="exito-icono">
                ✓
              </div>

              <h2>¡Solicitud recibida!</h2>

              <p>
                Hemos recibido tu solicitud de reserva.
              </p>

              <p>
                Nos pondremos en contacto contigo para confirmar la fecha
                y el horario.
              </p>

              <button
                onClick={() => setEnviado(false)}
                className="nueva-reserva"
              >
                Hacer otra reserva
              </button>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}