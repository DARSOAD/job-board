import { render, screen, fireEvent } from "@testing-library/react"; 
import "@testing-library/jest-dom";
import { JobCard } from "../JobCard";
import { Job } from "@/types/job";

const jobMock: Job = {
  id: "1",
  title: "Frontend Developer",
  company: "TechCorp",
  location: "Remote",
  type: "Full-time",
  description: "We build great apps!",
};

describe("JobCard", () => {
  it("renders job title and company", () => {
    render(<JobCard job={jobMock} onClick={() => {}} />);
    
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("TechCorp")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<JobCard job={jobMock} onClick={handleClick} />);

    const jobCardElement = screen.getByText("Frontend Developer");
    fireEvent.click(jobCardElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
