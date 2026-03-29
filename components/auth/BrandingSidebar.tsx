import Image from "next/image";

export default function BrandingSidebar() {
  return (
    <section className="hidden lg:flex flex-col justify-between p-16 relative overflow-hidden bg-primary-container">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwULBbNDkeDEErLSuvs1Pc3e9KxWKINjWwND_9uZqARVSLHigU-yMnoklMRLx_EnV8I2f9xh_x2ef2qGR1DY-ZMvtYl3cpcxg4_Situamefr1i99rY2SyH8mWeGAjmUCeFbwrzeU1izQfHfxZ8s30uSLBfTtgudHal1kg0KDOrACUsKro2mdXT44f7bXgV-UlWPlCwqYkHhKaw_ak980leSoPRxYWUP9_T_6SDu2JW1hWoKcLUFEfDbeu9FMzBDaf3pFoOYj9JqrGq"
          alt="Laboratorio médico moderno con iluminación suave azul, divisiones de vidrio y equipamiento clínico avanzado en un entorno profesional"
          fill
          className="object-cover opacity-30 grayscale mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/80 to-transparent" />
      </div>

      {/* Header: logo + headline */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-lg shadow-lg">
            <span className="material-symbols-outlined text-white">
              medical_services
            </span>
          </div>
          <span className="font-headline font-extrabold text-2xl tracking-tighter text-white">
            Clinical Atelier
          </span>
        </div>

        <div className="max-w-xl">
          <h1 className="font-headline text-5xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Medicina de <br />
            Precisión con <br />
            Claridad.
          </h1>
          <p className="text-on-primary-container text-lg font-medium leading-relaxed max-w-md">
            La suite administrativa definitiva para entornos clínicos de alto
            rendimiento. Segura, intuitiva y meticulosamente diseñada.
          </p>
        </div>
      </div>

      {/* Footer: compliance/trust badges */}
      <div className="relative z-10 flex gap-8">
        <div className="flex flex-col">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary-fixed/60 mb-2">
            Estándar de Seguridad
          </span>
          <span className="text-white font-medium text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              verified_user
            </span>
            Cumplimiento HIPAA
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary-fixed/60 mb-2">
            Arquitectura
          </span>
          <span className="text-white font-medium text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              cloud_done
            </span>
            Nube Encriptada
          </span>
        </div>
      </div>
    </section>
  );
}
