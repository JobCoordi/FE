"use client";

type Props = {
  on: boolean;
  toggle: () => void;
};

export default function Toggle({ on, toggle }: Props) {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-[220px] h-[110px] flex items-center justify-center cursor-pointer"
      onClick={toggle}
    >
      <div className="absolute w-full h-full rounded-full bg-[#39315a]" />
      <div
        className={`absolute top-[10px] left-[10px] w-[90px] h-[90px] rounded-full transition-all duration-500 ${
          on
            ? "translate-x-[110px] bg-[#a7694a] shadow-[0_0_30px_50px_rgba(253,184,67,0.1)]"
            : "bg-[#4a426b]"
        }`}
      >
        <div
          className={`w-[30px] h-[30px] rounded-full bg-[#fdc63a] absolute top-[30px] left-[30px] transition-opacity ${
            on ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div
          className={`absolute top-[-10px] left-[35px] w-[10px] h-[10px] bg-yellow-300 rounded-full ${
            on ? "animate-spark1" : "hidden"
          }`}
        ></div>
        <div
          className={`absolute bottom-[-10px] right-[35px] w-[10px] h-[10px] bg-yellow-300 rounded-full ${
            on ? "animate-spark2" : "hidden"
          }`}
        ></div>
      </div>
    </div>
  );
}
