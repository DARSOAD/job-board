"use client";

import { Job } from "@/types/job";
import { JobCard } from "./JobCard";

interface JobListProps {
  jobs: Job[];
  filterType: string;
  onSelectJob: (job: Job) => void;
}

export function JobList({ jobs, filterType, onSelectJob }: JobListProps) {
  const filteredJobs = filterType === "All"
    ? jobs
    : jobs.filter((job) => job.type === filterType);

  if (filteredJobs.length === 0) {
    return (
      <p className="text-center text-gray-500">
        {filterType === "All" ? "No jobs found." : `No ${filterType} jobs found.`}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" role="list">
      {filteredJobs.map((job) => (
        <div key={job.id} role="listitem">
          <JobCard job={job} onClick={onSelectJob} />
        </div>
      ))}
    </div>
  );
}
