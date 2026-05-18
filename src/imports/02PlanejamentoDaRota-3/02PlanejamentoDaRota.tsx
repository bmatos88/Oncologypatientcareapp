import svgPaths from "./svg-2zvmmmq3vh";

function Group1() {
  return (
    <div className="col-1 h-[22.105px] ml-0 mt-0 relative row-1 w-[45.474px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4736 22.1054">
        <g id="Group">
          <path d={svgPaths.pa95ec80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p31b7b600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p6703a00} fill="var(--fill-0, white)" id="Vector_3" />
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
      <p className="font-['Montauk:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[11.304px] text-white tracking-[2.5999px] uppercase w-[min-content]">atende</p>
    </div>
  );
}

function LucideMenu() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/menu">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/menu">
          <path d="M4 12H20M4 6H20M4 18H20" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function Chevron() {
  return (
    <div className="h-[16px] relative shrink-0 w-[15px]" data-name="chevron">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
        <g id="chevron">
          <path clipRule="evenodd" d={svgPaths.pb3d0980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UpdateProfileContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Update profile container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        complete seu perfil
      </p>
      <Chevron />
    </div>
  );
}

function ExpirationContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Expiration container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Complete os dados do seu perfil até 15/01/2025 para evitar o bloqueio da sua conta
      </p>
      <UpdateProfileContainer />
    </div>
  );
}

function ExpirationSection() {
  return (
    <div className="absolute bg-[#004474] content-stretch flex flex-col items-start left-0 pb-[16px] pt-[24px] px-[16px] rounded-[8px] top-[64px] w-[328px]" data-name="Expiration section">
      <ExpirationContainer />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[18px] relative shrink-0 text-[14px] w-full" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#004474] w-[216px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Pedro Assumpção `}</p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#666e80] text-ellipsis w-[216px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        pedro.griffinoria.edwiges@gmail.com
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[216px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d={svgPaths.p80c2a80} fill="var(--fill-0, #D9D9D9)" id="Ellipse 83" />
        </svg>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]">
        <div className="absolute bottom-[81.16%] left-1/2 right-[23.6%] top-[0.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6721 8.80748">
            <path d={svgPaths.p2cbcf400} fill="var(--fill-0, #ED1E79)" id="Ellipse 82" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold h-[14px] leading-[13.714px] ml-[10px] mt-[17.14px] relative row-1 text-[#ed1e79] text-[10.286px] text-center uppercase w-[27px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        10%
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pl-[16px] pr-[8px] py-[16px] rounded-[8px] top-0 w-[328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e8eaed] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container3 />
    </div>
  );
}

function ProfileContainer() {
  return (
    <div className="h-[184px] relative shrink-0 w-full" data-name="Profile container">
      <ExpirationSection />
      <Container2 />
    </div>
  );
}

function LucideFileX() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/file-x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/file-x">
          <path d={svgPaths.p27baf900} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BankInfoText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Bank info text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#ed1e79] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Seus dados bancários
      </p>
    </div>
  );
}

function BankInfoContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bank info container">
      <LucideFileX />
      <BankInfoText />
    </div>
  );
}

function BankInfoSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-[156px]" data-name="Bank info section">
      <BankInfoContainer />
    </div>
  );
}

function LucideFileX1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/file-x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/file-x">
          <path d={svgPaths.p27baf900} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BankInfoText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Bank info text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#ed1e79] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Seus dados pessoais
      </p>
    </div>
  );
}

function BankInfoContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bank info container">
      <LucideFileX1 />
      <BankInfoText1 />
    </div>
  );
}

function BankInfoSection1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-[156px]" data-name="Bank info section">
      <BankInfoContainer1 />
    </div>
  );
}

function LucideFileX2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/file-x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/file-x">
          <path d={svgPaths.p27baf900} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BankInfoText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Bank info text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#ed1e79] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Informações de endereço
      </p>
    </div>
  );
}

function BankInfoContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bank info container">
      <LucideFileX2 />
      <BankInfoText2 />
    </div>
  );
}

function BankInfoSection2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-[156px]" data-name="Bank info section">
      <BankInfoContainer2 />
    </div>
  );
}

function LucideFileX3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/file-x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/file-x">
          <path d={svgPaths.p27baf900} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BankInfoText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Bank info text">
      <div className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#ed1e79] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] mb-0">{`Suas `}</p>
        <p className="leading-[16px]">habilidades</p>
      </div>
    </div>
  );
}

