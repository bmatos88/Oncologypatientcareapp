import svgPaths from "./svg-24psd5gbuf";

function Group1() {
  return (
    <div className="col-1 h-[22.105px] ml-0 mt-0 relative row-1 w-[45.474px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4737 22.1054">
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
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Container />
      <Container1 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
        <g clipPath="url(#clip0_2_8535)" id="chevron-left">
          <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, #666E80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2_8535">
            <rect fill="white" height="14" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <ChevronLeft />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#666e80] text-[12px] text-left uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        voltar
      </p>
    </button>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[216px]" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#004474] text-[14px] w-[216px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Pedro Assumpção `}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#666e80] text-[12px] text-ellipsis w-[216px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        pedro.griffinoria.edwiges@gmail.com
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[38px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
          <path d={svgPaths.p3380fa00} fill="var(--fill-0, #D9D9D9)" id="Ellipse 83" />
        </svg>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[38px]">
        <div className="absolute inset-[0.49%_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 37.8144">
            <path d={svgPaths.p24f1370} fill="var(--fill-0, #ED1E79)" id="Ellipse 82" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[10.857px] ml-[11px] mt-[13.57px] relative row-1 text-[#ed1e79] text-[8.143px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        85%
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e8eaed] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[328px]">
      <Header />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Step2Circle() {
  return (
    <div className="absolute bg-[#9aa1b1] left-0 opacity-50 rounded-[13px] size-[16px] top-0" data-name="Step 2 Circle">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Step2Circle1() {
  return (
    <div className="absolute bg-[#9aa1b1] left-[3px] rounded-[13px] size-[10px] top-[3px]" data-name="Step 2 Circle">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[16px] z-[11]">
      <Step2Circle />
      <Step2Circle1 />
    </div>
  );
}

function Step2Circle2() {
  return (
    <div className="bg-[#9aa1b1] relative rounded-[13px] shrink-0 size-[16px] z-[9]" data-name="Step 2 Circle">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Step2Circle3() {
  return (
    <div className="bg-[#9aa1b1] relative rounded-[13px] shrink-0 size-[16px] z-[7]" data-name="Step 2 Circle">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Step2Circle4() {
  return (
    <div className="bg-[#9aa1b1] relative rounded-[13px] shrink-0 size-[16px] z-[5]" data-name="Step 2 Circle">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Step2Circle5() {
  return (
    <div className="bg-[#9aa1b1] relative rounded-[13px] shrink-0 size-[16px] z-[3]" data-name="Step 2 Circle">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Step3Circle() {
  return (
    <div className="bg-[#9aa1b1] relative rounded-[13px] shrink-0 size-[16px] z-[1]" data-name="Step 3 Circle">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function StepperContainer() {
  return (
    <div className="content-stretch flex gap-[4px] isolate items-center relative shrink-0 w-[328px]" data-name="Stepper Container">
      <Frame14 />
      <div className="bg-[#9aa1b1] flex-[1_0_0] h-px min-w-px relative z-[10]" data-name="Step 1 Line" />
      <Step2Circle2 />
      <div className="bg-[#9aa1b1] flex-[1_0_0] h-px min-w-px relative z-[8]" data-name="Step 2 Line" />
      <Step2Circle3 />
      <div className="bg-[#9aa1b1] flex-[1_0_0] h-px min-w-px relative z-[6]" data-name="Step 2 Line" />
      <Step2Circle4 />
      <div className="bg-[#9aa1b1] flex-[1_0_0] h-px min-w-px relative z-[4]" data-name="Step 2 Line" />
      <Step2Circle5 />
      <div className="bg-[#9aa1b1] flex-[1_0_0] h-px min-w-px relative z-[2]" data-name="Step 2 Line" />
      <Step3Circle />
    </div>
  );
}

function AppointmentTrafficLight() {
  return (
    <div className="bg-[#ed1e79] content-stretch flex items-start p-[4px] relative rounded-[20px] shrink-0" data-name="Appointment traffic light">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[9px] relative shrink-0 text-[9px] text-center text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        incompleto
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AppointmentTrafficLight />
    </div>
  );
}

function LucideMoveRight() {
  return (
    <div className="h-[8px] relative shrink-0 w-[16px]" data-name="lucide/move-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
        <g clipPath="url(#clip0_2_8532)" id="lucide/move-right">
          <path d={svgPaths.p29888000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_8532">
            <rect fill="white" height="8" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AppointmentTrafficLight1() {
  return (
    <div className="bg-[#004474] content-stretch flex gap-[4px] items-start p-[4px] relative rounded-[20px] shrink-0" data-name="Appointment traffic light">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[9px] relative shrink-0 text-[9px] text-center text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Próximo: endereço
      </p>
      <LucideMoveRight />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AppointmentTrafficLight1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Titillium_Web:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#666e80] text-[18px] whitespace-nowrap">Dados pessoais</p>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[328px]">
      <Frame6 />
      <Frame9 />
    </div>
  );
}

function LabelText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label-text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#666e80] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-w-px relative" data-name="content">
      <LabelText />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[8px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer />
    </div>
  );
}

function LabelText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label-text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#666e80] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        CPF
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-w-px relative" data-name="content">
      <LabelText1 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[8px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer1 />
    </div>
  );
}

function LabelText2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label-text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#666e80] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nome completo
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-w-px relative" data-name="content">
      <LabelText2 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[8px] relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer2 />
    </div>
  );
}

function LabelText3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label-text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#666e80] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Celular
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-w-px relative" data-name="content">
      <LabelText3 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[8px] relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function TextField3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer3 />
    </div>
  );
}

function LabelText4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label-text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#666e80] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Data de nascimento
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-w-px relative" data-name="content">
      <LabelText4 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[8px] relative size-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function TextField4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer4 />
    </div>
  );
}

function LabelText5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label-text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#666e80] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Número do conselho de classe
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-w-px relative" data-name="content">
      <LabelText5 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] py-[8px] relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function TextField5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input Field">
        <TextField />
      </div>
      <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
      <div className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input Field">
        <TextField1 />
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input Field">
        <TextField2 />
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input Field">
        <TextField3 />
      </div>
      <div className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input Field">
        <TextField4 />
      </div>
      <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
      <div className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input Field">
        <TextField5 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#00c3c5] h-[48px] relative rounded-[24px] shrink-0 w-full" data-name="Buttons">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pl-[81px] pr-[80px] py-[16px] relative size-full">
            <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              salvar e avançar
            </p>
          </div>
        </div>
      </div>
      <button className="block cursor-pointer font-['Open_Sans:Bold',sans-serif] font-bold h-[16px] leading-[0] relative shrink-0 text-[#666e80] text-[12px] text-center uppercase w-[326.392px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">voltar</p>
      </button>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center pb-[32px] pt-[16px] px-[16px] relative size-full">
          <Frame5 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <StepperContainer />
      <Frame8 />
      <Frame />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-0 top-[24px] w-[360px]">
      <Frame12 />
      <Frame11 />
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

function Frame4() {
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
      <Frame13 />
      <div className="-translate-x-1/2 absolute bg-[rgba(237,30,121,0.75)] bottom-[8px] content-stretch flex flex-col items-start left-1/2 overflow-clip px-[26px] py-[8px] rounded-[24px] w-[344px]" data-name="Component 7">
        <Frame4 />
      </div>
    </div>
  );
}