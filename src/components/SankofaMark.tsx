interface SankofaMarkProps {
  className?: string;
}

export function SankofaMark({ className = "w-8 h-8" }: SankofaMarkProps) {
  return (
    <img
      src="/logo-sankofa.png"
      alt="Sanku Kamâ - Logo Sankofa"
      className={`object-contain ${className}`}
    />
  );
}