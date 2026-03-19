import clsx from "clsx";
import svgPaths from "./svg-5mcws1zd37";
import imgFrame16 from "figma:asset/455a085f4c5755c51f29566facb3f8a90c04db36.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute w-[240px]">
      <div className="content-stretch flex flex-col items-start relative w-full">
        <div className="bg-white min-w-[240px] relative shrink-0 w-full" data-name="checkbox">
          <div className="flex flex-row items-center min-w-[inherit] size-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
  text: string;
  additionalClassNames1?: string;
};

function Wrapper({ children, additionalClassNames = "", text, additionalClassNames1 = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <div className={clsx("content-stretch flex gap-[5px] items-center min-w-[inherit] px-[16px] py-[12px] relative", additionalClassNames)}>
        <Helper />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">{text}</p>
      </div>
    </Wrapper1>
  );
}
type DropdownContentProps = {
  additionalClassNames?: string;
};

function DropdownContent({ children, additionalClassNames = "" }: React.PropsWithChildren<DropdownContentProps>) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <div className="content-stretch flex gap-[5px] items-center min-w-[inherit] px-[16px] py-[12px] relative w-full">{children}</div>
    </Wrapper1>
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

function CheckboxHelper() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.429px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4286 20">
        <g id="Group 1">
          <rect fill="var(--fill-0, black)" height="18" id="Rectangle 1" stroke="var(--stroke-0, black)" strokeWidth="2" width="17.4286" x="1" y="1" />
          <path d={svgPaths.p23a3b380} id="Vector 1" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.429px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4286 20">
        <g id="Group 1">
          <rect height="18" id="Rectangle 1" stroke="var(--stroke-0, black)" strokeWidth="2" width="17.4286" x="1" y="1" />
        </g>
      </svg>
    </div>
  );
}
type CheckboxProps = {
  className?: string;
  property1?: "off hover" | "on" | "hover" | "on hover";
  text?: string;
};

