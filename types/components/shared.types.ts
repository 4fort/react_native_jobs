export interface JobType {
  job_id: string;
  employer_logo: string;
  employer_name: string;
  job_title: string;
  job_country: string;
  job_employment_type: string;
}

export interface PopularJobTypes {
  item: JobType;
  selectedJob: string;
  handleCardPress?: (item: PopularJobTypes["item"]) => void;
}
