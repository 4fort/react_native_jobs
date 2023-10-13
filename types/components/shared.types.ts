export interface JobType {
  job_id: string;
  employer_logo: string;
  employer_name: string;
  job_title: string;
  job_country: string;
  job_employment_type: string;
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
    Benefits: string[];
  };
  job_description: string;
  job_google_link: string;
}

export interface PopularJobTypes {
  item: JobType;
  selectedJob: string;
  handleCardPress?: (item: PopularJobTypes["item"]) => void;
}
