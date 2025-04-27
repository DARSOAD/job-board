"use client";

import { useState } from "react";
import { Job } from "@/types/job";



export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filterType, setFilterType] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const selectJob = (job: Job) => {
    setSelectedJob(job);
    openModal();
  };

  const addJob = (newJob: Job) => {
    setJobs(prevJobs => [...prevJobs, newJob]);
    closeModal();
  };

  const editJob = (updatedJob: Job) => {
    setJobs(prevJobs =>
      prevJobs.map(job => (job.id === updatedJob.id ? updatedJob : job))
    );
    closeModal();
  };

  return {
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
  };
}
