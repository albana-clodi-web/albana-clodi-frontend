import { useState } from "react";
import DatePicker from "../../form/date-picker";
type FilterReportProps = {
  month: string;
  year: string;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
  setMonth: (value: string) => void;
  setYear: (value: string) => void;
};

export default function FilterReport({
  setStartDate,
  setEndDate,
  setMonth,
  setYear,
  month,
  year,
}: FilterReportProps) {
  const [filterType, setFilterType] = useState<string>("By Date");
  return (
    <div className="flex gap-3 mb-4 max-md:flex-col">
      {/* Dropdown Filter Type */}
      <select
        defaultValue={"By Date"}
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="px-3 rounded border border-gray-300 bg-white text-sm max-md:p-2"
      >
        <option value={"By Date"}>By Date</option>
        <option value={"By Month"}>By Month</option>
      </select>

      {/* Show Date Range if By Date */}
      {filterType === "By Date" && (
        <>
          <DatePicker
            id="start-date"
            placeholder="Select a date"
            onChange={(date: Date[]) => {
              const firstDate = date[0];
              const year = firstDate.getFullYear();
              const month = String(firstDate.getMonth() + 1).padStart(2, "0");
              const day = String(firstDate.getDate()).padStart(2, "0");
              const formatted = `${year}-${month}-${day}`;
              setYear("");
              setMonth("");
              setStartDate(formatted);
            }}
          />
          <DatePicker
            id="end-date"
            placeholder="Select a date"
            onChange={(date: Date[]) => {
              const firstDate = date[0];
              const year = firstDate.getFullYear();
              const month = String(firstDate.getMonth() + 1).padStart(2, "0");
              const day = String(firstDate.getDate()).padStart(2, "0");
              const formatted = `${year}-${month}-${day}`;
              setYear("");
              setMonth("");
              setEndDate(formatted);
            }}
          />
        </>
      )}

      {/* Show Month Picker if By Month */}
      {filterType === "By Month" && (
        <div className="flex gap-2">
          <select
            className="px-3 py-2 rounded border border-gray-300 bg-white text-sm"
            defaultValue="January"
            value={month}
            onChange={(e) => {
              setStartDate("");
              setEndDate("");
              setMonth(e.target.value);
            }}
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            className="px-3 py-2 rounded border border-gray-300 bg-white text-sm"
            defaultValue={new Date().getFullYear()}
            value={year}
            onChange={(e) => {
              setStartDate("");
              setEndDate("");
              setYear(e.target.value);
            }}
          >
            {Array.from(
              { length: 10 },
              (_, i) => new Date().getFullYear() - i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