function Checkbox({ className, property1 = "hover", text = "Checkbox" }: CheckboxProps) {
  if (property1 === "off hover") {
    return (
      <button className={className || "bg-[#ebebeb] cursor-pointer min-w-[240px] relative"} data-name="Property 1=off hover">
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[5px] items-center min-w-[inherit] px-[16px] py-[12px] relative">
            <Helper />
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-left whitespace-nowrap">{text}</p>
          </div>
        </div>
      </button>
    );
  }
  if (property1 === "on") {
    return (
      <div className={className || "bg-white min-w-[240px] relative"} data-name="Property 1=on">
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[5px] items-center min-w-[inherit] px-[16px] py-[12px] relative">
            <CheckboxHelper />
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">{text}</p>
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "on hover") {
    return (
      <button className={className || "bg-[#ebebeb] cursor-pointer min-w-[240px] relative"} data-name="Property 1=on hover">
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[5px] items-center min-w-[inherit] px-[16px] py-[12px] relative">
            <CheckboxHelper />
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-left whitespace-nowrap">{text}</p>
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "bg-white min-w-[240px] relative"} data-name="Property 1=hover">
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[5px] items-center min-w-[inherit] px-[16px] py-[12px] relative ">
          <Helper />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-[#f8f8f8] border border-[#f0f0f0] border-solid h-[853px] left-[289px] top-[36px] w-[1151px]" />
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
          <div className="bg-white h-[35px] relative rounded-[10px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[10px] items-center px-[15px] relative size-full">
                <div className="overflow-clip relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 size-[24px]" data-name="heroicons-solid/users">
                  <div className="absolute inset-[9.38%_6.25%]" data-name="Union">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9998 19.5">
                      <g id="Union">
                        <path d={svgPaths.p7eae300} fill="var(--fill-0, #7F7F7F)" />
                        <path d={svgPaths.p20ca6f00} fill="var(--fill-0, #7F7F7F)" />
                        <path d={svgPaths.p37407b00} fill="var(--fill-0, #7F7F7F)" />
                        <path d={svgPaths.p1dc8fe80} fill="var(--fill-0, #7F7F7F)" />
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
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[15px] relative shrink-0">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="heroicons-outline/document-magnifying-glass">
                <div className="absolute inset-[9.38%_18.75%_12.5%_18.75%]" data-name="Vector">
                  <div className="absolute inset-[-4%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 20.25">
                      <path d={svgPaths.p31a5b600} id="Vector" stroke="var(--stroke-0, #558EFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#558eff] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                Prescriptions
              </p>
            </div>
            <div className="shrink-0 size-[24px]" />
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
        <div className="absolute bg-[rgba(44,216,255,0.12)] h-[35px] left-[9px] rounded-[10px] top-[214px] w-[267px]" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start leading-[normal] left-[338px] top-[14px] w-[129px]">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#1b1b1b] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Dashboard
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#168bd9] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Prescription
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
      <div className="absolute bg-white border border-[#f0f0f0] border-solid h-[795px] left-[318px] overflow-clip rounded-[10px] top-[90px] w-[1111px]">
        <div className="absolute bg-white border border-[#f0f0f0] border-solid h-[618px] left-[16px] overflow-clip rounded-[10px] top-[68px] w-[1075px]">
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[89px] not-italic text-[12px] text-black top-[21px] whitespace-nowrap">1. Dans quelle situation permettant la prise en charge du transport se trouve votre patient ? (plusieurs choix possibles)</p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[95px] not-italic text-[12px] text-black top-[94px] whitespace-nowrap">
            Transport en lien avec une affection de longue durée avec déficience ou incapacité :<br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
          <Wrapper additionalClassNames="left-[80px] top-[114px]" text="ALD exonérante" additionalClassNames1="w-full" />
          <Wrapper additionalClassNames="left-[269px] top-[114px]" text="ALD non exonérante" additionalClassNames1="w-full" />
          <Checkbox className="absolute bg-white left-[80px] min-w-[240px] top-[149px] w-[240px]" text="Transport Engagement maternité de lieu de résidence vers la maternité ou l’hébergement temporaire non médicalisé" />
          <Checkbox className="absolute bg-white left-[80px] min-w-[240px] top-[426px] w-[240px]" text="départ – domicile" />
          <Checkbox className="absolute bg-white left-[80px] min-w-[240px] top-[469px] w-[240px]" text="arrivée – domicile" />
          <Checkbox className="absolute bg-white left-[80px] min-w-[240px] top-[465px] w-[240px]" text="arrivée – domicile" />
          <Checkbox className="absolute bg-white left-[80px] min-w-[240px] top-[573px] w-[240px]" text="oui" />
          <Checkbox className="absolute bg-white left-[191px] min-w-[240px] top-[573px] w-[240px]" text="non" />
          <Checkbox className="absolute bg-white left-[80px] min-w-[240px] top-[186px] w-[240px]" text="transport lié à un accident du travail ou une maladie professionnelle" />
          <Wrapper additionalClassNames="left-[81px] top-[263px]" text="position allongée ou demi-assise" additionalClassNames1="w-full" />
          <Wrapper additionalClassNames="left-[325px] top-[263px]" text="surveillance par une personne qualifiée" additionalClassNames1="w-full" />
          <Wrapper additionalClassNames="left-[609px] top-[263px]" text="d’administration d’oxygène" additionalClassNames1="w-full" />
          <Wrapper additionalClassNames="left-[466px] top-[304px]" text="l’état de santé du patient n’est pas compatible avec un transport partagé" additionalClassNames1="w-full" />
          <Wrapper additionalClassNames="left-[583px] top-[350px]" text="moyen de transport individuel" additionalClassNames1="w-full" />
          <Wrapper additionalClassNames="left-[806px] top-[350px]" text="Transport en commun terrestre" additionalClassNames1="w-full" />
          <Checkbox className="absolute bg-white left-[82px] min-w-[240px] top-[350px] w-[240px]" text="un transport pour patient à mobilité réduite dans son fauteuil roulant est adapté" />
          <Wrapper additionalClassNames="left-[813px] top-[263px]" text="brancardage ou d’un portage" additionalClassNames1="w-full" />
          <DropdownContent additionalClassNames="left-[81px] top-[302px]">
            <Helper />
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-black whitespace-pre">
              {`transport assis professionnalisé (VSL, taxi conventionné) `}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </p>
          </DropdownContent>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[90px] not-italic text-[12px] text-black top-[408px] whitespace-nowrap">
            Quel trajet doit effectuer le patient ?<br aria-hidden="true" />
            <br aria-hidden="true" />
          </p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[256px] not-italic text-[12px] text-black top-[441px] whitespace-nowrap">Autre lieu :</p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[256px] not-italic text-[12px] text-black top-[483px] whitespace-nowrap">Autre lieu :</p>
        </div>
        <div className="absolute content-stretch flex items-end left-[35px] top-[14px]">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b1b1b] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            Création d’une prescription
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
        <DropdownContent additionalClassNames="left-[97px] top-[106px]">
          <Helper />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">{`entrée ou sortie d’hospitalisation (complète, partielle ou ambulatoire), y compris séances de chimiothérapie, radiothérapie et hémodialyse `}</p>
        </DropdownContent>
        <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] left-[112px] text-[14px] text-black top-[695px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Ce transport est-il lié à des soins dispensés au titre d’une pension militaire d’invalidité ?
        </p>
        <Checkbox className="absolute bg-white left-[97px] min-w-[240px] top-[715px] w-[240px]" text="oui" />
        <Checkbox className="absolute bg-white left-[208px] min-w-[240px] top-[715px] w-[240px]" text="non" />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[777.41px] not-italic text-[12px] text-black top-[644.22px] whitespace-nowrap">structure de soins :</p>
    </div>
  );
}