export default function Marquee() {
  const text = "IT'S US, NEVER THEM • NEW DROPS • LAGOS • ";
  return (
    <div className="overflow-hidden bg-white text-black py-1.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {text.repeat(10)}
      </div>
    </div>
  );
}