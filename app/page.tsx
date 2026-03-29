import type { Metadata } from "next";
import BrandingSidebar from "@/components/auth/BrandingSidebar";
import AuthContainer from "@/components/auth/AuthContainer";

export const metadata: Metadata = {
  title: "Acceso al Sistema — Clinical Atelier",
  description:
    "Ingresá tus credenciales para acceder al portal clínico. Plataforma segura para profesionales médicos.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen grid asymmetric-layout relative">
      <BrandingSidebar />
      <AuthContainer />

      {/* Decorative corner accent */}
      <div className="fixed top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none z-0" />

      {/* Decorative dots */}
      <div className="fixed bottom-0 right-0 p-8 flex gap-4 pointer-events-none">
        <div className="bg-surface-container-high w-2 h-2 rounded-full" />
        <div className="bg-outline-variant w-2 h-2 rounded-full" />
        <div className="bg-surface-container-high w-2 h-2 rounded-full" />
      </div>
    </main>
  );
}
