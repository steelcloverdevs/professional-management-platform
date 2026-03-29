"use client";

import { useState } from "react";

export default function AuthContainer() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* Right side: login canvas */}
      <section className="flex flex-col justify-center items-center bg-surface relative z-10 p-8 lg:p-12 overflow-y-auto">
        {/* Mobile brand logo */}
        <div className="lg:hidden flex items-center gap-3 mb-12 self-start">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-white text-base">
              medical_services
            </span>
          </div>
          <span className="font-headline font-extrabold text-xl tracking-tighter text-primary">
            Clinical Atelier
          </span>
        </div>

        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">
              Bienvenido
            </h2>
            <p className="text-on-surface-variant font-medium">
              Ingresá tus credenciales para acceder al portal.
            </p>
          </div>

          {/* Login form */}
          <form className="space-y-6">
            {/* Email */}
            <div className="space-y-1">
              <label
                className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface-variant"
                htmlFor="email"
              >
                Correo Profesional
              </label>
              <div className="relative group">
                <input
                  className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 px-4 py-3.5 text-on-surface transition-all placeholder:text-outline/50 outline-none"
                  id="email"
                  placeholder="nombre@clinica.com"
                  type="email"
                  autoComplete="email"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-outline/40">
                  <span className="material-symbols-outlined">mail</span>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label
                  className="font-label text-[11px] font-bold uppercase tracking-wider text-on-surface-variant"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <a
                  className="text-[11px] font-bold text-secondary uppercase tracking-wider hover:underline"
                  href="#"
                >
                  ¿Olvidaste?
                </a>
              </div>
              <div className="relative group">
                <input
                  className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-secondary focus:ring-0 px-4 py-3.5 text-on-surface transition-all placeholder:text-outline/50 outline-none"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  autoComplete="current-password"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-outline/40">
                  <span className="material-symbols-outlined">lock</span>
                </div>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center">
              <input
                className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary/20"
                id="remember"
                type="checkbox"
              />
              <label
                className="ml-3 text-sm font-medium text-on-surface-variant"
                htmlFor="remember"
              >
                Mantenerme conectado por 24 horas
              </label>
            </div>

            {/* Submit */}
            <button
              className="w-full py-4 bg-primary hover:bg-primary-container text-white font-headline font-bold rounded-lg shadow-lg shadow-primary/10 transition-all flex items-center justify-center gap-2 group"
              type="submit"
            >
              Ingresar al Sistema
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </form>

          {/* Register CTA */}
          <div className="mt-12 pt-8 border-t border-surface-container-high">
            <p className="text-sm text-center text-on-surface-variant mb-6 font-medium">
              ¿Nuevo en Clinical Atelier?
            </p>
            <button
              className="w-full py-3.5 bg-surface-container-lowest border border-outline-variant hover:border-secondary text-on-surface font-headline font-bold rounded-lg transition-all flex items-center justify-center gap-2"
              type="button"
              onClick={() => setShowRegister(true)}
            >
              Crear Cuenta Profesional
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center">
            <p className="text-[10px] text-outline uppercase tracking-widest leading-relaxed">
              Solo personal médico autorizado.
              <br />
              Todas las sesiones son registradas para cumplimiento normativo.
            </p>
          </footer>
        </div>
      </section>

      {/* Registration overlay panel */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          showRegister
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute right-0 top-0 h-full w-full lg:w-[40%] bg-white glass-panel p-12 shadow-2xl overflow-y-auto">
          <div className="max-w-md mx-auto">
            <button
              className="mb-8 flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider"
              type="button"
              onClick={() => setShowRegister(false)}
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              Volver al inicio
            </button>

            <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight mb-8">
              Registro Profesional
            </h2>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                    Nombre Completo
                  </label>
                  <input
                    className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary/50 p-3 rounded outline-none"
                    placeholder="Dr. Ana García"
                    type="text"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                    Matrícula / ID
                  </label>
                  <input
                    className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary/50 p-3 rounded outline-none"
                    placeholder="12345-AB"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                  Especialidad
                </label>
                <select className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary/50 p-3 rounded text-on-surface-variant outline-none">
                  <option>Seleccionar especialidad</option>
                  <option>Medicina Interna</option>
                  <option>Neurología</option>
                  <option>Oncología</option>
                  <option>Radiología</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                  Correo Profesional
                </label>
                <input
                  className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary/50 p-3 rounded outline-none"
                  placeholder="ana.garcia@clinica.com"
                  type="email"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-1">
                <label className="font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                  Contraseña Segura
                </label>
                <input
                  className="w-full bg-surface-container border-none focus:ring-2 focus:ring-secondary/50 p-3 rounded outline-none"
                  placeholder="••••••••"
                  type="password"
                  autoComplete="new-password"
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <input
                  className="mt-1 rounded text-secondary focus:ring-secondary/20"
                  id="terms"
                  type="checkbox"
                />
                <label
                  className="text-xs text-on-surface-variant leading-relaxed"
                  htmlFor="terms"
                >
                  Confirmo mis credenciales profesionales y acepto los{" "}
                  <span className="text-secondary font-bold underline cursor-pointer">
                    Términos de Servicio
                  </span>{" "}
                  y la{" "}
                  <span className="text-secondary font-bold underline cursor-pointer">
                    Política de Privacidad
                  </span>{" "}
                  de Clinical Atelier.
                </label>
              </div>

              <button
                className="w-full py-4 bg-secondary text-white font-headline font-bold rounded-lg shadow-lg shadow-secondary/20 hover:bg-on-secondary-container transition-colors mt-4"
                type="submit"
              >
                Completar Registro
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
