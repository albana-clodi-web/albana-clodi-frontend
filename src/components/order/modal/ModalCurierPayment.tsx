import { useState } from "react";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";

type KurirPayment = {
  namaKurir: string;
  tarif: number;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: KurirPayment) => void;
};

export default function ModalCurierPayment({ isOpen, onClose, onSave }: Props) {
  const [namaKurir, setNamaKurir] = useState("");
  const [tarif, setTarif] = useState(0);

  const handleSave = () => {
    onSave({ namaKurir, tarif });
    setNamaKurir("");
    setTarif(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4 p-4">
        <div>
          <Label>Kurir</Label>
          <Input
            type="text"
            placeholder="Nama kurir"
            value={namaKurir}
            onChange={(e) => setNamaKurir(e.target.value)}
          />
        </div>
        <div>
          <Label>Tarif</Label>
          <Input
            type="number"
            placeholder="0"
            value={tarif}
            onChange={(e) => setTarif(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onClose} variant="outline">
            Batal
          </Button>
          <Button onClick={handleSave}>Simpan</Button>
        </div>
      </div>
    </Modal>
  );
}