function BankInfoContainer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bank info container">
      <LucideFileX3 />
      <BankInfoText3 />
    </div>
  );
}

function BankInfoSection3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-[156px]" data-name="Bank info section">
      <BankInfoContainer3 />
    </div>
  );
}

function LucideFileX4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/file-x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/file-x">
          <path d={svgPaths.p27baf900} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BankInfoText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Bank info text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#ed1e79] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assinatura eletrônica
      </p>
    </div>
  );
}

function BankInfoContainer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bank info container">
      <LucideFileX4 />
      <BankInfoText4 />
    </div>
  );
}

function BankInfoSection4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-[156px]" data-name="Bank info section">
      <BankInfoContainer4 />
    </div>
  );
}

function LucideFileCheck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/file-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/file-check">
          <path d={svgPaths.p3c286400} id="Vector" stroke="var(--stroke-0, #00C643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BankInfoText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Bank info text">
      <div className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#00c643] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] mb-0">{`Certificado `}</p>
        <p className="leading-[16px]">de treinamento</p>
      </div>
    </div>
  );
}

function BankInfoContainer5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bank info container">
      <LucideFileCheck />
      <BankInfoText5 />
    </div>
  );
}

function BankInfoSection5() {
  return (
    <div className="bg-[#f2fcf5] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-[156px]" data-name="Bank info section">
      <BankInfoContainer5 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <BankInfoSection />
      <BankInfoSection1 />
      <BankInfoSection2 />
      <BankInfoSection3 />
      <BankInfoSection4 />
      <BankInfoSection5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dados faltantes
      </p>
      <Frame24 />
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Profile section">
      <ProfileContainer />
      <Frame23 />
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="bg-[#ed1e79] content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[24px] relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-[360px]" data-name="Main container">
      <Header />
      <ProfileSection />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Bold',sans-serif] font-bold items-center justify-between relative shrink-0 text-[#004474] w-full whitespace-nowrap" data-name="Container">
      <p className="leading-[18px] relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confirmar Atendimentos
      </p>
      <p className="leading-[16px] relative shrink-0 text-[12px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        ver todos
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Container10 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#666e80] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Informe abaixo quais dos agendamentos listados foram, ou não, realizados
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#e93b5a] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white uppercase w-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] mb-0">30</p>
        <p className="leading-[16px]">dez</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#666e80] text-[14px] w-[212px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Pedro Vitor Cunha Assumpção</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[#004474] text-[12px] uppercase w-[211px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        confirmar atendimento
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f4f6f9] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#e93b5a] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white uppercase w-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] mb-0">31</p>
        <p className="leading-[16px]">Dez</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#666e80] text-[14px] w-[212px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Pedro Vitor Cunha Assumpção</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[#004474] text-[12px] uppercase w-[211px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        confirmar atendimento
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f4f6f9] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#e93b5a] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white uppercase w-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] mb-0">01</p>
        <p className="leading-[16px]">jan</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#666e80] text-[14px] w-[212px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Pedro Vitor Cunha Assumpção</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[#004474] text-[12px] uppercase w-[211px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        confirmar atendimento
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f4f6f9] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#e93b5a] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white uppercase w-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] mb-0">02</p>
        <p className="leading-[16px]">jan</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#666e80] text-[14px] w-[212px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Pedro Vitor Cunha Assumpção</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[#004474] text-[12px] uppercase w-[211px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        confirmar atendimento
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f4f6f9] content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container16 />
      <Container20 />
      <Container24 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Container11 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="h-[12px] relative shrink-0 w-[60px]" data-name="Pagination">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 12">
        <g id="Pagination">
          <circle cx="6" cy="6" fill="var(--fill-0, #ED1E79)" id="Ellipse 60" r="6" />
          <circle cx="24" cy="6" fill="var(--fill-0, #9AA1B1)" id="Ellipse 59" r="4" />
          <circle cx="40" cy="6" fill="var(--fill-0, #9AA1B1)" id="Ellipse 61" r="4" />
          <circle cx="56" cy="6" fill="var(--fill-0, #9AA1B1)" id="Ellipse 62" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[328px]" data-name="Container">
      <Frame19 />
      <Pagination />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[24px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function AppointmentTrafficLight() {
  return (
    <div className="absolute bg-[#004474] content-stretch flex items-start left-[237px] px-[8px] py-[4px] rounded-[12px] top-[-2px]" data-name="Appointment traffic light">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2 pacientes
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] min-w-full relative shrink-0 text-[#004474] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Meu dia
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#666e80] text-[0px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Planeje-se chegar às
        </span>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[20px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` 06:32 `}</span>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          no endereço abaixo, que é seu primeiro atendimento
        </span>
      </p>
      <AppointmentTrafficLight />
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="copy">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="copy">
          <path d={svgPaths.p77f6680} id="Vector" stroke="var(--stroke-0, #004474)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3bc27300} id="Vector_2" stroke="var(--stroke-0, #004474)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#f9fcfe] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#004474] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#004474] text-[16px] w-[256px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Rua Anselmo Pedro Medeiros, 47, Vila Campesina - Osasco
          </p>
          <Copy />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div className="absolute left-0 size-[32px] top-0">
        <div className="absolute inset-[-15.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
            <g filter="url(#filter0_d_2_8713)" id="Ellipse 52" opacity="0.2">
              <circle cx="21" cy="21" fill="var(--fill-0, #9AA1B1)" r="16" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42" id="filter0_d_2_8713" width="42" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_8713" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_8713" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[2px] size-[28px] top-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="var(--fill-0, #9AA1B1)" id="Ellipse 53" r="14" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[16.5px] text-[12px] text-center text-white top-[16px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px]">1</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ed1e79] text-[12px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Atendimento</p>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] overflow-hidden relative shrink-0 text-[#666e80] text-[14px] text-ellipsis w-[190px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pedro Vitor Cunha Assumpção
      </p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[12px] top-[10px] w-[248px] whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#666e80] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">10:00</p>
      </div>
      <Container40 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[58px] relative shrink-0 w-[288px]" data-name="Container">
      <div className="absolute bg-white h-[58px] left-0 rounded-[8px] shadow-[0px_0px_15px_0px_rgba(32,32,32,0.1)] top-0 w-[288px]" data-name="Background" />
      <div className="absolute flex h-[7px] items-center justify-center right-[16px] top-[26px] w-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[12px] relative w-[7px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path clipRule="evenodd" d={svgPaths.p3d52dc80} fill="var(--fill-0, #666E80)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container39 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div className="absolute left-0 size-[32px] top-0">
        <div className="absolute inset-[-15.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
            <g filter="url(#filter0_d_2_8713)" id="Ellipse 52" opacity="0.2">
              <circle cx="21" cy="21" fill="var(--fill-0, #9AA1B1)" r="16" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42" id="filter0_d_2_8713" width="42" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_8713" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_8713" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[2px] size-[28px] top-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="var(--fill-0, #9AA1B1)" id="Ellipse 53" r="14" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[16.5px] text-[12px] text-center text-white top-[16px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px]">2</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ed1e79] text-[12px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Atendimento</p>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] overflow-hidden relative shrink-0 text-[#666e80] text-[14px] text-ellipsis w-[189px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bruno Matos Lourenço
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[12px] top-[10px] w-[248px] whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#666e80] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">11:00</p>
      </div>
      <Container45 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[58px] relative shrink-0 w-[288px]" data-name="Container">
      <div className="absolute bg-white h-[58px] left-0 rounded-[8px] shadow-[0px_0px_15px_0px_rgba(32,32,32,0.1)] top-0 w-[288px]" data-name="Background" />
      <div className="absolute flex h-[7px] items-center justify-center right-[16px] top-[26px] w-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[12px] relative w-[7px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path clipRule="evenodd" d={svgPaths.p3d52dc80} fill="var(--fill-0, #666E80)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container44 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Container">
      <div className="absolute left-0 size-[32px] top-0">
        <div className="absolute inset-[-15.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
            <g filter="url(#filter0_d_2_8713)" id="Ellipse 52" opacity="0.2">
              <circle cx="21" cy="21" fill="var(--fill-0, #9AA1B1)" r="16" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42" id="filter0_d_2_8713" width="42" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_8713" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_8713" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[2px] size-[28px] top-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="var(--fill-0, #9AA1B1)" id="Ellipse 53" r="14" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[16.5px] text-[12px] text-center text-white top-[16px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px]">3</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ed1e79] text-[12px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Atendimento</p>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] overflow-hidden relative shrink-0 text-[#666e80] text-[14px] text-ellipsis w-[189px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gustavo Ramos Messagi
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[12px] top-[10px] w-[248px] whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#666e80] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">12:00</p>
      </div>
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[58px] relative shrink-0 w-[288px]" data-name="Container">
      <div className="absolute bg-white h-[58px] left-0 rounded-[8px] shadow-[0px_0px_15px_0px_rgba(32,32,32,0.1)] top-0 w-[288px]" data-name="Background" />
      <div className="absolute flex h-[7px] items-center justify-center right-[16px] top-[26px] w-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[12px] relative w-[7px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path clipRule="evenodd" d={svgPaths.p3d52dc80} fill="var(--fill-0, #666E80)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container49 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-0 w-[328px]" data-name="Container">
      <Container36 />
      <Container41 />
      <Container46 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[223px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-[#9aa1b1] h-[32px] left-[15px] top-[54px] w-[2px]" data-name="Background" />
      <div className="absolute bg-[#9aa1b1] h-[32px] left-[15px] top-[137px] w-[2px]" data-name="Background" />
      <Container35 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Container">
      <div className="absolute bg-[#00c3c5] content-stretch flex h-[48px] items-center justify-center left-0 pl-[81px] pr-[80px] py-[16px] rounded-[24px] top-0 w-[328px]" data-name="Buttons">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          iniciar meu dia de atendimentos
        </p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[72px] relative shrink-0 w-[328px]" data-name="Container">
      <Container52 />
      <p className="-translate-x-1/2 [text-decoration-skip-ink:none] absolute decoration-solid font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] left-[164px] text-[#666e80] text-[12px] text-center top-[56px] underline uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        não consigo atender
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container51 />
    </div>
  );
}

function ModuloRota() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="modulo-rota">
      <Container33 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[328px]" data-name="Container">
      <Container30 />
      <ModuloRota />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[24px] relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function ModuloRota2() {
  return (
    <div className="h-[88px] relative shrink-0 text-[14px] w-full" data-name="modulo-rota">
      <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-0 text-[#666e80] top-[28px] w-[328px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] mb-0">Abaixo temos seus agendamentos futuros.</p>
        <p className="leading-[18px]">Programe-se e realize possíveis mudanças de forma prévia</p>
      </div>
      <p className="absolute font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#004474] top-0 w-[328px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Meus agendamentos futuros
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute right-[16px] size-[16px] top-[43px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 2608828">
          <path clipRule="evenodd" d={svgPaths.p30ae7500} fill="var(--fill-0, #666E80)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[78px] relative shrink-0 w-full" data-name="TextFields">
        <p className="absolute bottom-[76.32%] font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#666e80] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Filrar por paciente
        </p>
        <div className="absolute bg-white border border-[#ddd] border-solid inset-[34.21%_0_0_0] rounded-[4px]" />
        <Frame1 />
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] left-[16px] text-[#666e80] text-[14px] top-[42px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Selecione um paciente
        </p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold gap-[8px] items-start leading-[0] relative shrink-0 text-[#666e80] text-[0px] w-[296px]" data-name="Container">
      <p className="relative shrink-0 w-[296px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[18px] text-[14px]">{`Paciente: `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          João Mateus da Silva Bueno
        </span>
      </p>
      <p className="relative shrink-0 w-[296px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[18px] text-[14px]">{`Produto: `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Fisioterapia, Curativo
        </span>
      </p>
      <p className="relative shrink-0 w-[296px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[18px] text-[14px]">{`Próxima visita: `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          13/05/2024
        </span>
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#ed1e79] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ver escala
      </p>
      <div className="flex h-[7px] items-center justify-center relative shrink-0 w-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[12px] relative w-[7px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path clipRule="evenodd" d={svgPaths.p3d52dc80} fill="var(--fill-0, #ED1E79)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Container59 />
        <Container60 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eaed] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function ModuloRota1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-[328px]" data-name="modulo-rota">
      <ModuloRota2 />
      <Container55 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <ModuloRota1 />
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-white content-stretch flex items-start justify-center px-[16px] py-[24px] relative rounded-bl-[24px] rounded-br-[24px] shrink-0" data-name="Container">
      <Container54 />
    </div>
  );
}

function LucideCircleOff() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/circle-off">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/circle-off">
          <path d={svgPaths.p314b9580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <LucideCircleOff />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[14px] text-white w-[128px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tive um imprevisto
      </p>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#004474] content-stretch flex flex-col h-[104px] items-start p-[16px] relative rounded-[24px] shrink-0 w-[160px]" data-name="Container">
      <Container64 />
    </div>
  );
}

function LucideTriangleAlert() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/triangle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/triangle-alert">
          <path d={svgPaths.p2beffd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <LucideTriangleAlert />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] min-w-full relative shrink-0 text-[14px] text-white w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Abrir uma ocorrência
      </p>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#004474] content-stretch flex flex-col h-[104px] items-start p-[16px] relative rounded-[24px] shrink-0 w-[160px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container65 />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#004474] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Ações rápidas
        </p>
        <Container62 />
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-0 w-[360px]" data-name="Main container">
      <MainContainer1 />
      <Container8 />
      <Container28 />
      <Container53 />
      <Container61 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[38px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Group 41">
          <circle cx="19" cy="19" fill="var(--fill-0, #ED1E79)" id="Ellipse 1" r="19" />
          <g id="user">
            <path d={svgPaths.pd4f2e20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33439" />
            <path d={svgPaths.p2ac57280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33439" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function XCircle() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="x-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_2_8727)" id="x-circle">
          <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #666E80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14 8L8 14" id="Vector_2" stroke="var(--stroke-0, #666E80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 8L14 14" id="Vector_3" stroke="var(--stroke-0, #666E80)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2_8727">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Group2 />
      <XCircle />
    </div>
  );
}

function ExpirationContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Expiration container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[14px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Complete os dados do seu perfil até 15/01/2025 para evitar o bloqueio da sua conta
      </p>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[15px]" data-name="chevron">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
        <g id="chevron">
          <path clipRule="evenodd" d={svgPaths.pb3d0980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UpdateProfileContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Update profile container">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        complete seu perfil
      </p>
      <Chevron1 />
    </div>
  );
}

function ExpirationSection1() {
  return (
    <div className="bg-[#004474] content-stretch flex flex-col gap-[10px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[280px]" data-name="Expiration section">
      <ExpirationContainer1 />
      <UpdateProfileContainer1 />
    </div>
  );
}

function BankInfoText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] font-bold gap-[4px] items-start min-w-px relative text-[#ed1e79]" data-name="Bank info text">
      <p className="leading-[16px] min-w-full relative shrink-0 text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Informe aqui seus Dados Bancários
      </p>
      <p className="leading-[9px] relative shrink-0 text-[9px] uppercase w-[190px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        você tem R$ 2589,99 na sua carteira
      </p>
    </div>
  );
}

function Chevron2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[15px]" data-name="chevron">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
        <g id="chevron">
          <path clipRule="evenodd" d={svgPaths.pb3d0980} fill="var(--fill-0, #ED1E79)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BankInfoContainer6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bank info container">
      <BankInfoText6 />
      <Chevron2 />
    </div>
  );
}

function BankInfoSection6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Bank info section">
      <div aria-hidden="true" className="absolute border border-[#e8eaed] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <BankInfoContainer6 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <ExpirationSection1 />
      <BankInfoSection6 />
    </div>
  );
}

function LucideUser() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/user">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/user">
          <path d={svgPaths.p33cfb980} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <LucideUser />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666e80] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Meu perfil
          </p>
        </div>
      </div>
    </div>
  );
}

function LucideWallet() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/wallet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/wallet">
          <path d={svgPaths.p378b48c0} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666e80] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Minha Carteira
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[10px] relative shrink-0 text-[#ed1e79] text-[8px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        você tem R$ 2589,99 na sua carteira
      </p>
    </div>
  );
}

function AppointmentTrafficLight1() {
  return (
    <div className="bg-[#ed1e79] content-stretch flex items-start p-[4px] relative rounded-[4px] shrink-0 w-[57px]" data-name="Appointment traffic light">
      <div className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[0] min-w-px relative text-[9px] text-center text-white uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[9px] mb-0">complete</p>
        <p className="leading-[9px]">SEU PERFIL</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0 w-[280px]">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <LucideWallet />
      <Frame20 />
      <AppointmentTrafficLight1 />
    </div>
  );
}

function LucideFileCheckCorner() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/file-check-corner">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/file-check-corner">
          <path d={svgPaths.p3dcb9980} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <LucideFileCheckCorner />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666e80] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Relatórios clínicos
          </p>
        </div>
      </div>
    </div>
  );
}

function LucideHandCoins() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/hand-coins">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2_8732)" id="lucide/hand-coins">
          <path d={svgPaths.p1849e00} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2_8732">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <LucideHandCoins />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666e80] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Gestão de oportunidades
          </p>
        </div>
      </div>
    </div>
  );
}

