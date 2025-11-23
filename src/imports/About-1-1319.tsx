import svgPaths from "./svg-a0aq9ywh7s";
import img6Dd8E389A31 from "figma:asset/b6b96aad2b8137858cdaeb7d1d8e14e4e0f0f752.png";

function Column() {
  return (
    <div
      className="content-stretch flex font-['Manrope',sans-serif] font-medium gap-[32px] items-start leading-[1.6] overflow-clip relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre"
      data-name="Column"
    >
      <p className="relative shrink-0">Work</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Column1() {
  return (
    <div
      className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0"
      data-name="Column"
    >
      <Column />
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="absolute box-border content-stretch flex items-center justify-between left-0 overflow-clip px-[60px] py-[24px] top-0 w-[1440px]"
      data-name="Navigation"
    >
      <p className="leading-[1.5] not-italic relative shrink-0 text-[#c7c7c7] text-[32px] text-nowrap tracking-[-0.32px] whitespace-pre">
        robert garcia
      </p>
      <Column1 />
    </div>
  );
}

function Image() {
  return (
    <div
      className="absolute contents left-[108px] top-[719px]"
      data-name="image"
    >
      <div
        className="absolute bg-[#c7c7c7] h-[700px] left-[108px] rounded-[16px] top-[719px] w-[1224px]"
        data-name="bg"
      />
      <div
        className="absolute h-[652px] left-1/2 top-[767px] translate-x-[-50%] w-[464px]"
        data-name="6dd8e389a3 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={img6Dd8E389A31}
        />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[32px] text-white w-full">{`I work as a senior full-stack developer, with deep expertise in frontend engineering.  `}</p>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">
        I am a front-end developer based in India looking for exciting
        opportunities. Likes to focus on accessibility when developing.
        Passionate and curious about solving problems. Currently, I’m exploring
        Reactjs, Webflow and a bit of Designing. While I am not programming, I
        enjoy playing football, photography and playing Valorant. Learning more
        to improve skill
      </p>
    </div>
  );
}

function Circle() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 42 42"
      >
        <g id="circle">
          <circle
            cx="21"
            cy="21"
            fill="var(--fill-0, #0A0A0A)"
            id="dot"
            r="5"
          />
          <g clipPath="url(#clip0_1_1160)" id="arrow" opacity="0">
            <path
              d={svgPaths.p23c4ec40}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1160">
            <rect
              fill="white"
              height="16"
              transform="translate(13 13)"
              width="16"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#d3e97a] box-border content-stretch flex gap-[12px] h-[54px] items-center justify-center pl-[24px] pr-[6px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <p className="font-['Manrope',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-neutral-950 text-nowrap uppercase whitespace-pre">
        Download Resume
      </p>
      <Circle />
    </div>
  );
}

function BxlLinkedinSvg() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="bxl-linkedin.svg">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 26"
      >
        <g id="bxl-linkedin.svg">
          <path
            d={svgPaths.p282a2240}
            fill="var(--fill-0, #D3E97A)"
            id="Vector"
          />
          <path
            d={svgPaths.p31d7ad00}
            fill="var(--fill-0, #D3E97A)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#222222] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[54px]">
      <BxlLinkedinSvg />
    </div>
  );
}

function BxlGithubSvg() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="bxl-github.svg">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 26"
      >
        <g id="bxl-github.svg">
          <path
            clipRule="evenodd"
            d={svgPaths.p17e6c000}
            fill="var(--fill-0, #D3E97A)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#222222] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[54px]">
      <BxlGithubSvg />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0">
      <Button />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[628px] top-[256px] w-[704px]">
      <Frame23 />
      <Frame20 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex gap-[16px] items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#484848] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="font-['Manrope',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        HTML
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex gap-[16px] items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#484848] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="font-['Manrope',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        CSS
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex gap-[16px] items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#484848] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="font-['Manrope',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        Javascript
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="box-border content-stretch flex gap-[16px] items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#484848] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="font-['Manrope',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        Jquery
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="box-border content-stretch flex gap-[16px] items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#484848] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="font-['Manrope',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        Accessibility
      </p>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="box-border content-stretch flex gap-[16px] items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#484848] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="font-['Manrope',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        Figma
      </p>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="box-border content-stretch flex gap-[16px] items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#484848] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      <p className="font-['Manrope',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        Tailwind Css
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-[704px]">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#c7c7c7] text-[18px] w-[min-content]">{`I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. `}</p>
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute box-border content-stretch flex gap-[24px] items-start left-[108px] px-0 py-[80px] top-[1459px] w-[1224px]">
      <p className="basis-0 grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[76px] text-white">
        My Capabilities
      </p>
      <Frame25 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Manrope',sans-serif] font-medium grow leading-[1.3] min-h-px min-w-px relative shrink-0 text-[24px] text-white tracking-[-0.24px]">
        Freelance Developer
      </p>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] text-nowrap whitespace-pre">{`Nov 2023 — Present `}</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function TitleAndDescription() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="title and description"
    >
      <Frame27 />
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Manrope',sans-serif] font-medium grow leading-[1.3] min-h-px min-w-px relative shrink-0 text-[24px] text-white tracking-[-0.24px]">
        Front-End Intern
      </p>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] text-nowrap whitespace-pre">{`Sep 2023 — Nov 2023 `}</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame30 />
      <p className="font-['Manrope',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#d3e97a] text-[18px] w-full">
        Roos Tech
      </p>
    </div>
  );
}

