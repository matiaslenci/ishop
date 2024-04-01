import { useState } from "react";

export function SelectPhone() {
  const [selectPro, setSelectPro] = useState(true);

  const handleSelect = () => {
    setSelectPro(!selectPro);
  };

  const getButtonClasses = (isSelected: boolean) => {
    return isSelected
      ? "text-blue-500 border-4 border-blue-500 cursor-default px-5 py-3 font-semibold text-xl text-center rounded-lg"
      : "inline-flex items-center justify-center text-black hover:text-white cursor-pointer hover:bg-blue-500 px-5 py-3 font-semibold text-xl text-center rounded-lg";
  };

  return (
    <section className="flex flex-row gap-3">
      <button
        onClick={() => handleSelect()}
        className={getButtonClasses(selectPro)}
      >
        iPhone 15 Pro Max
      </button>

      <button
        onClick={() => handleSelect()}
        className={getButtonClasses(!selectPro)}
      >
        iPhone 15
      </button>
    </section>
  );
}
