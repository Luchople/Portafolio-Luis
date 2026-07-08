'use client';

export default function GuaranteedParticles() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Fondo con gradiente sutil (la constelación se dibuja encima) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
    </div>
  );
}
