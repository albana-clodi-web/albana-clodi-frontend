import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Input from "../../form/input/InputField";

type Props = {
  changeModal: () => void;
  isEdit?: boolean;
  id?: string;
  refreshData?: () => void;
};

export default function BankModalForm({ changeModal, isEdit, id }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [responseObject, setResponseObject] = useState("");

  const subtotal = amount * quantity;

  async function addExpense() {
    if (name.trim() === "" || amount <= 0 || quantity <= 0) return;
    changeModal();
  }

  async function handleEditDataExpense() {
    changeModal();
  }

  useEffect(() => {}, [isEdit, id]);

  return ReactDOM.createPortal(
    <div className="fixed z-[100000] inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="inline-block align-bottom bg-white rounded-lg px-6 pt-6 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Tambah Pengeluaran
            </h2>
            <button
              onClick={changeModal}
              className="text-gray-400 hover:text-gray-700"
            >
              <IoIosCloseCircleOutline size={27} />
            </button>
          </div>
          <hr className="pt-0 pb-3 border-gray-300 dark:border-gray-700" />

          <div className="space-y-3">
            <div className="flex gap-4">
              <div>
                <p className="text-theme-sm font-medium mb-1">
                  Nama Pengeluaran
                </p>
                <Input
                  placeholder="Tulis nama pengeluaran..."
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <label className="text-theme-sm font-semibold">Biaya(RP)</label>
                <Input
                  placeholder="Rp.0"
                  type="number"
                  value={amount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAmount(Number(e.target.value))
                  }
                />
              </div>
              <div>
                <label className="text-theme-sm font-semibold">Jumlah</label>
                <Input
                  placeholder="0"
                  type="number"
                  value={quantity}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setQuantity(Number(e.target.value))
                  }
                />
              </div>
            </div>

            {/* User Input Data */}
            <div>
              <label className="text-theme-sm font-semibold mb-1 block">
                Nama Penanggung Jawab
              </label>
            </div>
            <Input
              placeholder="Armin"
              type="string"
              value={responseObject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setResponseObject(e.target.value)
              }
            />

            <div>
              <label className="text-theme-sm font-semibold mb-1 block">
                Keterangan
              </label>
              <textarea
                placeholder="Tulis keterangan pengeluaran..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full border px-3 py-4 rounded text-sm resize-none"
              ></textarea>
            </div>
            <hr className="py-2 border-gray-300 dark:border-gray-700" />

            <div className="text-theme-xl flex justify-between font-semibold mt-2">
              Subtotal:{" "}
              <span className="text-brand-600">
                Rp{subtotal.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-2">
            <button
              onClick={changeModal}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:text-gray-900"
            >
              Batal
            </button>
            <button
              onClick={isEdit ? handleEditDataExpense : addExpense}
              className="px-4 py-2 bg-brand-600 text-white rounded hover:bg-brand-500"
            >
              {isEdit ? "Edit Data" : "Simpan"}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
