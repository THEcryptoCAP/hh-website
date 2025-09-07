import MountainLogo from './MountainLogo';

export default function LogoIcon({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-10 h-10",
    large: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <div className="relative">
        {/* Mountain Icon */}
        <MountainLogo />
        
        {/* Company Initials Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white opacity-90">H</span>
        </div>
      </div>
    </div>
  );
}
