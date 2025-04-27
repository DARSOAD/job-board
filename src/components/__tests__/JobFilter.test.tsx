import "@testing-library/jest-dom"; 
import { render, screen, fireEvent } from "@testing-library/react"; 
import { JobFilter } from "../JobFilter";
import { Job } from "@/types/job"; 

describe("JobFilter", () => {
  const mockSetFilterType = jest.fn(); 

  const mockJobs: Job[] = [
    { id: "1", title: "Software Engineer", type: "Full-time", company: "Tech Corp", location: "Remote", description: "Develop software solutions." },
    { id: "2", title: "Project Manager", type: "Contract", company: "Business Inc", location: "On-site", description: "Manage projects effectively." },
  ];

  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it("renders all filter buttons", () => {
    render(<JobFilter jobs={mockJobs} filterType="All" setFilterType={mockSetFilterType} />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Full-time")).toBeInTheDocument();
    expect(screen.getByText("Contract")).toBeInTheDocument();
  });

  it("calls setFilterType when a filter button is clicked", () => {
    render(<JobFilter jobs={mockJobs} filterType="All" setFilterType={mockSetFilterType} />);

    fireEvent.click(screen.getByText("Full-time")); 

    expect(mockSetFilterType).toHaveBeenCalledWith("Full-time"); 
    expect(mockSetFilterType).toHaveBeenCalledTimes(1); 
  });
});
