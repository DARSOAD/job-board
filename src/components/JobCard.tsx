"use client";

import { Job } from "@/types/job";
import { KeyboardEvent } from "react";

interface JobCardProps {
  job: Job;
  onClick: (job: Job) => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  const handleClick = () => onClick(job);

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onClick(job);
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      className="border p-4 rounded-md shadow hover:shadow-lg transition cursor-pointer bg-white dark:bg-gray-800"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${job.title} at ${job.company}`}
    >
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-gray-600 dark:text-white">{job.company}</p>
      <p className="text-sm text-gray-500">
        {job.location} • {job.type}
      </p>
    </div>
  );
}
