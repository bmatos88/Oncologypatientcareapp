import svgPaths from "./svg-8t2h59xo85";

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[18px] relative shrink-0 text-[14px] w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#666] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nome do paciente
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#666e80] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Pedro Assumpção `}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[18px] relative shrink-0 text-[14px] w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#666] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Endereço
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#666e80] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rua dos Pinheiros, 987, Jardim das Árvores - São Paulo - 01515-15
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        CID Principal
      </p>
      <ul className="block font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="list-disc ms-[21px]">
          <span className="leading-[18px]">A830 - Encefalite japonesa</span>
        </li>
      </ul>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        CIDs Secundários / comorbidades
      </p>
      <ul className="block font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="list-disc ms-[21px]">
          <span className="leading-[18px]">E10 - Diabetes mellitus insulino-dependente (tipo 1)</span>
        </li>
      </ul>
      <ul className="block font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="list-disc ms-[21px]">
          <span className="leading-[18px]">K74 - Cirrose biliar primária</span>
        </li>
      </ul>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#666e80] text-[14px] w-full">
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#666] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hipótese diagnóstica
      </p>
      <Frame5 />
    </div>
  );
}

function LucideTriangleAlert() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/triangle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/triangle-alert">
          <path d={svgPaths.p513b280} id="Vector" stroke="var(--stroke-0, #EDBB3B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <LucideTriangleAlert />
      <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] min-w-px relative text-[#edbb3b] text-[12px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pendência de atendimento
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#fffcf3] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[25px] shrink-0 w-[328px]">
      <div aria-hidden="true" className="absolute border-[#edbb3b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[25px]" />
      <Frame10 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#666] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Evidências de atendimento
      </p>
      <Frame11 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame12 />
      <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
      <Frame14 />
      <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
      <Frame13 />
      <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
      <Frame15 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-start justify-center left-0 pb-[32px] pt-[16px] px-[16px] rounded-[24px] top-[152px] w-[360px]">
      <Frame16 />
      <div className="bg-[#00c3c5] h-[48px] relative rounded-[24px] shrink-0 w-full" data-name="Buttons">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pl-[81px] pr-[80px] py-[16px] relative size-full">
            <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              finalizar atendimento
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 h-[22.105px] ml-0 mt-0 relative row-1 w-[45.474px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4737 22.1053">
        <g id="Group">
          <path d={svgPaths.pa95ec80} fill="var(--fill-0, #00C3C5)" id="Vector" />
          <path d={svgPaths.p31b7b600} fill="var(--fill-0, #00C3C5)" id="Vector_2" />
          <path d={svgPaths.p6703a00} fill="var(--fill-0, #00C3C5)" id="Vector_3" />
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

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-[36px] items-start relative shrink-0 w-[46px]" data-name="Container">
      <Group />
      <p className="font-['Montauk:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#ed1e79] text-[11.304px] tracking-[2.5999px] uppercase w-[min-content]">atende</p>
    </div>
  );
}

function LucideMenu() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/menu">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/menu">
          <path d="M4 12H20M4 6H20M4 18H20" id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Container">
      <LucideMenu />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-between left-[16px] top-[24px] w-[328px]" data-name="Header">
      <Container />
      <Container1 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
        <g clipPath="url(#clip0_2_8639)" id="chevron-left">
          <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, #666E80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2_8639">
            <rect fill="white" height="14" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] top-[76px]" data-name="Container">
      <ChevronLeft />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#666e80] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        voltar
      </p>
    </div>
  );
}

function Map() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="map">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="map">
          <path d={svgPaths.p19fa4b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.22727" />
          <path d="M6.54492 2.86377V12.682" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.22727" />
          <path d="M11.4551 5.31885V15.137" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.22727" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <button className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Map />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-center text-white uppercase w-[83px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rotas
      </p>
    </button>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%_12.51%_12.5%_12.5%]">
      <div className="absolute inset-[-4.83%_-4.86%_-4.86%_-4.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8113 14.8075">
          <g id="Group 1101">
            <path d={svgPaths.p611d900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
            <path d={svgPaths.p3d8bdb00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
            <path d={svgPaths.p2141fc80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
            <path d={svgPaths.p208bb380} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Announcement() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="announcement">
      <Group2 />
    </div>
  );
}

function Frame2() {
  return (
    <button className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <Announcement />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-center text-white uppercase w-[83px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        avisos
      </p>
    </button>
  );
}

function ResumeIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="resume-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="resume-icon">
          <path d={svgPaths.p3c0de8c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09734" />
          <path d={svgPaths.p12445000} fill="var(--fill-0, white)" id="Subtract" />
          <path d={svgPaths.p1eab0600} fill="var(--fill-0, white)" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <button className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <ResumeIcon />
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">produtividade</p>
      </div>
    </button>
  );
}

function Frame6() {
  return (
    <div className="content-stretch cursor-pointer flex items-center justify-between relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function Component02PlanejamentoDaRota() {
  return (
    <div className="bg-[#f4f6f9] relative size-full" data-name="02-planejamento da rota">
      <Frame />
      <Header />
      <p className="absolute font-['Titillium_Web:SemiBold',sans-serif] leading-[28px] left-[16px] not-italic text-[#666e80] text-[24px] top-[108px] whitespace-nowrap">Informações do Atendimento</p>
      <Container2 />
      <div className="-translate-x-1/2 absolute bg-[rgba(237,30,121,0.75)] bottom-[8px] content-stretch flex flex-col items-start left-1/2 overflow-clip px-[26px] py-[8px] rounded-[24px] w-[344px]" data-name="Component 7">
        <Frame6 />
      </div>
    </div>
  );
}