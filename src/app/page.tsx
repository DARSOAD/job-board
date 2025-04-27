import { Metadata } from "next"; 
import { ClientHomePage } from "@/app/ClientHomePage"; 

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Job Board",
    description: "Browse and apply to full-time and contract jobs easily.",
    openGraph: {
      title: "Job Board",
      description: "Browse and apply to full-time and contract jobs easily.",
      url: "https://archiebolden.com/job-board",
      siteName: "Job Board",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Job Board",
      description: "Browse and apply to full-time and contract jobs easily.",
    },
    robots: "index, follow", 
  };
};

export default function HomePage() {
  return <ClientHomePage />;
}
