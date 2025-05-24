import ReactDOM from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../../ui/button/Button";

type Props = {
  changeModal: () => void;
};

export default function ModalAddCustomer({ changeModal }: Props) {
  return ReactDOM.createPortal(
    <div className="fixed z-[100000] inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        {/* <div className="fixed inset-0 bg-gray-500 opacity-75"></div> */}
        <div className="bg-white rounded-lg w-full max-w-3xl p-6 shadow-xl relative z-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-black">
              Tambah Customer
            </h2>
            <button
              onClick={changeModal}
              className="text-gray-400 hover:text-gray-700">
              <IoIosCloseCircleOutline size={30} />
            </button>
          </div>
          <hr className="text-gray-300 py-3" />

          {/* Form */}
          <form className="space-y-4">
            {/* Baris 1 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex justify-start py-3 text-sm font-medium">
                  Kategori Customer
                </label>
                <select className="w-full border border-gray-300 bg-gray-100  rounded-lg px-3 py-2">
                  <option value="pelanggan">Pelanggan</option>
                  {/* Tambahkan opsi lain bila perlu */}
                </select>
              </div>
              <div>
                <label className="flex justify-start py-3 text-sm font-medium">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-gray-100  rounded-lg px-3 py-2"
                />
              </div>
            </div>

            {/* Baris 2 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex justify-start py-3 text-sm font-medium">
                  Kota/Kecamatan
                </label>
                <input
                  type="text"
                  placeholder="Cari Kota/kecamatan..."
                  className="w-full border border-gray-300 bg-gray-100  rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="flex justify-start py-3 text-sm font-medium">
                  Kode Pos
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-gray-100 rounded-lg  px-3 py-2"
                />
              </div>
            </div>

            {/* Baris 3 */}
            <div>
              <label className="flex justify-start py-3 text-sm font-medium">
                No. HP / Telepon
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
              />
            </div>

            {/* Baris 4 */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="flex justify-start py-3 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="flex justify-start py-3 text-sm font-medium">
                  ID Line
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="flex justify-start py-3 text-sm font-medium">
                  Other Contact
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
                />
              </div>
            </div>

            {/* Baris 5 */}
            <div>
              <label className="flex justify-start py-3 text-sm font-medium">
                Alamat Lengkap
              </label>
              <textarea
                className="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
                rows={3}></textarea>
            </div>

            {/* Tombol Simpan */}
            <div className="text-right">
              <Button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Simpan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
