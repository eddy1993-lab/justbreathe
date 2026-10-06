"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Reserva = {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  fecha: string;
  hora: string;
  mensaje: string | null;
};

export default function AdminPage() {
  const [seccion, setSeccion] = useState("resumen");
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    cargarReservas();
  }, []);

  async function cargarReservas() {
    setCargando(true);
    setError("");

    const { data, error } = await supabase
      .from("reservas")
      .select("*")
      .order("fecha", { ascending: true })
      .order("hora", { ascending: true });

    if (error) {
      console.error("Error cargando reservas:", error);
      setError("No se han podido cargar las reservas.");
      setCargando(false);
      return;
    }

    setReservas(data || []);
    setCargando(false);
  }

  return (
    <main className="admin-page">

      {/* CABECERA */}

      <header className="admin-header">

        <div>
          <span className="admin-eyebrow">
            JUST BREATHE
          </span>

          <h1>Panel de administración</h1>

          <p>
            Gestiona tus clases, reservas, horarios y opiniones.
          </p>
        </div>

        <div className="admin-avatar">
          JB
        </div>

      </header>


      <div className="admin-layout">

        {/* MENÚ */}

        <aside className="admin-sidebar">

          <button
            className={seccion === "resumen" ? "activo" : ""}
            onClick={() => setSeccion("resumen")}
          >
            📊
            <span>Resumen</span>
          </button>

          <button
            className={seccion === "reservas" ? "activo" : ""}
            onClick={() => setSeccion("reservas")}
          >
            📅
            <span>Reservas</span>
          </button>

          <button
            className={seccion === "clases" ? "activo" : ""}
            onClick={() => setSeccion("clases")}
          >
            🧘
            <span>Clases</span>
          </button>

          <button
            className={seccion === "horarios" ? "activo" : ""}
            onClick={() => setSeccion("horarios")}
          >
            🕐
            <span>Horarios</span>
          </button>

          <button
            className={seccion === "opiniones" ? "activo" : ""}
            onClick={() => setSeccion("opiniones")}
          >
            ⭐
            <span>Opiniones</span>
          </button>

          <button
            className={seccion === "contactos" ? "activo" : ""}
            onClick={() => setSeccion("contactos")}
          >
            ✉️
            <span>Mensajes</span>
          </button>

        </aside>


        {/* CONTENIDO */}

        <section className="admin-content">

          {/* ==================== */}
          {/* RESUMEN */}
          {/* ==================== */}

          {seccion === "resumen" && (

            <>
              <div className="admin-title">

                <div>
                  <span>BIENVENIDO</span>

                  <h2>Resumen general</h2>
                </div>

              </div>


              <div className="admin-stats">

                <div className="admin-stat-card">

                  <div className="admin-stat-icon">
                    📅
                  </div>

                  <div>
                    <span>Reservas</span>

                    <strong>
                      {reservas.length}
                    </strong>
                  </div>

                </div>


                <div className="admin-stat-card">

                  <div className="admin-stat-icon">
                    🧘
                  </div>

                  <div>
                    <span>Clases</span>

                    <strong>
                      5
                    </strong>
                  </div>

                </div>


                <div className="admin-stat-card">

                  <div className="admin-stat-icon">
                    ⭐
                  </div>

                  <div>
                    <span>Opiniones</span>

                    <strong>
                      0
                    </strong>
                  </div>

                </div>


                <div className="admin-stat-card">

                  <div className="admin-stat-icon">
                    ✉️
                  </div>

                  <div>
                    <span>Mensajes</span>

                    <strong>
                      0
                    </strong>
                  </div>

                </div>

              </div>


              {/* RESERVAS RECIENTES */}

              <div className="admin-panel">

                <div className="admin-panel-header">

                  <div>
                    <span>PRÓXIMAS RESERVAS</span>

                    <h3>
                      Reservas recientes
                    </h3>
                  </div>

                  <button
                    onClick={() => setSeccion("reservas")}
                  >
                    Ver todas
                  </button>

                </div>


                {cargando && (
                  <div className="admin-empty">
                    <div>⏳</div>

                    <h3>
                      Cargando reservas...
                    </h3>
                  </div>
                )}


                {!cargando && error && (
                  <div className="admin-empty">

                    <div>⚠️</div>

                    <h3>
                      Error
                    </h3>

                    <p>
                      {error}
                    </p>

                  </div>
                )}


                {!cargando &&
                  !error &&
                  reservas.length === 0 && (

                    <div className="admin-empty">

                      <div>📅</div>

                      <h3>
                        No hay reservas
                      </h3>

                      <p>
                        Cuando alguien haga una reserva aparecerá aquí.
                      </p>

                    </div>

                  )}


                {!cargando &&
                  !error &&
                  reservas
                    .slice(0, 3)
                    .map((reserva) => (

                      <div
                        className="admin-reserva"
                        key={reserva.id}
                      >

                        <div className="admin-reserva-date">

                          <strong>
                            {reserva.fecha}
                          </strong>

                          <span>
                            {reserva.hora}
                          </span>

                        </div>


                        <div className="admin-reserva-info">

                          <strong>
                            {reserva.nombre}
                          </strong>

                          <span>
                            {reserva.servicio}
                          </span>

                        </div>


                        <span className="admin-badge pendiente">
                          Pendiente
                        </span>

                      </div>

                    ))}

              </div>

            </>

          )}


          {/* ==================== */}
          {/* RESERVAS */}
          {/* ==================== */}

          {seccion === "reservas" && (

            <div className="admin-panel">

              <div className="admin-panel-header">

                <div>
                  <span>GESTIÓN</span>

                  <h3>
                    Reservas
                  </h3>
                </div>

                <button onClick={cargarReservas}>
                  Actualizar
                </button>

              </div>


              {cargando && (

                <div className="admin-empty">

                  <div>⏳</div>

                  <h3>
                    Cargando reservas...
                  </h3>

                </div>

              )}


              {error && (

                <div className="admin-empty">

                  <div>⚠️</div>

                  <h3>
                    Error
                  </h3>

                  <p>
                    {error}
                  </p>

                </div>

              )}


              {!cargando &&
                !error &&
                reservas.length === 0 && (

                  <div className="admin-empty">

                    <div>📅</div>

                    <h3>
                      No hay reservas
                    </h3>

                    <p>
                      Aquí aparecerán las reservas realizadas por tus clientes.
                    </p>

                  </div>

                )}


              {!cargando &&
                !error &&
                reservas.length > 0 && (

                  <div>

                    {reservas.map((reserva) => (

                      <div
                        className="admin-reserva"
                        key={reserva.id}
                      >

                        <div className="admin-reserva-date">

                          <strong>
                            {reserva.fecha}
                          </strong>

                          <span>
                            {reserva.hora}
                          </span>

                        </div>


                        <div className="admin-reserva-info">

                          <strong>
                            {reserva.nombre}
                          </strong>

                          <span>
                            {reserva.servicio}
                          </span>

                          <span>
                            {reserva.email}
                          </span>

                          <span>
                            {reserva.telefono}
                          </span>

                        </div>


                        <span className="admin-badge pendiente">
                          Pendiente
                        </span>

                      </div>

                    ))}

                  </div>

                )}

            </div>

          )}


          {/* ==================== */}
          {/* CLASES */}
          {/* ==================== */}

          {seccion === "clases" && (

            <div className="admin-panel">

              <div className="admin-panel-header">

                <div>
                  <span>JUST BREATHE</span>

                  <h3>
                    Tus clases
                  </h3>
                </div>

              </div>


              <div className="admin-clases">

                <div className="admin-clase">
                  <span>🪑</span>

                  <div>
                    <strong>
                      Yoga en silla
                    </strong>

                    <p>
                      Movilidad y bienestar
                    </p>
                  </div>
                </div>


                <div className="admin-clase">
                  <span>🌿</span>

                  <div>
                    <strong>
                      Yoga para mayores
                    </strong>

                    <p>
                      Flexibilidad y bienestar
                    </p>
                  </div>
                </div>


                <div className="admin-clase">
                  <span>🧘</span>

                  <div>
                    <strong>
                      Yoga Low Impact
                    </strong>

                    <p>
                      Ejercicio suave
                    </p>
                  </div>
                </div>


                <div className="admin-clase">
                  <span>🔥</span>

                  <div>
                    <strong>
                      Power Yoga
                    </strong>

                    <p>
                      Fuerza y resistencia
                    </p>
                  </div>
                </div>


                <div className="admin-clase">
                  <span>🌈</span>

                  <div>
                    <strong>
                      Yoga para niños
                    </strong>

                    <p>
                      Concentración y relajación
                    </p>
                  </div>
                </div>

              </div>

            </div>

          )}


          {/* ==================== */}
          {/* HORARIOS */}
          {/* ==================== */}

          {seccion === "horarios" && (

            <div className="admin-panel">

              <div className="admin-panel-header">

                <div>
                  <span>CALENDARIO</span>

                  <h3>
                    Horarios y disponibilidad
                  </h3>
                </div>

              </div>

              <div className="admin-empty">

                <div>
                  🕐
                </div>

                <h3>
                  Configura tus horarios
                </h3>

                <p>
                  Desde aquí podrás abrir y cerrar horarios para tus clases.
                </p>

              </div>

            </div>

          )}


          {/* ==================== */}
          {/* OPINIONES */}
          {/* ==================== */}

          {seccion === "opiniones" && (

            <div className="admin-panel">

              <div className="admin-panel-header">

                <div>
                  <span>VALORACIONES</span>

                  <h3>
                    Opiniones de clientes
                  </h3>
                </div>

              </div>

              <div className="admin-empty">

                <div>
                  ⭐
                </div>

                <h3>
                  Opiniones
                </h3>

                <p>
                  Aquí podrás revisar y gestionar las opiniones de tus clientes.
                </p>

              </div>

            </div>

          )}


          {/* ==================== */}
          {/* MENSAJES */}
          {/* ==================== */}

          {seccion === "contactos" && (

            <div className="admin-panel">

              <div className="admin-panel-header">

                <div>
                  <span>CONTACTO</span>

                  <h3>
                    Mensajes recibidos
                  </h3>
                </div>

              </div>

              <div className="admin-empty">

                <div>
                  ✉️
                </div>

                <h3>
                  Bandeja de mensajes
                </h3>

                <p>
                  Aquí aparecerán los mensajes enviados desde la página de contacto.
                </p>

              </div>

            </div>

          )}

        </section>

      </div>

    </main>
  );
}