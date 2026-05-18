import svgPaths from "./svg-xwbssgcxvp";

function Group1() {
  return (
    <div className="col-1 h-[107.645px] ml-0 mt-0 relative row-1 w-[221.445px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221.445 107.645">
        <g id="Group">
          <path d={svgPaths.p2f7acc80} fill="var(--fill-0, #00C3C5)" id="Vector" />
          <path d={svgPaths.p92ffa00} fill="var(--fill-0, #00C3C5)" id="Vector_2" />
          <path d={svgPaths.p305b7f00} fill="var(--fill-0, #00C3C5)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group1 />
    </div>
  );
}

function LogoFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[24.348px] items-center relative shrink-0" data-name="Logo Frame">
      <Group />
      <p className="font-['Montauk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ed1e79] text-[53.565px] text-center tracking-[14.9983px] uppercase w-[221px]">saúde</p>
    </div>
  );
}

function LogoIsaSaude() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo isa saude">
      <LogoFrame />
    </div>
  );
}

export default function LogoProdutos() {
  return (
    <div className="content-stretch flex gap-[56px] items-center relative size-full" data-name="Logo Produtos">
      <LogoIsaSaude />
      <div className="flex flex-col font-['Montauk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666e80] text-[56px] tracking-[11.2px] uppercase whitespace-nowrap">
        <p className="leading-[56px] mb-0">onco</p>
        <p className="leading-[56px]">care</p>
      </div>
    </div>
  );
}