function TitleAndDescription1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="title and description"
    >
      <Frame32 />
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[80px] grow items-start min-h-px min-w-px relative shrink-0">
      <TitleAndDescription />
      <TitleAndDescription1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute box-border content-stretch flex gap-[24px] items-start left-[108px] px-0 py-[80px] top-[1861px] w-[1224px]">
      <p className="basis-0 grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[76px] text-white">
        My Experience
      </p>
      <Frame29 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">
        robertgarcia@gmail.com
      </p>
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 204 1"
          >
            <line
              id="underline"
              stroke="var(--stroke-0, #D3E97A)"
              x2="204"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] text-nowrap whitespace-pre">
        Say hello at
      </p>
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">
        resume
      </p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 63 1"
          >
            <line
              id="Line 7"
              stroke="var(--stroke-0, #D3E97A)"
              x2="63"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] text-nowrap whitespace-pre">
        For more info, here’s my
      </p>
      <Frame17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="leading-none not-italic relative shrink-0 text-[76px] text-white w-[600px]">
        Let’s connect
      </p>
      <Frame15 />
    </div>
  );
}

function BxlLinkedinSvg1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="bxl-linkedin.svg">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="bxl-linkedin.svg">
          <path
            d={svgPaths.p1bc476b0}
            fill="var(--fill-0, #D3E97A)"
            id="Vector"
          />
          <path
            d={svgPaths.p3ff62a40}
            fill="var(--fill-0, #D3E97A)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function BxlGithubSvg1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="bxl-github.svg">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="bxl-github.svg">
          <path
            clipRule="evenodd"
            d={svgPaths.p3add5780}
            fill="var(--fill-0, #D3E97A)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[14.58%_6.25%]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 23"
      >
        <g id="Group">
          <path
            d={svgPaths.p3f377200}
            fill="var(--fill-0, #D3E97A)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function BxlLinkedinSvg2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[32px]"
      data-name="bxl-linkedin.svg"
    >
      <Group />
    </div>
  );
}

function BxlInstagramSvg() {
  return (
    <div
      className="relative shrink-0 size-[32px]"
      data-name="bxl-instagram.svg"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="bxl-instagram.svg">
          <path
            d={svgPaths.p8ca3400}
            fill="var(--fill-0, #D3E97A)"
            id="Vector"
          />
          <path
            d={svgPaths.p5548000}
            fill="var(--fill-0, #D3E97A)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p374be072}
            fill="var(--fill-0, #D3E97A)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <BxlLinkedinSvg1 />
      <BxlGithubSvg1 />
      <BxlLinkedinSvg2 />
      <BxlInstagramSvg />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
      <Frame7 />
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        © 2023 Robert Garcia
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[12px] relative w-full">
          <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        Name
      </p>
      <Frame2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[12px] relative w-full">
          <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        Email
      </p>
      <Frame18 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[12px] relative w-full">
          <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        Subject
      </p>
      <Frame21 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[12px] relative w-full">
          <div className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">
            <p className="mb-[8px]"> </p>
            <p className="mb-[8px]">&nbsp;</p>
            <p className="mb-[8px]">&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        Message
      </p>
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame19 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Button8() {
  return (
    <div
      className="bg-[#d3e97a] box-border content-stretch flex gap-[16px] h-[54px] items-center justify-center px-[40px] py-[20px] relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <p className="font-['Manrope',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-neutral-950 text-nowrap uppercase whitespace-pre">
        Submit
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame34 />
      <Button8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bottom-0 box-border content-stretch flex gap-[24px] items-start left-1/2 px-0 py-[80px] translate-x-[-50%] w-[1224px]">
      <Frame9 />
      <Frame6 />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-neutral-950 relative size-full" data-name="About">
      <Navigation />
      <Image />
      <p className="absolute leading-[0.9] left-[calc(50%-612px)] not-italic text-[101px] text-nowrap text-white top-[256px] whitespace-pre">
        About me
      </p>
      <Frame22 />
      <Frame26 />
      <Frame31 />
      <div className="absolute h-0 right-0 top-[1860px] w-[1440px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1440 1"
          >
            <line
              id="Line 4"
              stroke="var(--stroke-0, #484848)"
              x2="1440"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 right-0 top-[2394px] w-[1440px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1440 1"
          >
            <line
              id="Line 4"
              stroke="var(--stroke-0, #484848)"
              x2="1440"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}
