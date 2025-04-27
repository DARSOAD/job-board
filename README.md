# Job Board - Technical Challenge

Welcome to the Job Board application!  
This project was developed as part of a technical challenge to demonstrate skills in React, Next.js (App Router), TailwindCSS, component architecture, accessibility, SEO, and best coding practices.

---

## Technologies Used

- **Next.js 14 (App Router)** - Modern file-based routing and Server Components.
- **TypeScript** - Strong typing and better developer experience.
- **TailwindCSS** - Utility-first styling for fast and consistent UI development.
- **React Hook Form + Zod** - Form management and validation.
- **SWR** - Optimized data fetching and revalidation.
- **HeadlessUI** - Accessible modals and UI components.
- **Jest + React Testing Library** - Unit testing.

---

## Project Architecture

```
/src/
  /app/
    page.tsx          # Server Component
    ClientHomePage.tsx # Client Component handling UI
  /components/
    JobList.tsx
    JobCard.tsx
    JobFilter.tsx
    JobModal.tsx
    JobForm.tsx
  /hooks/
    useJobs.ts         # Custom Hook for managing job state
  /services/
    jobsService.ts     # Service to fetch job data
  /types/
    job.ts             # TypeScript interface for Jobs
  /utils/
    validations.ts     # Zod schema for form validation
/public/
  jobs.json            # Mock data for jobs
```

- **Clear separation of concerns**: components, logic, services, types, and utilities are modularized.

---

## Core Features Implemented

- **Display a list of jobs** using dynamic fetching from `/jobs.json`.
- **Filter jobs by type** (`Full-time`, `Contract`, etc.) — dynamically generated from data.
- **Click on a job** to open a **modal with full job details**.
- **Add new job entries** via a validated form.
- **Edit existing job entries** from the modal.
- **Form validation** using **React Hook Form** and **Zod** for required fields and input constraints.

---

## Styling, Accessibility, and SEO Highlights

- **TailwindCSS** ensures responsive, consistent styling across devices.
- **HeadlessUI Dialog** ensures full accessibility: keyboard navigation (Tab/Escape), focus trapping, ARIA roles.
- **Semantic HTML structure**: usage of `<main>`, `<header>`, `<section>`.
- **SEO Optimization** via `generateMetadata()` setting dynamic title, description, Open Graph, and Twitter metadata.
- **Dynamic job types**: both in filtering and form select options.

---

## Installation & Running Locally

1. Clone the repository:

```bash
git clone https://github.com/DARSOAD/job-board
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Access the app at `http://localhost:3000`.

---

##  Environment Variables

This project includes a `.env.local` file in the repository because it only contains a non-sensitive URL for simulating an API environment:

---

##  Technical Decisions

- **Next.js 14 App Router** was chosen to leverage Server Components, layouts, and automatic optimizations.
- **SWR** was implemented for client-side fetching to simulate a real-world API scenario, even with static mock data.
- **TailwindCSS** was chosen for rapid, responsive styling without heavy custom CSS.
- **React Hook Form + Zod** ensures lightweight form state management and powerful validation.
- **HeadlessUI** enables full accessibility compliance for modals.

---

## Logging and Error Handling
Basic error handling was implemented using console.error inside the fetchJobs() service to capture and report issues during data fetching.

---

## Unit Testing with Jest and React Testing Library
Core UI components such as JobCard and JobFilter were unit tested to ensure correct rendering using Jest and React Testing Library.
Tests can be extended to cover user interactions and validation flows in the future.

--- 

##  Use of AI Tools (Declaration)

- During development, I utilized **ChatGPT** to assist with **basic code structure brainstorming**, including:
  - Initial templates for React component structures (e.g., modals, forms, lists).
  - Suggested approaches for managing state with custom hooks (`useJobs`).
  - Drafting example validation schemas using Zod.
  - Generating examples of SEO metadata configuration with `generateMetadata()`.
  - Brainstorming basic unit testing setup with Jest and React Testing Library.
- After generating these basic ideas, I **manually reviewed, adapted, and refactored** all the code to meet the challenge requirements and align with best practices.
- No code was used "as is" from AI tools without critical analysis and contextual adaptation.

---

## 📢 Final Considerations

- The project is fully modular and ready for scaling (e.g., API integration, pagination, user authentication).
- Security considerations like server-side sanitization for text inputs should be added in a production environment.
- If needed, the project is easily extendable using SWR mutations for live job creation/editing.

---

Thank you for reviewing the project! 🚀

