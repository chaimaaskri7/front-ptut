import clsx from "clsx";
import svgPaths from "./svg-yoa6919ksn";
import imgFrame16 from "figma:asset/455a085f4c5755c51f29566facb3f8a90c04db36.png";
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className={additionalClassNames}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return <Text4 text={text} additionalClassNames={clsx("flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)]", additionalClassNames)} />;
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return <Text4 text={text} additionalClassNames={clsx("flex flex-col h-[48px] justify-center relative shrink-0", additionalClassNames)} />;
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return <Text4 text={text} additionalClassNames={clsx("flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)]", additionalClassNames)} />;
}
type TimeTextProps = {
  text: string;
};

function TimeText({ text }: TimeTextProps) {
  return (
    <div className="content-stretch flex h-[18px] items-end relative shrink-0 w-[119px]">
      <Text3 text={text} additionalClassNames="w-[94px]" />
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

function Vector335Stroke() {
  return (
    <div className="absolute inset-[31.25%_15.63%_31.25%_15.62%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 9">
        <path clipRule="evenodd" d={svgPaths.p53fc380} fill="var(--fill-0, #7F7F7F)" fillRule="evenodd" id="Vector 335 (Stroke)" />
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-[#f8f8f8] border border-[#f0f0f0] border-solid h-[853px] left-[289px] top-[79px] w-[1151px]" />
      <div className="absolute content-stretch flex flex-col items-start leading-[normal] left-[338px] top-[14px] w-[129px]">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#1b1b1b] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Dashboard
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#168bd9] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Prescription
        </p>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[290px] top-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "22" } as React.CSSProperties}>
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
      <div className="absolute flex items-center justify-center left-[302px] size-[24.169px] top-[17px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "22" } as React.CSSProperties}>
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
      <div className="absolute bg-white border border-[#f0f0f0] border-solid h-[795px] left-[318px] overflow-clip rounded-[10px] top-[133px] w-[1111px]">
        <div className="absolute bg-white border border-[#f0f0f0] border-solid h-[618px] left-[16px] rounded-[10px] top-[75px] w-[1075px]" />
        <div className="absolute content-stretch flex items-end left-[35px] top-[94px]">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            Les prescriptions
          </p>
        </div>
        <div className="absolute content-stretch flex items-center left-[813px] top-[16px]">
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
        <div className="absolute content-stretch flex flex-col h-[544px] items-start left-[32px] pb-px top-[137px] w-[1076px]" data-name="Table">
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
                  <ItemText text="transport type" />
                </div>
                <div className="h-[48px] shrink-0 w-px" data-name="TH Table" />
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
                  <Text1 text="Dianne Russell" additionalClassNames="w-[140px]" />
                  <Text1 text="VSL" additionalClassNames="w-[280px]" />
                  <div className="h-[48px] shrink-0 w-[86px]" data-name="Insurance" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[64px] mb-[-1px] relative shrink-0 w-full" data-name="TD">
            <div className="absolute content-stretch flex gap-[24px] items-center left-[16px] top-[8px] w-[1503px]" data-name="People's Appointment">
              <TimeText text="03 Feb, 2023" />
              <div className="h-[48px] relative shrink-0 w-[1340px]" data-name="Content">
                <div className="absolute content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal gap-[24px] items-center leading-[0] left-0 text-[14px] text-[rgba(0,0,0,0.87)] top-0 w-[1340px]" data-name="Content">
                  <Text2 text="Bessie Cooper" additionalClassNames="w-[140px]" />
                  <Text2 text="Ambulance" additionalClassNames="w-[280px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-[64px] mb-[-1px] relative shrink-0 w-full" data-name="TD">
            <div className="absolute content-stretch flex gap-[24px] items-center left-[16px] top-[8px] w-[1039px]" data-name="People's Appointment">
              <TimeText text="02 Mar, 2023" />
              <div className="h-[48px] relative shrink-0 w-[889px]" data-name="Content">
                <div className="absolute content-stretch flex gap-[24px] items-center left-0 top-0 w-[1340px]" data-name="Content">
                  <Text1 text="Marvin McKinney" additionalClassNames="w-[140px]" />
                  <Text1 text="Ambulance" additionalClassNames="w-[279px]" />
                  <div className="overflow-clip shrink-0 size-[24px]" data-name="heroicons-outline/ellipsis-vertical" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[64px] mb-[-1px] relative shrink-0 w-[1071px]" data-name="TD">
            <div className="absolute content-stretch flex gap-[24px] items-center left-[16px] top-[8px] w-[1136px]" data-name="People's Appointment">
              <div className="content-stretch flex h-[18px] items-end relative shrink-0 w-[119px]" data-name="Time">
                <Text3 text="02 Mar, 2023" additionalClassNames="w-[101px]" />
              </div>
              <div className="h-[48px] relative shrink-0 w-[917px]" data-name="Content">
                <div className="absolute content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal gap-[24px] items-center leading-[0] left-0 text-[14px] text-[rgba(0,0,0,0.87)] top-0 w-[917px]" data-name="Content">
                  <Text2 text="Esther Howard" additionalClassNames="w-[140px]" />
                  <Text2 text="Taxi" additionalClassNames="w-[280px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[64px] mb-[-1px] relative shrink-0 w-[1076px]" data-name="TD">
            <div className="absolute content-stretch flex gap-[24px] items-center left-[16px] top-[8px] w-[1060px]" data-name="People's Appointment">
              <TimeText text="02 Mar, 2023" />
              <div className="h-[48px] relative shrink-0 w-[974px]" data-name="Content">
                <div className="absolute content-stretch flex gap-[24px] items-center left-0 top-0 w-[1340px]" data-name="Content">
                  <Text1 text="Marvin McKinney" additionalClassNames="w-[140px]" />
                  <Text1 text="VSL" additionalClassNames="w-[282px]" />
                  <div className="overflow-clip shrink-0 size-[24px]" data-name="heroicons-outline/ellipsis-vertical" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}