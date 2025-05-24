import CardBank from "../bankCard/CardBank";
import Button from "../../ui/button/Button";
import { useState } from "react";
import BankModalForm from "../modal/BankModalForm";
import DeleteBankModal from "../modal/DeleteBankModal";

export default function PaymentSettingForm() {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const [idEditData, setIdEditData] = useState("");
  const [idDeleteData, setIdDeleteData] = useState("");

  return (
    <div className="flex gap-8 max-md:flex-col">
      {/* For Description */}
      <div className="text-start max-w-full md:max-w-60">
        <h2 className="font-bold">Rekening Bank</h2>
        <p className="text-justify mt-3">
          Tambahkan data rekening bank untuk digunakan pada pilihan pembayaran
          di form order
        </p>
        <Button className="w-full mt-4" onClick={() => setShowModal(true)}>
          Tambah Bank
        </Button>
      </div>

      {/* For Card Back */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 flex-1">
        <CardBank
          titleBank="BNI"
          rekeningNumber="7782312"
          userBank="Bayu Kusuma"
          setStateEdit={() => setShowModal(true)}
          setDelete={() => setIsDelete(true)}
        />
        <CardBank
          titleBank="BNI"
          rekeningNumber="7782312"
          userBank="Bayu Kusuma"
          setStateEdit={() => setShowModal(true)}
          setDelete={() => setIsDelete(true)}
        />
      </div>
      {showModal && <BankModalForm changeModal={() => setShowModal(false)} />}
      {isDelete && (
        <DeleteBankModal
          id={idDeleteData}
          changeModal={() => setIsDelete(false)}
        />
      )}
    </div>
  );
}