function LucideCalendarCog() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/calendar-cog">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/calendar-cog">
          <path d={svgPaths.p10358a00} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LucideCalendarCog />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666e80] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Editar escala
      </p>
    </div>
  );
}

function AppointmentTrafficLight2() {
  return (
    <div className="bg-[#ed1e79] content-stretch flex items-start p-[4px] relative rounded-[4px] shrink-0 w-[57px]" data-name="Appointment traffic light">
      <div className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[0] min-w-px relative text-[9px] text-center text-white uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[9px] mb-0">complete</p>
        <p className="leading-[9px]">SEU PERFIL</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f8f8f8] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Frame21 />
          <AppointmentTrafficLight2 />
        </div>
      </div>
    </div>
  );
}

function LucideFileSearch() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/file-search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/file-search">
          <path d={svgPaths.p3d6a1900} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <LucideFileSearch />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666e80] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Pacientes com pendência
          </p>
        </div>
      </div>
    </div>
  );
}

function LucideCalendarClock() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/calendar-clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/calendar-clock">
          <path d={svgPaths.p1c140200} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LucideCalendarClock />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666e80] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Minha agenda
      </p>
    </div>
  );
}

function AppointmentTrafficLight3() {
  return (
    <div className="bg-[#ed1e79] content-stretch flex items-start p-[4px] relative rounded-[4px] shrink-0 w-[57px]" data-name="Appointment traffic light">
      <div className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[0] min-w-px relative text-[9px] text-center text-white uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[9px] mb-0">complete</p>
        <p className="leading-[9px]">SEU PERFIL</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f8f8f8] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Frame22 />
          <AppointmentTrafficLight3 />
        </div>
      </div>
    </div>
  );
}

