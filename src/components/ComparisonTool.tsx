import React, { useState } from "react";
import { attractions, type AttractionData } from "../data/attractions";

type Mode = "attractions" | "seasons";

const seasonData = [
  { name: "Spring (Mar-May)", temp: "12-24°C", rain: "6-8 days/mo", crowd: 3, note: "Cherry blossoms, mild weather. Best season for outdoor exploration.", color: "bg-pink-400" },
  { name: "Summer (Jun-Aug)", temp: "25-35°C", rain: "10-12 days/mo", crowd: 4, note: "Hot but lively. Night markets thrive. Mount Huashan for escaping heat.", color: "bg-red-400" },
  { name: "Autumn (Sep-Nov)", temp: "10-22°C", rain: "6-8 days/mo", crowd: 3, note: "Golden light, crisp air. Best season overall for all activities.", color: "bg-amber-400" },
  { name: "Winter (Dec-Feb)", temp: "-3 to 7°C", rain: "2-3 days/mo", crowd: 2, note: "Cold but quiet. Half-price tickets, zero queues. Hot springs are magical.", color: "bg-blue-400" },
];

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill={i <= value ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1" className={i <= value ? "text-amber-500" : "text-stone-300"}>
          <path d="M8 1.5l1.8 4.3 4.7.4-3.5 3.1 1 4.7L8 11.8l-4 2.2 1-4.7-3.5-3.1 4.7-.4L8 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function CrowdBars({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`w-2.5 h-2.5 rounded-full ${i <= level ? 'bg-terracotta-500' : 'bg-stone-200'}`} />
      ))}
      <span className="text-xs text-stone-400 ml-1">
        {level === 1 ? "Empty" : level === 2 ? "Quiet" : level === 3 ? "Moderate" : level === 4 ? "Busy" : "Packed"}
      </span>
    </div>
  );
}

function SeasonCard({ season, selected }: { season: typeof seasonData[0]; selected: boolean }) {
  return (
    <div className={`rounded-xl border-2 p-4 ${selected ? 'border-terracotta-300 bg-terracotta-50' : 'border-stone-200 bg-white'} transition-colors`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`w-3 h-3 rounded-full ${season.color}`} />
        <p className="font-semibold text-sm text-stone-800">{season.name}</p>
      </div>
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between"><span className="text-stone-400">Temperature</span><span className="font-medium text-stone-700">{season.temp}</span></div>
        <div className="flex justify-between"><span className="text-stone-400">Rain</span><span className="font-medium text-stone-700">{season.rain}</span></div>
        <div className="flex justify-between items-center">
          <span className="text-stone-400">Crowds</span>
          <CrowdBars level={season.crowd} />
        </div>
      </div>
      <p className="text-xs text-stone-500 mt-3 leading-relaxed">{season.note}</p>
    </div>
  );
}

function AttractionCard({ a, selected }: { a: AttractionData; selected: boolean }) {
  return (
    <div className={`rounded-xl border-2 p-4 md:p-5 ${selected ? 'border-terracotta-300 bg-terracotta-50' : 'border-stone-200 bg-white'} transition-colors`}>
      <p className="font-bold text-lg text-stone-900 mb-3">{a.name}</p>
      <p className="text-sm text-stone-500 leading-relaxed mb-4">{a.description}</p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-stone-400">Ticket</span>
          <span className="font-semibold text-stone-800">{a.price === 0 ? "Free" : "$" + a.price}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-400">Duration</span>
          <span className="font-medium text-stone-700">{a.duration}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-400">Best Time</span>
          <span className="font-medium text-stone-700">{a.bestTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-stone-400">Photo Score</span>
          <StarRating value={a.photoScore} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-stone-400">Crowds</span>
          <CrowdBars level={a.crowdLevel} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-stone-400">Family</span>
          <span className={`text-xs font-medium ${a.familyFriendly ? 'text-emerald-600' : 'text-stone-400'}`}>
            {a.familyFriendly ? "Great for families" : "Not ideal for kids"}
          </span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-stone-100">
        <p className="text-xs font-semibold text-stone-400 uppercase mb-2">Highlights</p>
        <ul className="space-y-1">
          {a.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-xs text-stone-600">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-stone-300"><path d="M6 8l2 2 4-4"/></svg>
              {h}
            </li>
          ))}
        </ul>
      </div>
      <a href={"/attractions/" + a.slug + "/"} className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-terracotta-600 hover:text-terracotta-700 transition-colors">
        Read full guide <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3l5 5-5 5"/></svg>
      </a>
    </div>
  );
}

