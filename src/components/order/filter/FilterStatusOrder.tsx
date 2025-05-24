type FilterStatusOrderProps = {
  selectedStatuses: string[];
  onChange: (selected: string[]) => void;
};

export default function FilterStatusOrder({
  selectedStatuses,
  onChange,
}: FilterStatusOrderProps) {
  const handleToggle = (status: string) => {
    if (selectedStatuses.includes(status)) {
      onChange(selectedStatuses.filter((s) => s !== status));
    } else {
      onChange([...selectedStatuses, status]);
    }
  };

  const statusList: string[] = [
    "Semua Order",
    "Belum Bayar",
    "Belum Lunas",
    "Belum Diproses",
    "Belum Ada Resi",
    "Pengiriman Dalam Proses",
    "Pengiriman Berhasil",
    // "d", // Hapus jika bukan status valid
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {statusList.map((statusOrder) => (
        <label
          key={statusOrder}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors duration-200 ${
            selectedStatuses.includes(statusOrder)
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          } cursor-pointer`}>
          <input
            type="checkbox"
            checked={selectedStatuses.includes(statusOrder)}
            onChange={() => handleToggle(statusOrder)}
            className="form-checkbox accent-blue-600"
          />

          <span className="text-sm">{statusOrder}</span>
        </label>
      ))}
    </div>
  );
}
