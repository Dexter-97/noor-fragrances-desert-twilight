interface IntensityScaleProps {
  level: number; // 1-5
  label?: string;
}

const labels = ["Intimate", "Subtle", "Moderate", "Bold", "Majestic"];

const IntensityScale = ({ level }: IntensityScaleProps) => (
  <div className="flex items-center gap-3">
    <span className="text-[10px] tracking-wider uppercase text-cream-muted">Sillage</span>
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={i <= level ? "intensity-dot intensity-dot-filled" : "intensity-dot intensity-dot-empty"}
        />
      ))}
    </div>
    <span className="text-[10px] tracking-wider uppercase text-primary/80">{labels[level - 1]}</span>
  </div>
);

export default IntensityScale;
