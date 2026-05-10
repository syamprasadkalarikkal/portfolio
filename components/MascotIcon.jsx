const MascotIcon = ({ className = 'h-full w-full' }) => (
  <span
    className={`relative block rounded-[18px] bg-[#19d45f] shadow-[inset_0_-6px_0_rgba(0,0,0,0.1),0_8px_18px_rgba(25,212,95,0.25)] ${className}`}
  >
    <span className="absolute inset-[18%] rounded-full bg-[#062414] shadow-[inset_0_4px_0_rgba(255,255,255,0.08)]">
      <span className="absolute left-[18%] top-[26%] h-[26%] w-[24%] rounded-full bg-white">
        <span className="absolute left-[40%] top-[34%] h-[34%] w-[34%] rounded-full bg-[#062414]" />
      </span>
      <span className="absolute right-[18%] top-[26%] h-[26%] w-[24%] rounded-full bg-white">
        <span className="absolute left-[22%] top-[34%] h-[34%] w-[34%] rounded-full bg-[#062414]" />
      </span>
      <span className="absolute left-[26%] top-[58%] h-[18%] w-[48%] rounded-b-full border-b-[3px] border-white/90" />
      <span className="absolute left-[11%] top-[52%] h-[10%] w-[12%] rounded-full bg-[#ff9aaa]/70" />
      <span className="absolute right-[11%] top-[52%] h-[10%] w-[12%] rounded-full bg-[#ff9aaa]/70" />
      <span className="absolute left-[18%] top-[12%] h-[10%] w-[18%] rounded-full bg-white/25 blur-[1px]" />
    </span>
  </span>
);

export default MascotIcon;
