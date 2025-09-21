import Image from 'next/image';

export default function Logo({ className = "", size = "xl" }) {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl", 
    large: "text-3xl",
    xl: "text-10xl" 
  };

  const imageSizes = {
    small: { width: 40, height: 40 },
    default: { width: 48, height: 48 },
    large: { width: 64, height: 64 },
    xl: { width: 80, height: 80 }
  };

  return (
    <div className={`font-serif font-bold text-foreground flex items-center ${sizeClasses[size]} ${className}`}> 
      <Image 
        src="/1.png" 
        alt="Hanshills Logo"  
        // width={imageSizes[size].width} 
        // height={imageSizes[size].height}
        width={120}
        height={120}
        className="mr-3"
        priority
      />
      <span className="text-xl">& Co.</span>
    </div>
  );
}
