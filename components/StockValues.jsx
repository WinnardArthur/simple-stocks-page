import React from "react";

export default function StockValues({ stockValuesData }) {
  return (
    <div className="bg-slate-800 flex justify-between gap-x-4 py-2 px-2 md:px-5 overflow-x-scroll no-scrollbar">
      {stockValuesData?.map((item) => (
        <div key={item.id} className="flex text-white gap-x-6 w-[15rem]">
          <p className="text-[.75rem]">{item.name}</p>
          <h5 className="text-[.75rem]">{item.value}</h5>
          <h6
            className={`text-[.75rem] font-medium`}
            style={{ color: item.color }}
          >
            {item.percentage}
          </h6>
        </div>
      ))}
    </div>
  );
}
