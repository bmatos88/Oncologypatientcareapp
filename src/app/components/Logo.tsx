import svgPaths from '../../imports/LogoProdutos/svg-xwbssgcxvp';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center gap-1">
        <svg className="w-[45px] h-[22px]" viewBox="0 0 221.445 107.645" fill="none">
          <path d={svgPaths.p2f7acc80} fill="#00C3C5" />
          <path d={svgPaths.p92ffa00} fill="#00C3C5" />
          <path d={svgPaths.p305b7f00} fill="#00C3C5" />
        </svg>
        <span className="text-[#ED1E79] text-[9px] tracking-[2.6px] uppercase font-bold">saúde</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[#666E80] text-[14px] tracking-[2.8px] uppercase font-bold">onco</span>
        <span className="text-[#666E80] text-[14px] tracking-[2.8px] uppercase font-bold">care</span>
      </div>
    </div>
  );
}