function LucideGraduationCap() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/graduation-cap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/graduation-cap">
          <path d={svgPaths.p1fd2b180} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8eaed] border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <LucideGraduationCap />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666e80] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tutorial ISA Care
          </p>
        </div>
      </div>
    </div>
  );
}

function LucideGraduationCap1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lucide/graduation-cap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="lucide/graduation-cap">
          <path d={svgPaths.p1fd2b180} id="Vector" stroke="var(--stroke-0, #ED1E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e8eaed] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <LucideGraduationCap1 />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666e80] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tutorial ISA Laboratorial
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]">
      <Frame3 />
      <Frame17 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[265px]">
      <p className="leading-[16px] relative shrink-0 w-[124px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        denúncias ou reclamaçôes?
      </p>
      <div className="flex-[1_0_0] leading-[0] min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] mb-0">termos</p>
        <p className="leading-[16px]">de privacidade</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[16px] relative shrink-0 w-full">
      <p className="relative shrink-0 w-[124px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        sobre o app
      </p>
      <p className="relative shrink-0 w-[125px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        manual isa
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold gap-[16px] items-start relative shrink-0 text-[#666e80] text-[12px] text-center uppercase w-[265px]">
      <Frame16 />
      <Frame4 />
      <p className="leading-[16px] min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        sair
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-[280px]">
      <Frame2 />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[18px] min-w-full relative shrink-0 text-[#004474] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alessandro Pires Ramos de Oliveira
      </p>
      <Frame14 />
      <div className="bg-[#e8eaed] h-px relative shrink-0 w-[280px]" />
      <Frame13 />
      <div className="bg-[#e8eaed] h-px relative shrink-0 w-[280px]" />
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[48px] px-[16px] py-[32px] rounded-bl-[20px] rounded-tl-[20px] top-0 w-[312px]">
      <Frame15 />
    </div>
  );
}

export default function Component02PlanejamentoDaRota() {
  return (
    <div className="bg-[#f4f6f9] relative size-full" data-name="02-planejamento da rota">
      <MainContainer />
      <div className="absolute bg-[rgba(34,42,67,0.5)] inset-0" data-name="Base/Color/Blue" />
      <Frame />
    </div>
  );
}