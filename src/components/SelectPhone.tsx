export function SelectPhone() {
  let selectPro = true;

  function toggleSelect(): void {
    selectPro = !selectPro;
  }

  /*   document.getElementById("iphone")?.addEventListener("click", function () {
    toggleSelect();
  }); */

  return (
    <section className="flex flex-row gap-3">
      <button
        onClick={() => toggleSelect()}
        id="iphone"
        className={
          selectPro
            ? "text-blue-500 border-4 border-blue-500 cursor-default px-5 py-3 font-semibold text-xl text-center  rounded-lg "
            : "inline-flex items-center justify-center text-black  hover:text-white cursor-pointer  hover:bg-blue-500 px-5 py-3 font-semibold text-xl text-center  rounded-lg"
        }
      >
        iPhone 15 Pro Max
      </button>

      <button
        onClick={() => toggleSelect()}
        id="iphone"
        className={
          !selectPro
            ? "text-blue-500 border-4 border-blue-500 cursor-default px-5 py-3 font-semibold text-xl text-center  rounded-lg "
            : "inline-flex items-center justify-center text-black  hover:text-white cursor-pointer  hover:bg-blue-500 px-5 py-3 font-semibold text-xl text-center  rounded-lg"
        }
      >
        iPhone 15
      </button>
    </section>
  );
}
