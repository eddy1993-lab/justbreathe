"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function iniciarSesion(e: React.FormEvent) {
    e.preventDefault();

    setCargando(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      setError("Email o contraseña incorrectos.");
      setCargando(false);
      return;
    }

    router.replace("/admin");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "#f7f5f0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "40px",
          borderRadius: "20px",
          background: "#ffffff",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
            }}
          >
            JUST BREATHE
          </span>

          <h1
            style={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Acceso privado
          </h1>

          <p>
            Inicia sesión para acceder al panel de administración.
          </p>
        </div>

        <form onSubmit={iniciarSesion}>

          <div style={{ marginBottom: "18px" }}>

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              autoComplete="email"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                boxSizing: "border-box",
              }}
            />

          </div>


          <div style={{ marginBottom: "18px" }}>

            <label htmlFor="password">
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
              autoComplete="current-password"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                boxSizing: "border-box",
              }}
            />

          </div>


          {error && (
            <p
              style={{
                color: "#c0392b",
                marginBottom: "15px",
              }}
            >
              {error}
            </p>
          )}


          <button
            type="submit"
            disabled={cargando}
            style={{
              width: "100%",
              padding: "14px",
              cursor: cargando ? "wait" : "pointer",
            }}
          >
            {cargando
              ? "Entrando..."
              : "Iniciar sesión"}
          </button>

        </form>
      </div>
    </main>
  );
}