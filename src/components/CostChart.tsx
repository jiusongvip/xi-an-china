import React from "react";

interface MonthData {
  month: string;
  avgCost: number;  // USD per day
  season: "spring" | "summer" | "autumn" | "winter";
}

const monthlyData: MonthData[] = [
  { month: "Jan", avgCost: 52, season: "winter" },
  { month: "Feb", avgCost: 74, season: "winter" },
  { month: "Mar", avgCost: 62, season: "spring" },
  { month: "Apr", avgCost: 67, season: "spring" },
  { month: "May", avgCost: 71, season: "spring" },
  { month: "Jun", avgCost: 77, season: "summer" },
  { month: "Jul", avgCost: 82, season: "summer" },
  { month: "Aug", avgCost: 82, season: "summer" },
  { month: "Sep", avgCost: 71, season: "autumn" },
  { month: "Oct", avgCost: 96, season: "autumn" },
  { month: "Nov", avgCost: 59, season: "autumn" },
  { month: "Dec", avgCost: 52, season: "winter" },
];

const seasonColors = {
  spring: "#f5a623",
  summer: "#e05050",
  autumn: "#d4770a",
  winter: "#5b9bd5",
};

function getColor(cost: number): string {
  if (cost < 60) return "#16a34a";
  if (cost < 75) return "#f5a623";
  return "#dc2626";
}

export default function CostChart() {
  const maxCost = Math.max(...monthlyData.map((d) => d.avgCost));
  const chartHeight = 260;
  const barWidth = 38;
  const gap = 18;
  const totalWidth = monthlyData.length * (barWidth + gap) + 40;
  const startX = 50;

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-5 md:p-8">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-stone-900">What Does Xi'an Cost?</h3>
        <p className="mt-2 text-sm text-stone-500">
          Average daily travel cost per person in US dollars, including attractions, meals, and a mid-range hotel. Prices verified in 2026.
        </p>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4 mb-6 text-xs font-medium">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-green-600" />
          Budget (&lt;$60/day)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-amber-500" />
          Moderate ($60-75/day)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-red-500" />
          Peak (&gt;$75/day)
        </span>
      </div>

      {/* SVG Chart */}
      <div className="flex justify-center overflow-x-auto">
        <svg viewBox={"0 0 " + totalWidth + " " + (chartHeight + 80)} width={totalWidth} height={chartHeight + 80} className="max-w-full">
          {/* Y-axis grid lines */}
          {[0, 25, 50, 75, 100].map((val) => {
            const y = chartHeight - (val / maxCost) * chartHeight + 10;
            return (
              <g key={val}>
                <line x1={startX - 10} y1={y} x2={totalWidth - 20} y2={y} stroke="#e7e5e4" strokeWidth="1" strokeDasharray="4,4" />
                <text x={startX - 15} y={y + 4} textAnchor="end" className="text-[10px]" fill="#a8a29e">
                  ${val}
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {monthlyData.map((d, i) => {
            const barH = (d.avgCost / maxCost) * chartHeight;
            const x = startX + i * (barWidth + gap);
            const y = chartHeight - barH + 10;
            const color = getColor(d.avgCost);

            return (
              <g key={d.month}>
                {/* Golden Week warning */}
                {d.month === "Oct" && (
                  <text x={x + barWidth / 2} y={y - 12} textAnchor="middle" className="text-[10px] font-bold" fill="#dc2626">
                    Golden Week
                  </text>
                )}
                {/* Bar */}
                <rect x={x} y={y} width={barWidth} height={barH} rx="4" fill={color} opacity="0.85">
                  <title>{d.month}: ${d.avgCost}/day</title>
                </rect>
                {/* Bar highlight on top */}
                <rect x={x + 4} y={y + 2} width={barWidth - 8} height="3" rx="1.5" fill="white" opacity="0.25" />
                {/* Price label */}
                <text x={x + barWidth / 2} y={y - 4} textAnchor="middle" className="text-[10px] font-semibold" fill={color}>
                  ${d.avgCost}
                </text>
                {/* Month label */}
                <text x={x + barWidth / 2} y={chartHeight + 35} textAnchor="middle" className="text-[11px] font-medium" fill="#78716c">
                  {d.month}
                </text>
                {/* Season indicator dot */}
                <circle cx={x + barWidth / 2} cy={chartHeight + 52} r="3" fill={seasonColors[d.season] || "#a8a29e"} opacity="0.6" />
              </g>
            );
          })}

          {/* Bottom label */}
          <text x={totalWidth / 2} y={chartHeight + 72} textAnchor="middle" className="text-[10px]" fill="#a8a29e">
            Data based on 2026 verified prices: mid-range hotels, attraction tickets, 3 meals, and local transport
          </text>
        </svg>
      </div>

      {/* Summary */}
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-xl bg-green-50 border border-green-100 p-3">
          <p className="text-xs font-semibold text-green-700 uppercase">Cheapest Month</p>
          <p className="text-lg font-bold text-green-800">January</p>
          <p className="text-xs text-green-600">$52/day</p>
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-100 p-3">
          <p className="text-xs font-semibold text-amber-700 uppercase">Best Value</p>
          <p className="text-lg font-bold text-amber-800">November</p>
          <p className="text-xs text-amber-600">$59/day</p>
        </div>
        <div className="rounded-xl bg-red-50 border border-red-100 p-3">
          <p className="text-xs font-semibold text-red-700 uppercase">Most Expensive</p>
          <p className="text-lg font-bold text-red-800">October</p>
          <p className="text-xs text-red-600">$96/day</p>
        </div>
      </div>

      <p className="text-xs text-stone-400 text-center mt-4">
        Prices assume mid-range accommodation ($22-37/night), attraction tickets, 3 meals/day, and metro/bus transport. Flights not included.
      </p>
    </div>
  );
}