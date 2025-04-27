"use client";

import { useMemo } from "react";
import { Job } from "@/types/job";


interface JobFilterProps {
  jobs: Job[];
  filterType: string;
  setFilterType: (type: string) => void;
}

export function JobFilter({ jobs, filterType, setFilterType }: JobFilterProps) {
  
  const jobTypes = useMemo(() => {
    const uniqueTypes = Array.from(new Set(jobs.map((job) => job.type)));
    return [...uniqueTypes];
  }, [jobs]);

  return (
    <div className="flex justify-center mb-6 gap-4 flex-wrap">
      {[...new Set(["All", "Full-time", "Contract", ...jobTypes])].map((type) => (
        <button
          key={type}
          onClick={() => setFilterType(type as string)}
          aria-pressed={filterType === type}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            filterType === type
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
