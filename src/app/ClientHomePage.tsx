
"use client";

import useSWR from "swr"; 
import { useJobs } from "@/hooks/useJobs";
import { fetchJobs } from "@/services/jobsService"; 
import { Job } from "@/types/job"; 
import { JobFilter } from "@/components/JobFilter"; 
import { JobList } from "@/components/JobList";
import { JobModal } from "@/components/JobModal";
import { useEffect } from "react";

const fetcher = async (): Promise<Job[]> => {
  const jobs = await fetchJobs();
  return jobs;
};

export function ClientHomePage() {
  const {
    jobs,
    setJobs,
    filterType,
    setFilterType,
    selectedJob,
    selectJob,
    addJob,
    editJob,
    isModalOpen,
    openModal,
    closeModal,
  } = useJobs();

  const { data: jobsData, error, isLoading } = useSWR<Job[]>("/api/jobs", fetcher);

  
  useEffect(() => {
    if (jobs.length === 0 && jobsData) {
      setJobs(jobsData);
    }
  }, [jobs.length, jobsData, setJobs]);

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading jobs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to load jobs.</p>;
  }

  return (
    <main className="container mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Job Board
        </h1>
      </header>

      <div className="flex justify-center mb-6">
        <button
          onClick={openModal}
          aria-label="Add new job" 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          + Add New Job
        </button>
      </div>

      <JobFilter jobs={jobs} filterType={filterType} setFilterType={setFilterType} />

      <JobList jobs={jobs} filterType={filterType} onSelectJob={selectJob} />

      <JobModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={selectedJob ? editJob : addJob}
        jobs={jobs}
      />
    </main>
  );
}
