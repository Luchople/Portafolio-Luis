'use client';

export default function GuaranteedParticles() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Partículas visibles */}
      {Array.from({ length: 50 }, (_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            animationDuration: (2 + Math.random() * 3) + 's',
            opacity: 0.3 + Math.random() * 0.4,
          }}
        />
      ))}
      
      {/* Partículas púrpura */}
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={`purple-${i}`}
          className="absolute bg-purple-400 rounded-full animate-bounce"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 4 + 's',
            animationDuration: (3 + Math.random() * 2) + 's',
            opacity: 0.2 + Math.random() * 0.3,
          }}
        />
      ))}
    </div>
  );
}