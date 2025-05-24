import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import DatePicker from "../../form/date-picker";

export default function FilterBarCancelOrder() {
  const [status, setStatus] = useState("Cancel");
  const [startDate, setStartDate] = useState("2025-02-22");
  const [endDate, setEndDate] = useState("2025-05-23");

  const statusOptions = ["Cancel", "Rejected", "Expired"];

  const handleSearch = () => {
    console.log("Status:", status);
    console.log("From:", startDate);
    console.log("To:", endDate);
  };

  return (
    <div className="flex justify-between items-center gap-2 p-4">
      {/* Status Buttons */}
      <div className="flex gap-2">
        {statusOptions.map((option) => (
          <button
            key={option}
            className={`flex items-center gap-1 px-4 py-2 rounded-md border ${
              status === option
                ? "text-blue-600 border-blue-600"
                : "text-gray-600 border-gray-300"
            }`}
            onClick={() => setStatus(option)}>
            <span
              className={`w-2 h-2 rounded-full ${
                status === option ? "bg-blue-600" : "bg-gray-400"
              }`}
            />
            {option}
          </button>
        ))}
      </div>

      {/* Date Range */}
      <div className="flex items-center gap-2 ml-4">
        <div>
          <DatePicker
            id="start-date"
            placeholder="Select a date"
            value={new Date(startDate)}
            onChange={(date) => {
              const formatted = date.toString().split("T")[0];
              setStartDate(formatted);
            }}
          />
        </div>
        <div>
          <DatePicker
            id="start-date"
            placeholder="Select a date"
            value={new Date(endDate)}
            onChange={(date) => {
              const formatted = date.toString().split("T")[0];
              setStartDate(formatted);
            }}
          />
        </div>

        <button
          onClick={handleSearch}
          className="ml-2 p-3 border rounded-md hover:bg-gray-100">
          <FiSearch className="text-black w-auto h-5" />
        </button>
      </div>
    </div>
  );
}
