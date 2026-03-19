import clsx from "clsx";
import svgPaths from "./svg-mzlshnig8u";
import imgFrame16 from "figma:asset/455a085f4c5755c51f29566facb3f8a90c04db36.png";
import imgPrescriptionMedicale2 from "figma:asset/c29e8222081c9b7c01f66f4b1eb54facd8ae47ee.png";

function Image() {
  return (
    <div className="absolute bg-[#168bd9] content-stretch flex gap-[6px] h-[37px] items-center justify-center left-[766px] overflow-clip px-[18px] py-[7px] rounded-[10px] top-[14px] w-[211px]">
      <div className="relative shrink-0 size-[24px]" data-name="prescription-medicale 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPrescriptionMedicale2} />
      </div>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-center text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>{`Faire une prescription  `}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className={clsx("flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)]", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type TimeTextProps = {
  text: string;
};

function TimeText({ text }: TimeTextProps) {
  return (
    <div className="content-stretch flex h-[18px] items-end relative shrink-0 w-[119px]">
      <Text1 text={text} additionalClassNames="h-full w-[94px]" />
    </div>
  );
}
type ItemTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ItemText({ text, additionalClassNames = "" }: ItemTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex items-center left-0 top-[14px]", additionalClassNames)}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#666e7d] text-[12px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex h-[30px] items-center p-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1b1b1b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("h-0 relative w-[12px]", additionalClassNames)}>
      <div className="absolute inset-[-3.68px_-4.17%_-3.68px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 7.36396">
          <path d={svgPaths.p6585280} fill="var(--stroke-0, #1B1B1B)" id="Arrow 1" />
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

function Vector1() {
  return (
    <div className="absolute inset-[9.38%]">
      <div className="absolute inset-[-3.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <path d={svgPaths.p3812f800} id="Vector" stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[21.88%_46.88%]">
      <div className="absolute inset-[-5.56%_-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 15">
          <g id="Vector">
            <path d={svgPaths.pe28ab00} stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3e45e980} stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p8ddd980} stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-[#f8f8f8] border border-[#f0f0f0] border-solid h-[853px] left-[289px] top-[79px] w-[1151px]" />
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
        <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[19px] top-[119px] w-[267px]">
          <div className="content-stretch flex flex-col gap-[20px] h-[24px] items-start px-[15px] relative shrink-0 w-[267px]">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/squares-2x2">
                <div className="absolute inset-[15.63%]" data-name="Vector">
                  <div className="absolute inset-[-4.55%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="Vector">
                        <path d={svgPaths.p33dfb500} stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p4e63600} stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p127c2340} stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p20264900} stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#7f7f7f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                Dashboard
              </p>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="shrink-0 size-[24px]" data-name="heroicons-outline/clipboard-document-check" />
            </div>
          </div>
          <div className="bg-[rgba(44,216,255,0.12)] h-[35px] relative rounded-[10px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[10px] items-center px-[15px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/users">
                  <div className="absolute inset-[9.38%_6.25%]" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9998 19.5">
                      <g id="Union">
                        <path d={svgPaths.p7eae300} fill="var(--fill-0, #168BD9)" />
                        <path d={svgPaths.p20ca6f00} fill="var(--fill-0, #168BD9)" />
                        <path d={svgPaths.p37407b00} fill="var(--fill-0, #168BD9)" />
                        <path d={svgPaths.p1dc8fe80} fill="var(--fill-0, #168BD9)" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#168bd9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Patients
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[15px] relative shrink-0">
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
            <div className="shrink-0 size-[24px]" />
          </div>
        </div>
        <Frame13Helper additionalClassNames="left-0 top-[80px]" />
        <div className="absolute bg-[#fde9e9] h-[26px] left-[153px] rounded-[10px] top-[309px] w-[19px]" data-name="Badge">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start justify-center px-[9px] py-[3px] size-full" />
          </div>
        </div>
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
      </div>
      <div className="absolute content-stretch flex flex-col items-start leading-[normal] left-[338px] top-[14px] w-[129px]">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#1b1b1b] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Dashboard
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#168bd9] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Patients
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
      <div className="absolute flex items-center justify-center left-[302px] size-[24.169px] top-[17px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
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
            <p className="relative shrink-0 text-[#7f7f7f] text-[14px] w-[162px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Medecin généraliste
            </p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-solid/chevron-down">
            <Vector335Stroke />
          </div>
        </div>
      </div>
      <div className="absolute bg-white border border-[#f0f0f0] border-solid h-[795px] left-[309px] overflow-clip rounded-[10px] top-[101px] w-[1111px]">
        <div className="absolute bg-white border border-[#f0f0f0] border-solid h-[618px] left-[16px] rounded-[10px] top-[75px] w-[1075px]" />
        <div className="absolute content-stretch flex items-end left-[35px] top-[94px]">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            Patients List
          </p>
        </div>
        <div className="absolute content-stretch flex gap-[25px] items-center left-[813px] top-[16px]">
          <div className="bg-[#168bd9] content-stretch flex gap-[6px] items-center justify-end overflow-clip px-[18px] py-[7px] relative rounded-[10px] shrink-0 w-[153px]">
            <div className="relative shrink-0 w-[24px]" data-name="heroicons-outline/plus-small">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[6px] relative w-full">
                  <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Vector">
                    <div className="absolute inset-[-6.25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                        <path d={svgPaths.p192a9d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Add Patient
            </p>
          </div>
          <div className="h-[38px] relative rounded-[10px] shrink-0 w-[99px]" data-name="heroicons-outline/bell">
            <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
              <div className="relative shrink-0 size-[24px]" data-name="heroicons-outline/adjustments-vertical">
                <div className="absolute inset-0 overflow-clip" data-name="heroicons-outline/adjustments-vertical">
                  <div className="absolute inset-[15.63%_18.75%]" data-name="Vector">
                    <div className="absolute inset-[-4.55%_-5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 18">
                        <path d={svgPaths.p1d250d00} id="Vector" stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#7f7f7f] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                Filter
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex items-start left-[16px] rounded-[5px] top-[718px]">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[5px]" />
          <div className="content-stretch flex gap-[10px] h-[30px] items-center p-[10px] relative rounded-bl-[5px] rounded-tl-[5px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#f2f2f2] border-r border-solid inset-0 pointer-events-none rounded-bl-[5px] rounded-tl-[5px]" />
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-180">
                <Helper />
              </div>
            </div>
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1b1b1b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Previous
            </p>
          </div>
          <Text text="1" />
          <div className="bg-[#168bd9] content-stretch flex h-[30px] items-center p-[10px] relative shrink-0">
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              2
            </p>
          </div>
          <Text text="3" />
          <Text text="4" />
          <Text text="5" />
          <Text text="..." />
          <div className="content-stretch flex h-[30px] items-center p-[10px] relative rounded-br-[5px] rounded-tr-[5px] shrink-0">
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1b1b1b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              10
            </p>
          </div>
          <div className="content-stretch flex gap-[5px] h-[30px] items-center p-[10px] relative rounded-br-[5px] rounded-tr-[5px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#f0f0f0] border-l border-solid inset-0 pointer-events-none rounded-br-[5px] rounded-tr-[5px]" />
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1b1b1b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Next
            </p>
            <Helper additionalClassNames="shrink-0" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[5px] items-center left-[957px] top-[720px]">
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1b1b1b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Page `}</p>
          <div className="content-stretch flex gap-[10px] h-[30px] items-center p-[10px] relative rounded-[5px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[5px]" />
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              2
            </p>
            <div className="relative shrink-0 size-[18px]" data-name="heroicons-solid/chevron-down">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g id="heroicons-solid/chevron-down">
                  <path clipRule="evenodd" d={svgPaths.p1844e200} fill="var(--fill-0, #7F7F7F)" fillRule="evenodd" id="Vector 335 (Stroke)" />
                </g>
              </svg>
            </div>
          </div>
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            of
          </p>
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            34
          </p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[544px] items-start left-[326px] pb-px top-[239px] w-[1076px]" data-name="Table">
        <div className="bg-[#f9f9fb] h-[48px] mb-[-1px] relative shrink-0 w-[1076px]" data-name="Table Top">
          <div className="absolute h-[48px] left-[7px] overflow-clip top-0 w-[1073px]" data-name="TH">
            <div className="absolute content-stretch flex items-center justify-center left-[1471px] p-[14px] top-0" data-name="More">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Solid/dots-vertical">
                <div className="absolute inset-[10%_40%]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
                    <g id="Icon">
                      <path d={svgPaths.p1b44fa00} fill="#A5ADD7" />
                      <path d={svgPaths.p3dc69980} fill="#A5ADD7" />
                      <path d={svgPaths.p2f4780} fill="#A5ADD7" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[24px] items-center left-[154px] top-0 w-[879px]" data-name="Headers">
              <div className="h-[48px] relative shrink-0 w-[135px]" data-name="TH Table">
                <ItemText text="Patient" />
              </div>
              <div className="h-[48px] relative shrink-0 w-[257px]" data-name="TH Table">
                <ItemText text="Area of concern" />
              </div>
              <div className="h-[48px] shrink-0 w-px" data-name="TH Table" />
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#666e7d] text-[12px] uppercase whitespace-nowrap">
                <p className="leading-[20px]">Contact</p>
              </div>
              <div className="h-[48px] relative shrink-0 w-[83px]" data-name="TH Table">
                <div className="absolute h-[20px] left-[23px] top-[14px] w-[60px]" data-name="item" />
              </div>
            </div>
            <div className="absolute h-[48px] left-[9px] top-0 w-[91px]" data-name="TH Table">
              <ItemText text="Admitted" additionalClassNames="gap-[8px]" />
            </div>
          </div>
        </div>
        <div className="h-[64px] mb-[-1px] relative shrink-0 w-[1071px]" data-name="TD">
          <div className="absolute content-stretch flex gap-[24px] items-center left-[16px] top-[8px] w-[1058px]" data-name="People's Appointment">
            <TimeText text="27 Dec, 2024" />
            <div className="h-[48px] relative shrink-0 w-[915px]" data-name="Content">
              <div className="absolute content-stretch flex gap-[24px] items-center left-0 top-0 w-[915px]" data-name="Content">
                <Text1 text="Dianne Russell" additionalClassNames="h-[48px] w-[140px]" />
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] w-[280px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[normal]">{`Upper Abdomen General `}</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/envelope">
                  <div className="absolute inset-[18.75%_9.38%]" data-name="Vector">
                    <div className="absolute inset-[-5%_-3.85%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
                        <path d={svgPaths.p3fbaeec0} id="Vector" stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/ellipsis-vertical">
                  <Vector />
                </div>
                <div className="h-[48px] shrink-0 w-[86px]" data-name="Insurance" />
              </div>
            </div>
          </div>
          <Image />
        </div>
        <div className="h-[64px] mb-[-1px] relative shrink-0 w-[1116px]" data-name="TD">
          <div className="absolute content-stretch flex gap-[24px] items-center left-[16px] top-[8px] w-[1503px]" data-name="People's Appointment">
            <TimeText text="03 Feb, 2023" />
            <div className="h-[48px] relative shrink-0 w-[1340px]" data-name="Content">
              <div className="absolute content-stretch flex gap-[24px] items-center left-0 top-0 w-[1340px]" data-name="Content">
                <Text1 text="Bessie Cooper" additionalClassNames="h-[48px] w-[140px]" />
                <Text1 text="Gynecologic Disorders" additionalClassNames="h-[48px] w-[280px]" />
                <div className="h-[17.25px] relative shrink-0 w-[18px]" data-name="Union">
                  <div className="absolute inset-[-4.35%_-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 18.75">
                      <path d={svgPaths.p3433e300} id="Union" stroke="var(--stroke-0, #7F7F7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/ellipsis-vertical">
                  <Vector />
                </div>
              </div>
            </div>
          </div>
          <Image />
        </div>
        <div className="bg-[rgba(44,216,255,0.12)] h-[64px] mb-[-1px] relative shrink-0 w-full" data-name="TD">
          <div className="absolute content-stretch flex gap-[24px] items-center left-[16px] top-[8px] w-[1039px]" data-name="People's Appointment">
            <TimeText text="02 Mar, 2023" />
            <div className="h-[48px] relative shrink-0 w-[889px]" data-name="Content">
              <div className="absolute content-stretch flex gap-[24px] items-center left-0 top-0 w-[1340px]" data-name="Content">
                <Text1 text="Marvin McKinney" additionalClassNames="h-[48px] w-[140px]" />
                <Text1 text="Brain, Spinal Cord, and Nerve Disorders" additionalClassNames="h-[48px] w-[279px]" />
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/phone">
                  <Vector1 />
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/ellipsis-vertical">
                  <Vector />
                </div>
              </div>
            </div>
          </div>
          <Image />
        </div>
        <div className="h-[64px] mb-[-1px] relative shrink-0 w-[1071px]" data-name="TD">
          <div className="absolute content-stretch flex gap-[24px] items-center left-[16px] top-[8px] w-[1136px]" data-name="People's Appointment">
            <div className="content-stretch flex h-[18px] items-end relative shrink-0 w-[119px]" data-name="Time">
              <Text1 text="02 Mar, 2023" additionalClassNames="h-full w-[101px]" />
            </div>
            <div className="h-[48px] relative shrink-0 w-[917px]" data-name="Content">
              <div className="absolute content-stretch flex gap-[24px] items-center left-0 top-0 w-[917px]" data-name="Content">
                <Text1 text="Esther Howard" additionalClassNames="h-[48px] w-[140px]" />
                <Text1 text="Digestive Disorders" additionalClassNames="h-[48px] w-[280px]" />
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/phone">
                  <Vector1 />
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/ellipsis-vertical">
                  <Vector />
                </div>
              </div>
            </div>
          </div>
          <Image />
        </div>
        <div className="h-[64px] mb-[-1px] relative shrink-0 w-[1076px]" data-name="TD">
          <div className="absolute content-stretch flex gap-[24px] items-center left-[16px] top-[8px] w-[1060px]" data-name="People's Appointment">
            <TimeText text="02 Mar, 2023" />
            <div className="h-[48px] relative shrink-0 w-[974px]" data-name="Content">
              <div className="absolute content-stretch flex gap-[24px] items-center left-0 top-0 w-[1340px]" data-name="Content">
                <Text1 text="Marvin McKinney" additionalClassNames="h-[48px] w-[140px]" />
                <Text1 text="Upper Abdomen General –" additionalClassNames="h-[48px] w-[282px]" />
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/phone">
                  <Vector1 />
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/ellipsis-vertical">
                  <Vector />
                </div>
              </div>
            </div>
          </div>
          <Image />
        </div>
      </div>
    </div>
  );
}