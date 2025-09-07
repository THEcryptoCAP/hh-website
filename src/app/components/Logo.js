import MountainLogo from './MountainLogo';

export default function Logo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl", 
    large: "text-3xl",
    xl: "text-4xl"
  };

  return (
    <div className={`font-serif font-bold text-foreground flex items-center ${sizeClasses[size]} ${className}`}>
      <span>H</span>
      <div className="mx-1">
        <MountainLogo />
      </div>
      <span>NSHILLS</span>
      <span className="text-sm font-normal text-muted-foreground ml-2">& Co.</span>
    </div>
  );
}
