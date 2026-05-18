export default function Frame() {
  return (
    <div className="gap-x-[16px] gap-y-[21px] grid grid-cols-[repeat(5,fit-content(100%))] grid-rows-[repeat(6,fit-content(100%))] p-[24px] relative size-full">
      <div className="bg-[#00c3c5] col-1 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          primary
        </p>
      </div>
      <div className="bg-[#004474] col-2 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          secondary
        </p>
      </div>
      <div className="bg-[#ed1e79] col-3 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          accent
        </p>
      </div>
      <div className="bg-[#e6fbfb] col-1 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Status">
        <div aria-hidden="true" className="absolute border border-[#00c3c5] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#00c3c5] text-[10px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          primary-soft
        </p>
      </div>
      <div className="bg-[#e6edf1] col-2 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Status">
        <div aria-hidden="true" className="absolute border border-[#004474] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#004474] text-[10px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          secondary-soft
        </p>
      </div>
      <div className="bg-[#fde9f2] col-3 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Status">
        <div aria-hidden="true" className="absolute border border-[#ed1e79] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#ed1e79] text-[10px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          accent-soft
        </p>
      </div>
      <div className="bg-[#009fa4] col-1 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-3 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          primary-Bold
        </p>
      </div>
      <div className="bg-[#002d51] col-2 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-3 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          secondary-Bold
        </p>
      </div>
      <div className="bg-[#ce0859] col-3 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-3 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          accent-bold
        </p>
      </div>
      <div className="bg-[#00c643] col-1 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-4 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          positive
        </p>
      </div>
      <div className="bg-[#e93b5a] col-2 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-4 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          negative
        </p>
      </div>
      <div className="bg-[#e8ad17] col-3 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-4 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          warning
        </p>
      </div>
      <div className="bg-[#ed7b3b] col-4 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-4 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          caution
        </p>
      </div>
      <div className="bg-[#666e80] col-5 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-4 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          info
        </p>
      </div>
      <div className="bg-[#e6f9ed] col-1 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-5 self-start shrink-0" data-name="Status">
        <div aria-hidden="true" className="absolute border border-[#00c643] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#00c643] text-[10px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          positive-soft
        </p>
      </div>
      <div className="bg-[#fdecef] col-2 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-5 self-start shrink-0" data-name="Status">
        <div aria-hidden="true" className="absolute border border-[#e93b5a] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#e93b5a] text-[10px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          negative Soft
        </p>
      </div>
      <div className="bg-[#fdf2ec] col-4 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-5 self-start shrink-0" data-name="Status">
        <div aria-hidden="true" className="absolute border border-[#ed7b3b] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#ed7b3b] text-[10px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          caution-soft
        </p>
      </div>
      <div className="bg-[#e8eaed] col-5 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-5 self-start shrink-0" data-name="Status">
        <div aria-hidden="true" className="absolute border border-[#666e80] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#666e80] text-[10px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          info-soft
        </p>
      </div>
      <div className="bg-[#049134] col-1 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-6 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          positive-bold
        </p>
      </div>
      <div className="bg-[#b51b42] col-2 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-6 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          negative-bold
        </p>
      </div>
      <div className="bg-[#e49f0e] col-3 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-6 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          warning-bold
        </p>
      </div>
      <div className="bg-[#db4b1b] col-4 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-6 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          caution-bold
        </p>
      </div>
      <div className="bg-[#485466] col-5 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-6 self-start shrink-0" data-name="Status">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          info-bold
        </p>
      </div>
      <div className="bg-[#fdf8ec] col-3 content-stretch flex items-center justify-center justify-self-start px-[8px] py-[4px] relative rounded-[12px] row-5 self-start shrink-0" data-name="Status">
        <div aria-hidden="true" className="absolute border border-[#e8ad17] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#e8ad17] text-[10px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          warning-soft
        </p>
      </div>
    </div>
  );
}