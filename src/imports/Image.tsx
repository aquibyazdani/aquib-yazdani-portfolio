import imgPotrait from "figma:asset/0d3630f0a8ce367183462cfffe8f59bdd44167c0.png";

export default function Image() {
  return (
    <div className="relative size-full" data-name="image">
      <div className="absolute bg-[#c7c7c7] h-[700px] left-0 rounded-[16px] top-0 w-[600px]" data-name="bg" />
      <div className="absolute h-[663px] left-0 top-[37px] w-[600px]" data-name="potrait">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPotrait} />
      </div>
    </div>
  );
}