export default function ComparisonTool() {
  const [mode, setMode] = useState<Mode>("attractions");
  const [leftSlug, setLeftSlug] = useState("terracotta-warriors");
  const [rightSlug, setRightSlug] = useState("city-wall");

  const leftA = attractions.find((a) => a.slug === leftSlug) ?? attractions[0];
  const rightA = attractions.find((a) => a.slug === rightSlug) ?? attractions[1];

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-5 md:p-8">
      {/* Mode toggle */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="inline-flex rounded-xl border border-stone-200 bg-stone-100 p-1">
          <button
            onClick={() => setMode("attractions")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${mode === 'attractions' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
          >
            Compare Attractions
          </button>
          <button
            onClick={() => setMode("seasons")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${mode === 'seasons' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
          >
            Compare Seasons
          </button>
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-stone-900">
          {mode === "attractions" ? "Which should you visit first?" : "When is the best time to visit?"}
        </h3>
        <p className="mt-2 text-sm text-stone-500">
          {mode === "attractions"
            ? "Pick two attractions and compare them side by side."
            : "See how Xi'an changes from season to season."}
        </p>
      </div>

      {mode === "attractions" ? (
        <>
          {/* Selectors */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div>
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">Left</label>
              <select
                value={leftSlug}
                onChange={(e) => setLeftSlug(e.target.value)}
                className="w-full rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 font-medium focus:border-terracotta-300 focus:ring-1 focus:ring-terracotta-300 outline-none transition-colors appearance-none cursor-pointer"
              >
                {attractions.map((a) => (
                  <option key={a.slug} value={a.slug}>
                    {a.name} {a.price === 0 ? "(Free)" : "($" + a.price + ")"}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5 block">Right</label>
              <select
                value={rightSlug}
                onChange={(e) => setRightSlug(e.target.value)}
                className="w-full rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700 font-medium focus:border-terracotta-300 focus:ring-1 focus:ring-terracotta-300 outline-none transition-colors appearance-none cursor-pointer"
              >
                {attractions.map((a) => (
                  <option key={a.slug} value={a.slug}>
                    {a.name} {a.price === 0 ? "(Free)" : "($" + a.price + ")"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AttractionCard a={leftA} selected={true} />
            <AttractionCard a={rightA} selected={true} />
          </div>

          {/* Verdict */}
          <div className="mt-6 p-4 rounded-xl bg-terracotta-50 border border-terracotta-200">
            <p className="text-sm font-semibold text-terracotta-800">Verdict</p>
            <p className="text-sm text-terracotta-700 mt-1">
              <strong>{leftA.name}</strong> is best for {leftA.crowdLevel <= 3 ? "a relaxed visit with " : ""}{leftA.highlights[0].toLowerCase()}. <strong>{rightA.name}</strong> is {rightA.price === 0 ? "free" : "$" + rightA.price} and best for {rightA.highlights[0].toLowerCase()}.{" "}
              {leftA.price > rightA.price
                ? rightA.name + " is cheaper ($" + rightA.price + " vs $" + leftA.price + ")."
                : leftA.name + " is cheaper ($" + leftA.price + " vs $" + rightA.price + ")."}{" "}
              {leftA.crowdLevel < rightA.crowdLevel ? leftA.name + " has smaller crowds." : rightA.crowdLevel < leftA.crowdLevel ? rightA.name + " has smaller crowds." : "Both have similar crowd levels."}
            </p>
          </div>
        </>
      ) : (
        /* Seasons mode */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {seasonData.map((s) => (
            <SeasonCard key={s.name} season={s} selected={true} />
          ))}
        </div>
      )}
    </div>
  );
}
