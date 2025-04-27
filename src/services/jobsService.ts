import { Job } from "@/types/job";

export async function fetchJobs(): Promise<Job[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    
    if (!baseUrl) {
      throw new Error("API base URL is not defined. Please check NEXT_PUBLIC_API_URL.");
    }

    const response = await fetch(`${baseUrl}/jobs.json`);

    if (!response.ok) {
      throw new Error(`Failed to fetch jobs: ${response.statusText}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid data format: expected an array of jobs.");
    }

    console.info("Jobs successfully fetched:", data);
    return data as Job[];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}
