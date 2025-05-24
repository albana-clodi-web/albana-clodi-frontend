import OptionEditDelete from "../optionDropdown/OptionEditDelete";

const logoBank: Record<string, string> = {
  BNI: "/images/logo/bank_logo/BNI-logo.svg",
  BCA: "/images/logo/bank_logo/BCA-logo.svg",
  Mandiri: "/images/logo/bank_logo/Mandiri-logo.svg",
};

type Props = {
  id?: string;
  titleBank: string;
  rekeningNumber: string;
  userBank: string;
  setStateEdit: () => void;
  setDelete: () => void;
};

export default function CardBank({
  titleBank,
  rekeningNumber,
  userBank,
  setStateEdit,
  setDelete,
}: Props) {
  const logoSrc = logoBank[titleBank] || "/images/logo/default-bank.svg";

  return (
    <div className="flex justify-around bg-white shadow-md rounded-2xl gap-3 hover:shadow-lg hover:shadow-blue-300 transition-shadow border h-[185px] dark:bg-gray-dark dark:border-gray-800 dark:hover:shadow-blue-300">
      <div className="pt-5 h-[185px] dark:bg-gray-dark dark:border-gray-800 dark:hover:shadow-blue-300">
        <div className="w-[100px] overflow-hidden rounded-xl bg-blue-light-50">
          <img
            src={logoSrc}
            alt={titleBank}
            className="object-contain h-full"
          />
        </div>
        <div className="description-bank mt-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-amber-50 text-start">
            {titleBank} -{" "}
            <span className="font-semibold">{rekeningNumber}</span>
          </h3>
          <h4 className="text-lg font-bold text-gray-900 dark:text-amber-50 text-start truncate">
            {userBank}
          </h4>
        </div>
      </div>

      <OptionEditDelete setStateEdit={setStateEdit} setDelete={setDelete} />
    </div>
  );
}
