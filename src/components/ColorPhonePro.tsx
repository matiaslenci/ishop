export function ColorPhonePro() {
  return (
    <div className="flex flex-col items-center justify-between gap-8">
      <img
        src="/img/compare_iphone15_pro_max_black_titanium.jpg"
        alt=""
        className="w-80"
      />
      <div className="[&>div]:rounded-full [&>div]:cursor-pointer [&>div]:shadow-lg [&>div]:size-10 flex flex-row gap-7">
        <div className="bg-[#837F7D]"></div>
        <div className="bg-[#2F4452]"></div>
        <div className="bg-[#DDDDDD]"></div>
        <div className="bg-[#1B1B1B]"></div>
      </div>
    </div>
  );
}
