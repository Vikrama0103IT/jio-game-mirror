import { useEffect, useRef } from "react";

interface AdSlotProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AdSlot = ({ slot, format = "auto", responsive = true, className = "", style }: AdSlotProps) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // Only push ad if adsbygoogle is available
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

// Extend window type for adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default AdSlot;
