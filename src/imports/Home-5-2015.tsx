import svgPaths from "./svg-cipwcyx6co";
import imgPotrait from "figma:asset/0d3630f0a8ce367183462cfffe8f59bdd44167c0.png";
import imgWork from "figma:asset/5dcd97dc5eedd121a4e28d7d486be0fccd32ffb8.png";
import imgImage10 from "figma:asset/b4ad9145f503384fa2e01584bf6a2e40a529a372.png";
import imgImage9 from "figma:asset/ada6183f66559558faf021a9606a30839d13d925.png";

function Column() {
  return (
    <div
      className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[32px] items-start not-italic overflow-clip relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap tracking-[-0.48px] whitespace-pre"
      data-name="Column"
    >
      <p className="leading-[24px] relative shrink-0">Work</p>
      <p className="leading-[1.5] relative shrink-0">About</p>
      <p className="leading-[1.5] relative shrink-0">Contact</p>
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
      className="absolute contents left-[732px] top-[126px]"
      data-name="image"
    >
      <div
        className="absolute bg-[#c7c7c7] h-[700px] left-[732px] rounded-[16px] top-[126px] w-[600px]"
        data-name="bg"
      />
      <div
        className="absolute h-[663px] left-[732px] top-[163px] w-[600px]"
        data-name="potrait"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgPotrait}
        />
      </div>
    </div>
  );
}

function HeaderAndSubHeader() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="header and sub header"
    >
      <div className="leading-[0.9] not-italic relative shrink-0 text-[101px] text-white w-full">
        <p className="mb-0">{`hi, i am `}</p>
        <p>robert garcia.</p>
      </div>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">
        A India based front-end developer passionate about building accessible
        and user friendly websites.
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
          <g clipPath="url(#clip0_5_2052)" id="arrow" opacity="0">
            <path
              d={svgPaths.p23c4ec40}
              fill="var(--fill-0, white)"
              id="Vector"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_2052">
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
        Let's Connect
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

function Action() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0"
      data-name="action"
    >
      <Button />
      <Frame />
      <Frame1 />
    </div>
  );
}

function HeroContent() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[40px] items-start left-[108px] pb-[22px] pt-0 px-0 top-[286px] w-[544px]"
      data-name="hero content"
    >
      <HeaderAndSubHeader />
      <Action />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[600px]">
      <p className="leading-none not-italic relative shrink-0 text-[76px] text-nowrap text-white whitespace-pre">
        Featured Projects
      </p>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#c7c7c7] text-[18px] w-[min-content]">
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>
    </div>
  );
}

function Tag() {
  return (
    <div
      className="absolute bg-neutral-950 box-border content-stretch flex gap-[10px] items-center justify-center left-[16px] px-[16px] py-[8px] rounded-[100px] top-[16px]"
      data-name="tag"
    >
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
        Conceptual Work
      </p>
    </div>
  );
}

function Card() {
  return (
    <div
      className="absolute bg-[#1a1a1a] left-1/2 overflow-clip rounded-[12px] size-[600px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="card"
    >
      <div
        className="absolute h-[347px] left-1/2 pointer-events-none rounded-[12px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[486px]"
        data-name="work"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img
            alt=""
            className="absolute h-[378.34%] left-[-17.08%] max-w-none top-[-13.96%] w-[133.95%]"
            src={imgWork}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute border-2 border-black border-solid inset-[-2px] rounded-[14px]"
        />
      </div>
      <Tag />
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="relative shrink-0 size-[600px]" data-name="project_card">
      <Card />
    </div>
  );
}

function TitleAndDescription() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="title and description"
    >
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[32px] text-white w-full">
        Promotional landing page for our favorite show
      </p>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">
        Teamed up with a designer to breathe life into a promotional webpage for
        our beloved show, Adventure Time. Delivered a fully responsive design
        with dynamic content capabilities, seamlessly integrating a newsletter
        feature to keep fans updated with the latest adventures.
      </p>
    </div>
  );
}

function Year() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full"
      data-name="year"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        Year
      </p>
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        2023
      </p>
    </div>
  );
}

function Role() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full"
      data-name="role"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        Role
      </p>
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        Front-end Developer
      </p>
    </div>
  );
}

function List() {
  return (
    <div
      className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full"
      data-name="List"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Year />
      <Role />
    </div>
  );
}

function ProjectInfo() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="project info"
    >
      <p className="font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        Project Info
      </p>
      <List />
    </div>
  );
}

function Information() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
      data-name="information"
    >
      <TitleAndDescription />
      <ProjectInfo />
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_5_2038)" id="arrow">
          <path
            d={svgPaths.p3589c00}
            fill="var(--fill-0, #D3E97A)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_2038">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TitleAndArrow() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="title and arrow"
    >
      <p className="font-['Manrope',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#d3e97a] text-[16px] text-nowrap uppercase whitespace-pre">
        Live Demo
      </p>
      <Arrow />
    </div>
  );
}

