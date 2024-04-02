import { SelectedPhone } from "../services/selected-phone.service";

export function ButtonSelectPhone() {
  const { selectPro, handleSelect, getButtonClasses } = SelectedPhone();

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
