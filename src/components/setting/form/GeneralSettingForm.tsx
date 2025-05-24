import { useState } from "react";
import PhoneInput from "../../form/group-input/PhoneInput";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import DropzoneImage from "./DropzoneImage";
import { FaWarehouse } from "react-icons/fa";
import Button from "../../ui/button/Button";

export default function GeneralSettingForm() {
  const countries = [{ code: "IND", label: "+62" }];
  const [imageCompany, setImageCompany] = useState<File | null>(null);
  console.log(imageCompany);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-6">
        <div>
          <Label htmlFor="inputLogo">Logo Perusahaan</Label>
          <DropzoneImage onChange={setImageCompany} />
        </div>

        <div className="flex flex-1 gap-3">
          {/* Kolom Kiri */}
          <div className=" mt-3 flex-1 flex flex-col gap-4 justify-around">
            <div>
              <Label className="text-start">Nama Toko</Label>
              <div className="relative">
                <Input
                  placeholder="Albana Grosir"
                  type="text"
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <FaWarehouse className="size-6" />
                </span>
              </div>
            </div>

            <div>
              <Label className="text-start">No Telepon</Label>
              <div className="relative">
                <PhoneInput
                  selectPosition="start"
                  countries={countries}
                  placeholder="08965517762"
                  onChange={() => ""}
                />
              </div>
            </div>
          </div>

          {/* Kolom Kanan */}
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <div>
          <Label className="text-start">Alamat</Label>
          <div className="relative">
            <Input
              placeholder="JL Muara No 10 Blitar"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <FaWarehouse className="size-6" />
            </span>
          </div>
        </div>

        <div>
          <Label className="text-start">Deskripsi</Label>
          <textarea
            id="productDescription"
            placeholder="Tulis deskripsi produk di sini..."
            className="w-full h-32 mt-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-dark-900 dark:text-white dark:border-gray-700 resize-none"
          />
        </div>
      </div>
      <Button className="hover:bg-brand-300">Simpan Pengatuan</Button>
    </div>
  );
}