function ViewProject() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0"
      data-name="view project"
    >
      <TitleAndArrow />
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 111 2"
          >
            <line
              id="underline"
              stroke="var(--stroke-0, #D3E97A)"
              strokeWidth="2"
              x2="111"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BxlGithubSvg1() {
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

function TitleAndArrow1() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="title and arrow"
    >
      <p className="font-['Manrope',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#d3e97a] text-[16px] text-nowrap uppercase whitespace-pre">
        See on Github
      </p>
      <BxlGithubSvg1 />
    </div>
  );
}

function ViewProject1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0"
      data-name="view project"
    >
      <TitleAndArrow1 />
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 149 2"
          >
            <line
              id="underline"
              stroke="var(--stroke-0, #D3E97A)"
              strokeWidth="2"
              x2="149"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <ViewProject />
      <ViewProject1 />
    </div>
  );
}

function ProjectContent() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="project content"
    >
      <Information />
      <Frame21 />
    </div>
  );
}

function Project() {
  return (
    <div
      className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[1224px]"
      data-name="project"
    >
      <ProjectCard />
      <ProjectContent />
    </div>
  );
}

function ProjectImage() {
  return (
    <div
      className="bg-[#1a1a1a] overflow-clip relative rounded-[12px] shrink-0 size-[600px]"
      data-name="project image"
    >
      <div
        className="absolute h-[347px] left-1/2 rounded-[12px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[488px]"
        data-name="image 10"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full"
          src={imgImage10}
        />
      </div>
    </div>
  );
}

function TitleAndDescription1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="title and description"
    >
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[32px] text-white w-full">
        Blog site for World News
      </p>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full whitespace-pre-wrap">{`Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.`}</p>
    </div>
  );
}

function Client() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full"
      data-name="client"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        Client
      </p>
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        World News
      </p>
    </div>
  );
}

function Year1() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full"
      data-name="year"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        Year
      </p>
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        2022
      </p>
    </div>
  );
}

function Role1() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full"
      data-name="role"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        Role
      </p>
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        Front-end Developer
      </p>
    </div>
  );
}

function List1() {
  return (
    <div
      className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full"
      data-name="List"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Client />
      <Year1 />
      <Role1 />
    </div>
  );
}

function ProjectInfo1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="project info"
    >
      <p className="font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        Project Info
      </p>
      <List1 />
    </div>
  );
}

function Information1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
      data-name="information"
    >
      <TitleAndDescription1 />
      <ProjectInfo1 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_5_2038)" id="arrow">
          <path
            d={svgPaths.p3589c00}
            fill="var(--fill-0, #D3E97A)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_2038">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TitleAndArrow2() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="title and arrow"
    >
      <p className="font-['Manrope',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#d3e97a] text-[16px] text-nowrap uppercase whitespace-pre">
        View project
      </p>
      <Arrow1 />
    </div>
  );
}

function ViewProject2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0"
      data-name="view project"
    >
      <TitleAndArrow2 />
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 143 2"
          >
            <line
              id="underline"
              stroke="var(--stroke-0, #D3E97A)"
              strokeWidth="2"
              x2="143"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProjectContent1() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="project content"
    >
      <Information1 />
      <ViewProject2 />
    </div>
  );
}

function Project1() {
  return (
    <div
      className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[1224px]"
      data-name="project"
    >
      <ProjectImage />
      <ProjectContent1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-neutral-950 box-border content-stretch flex gap-[10px] items-center justify-center left-[16px] px-[16px] py-[8px] rounded-[100px] top-[16px]">
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
        Challenge
      </p>
    </div>
  );
}

function ProjectImage1() {
  return (
    <div
      className="bg-[#1a1a1a] overflow-clip relative rounded-[12px] shrink-0 size-[600px]"
      data-name="project image"
    >
      <div
        className="absolute h-[306px] left-1/2 rounded-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[488px]"
        data-name="image 9"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full"
          src={imgImage9}
        />
      </div>
      <Frame12 />
    </div>
  );
}

function TitleAndDescription2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="title and description"
    >
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[32px] text-white w-full">
        E-commerce product page
      </p>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">
        Successfully crafted an engaging product page featuring a dynamic
        lightbox gallery and seamless cart functionality, showcasing proficiency
        in JavaScript development.
      </p>
    </div>
  );
}

function Year2() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full"
      data-name="year"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        Year
      </p>
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        2022
      </p>
    </div>
  );
}

function Role2() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between px-0 py-[16px] relative shrink-0 w-full"
      data-name="role"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        Role
      </p>
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        Front-end Developer
      </p>
    </div>
  );
}

function List2() {
  return (
    <div
      className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full"
      data-name="List"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#484848] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Year2 />
      <Role2 />
    </div>
  );
}

