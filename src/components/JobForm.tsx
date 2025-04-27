"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Job } from "@/types/job";
import { jobSchema } from "@/utils/validations";

type JobFormData = z.infer<typeof jobSchema>;

interface JobFormProps {
  job: Job | null;
  onSubmit: (job: Job) => void;
  onCancel: () => void;
  jobTypes: string[];
}

export function JobForm({ job, onSubmit, onCancel, jobTypes }: JobFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: job?.title || "",
      company: job?.company || "",
      location: job?.location || "",
      type: job?.type || "",
      description: job?.description || "",
    },
  });

  const submitHandler = (data: JobFormData) => {
    const newJob: Job = {
      id: job?.id || `job-${Date.now()}`,
      ...data,
    };
    onSubmit(newJob);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4 mt-4">

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-white">Title</label>
        <input
          id="title"
          {...register("title")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-white">Company</label>
        <input
          id="company"
          {...register("company")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-white">Location</label>
        <input
          id="location"
          {...register("location")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-white">
          Type
        </label>
        <select
          id="type"
          {...register("type")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">Select type</option>
          {[...new Set(["Full-time", "Contract", ...jobTypes])].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.type && <p className="text-red-500 text-xs">{errors.type.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-white">Description</label>
        <textarea
          id="description"
          {...register("description")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600"
          rows={4}
        />
        {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}
