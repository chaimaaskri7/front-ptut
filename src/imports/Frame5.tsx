import clsx from "clsx";
import svgPaths from "./svg-oct7jqpuuy";
import imgFrame16 from "figma:asset/455a085f4c5755c51f29566facb3f8a90c04db36.png";
import imgPlus1 from "figma:asset/e32687d9c92900bf76149f32995190eccee3a114.png";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute size-[9px] top-[832px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        {children}
      </svg>
    </div>
  );
}
type CircleDateProps = {
  additionalClassNames?: string;
};

function CircleDate({ additionalClassNames = "" }: CircleDateProps) {
  return (
    <div className={clsx("-translate-x-1/2 absolute left-1/2 size-[6px]", additionalClassNames)}>
      <div className="absolute inset-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #A9C1FD)" id="circle date" r="4.5" stroke="var(--stroke-0, white)" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

function DataPointer() {
  return (
    <div className="-translate-x-1/2 absolute h-[6px] left-1/2 top-0 w-0">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <path d="M0.5 0V6" id="data pointer" stroke="var(--stroke-0, #D7DBDE)" />
        </svg>
      </div>
    </div>
  );
}
type Frame13HelperProps = {
  additionalClassNames?: string;
};

function Frame13Helper({ additionalClassNames = "" }: Frame13HelperProps) {
  return (
    <div className={clsx("absolute h-0 w-[293px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293 1">
          <line id="Line 1" stroke="var(--stroke-0, #F8F8F8)" x2="293" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

function Vector335Stroke() {
  return (
    <div className="absolute inset-[31.25%_15.63%_31.25%_15.62%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 9">
        <path clipRule="evenodd" d={svgPaths.p53fc380} fill="var(--fill-0, #7F7F7F)" fillRule="evenodd" id="Vector 335 (Stroke)" />
      </svg>
    </div>
  );
}

function CardElementsCardFilledWhite({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[256px]"} data-name="card / elements / card / filled / white">
      <div className="absolute bg-white inset-0 rounded-[8px] shadow-[0px_12px_26px_0px_rgba(16,30,115,0.06)]" data-name="card bg" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[921px] left-0 overflow-clip top-0 w-[289px]">
        <div className="absolute content-stretch flex gap-[6px] items-center left-[19px] top-[21px]">
          <div className="content-stretch flex h-[34.872px] items-center justify-center p-[13.522px] relative shrink-0 w-[40px]" data-name="Network">
            <div className="h-[23.259px] relative shrink-0 w-[30.392px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.3916 23.2588">
                <g id="Icon">
                  <path d={svgPaths.p3e977400} fill="var(--fill-0, #168BD9)" id="Icon_2" />
                </g>
              </svg>
            </div>
          </div>
          <p className="font-['Geologica:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0c284f] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
            CareWay
          </p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[16px] top-[104px] w-[267px]">
          <div className="content-stretch flex flex-col gap-[20px] h-[17px] items-start px-[15px] relative shrink-0 w-[267px]">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/squares-2x2">
                <div className="absolute inset-[15.63%]" data-name="Vector">
                  <div className="absolute inset-[-4.55%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="Vector">
                        <path d={svgPaths.p33dfb500} stroke="var(--stroke-0, #558EFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p4e63600} stroke="var(--stroke-0, #558EFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p127c2340} stroke="var(--stroke-0, #558EFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p20264900} stroke="var(--stroke-0, #558EFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#558eff] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="shrink-0 size-[24px]" data-name="heroicons-outline/clipboard-document-check" />
            </div>
          </div>
          <div className="bg-[rgba(254,255,255,0.12)] h-[35px] relative rounded-[10px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[10px] items-center px-[15px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/users">
                  <div className="absolute inset-[9.38%_6.25%]" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9998 19.5">
                      <g id="Union">
                        <path d={svgPaths.p7eae300} fill="var(--fill-0, #D5D5D5)" />
                        <path d={svgPaths.p20ca6f00} fill="var(--fill-0, #D5D5D5)" />
                        <path d={svgPaths.p37407b00} fill="var(--fill-0, #D5D5D5)" />
                        <path d={svgPaths.p1dc8fe80} fill="var(--fill-0, #D5D5D5)" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7f7f7f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Patients
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[15px] relative shrink-0 w-[166px]">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/document-magnifying-glass">
                <div className="absolute inset-[9.38%_18.75%_12.5%_18.75%]" data-name="Vector">
                  <div className="absolute inset-[-4%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 20.25">
                      <path d={svgPaths.p31a5b600} id="Vector" stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7f7f7f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                Prescriptions
              </p>
            </div>
            <div className="shrink-0 size-[24px]" />
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="overflow-clip shrink-0 size-[24px]" data-name="heroicons-outline/archive-box" />
            </div>
          </div>
        </div>
        <Frame13Helper additionalClassNames="left-0 top-[80px]" />
        <div className="absolute content-stretch flex flex-col gap-[19px] items-start left-[28px] top-[761px] w-[98px]">
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/question-mark-circle">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-[-4.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                    <path d={svgPaths.p17552100} id="Vector" stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7f7f7f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Help
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/cog-6-tooth">
              <div className="absolute inset-[12.5%_14.19%]" data-name="Vector">
                <div className="absolute inset-[-4.17%_-4.36%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6875 19.5">
                    <g id="Vector">
                      <path d={svgPaths.p3c31a780} stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p41c0000} stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7f7f7f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Settings
            </p>
          </div>
        </div>
        <Frame13Helper additionalClassNames="left-[-4px] top-[735px]" />
        <div className="absolute bg-[rgba(44,216,255,0.12)] h-[35px] left-[16px] rounded-[10px] top-[101px] w-[267px]" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[332px] top-[14px] w-[129px]">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Dashboard
        </p>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[290px] top-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1">
                <line id="Line 2" stroke="var(--stroke-0, #F0F0F0)" x2="80" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[299px] size-[24.169px] top-[19px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.59deg]">
          <div className="bg-[#f8f8f8] relative rounded-[50px] size-[24px]" data-name="heroicons-solid/chevron-down">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <Vector335Stroke />
            </div>
            <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[25px] items-center left-[739px] top-[18px] w-[662px]">
        <div className="bg-[#f8f8f8] relative rounded-[10px] shrink-0 w-[381px]">
          <div className="content-stretch flex gap-[11px] items-center overflow-clip px-[13px] py-[8px] relative rounded-[inherit] w-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/magnifying-glass">
              <div className="absolute inset-[9.38%]" data-name="Vector (Stroke)">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                  <path clipRule="evenodd" d={svgPaths.p3bc4d500} fill="var(--fill-0, #7F7F7F)" fillRule="evenodd" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7f7f7f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Search
            </p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
        <div className="relative rounded-[5px] shrink-0 size-[32px]" data-name="heroicons-outline/bell">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute bottom-[21.88%] left-1/4 right-[23.05%] top-[21.88%]" data-name="Vector">
              <div className="absolute inset-[-4.17%_-4.51%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1227 19.5">
                  <path d={svgPaths.p866c00} id="Vector" stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[5px]" />
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div className="relative rounded-[50px] shrink-0 size-[34px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
              <img alt="" className="absolute h-[125%] left-0 max-w-none top-[-0.54%] w-full" src={imgFrame16} />
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium gap-px items-start leading-[normal] relative shrink-0 w-[131px]">
            <p className="min-w-full relative shrink-0 text-[#1b1b1b] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Dr Amirul Haque
            </p>
            <p className="relative shrink-0 text-[#7f7f7f] text-[14px] w-[198px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Medecin généraliste
            </p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/chevron-down">
            <Vector335Stroke />
          </div>
        </div>
      </div>
      <div className="absolute left-[1335px] size-[10px] top-[396px]" data-name="plus 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlus1} />
      </div>
      <div className="absolute h-[68px] left-[316px] right-[14px] top-[126px]" data-name="cards">
        <div className="absolute h-[88px] left-0 right-[calc(75%+22.5px)] top-0" data-name="card / example / other / label + accent">
          <div className="absolute bg-white inset-0 rounded-[8px] shadow-[0px_12px_26px_0px_rgba(16,30,115,0.06)]" data-name="card bg" />
          <div className="-translate-y-1/2 absolute left-[24px] overflow-clip size-[40px] top-1/2" data-name="icon / icofont / medical / cross / first aid">
            <div className="absolute inset-[6.15%_0_6.18%_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 35.068">
                <path d={svgPaths.p1f455180} fill="var(--fill-0, #558EFF)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Lato:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[88px] not-italic right-[24px] text-[#336cfb] text-[18px] top-[calc(50%+12px)] tracking-[0.1px]">
            <p className="leading-[24px]">213</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Lato:Bold',sans-serif] h-[20px] justify-center leading-[0] left-[88px] not-italic right-[24px] text-[#25282b] text-[14px] top-[calc(50%-14px)] tracking-[0.1px]">
            <p className="leading-[20px]">Appointments</p>
          </div>
        </div>
        <div className="absolute h-[88px] left-[calc(25%+7.5px)] right-[calc(50%+15px)] top-0" data-name="card / example / other / label + accent">
          <div className="absolute bg-white inset-0 rounded-[8px] shadow-[0px_12px_26px_0px_rgba(16,30,115,0.06)]" data-name="card bg" />
          <div className="-translate-y-1/2 absolute left-[24px] overflow-clip size-[40px] top-1/2" data-name="icon / icofont / medical / human / crutch">
            <div className="absolute bottom-[0.02%] left-[24.93%] right-1/4 top-0" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0267 39.9922">
                <path d={svgPaths.p10176e00} fill="var(--fill-0, #558EFF)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Lato:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[88px] not-italic right-[24px] text-[#336cfb] text-[18px] top-[calc(50%+12px)] tracking-[0.1px]">
            <p className="leading-[24px]">104</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Lato:Bold',sans-serif] h-[20px] justify-center leading-[0] left-[88px] not-italic right-[24px] text-[#25282b] text-[14px] top-[calc(50%-14px)] tracking-[0.1px]">
            <p className="leading-[20px]">New Patients</p>
          </div>
        </div>
        <div className="absolute h-[88px] left-[calc(50%+15px)] right-[calc(25%+7.5px)] top-0" data-name="card / example / other / label + accent">
          <div className="absolute bg-white inset-0 rounded-[8px] shadow-[0px_12px_26px_0px_rgba(16,30,115,0.06)]" data-name="card bg" />
          <div className="-translate-y-1/2 absolute left-[24px] overflow-clip size-[40px] top-1/2" data-name="icon / icofont / medical / human / operation theater">
            <div className="absolute inset-[0_13.11%_0.01%_13.1%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.516 39.996">
                <path d={svgPaths.p1cccb100} fill="var(--fill-0, #558EFF)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Lato:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[88px] not-italic right-[24px] text-[#336cfb] text-[18px] top-[calc(50%+12px)] tracking-[0.1px]">
            <p className="leading-[24px]">24</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Lato:Bold',sans-serif] h-[20px] justify-center leading-[0] left-[88px] not-italic right-[24px] text-[#25282b] text-[14px] top-[calc(50%-14px)] tracking-[0.1px]">
            <p className="leading-[20px]">Operations</p>
          </div>
        </div>
        <div className="absolute h-[88px] left-[calc(75%+22.5px)] right-0 top-0" data-name="card / example / other / label + accent">
          <div className="absolute bg-white inset-0 rounded-[8px] shadow-[0px_12px_26px_0px_rgba(16,30,115,0.06)]" data-name="card bg" />
          <div className="-translate-y-1/2 absolute left-[24px] overflow-clip size-[40px] top-1/2" data-name="icon / icofont / web / bank / bank $">
            <div className="absolute inset-[9.44%_6.23%_9.44%_6.26%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.004 32.448">
                <path d={svgPaths.p3ba6d980} fill="var(--fill-0, #558EFF)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Lato:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[88px] not-italic right-[24px] text-[#336cfb] text-[18px] top-[calc(50%+12px)] tracking-[0.1px]">
            <p className="leading-[24px]">$ 12,174</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Lato:Bold',sans-serif] h-[20px] justify-center leading-[0] left-[88px] not-italic right-[24px] text-[#25282b] text-[14px] top-[calc(50%-14px)] tracking-[0.1px]">
            <p className="leading-[20px]">Transport cost</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[286px] left-[318px] right-[12px] top-[243px]" data-name="Income">
        <div className="absolute h-[286px] left-0 right-[calc(50%+15px)] top-0" data-name="Income current month">
          <div className="absolute bg-white inset-0 rounded-[8px] shadow-[0px_12px_26px_0px_rgba(16,30,115,0.06)]" data-name="card bg" />
          <p className="-translate-x-full absolute font-['Lato:Bold',sans-serif] h-[12px] leading-[12px] left-[70px] not-italic text-[#a0a4a8] text-[10px] text-right top-[72px] tracking-[0.2px] w-[46px]">$100,000</p>
          <p className="-translate-x-full absolute font-['Lato:Bold',sans-serif] h-[12px] leading-[12px] left-[70px] not-italic text-[#a0a4a8] text-[10px] text-right top-[104px] tracking-[0.2px] w-[46px]">$80,000</p>
          <p className="-translate-x-full absolute font-['Lato:Bold',sans-serif] h-[12px] leading-[12px] left-[70px] not-italic text-[#a0a4a8] text-[10px] text-right top-[136px] tracking-[0.2px] w-[46px]">$60,000</p>
          <p className="-translate-x-full absolute font-['Lato:Bold',sans-serif] h-[12px] leading-[12px] left-[70px] not-italic text-[#a0a4a8] text-[10px] text-right top-[168px] tracking-[0.2px] w-[46px]">$40,000</p>
          <p className="-translate-x-full absolute font-['Lato:Bold',sans-serif] h-[12px] leading-[12px] left-[70px] not-italic text-[#a0a4a8] text-[10px] text-right top-[200px] tracking-[0.2px] w-[46px]">$20,000</p>
          <p className="-translate-x-full absolute font-['Lato:Bold',sans-serif] h-[12px] leading-[12px] left-[70px] not-italic text-[#a0a4a8] text-[10px] text-right top-[232px] tracking-[0.2px] w-[46px]">$0</p>
          <div className="absolute h-[160px] left-[82px] right-[24px] top-[78px]" data-name="dividers">
            <div className="absolute inset-[-0.31%_-0.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 435 161">
                <g id="dividers">
                  <path d="M0.5 0.5L434.5 0.5" id="divider" stroke="var(--stroke-0, #D7DBDE)" strokeDasharray="4 4" strokeLinecap="round" />
                  <path d="M0.5 32.5L434.5 32.5" id="divider_2" stroke="var(--stroke-0, #D7DBDE)" strokeDasharray="4 4" strokeLinecap="round" />
                  <path d="M0.5 64.5L434.5 64.5" id="divider_3" stroke="var(--stroke-0, #D7DBDE)" strokeDasharray="4 4" strokeLinecap="round" />
                  <path d="M0.5 96.5L434.5 96.5" id="divider_4" stroke="var(--stroke-0, #D7DBDE)" strokeDasharray="4 4" strokeLinecap="round" />
                  <path d="M0.5 128.5L434.5 128.5" id="divider_5" stroke="var(--stroke-0, #D7DBDE)" strokeDasharray="4 4" strokeLinecap="round" />
                  <path d="M0.5 160.5L434.5 160.5" id="divider_6" stroke="var(--stroke-0, #D7DBDE)" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
          <p className="absolute font-['Lato:Bold',sans-serif] leading-[16px] not-italic right-[24px] text-[#a0a4a8] text-[12px] text-right top-[33px] tracking-[0.1px] whitespace-nowrap">Income in current month</p>
          <p className="absolute font-['Lato:Bold',sans-serif] leading-[26px] left-[24px] not-italic text-[#25282b] text-[20px] top-[24px] tracking-[0.2px] whitespace-nowrap">$ 100,000</p>
          <div className="absolute flex h-[72px] items-center justify-center left-[82px] right-[46px] top-[114px]">
            <div className="flex-none h-[72px] rotate-180 w-[412px]">
              <div className="relative size-full" data-name="secondary">
                <div className="absolute inset-[-1.39%_-0.24%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 414 74">
                    <path d={svgPaths.p310baa00} id="secondary" stroke="var(--stroke-0, #336CFB)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[24px] left-[86px] right-[22px] top-[238px]" data-name="dates">
            <div className="absolute h-[24px] left-0 right-[calc(80%+38.4px)] top-0" data-name="date">
              <p className="absolute font-['Lato:Bold',sans-serif] leading-[12px] left-0 not-italic right-0 text-[#a0a4a8] text-[10px] text-center top-[12px] tracking-[0.2px]">1 July</p>
              <DataPointer />
              <CircleDate additionalClassNames="top-[-78px]" />
            </div>
            <div className="absolute h-[24px] left-[calc(20%+9.6px)] right-[calc(60%+28.8px)] top-0" data-name="date">
              <p className="absolute font-['Lato:Bold',sans-serif] leading-[12px] left-0 not-italic right-0 text-[#a0a4a8] text-[10px] text-center top-[12px] tracking-[0.2px]">8 July</p>
              <DataPointer />
              <CircleDate additionalClassNames="top-[-127px]" />
            </div>
            <div className="absolute h-[24px] left-[calc(40%+19.2px)] right-[calc(40%+19.2px)] top-0" data-name="date">
              <p className="absolute font-['Lato:Bold',sans-serif] leading-[12px] left-0 not-italic right-0 text-[#a0a4a8] text-[10px] text-center top-[12px] tracking-[0.2px]">16 July</p>
              <DataPointer />
              <CircleDate additionalClassNames="top-[-55px]" />
            </div>
            <div className="absolute h-[24px] left-[calc(60%+28.8px)] right-[calc(20%+9.6px)] top-0" data-name="date">
              <p className="absolute font-['Lato:Bold',sans-serif] leading-[12px] left-0 not-italic right-0 text-[#a0a4a8] text-[10px] text-center top-[12px] tracking-[0.2px]">24 July</p>
              <DataPointer />
              <CircleDate additionalClassNames="top-[-104px]" />
            </div>
            <div className="absolute h-[24px] left-[calc(80%+38.4px)] right-0 top-0" data-name="date">
              <p className="absolute font-['Lato:Bold',sans-serif] leading-[12px] left-0 not-italic right-0 text-[#a0a4a8] text-[10px] text-center top-[12px] tracking-[0.2px]">31 July</p>
              <DataPointer />
              <CircleDate additionalClassNames="top-[-72px]" />
            </div>
          </div>
        </div>
        <div className="absolute h-[286px] left-[calc(50%+15px)] right-0 top-0" data-name="Income current week" />
        <div className="absolute contents left-[calc(50%+113px)] top-[-19px]" data-name="Rating">
          <div className="absolute contents left-[calc(50%+252px)] top-[81px]" data-name="Chart 2">
            <div className="absolute left-[calc(50%+252px)] size-[168.729px] top-[86.27px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168.729 168.729">
                <circle cx="84.3643" cy="84.3643" fill="var(--fill-0, #F99C30)" id="Ellipse 16" opacity="0.9" r="84.3643" />
              </svg>
            </div>
            <p className="absolute font-['Poppins:Regular',sans-serif] h-[33.746px] leading-[33.746px] left-[77.17%] not-italic right-[16.56%] text-[33.746px] text-white top-[calc(50%+0.22px)] tracking-[0.5273px]">20%</p>
            <p className="absolute font-['Poppins:Regular',sans-serif] h-[12.655px] leading-[12.655px] left-[76.94%] not-italic right-[16.41%] text-[12.655px] text-white top-[calc(50%+42px)] tracking-[0.5273px]">Enfant</p>
            <div className="absolute h-[179.274px] left-[calc(50%+257.82px)] top-[81px] w-[168.176px]">
              <div className="absolute inset-[-0.59%_-0.63%_-0.59%_-0.55%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170.154 181.383">
                  <path d={svgPaths.p26f0880} id="Ellipse 17" stroke="var(--stroke-0, #F99C30)" strokeWidth="2.10911" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(50%+171px)] top-[61px]" data-name="Chart  1">
            <div className="absolute left-[calc(50%+171px)] size-[103.758px] top-[64px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103.758 103.758">
                <circle cx="51.8791" cy="51.8791" fill="var(--fill-0, #6463D6)" id="Ellipse 16" opacity="0.8" r="51.8791" />
              </svg>
            </div>
            <p className="absolute font-['Poppins:Regular',sans-serif] h-[20.752px] leading-[20.752px] left-[68.11%] not-italic right-[28.04%] text-[20.752px] text-white top-[calc(50%-45px)] tracking-[0.3242px]">60%</p>
            <p className="absolute font-['Poppins:Regular',sans-serif] leading-[7.782px] left-[67.75%] not-italic right-[28.56%] text-[12px] text-white top-[calc(50%-16.06px)] tracking-[0.3242px] whitespace-nowrap">Adulte</p>
            <div className="absolute h-[110.243px] left-[calc(50%+174.58px)] top-[61px] w-[103.418px]">
              <div className="absolute inset-[-0.59%_-0.63%_-0.59%_-0.55%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.635 111.54">
                  <path d={svgPaths.p3025b780} id="Ellipse 17" stroke="var(--stroke-0, #6463D6)" strokeWidth="1.29698" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(50%+122px)] top-[172px]" data-name="Chart 3">
            <div className="absolute left-[calc(50%+122px)] size-[122.353px] top-[176px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.353 122.353">
                <circle cx="61.1765" cy="61.1765" fill="var(--fill-0, #2FBFDE)" id="Ellipse 16" opacity="0.9" r="61.1765" />
              </svg>
            </div>
            <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[64.32%] not-italic right-[31.35%] text-[24px] text-white top-[calc(50%+72px)] tracking-[0.3824px] whitespace-nowrap">92%</p>
            <p className="absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-[63.51%] not-italic right-[33.51%] text-[12px] text-white top-[calc(50%+104px)] tracking-[0.3824px] whitespace-nowrap">Agée</p>
            <div className="absolute h-[130px] left-[calc(50%+126.22px)] top-[172px] w-[121.952px]">
              <div className="absolute inset-[-0.59%_-0.63%_-0.59%_-0.55%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.387 131.529">
                  <path d={svgPaths.p1dab2420} id="Ellipse 17" stroke="var(--stroke-0, #2FBFDE)" strokeWidth="1.52941" />
                </svg>
              </div>
            </div>
          </div>
          <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22px] left-[60.18%] not-italic right-[32.16%] text-[14px] text-black top-[calc(50%-162px)] tracking-[0.5px] whitespace-nowrap">Your Rating</p>
          <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22px] left-[60.18%] not-italic opacity-50 right-[11.71%] text-[12px] text-black top-[calc(50%-132px)] tracking-[0.5px]">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
      <div className="absolute contents left-[354px] top-[542px]" data-name="Order Time">
        <div className="absolute contents left-[354px] top-[830px]" data-name="Afternoon">
          <Wrapper additionalClassNames="left-[354px]">
            <circle cx="4.5" cy="4.5" fill="var(--fill-0, #5A6ACF)" id="Ellipse 7" r="4.5" />
          </Wrapper>
          <p className="absolute font-['Poppins:Medium',sans-serif] leading-[12px] left-[371px] not-italic opacity-70 text-[#121212] text-[12px] top-[830px] tracking-[0.5px] whitespace-nowrap">VSL</p>
          <p className="absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-[371px] not-italic opacity-70 text-[#121212] text-[12px] top-[852px] tracking-[0.5px] whitespace-nowrap">40%</p>
        </div>
        <div className="absolute contents left-[496px] top-[830px]" data-name="Evening">
          <Wrapper additionalClassNames="left-[496px]">
            <circle cx="4.5" cy="4.5" fill="var(--fill-0, #8593ED)" id="Ellipse 7" r="4.5" />
          </Wrapper>
          <p className="absolute font-['Poppins:Medium',sans-serif] leading-[12px] left-[513px] not-italic opacity-70 text-[#121212] text-[11px] top-[830px] tracking-[0.5px] w-[139px]">Ambulance</p>
          <p className="absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-[513px] not-italic opacity-70 text-[#121212] text-[12px] top-[852px] tracking-[0.5px] whitespace-nowrap">32%</p>
        </div>
        <div className="absolute contents left-[635px] top-[830px]" data-name="Morning">
          <Wrapper additionalClassNames="left-[635px]">
            <circle cx="4.5" cy="4.5" fill="var(--fill-0, #C7CEFF)" id="Ellipse 7" r="4.5" />
          </Wrapper>
          <div className="absolute font-['Poppins:Medium',sans-serif] leading-[12px] left-[652px] not-italic opacity-70 text-[#121212] text-[12px] top-[830px] tracking-[0.5px] w-[64px]">
            <p className="mb-0">Taxi</p>
            <p>&nbsp;</p>
          </div>
          <p className="absolute font-['Poppins:Regular',sans-serif] leading-[12px] left-[652px] not-italic opacity-70 text-[#121212] text-[12px] top-[852px] tracking-[0.5px] whitespace-nowrap">28%</p>
        </div>
        <div className="absolute left-[474px] size-[124px] top-[643px]" data-name="Chart">
          <div className="absolute inset-[-14.52%_-14.52%_-9.68%_-9.68%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 154">
              <g id="Chart">
                <circle cx="74" cy="80" id="Ellipse 11" r="62" stroke="var(--stroke-0, #C7CEFF)" strokeWidth="24" />
                <path d={svgPaths.p257d3400} id="Ellipse 14" stroke="var(--stroke-0, #8593ED)" strokeWidth="24" />
                <path d={svgPaths.p35524500} id="Ellipse 12" stroke="var(--stroke-0, #DEE1F4)" strokeWidth="36" />
                <path d={svgPaths.p35524500} id="Ellipse 15" stroke="var(--stroke-0, #5A6ACF)" strokeWidth="24" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute contents left-[552px] top-[596px]" data-name="Info">
          <div className="absolute h-[109px] left-[552px] top-[596px] w-[140px]">
            <div className="absolute inset-[0_0_0.72%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 108.211">
                <path d={svgPaths.p32793900} fill="var(--fill-0, #37375C)" id="Rectangle 23" />
              </svg>
            </div>
          </div>
          <p className="absolute font-['Poppins:Regular',sans-serif] h-[12px] leading-[12px] left-[39.44%] not-italic opacity-50 right-[52.36%] text-[12px] text-white top-[calc(50%+174.5px)] tracking-[0.3px]">1pm - 4pm</p>
          <p className="absolute font-['Poppins:Medium',sans-serif] leading-[13px] left-[39.44%] not-italic right-[56.18%] text-[12px] text-white top-[calc(50%+151.5px)] tracking-[0.3px] whitespace-nowrap">Afternoon</p>
          <p className="absolute font-['Poppins:Medium',sans-serif] leading-[16px] left-[39.44%] not-italic right-[55.35%] text-[16px] text-white top-[calc(50%+202.5px)] tracking-[0.3px] whitespace-nowrap">1.890 VSL</p>
        </div>
        <div className="absolute contents left-[607px] top-[542px]" data-name="Button">
          <div className="absolute h-[32px] left-[607px] top-[542px] w-[109px]">
            <div className="absolute inset-[0_-0.92%_-9.38%_-0.92%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 35">
                <g filter="url(#filter0_d_2_328)" id="Rectangle 25">
                  <path d={svgPaths.p14698b80} fill="var(--fill-0, #FBFCFE)" />
                  <path d={svgPaths.p371b2700} stroke="var(--stroke-0, #DDE4F0)" strokeWidth="0.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_2_328" width="111" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.25098 0 0 0 0 0.282353 0 0 0 0 0.321569 0 0 0 0.05 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_328" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_328" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <p className="absolute font-['Poppins:Medium',sans-serif] leading-[20px] left-[43.26%] not-italic right-[51.39%] text-[#5a6acf] text-[12px] top-[calc(50%+87.5px)] tracking-[0.5px] whitespace-nowrap">View Report</p>
        </div>
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[21px] left-[24.58%] not-italic opacity-50 right-[66.32%] text-[13px] text-black top-[calc(50%+111.5px)] tracking-[0.5px] whitespace-nowrap">From 1-6 Dec, 2020</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22px] left-[24.58%] not-italic right-[69.72%] text-[14px] text-black top-[calc(50%+81.5px)] tracking-[0.5px] whitespace-nowrap">Order Time</p>
      </div>
      <div className="absolute inset-[61.13%_0.49%_-1.3%_60.97%] overflow-clip" data-name="Visits by type">
        <div className="absolute inset-[16.22%_0_0_0]" data-name="Background">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 555 310">
            <path clipRule="evenodd" d={svgPaths.p18c6b900} fill="var(--fill-0, white)" fillRule="evenodd" id="Background" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[65.05%] not-italic right-[10.27%] text-[#010101] text-[14px] top-[calc(50%+145px)] whitespace-nowrap">
          <p className="leading-[20px]">Sum of searchl visits</p>
        </div>
        <Wrapper1 additionalClassNames="absolute inset-[87.84%_35.86%_9.46%_62.34%]">
          <path clipRule="evenodd" d={svgPaths.p46c6500} fill="var(--fill-0, #6AABE3)" fillRule="evenodd" id="Oval" />
        </Wrapper1>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[35.32%] not-italic right-[40%] text-[#010101] text-[14px] top-[calc(50%+145px)] whitespace-nowrap">
          <p className="leading-[20px]">Sum of referral visits</p>
        </div>
        <Wrapper1 additionalClassNames="absolute inset-[87.84%_65.59%_9.46%_32.61%]">
          <path clipRule="evenodd" d={svgPaths.p46c6500} fill="var(--fill-0, #FFD980)" fillRule="evenodd" id="Oval" />
        </Wrapper1>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[7.21%] not-italic right-[69.91%] text-[#010101] text-[14px] top-[calc(50%+145px)] whitespace-nowrap">
          <p className="leading-[20px]">Sum of direct visits</p>
        </div>
        <Wrapper1 additionalClassNames="absolute inset-[87.84%_93.69%_9.46%_4.5%]">
          <path clipRule="evenodd" d={svgPaths.p46c6500} fill="var(--fill-0, #89B4C1)" fillRule="evenodd" id="Oval" />
        </Wrapper1>
        <div className="absolute inset-[73.51%_4.5%_26.22%_8.65%] opacity-75" data-name="Divider/Horizontal">
          <div className="absolute bg-[#e1e1e1] inset-0" data-name="Divider" />
        </div>
        <div className="absolute inset-[67.3%_4.5%_32.43%_8.65%] opacity-75" data-name="Divider/Horizontal">
          <div className="absolute bg-[#e1e1e1] inset-0" data-name="Divider" />
        </div>
        <div className="absolute inset-[61.35%_4.5%_38.38%_8.65%] opacity-75" data-name="Divider/Horizontal">
          <div className="absolute bg-[#e1e1e1] inset-0" data-name="Divider" />
        </div>
        <div className="absolute inset-[55.14%_4.5%_44.59%_8.65%] opacity-75" data-name="Divider/Horizontal">
          <div className="absolute bg-[#e1e1e1] inset-0" data-name="Divider" />
        </div>
        <div className="absolute inset-[49.19%_4.5%_50.54%_8.65%] opacity-75" data-name="Divider/Horizontal">
          <div className="absolute bg-[#e1e1e1] inset-0" data-name="Divider" />
        </div>
        <div className="absolute inset-[42.97%_4.5%_56.76%_8.65%] opacity-75" data-name="Divider/Horizontal">
          <div className="absolute bg-[#e1e1e1] inset-0" data-name="Divider" />
        </div>
        <div className="absolute inset-[37.03%_4.5%_62.7%_8.65%] opacity-75" data-name="Divider/Horizontal">
          <div className="absolute bg-[#e1e1e1] inset-0" data-name="Divider" />
        </div>
        <div className="absolute inset-[30.81%_4.5%_68.92%_8.65%] opacity-75" data-name="Divider/Horizontal">
          <div className="absolute bg-[#e1e1e1] inset-0" data-name="Divider" />
        </div>
        <div className="absolute inset-[24.86%_4.5%_74.86%_8.65%] opacity-75" data-name="Divider/Horizontal">
          <div className="absolute bg-[#e1e1e1] inset-0" data-name="Divider" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[82.34%] not-italic right-[5.95%] text-[#010101] text-[12px] text-center top-[calc(50%+105.5px)]">
          <p className="leading-[15px]">Sept 25-30</p>
        </div>
        <div className="absolute bg-[#6aabe3] inset-[48.11%_6.85%_24.86%_90.45%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#ffd980] inset-[65.68%_10.45%_24.86%_86.85%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#89b4c1] inset-[58.92%_14.05%_24.86%_83.24%] rounded-[10px]" data-name="Rectangle" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[64.32%] not-italic right-[23.96%] text-[#010101] text-[12px] text-center top-[calc(50%+105.5px)]">
          <p className="leading-[15px]">Sept 19-24</p>
        </div>
        <div className="absolute bg-[#6aabe3] inset-[22.97%_24.86%_24.86%_72.43%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#ffd980] inset-[53.51%_28.47%_24.86%_68.83%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#89b4c1] inset-[45.41%_32.07%_24.86%_65.23%] rounded-[10px]" data-name="Rectangle" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[46.31%] not-italic right-[41.98%] text-[#010101] text-[12px] text-center top-[calc(50%+105.5px)]">
          <p className="leading-[15px]">Sept 13-18</p>
        </div>
        <div className="absolute bg-[#6aabe3] inset-[29.19%_42.88%_24.86%_54.41%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#ffd980] inset-[56.22%_46.49%_24.86%_50.81%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#89b4c1] inset-[45.41%_50.09%_24.86%_47.21%] rounded-[10px]" data-name="Rectangle" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[28.29%] not-italic right-[60%] text-[#010101] text-[12px] text-center top-[calc(50%+105.5px)]">
          <p className="leading-[15px]">Sept 7-12</p>
        </div>
        <div className="absolute bg-[#6aabe3] inset-[34.59%_60.9%_24.86%_36.4%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#ffd980] inset-[58.92%_64.5%_24.86%_32.79%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#89b4c1] inset-[48.11%_68.11%_24.86%_29.19%] rounded-[10px]" data-name="Rectangle" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[10.27%] not-italic right-[78.02%] text-[#010101] text-[12px] text-center top-[calc(50%+105.5px)]">
          <p className="leading-[15px]">Sept 1-6</p>
        </div>
        <div className="absolute bg-[#6aabe3] inset-[29.19%_78.92%_24.86%_18.38%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#ffd980] inset-[61.62%_82.52%_24.86%_14.77%] rounded-[10px]" data-name="Rectangle" />
        <div className="absolute bg-[#89b4c1] inset-[48.11%_86.13%_24.86%_11.17%] rounded-[10px]" data-name="Rectangle" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.86%] not-italic right-[92.61%] text-[#010101] text-[12px] text-right top-[calc(50%+86.5px)] whitespace-nowrap">
          <p className="leading-[15px]">10</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.68%] not-italic right-[92.61%] text-[#010101] text-[12px] text-right top-[calc(50%+41.5px)] whitespace-nowrap">
          <p className="leading-[15px]">20</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.5%] not-italic right-[92.61%] text-[#010101] text-[12px] text-right top-[calc(50%-3.5px)] whitespace-nowrap">
          <p className="leading-[15px]">30</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.5%] not-italic right-[92.61%] text-[#010101] text-[12px] text-right top-[calc(50%-48.5px)] whitespace-nowrap">
          <p className="leading-[15px]">40</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.68%] not-italic right-[92.61%] text-[#010101] text-[12px] text-right top-[calc(50%-93.5px)] whitespace-nowrap">
          <p className="leading-[15px]">50</p>
        </div>
        <div className="absolute bg-white inset-[0_0_83.78%_0] rounded-tl-[10px] rounded-tr-[10px]" data-name="Background" />
        <div className="absolute flex inset-[7.03%_4.5%_90.27%_93.69%] items-center justify-center">
          <div className="flex-none rotate-90 size-[10px]">
            <Wrapper1 additionalClassNames="relative size-full">
              <g id="Icon/Arrow">
                <path clipRule="evenodd" d={svgPaths.p31dac880} fill="var(--fill-0, #4B5157)" fillRule="evenodd" id="Arrow" />
              </g>
            </Wrapper1>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[66.67%] not-italic right-[7.21%] text-[#4b5157] text-[14px] text-right top-[calc(50%-154px)] whitespace-nowrap">
          <p className="leading-[20px]">Last 30 days by week</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4.5%] not-italic right-[52.61%] text-[#262d33] text-[14px] top-[calc(50%-155px)] tracking-[0.5px] uppercase">
          <p className="leading-[20px]">Transport by type</p>
        </div>
      </div>
    </div>
  );
}