function ProjectInfo2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="project info"
    >
      <p className="font-['Manrope',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white uppercase whitespace-pre">
        Project Info
      </p>
      <List2 />
    </div>
  );
}

function Information2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
      data-name="information"
    >
      <TitleAndDescription2 />
      <ProjectInfo2 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_5_2038)" id="arrow">
          <path
            d={svgPaths.p3589c00}
            fill="var(--fill-0, #D3E97A)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_2038">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TitleAndArrow3() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="title and arrow"
    >
      <p className="font-['Manrope',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#d3e97a] text-[16px] text-nowrap uppercase whitespace-pre">
        Live Demo
      </p>
      <Arrow2 />
    </div>
  );
}

function ViewProject3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0"
      data-name="view project"
    >
      <TitleAndArrow3 />
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 111 2"
          >
            <line
              id="underline"
              stroke="var(--stroke-0, #D3E97A)"
              strokeWidth="2"
              x2="111"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BxlGithubSvg2() {
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

function TitleAndArrow4() {
  return (
    <div
      className="content-stretch flex gap-[4px] items-start relative shrink-0"
      data-name="title and arrow"
    >
      <p className="font-['Manrope',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#d3e97a] text-[16px] text-nowrap uppercase whitespace-pre">
        See on Github
      </p>
      <BxlGithubSvg2 />
    </div>
  );
}

function ViewProject4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0"
      data-name="view project"
    >
      <TitleAndArrow4 />
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 149 2"
          >
            <line
              id="underline"
              stroke="var(--stroke-0, #D3E97A)"
              strokeWidth="2"
              x2="149"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <ViewProject3 />
      <ViewProject4 />
    </div>
  );
}

function ProjectContent2() {
  return (
    <div
      className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px relative shrink-0"
      data-name="project content"
    >
      <Information2 />
      <Frame24 />
    </div>
  );
}

function Project2() {
  return (
    <div
      className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[1224px]"
      data-name="project"
    >
      <ProjectImage1 />
      <ProjectContent2 />
    </div>
  );
}

function Projects() {
  return (
    <div
      className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0"
      data-name="projects"
    >
      <Project />
      <Project1 />
      <Project2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[80px] items-start left-[108px] px-0 py-[80px] top-[906px]">
      <Frame18 />
      <Projects />
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

function BxlGithubSvg3() {
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
      <BxlGithubSvg3 />
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
            John Doe
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        Name
      </p>
      <Frame2 />
    </div>
  );
}

function Frame25() {
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.6] relative shrink-0 text-[#c7c7c7] text-[16px] text-nowrap whitespace-pre">
        Email
      </p>
      <Frame25 />
    </div>
  );
}

function Frame27() {
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
      <Frame27 />
    </div>
  );
}

function Frame28() {
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
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame26 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Button1() {
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
      <Frame29 />
      <Button1 />
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

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Manrope',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[32px] text-white w-full">{`I’m a senior full-stack developer with a frontend-first mindset, based in India. I love building clean, accessible, user-friendly interfaces and turning tricky problems into elegant solutions. I’m currently exploring React.js, Webflow, and a bit of design to level up my creative side.  `}</p>
      <p className="font-['Manrope',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#c7c7c7] text-[18px] w-full">
        I’m a senior full-stack developer with a frontend-first mindset, based
        in India. I love building clean, accessible, user-friendly interfaces
        and turning tricky problems into elegant solutions. I’m currently
        exploring React.js, Webflow, and a bit of design to level up my creative
        side. When I’m not coding, you’ll find me playing cricket, practicing
        photography, or spending quality time with my family. Always learning,
        always curious.
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[628px] top-[3446px] w-[704px]">
      <Frame23 />
    </div>
  );
}

function ViewProject5() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[4px] items-start left-[628px] top-[3740px]"
      data-name="view project"
    >
      <p className="font-['Manrope',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#d3e97a] text-[16px] text-nowrap uppercase whitespace-pre">
        More about me
      </p>
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 129 2"
          >
            <line
              id="underline"
              stroke="var(--stroke-0, #D3E97A)"
              strokeWidth="2"
              x2="129"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-neutral-950 relative size-full" data-name="Home">
      {[...Array(2).keys()].map((_, i) => (
        <Navigation key={i} />
      ))}
      <Image />
      <HeroContent />
      <div className="absolute h-0 left-0 top-[906px] w-[1440px]">
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
      <div className="absolute h-0 left-0 top-[3324px] w-[1440px]">
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
      <div className="absolute h-0 left-0 top-[4184px] w-[1440px]">
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
      <Frame19 />
      <Frame8 />
      <p className="absolute leading-[0.9] left-[calc(50%-612px)] not-italic text-[101px] text-nowrap text-white top-[3446px] whitespace-pre">
        About me
      </p>
      <Frame22 />
      <ViewProject5 />
    </div>
  );
}
