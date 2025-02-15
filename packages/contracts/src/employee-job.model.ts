import { IEmployee } from './employee.model';

export interface IGetEmployeeJobPostInput {
	page?: number;
	order?: 'ASC' | 'DESC';
	orderBy?: string;
	limit?: number;
	filters: IGetEmployeeJobPostFilters;
}

export interface IApplyJobPostInput {
	applied: boolean;
	employeeId: string;
	providerCode: string;
	providerJobId: string;
	proposal?: string;
	rate?: number;
	details?: string;
	attachments?: string;
}

export interface IVisibilityJobPostInput {
	hide: boolean;
	employeeId?: string | undefined;
	providerCode?: string | undefined;
	providerJobId?: string | undefined;
}

export interface IEmployeeJobsStatistics {
	employeeId: string;
	availableJobs: number;
	appliedJobs: number;
}

export interface IGetEmployeeJobPostFilters {
	title?: string;
	employeeIds?: string[];
	budget?: string[];
	jobStatus?: JobPostStatusEnum[];
	jobSource?: JobPostSourceEnum[];
	jobType?: JobPostTypeEnum[];
	jobDateCreated?: object;
}

export interface IEmployeeJobPost {
	employeeId: string;
	employee: IEmployee;
	jobPostId: string;
	isApplied?: boolean;
	appliedDate?: Date;
	jobPost: IJobPost;

	// we de-normalize this fields for faster processing
	jobDateCreated?: Date;
	jobStatus?: JobPostStatusEnum;
	jobSource?: JobPostSourceEnum;
	providerCode: string; // same as jobSource field, but as a string, e.g. 'upwork'
	// unique ID of job in the source (e.g. in Upwork)
	providerJobId: string;
	jobType?: JobPostTypeEnum;

	createdAt?: Date;
	updatedAt?: Date;
	isActive: boolean;
	isArchived: boolean;
}

export interface IJobPost {
	jobPostId: string;
	id?: string;
	providerCode: string; // same as jobSource field, but as a string, e.g. 'upwork'
	providerJobId: string; // unique ID of job in the source (e.g. in Upwork)
	title: string;
	description: string;
	jobDateCreated?: Date;
	jobStatus?: JobPostStatusEnum;
	jobSource?: JobPostSourceEnum;
	jobType?: JobPostTypeEnum;
	url?: string;
	budget?: string;
	duration?: string;
	workload?: string;
	skills?: string;
	category?: string;
	subcategory?: string;
	country?: string;
	clientFeedback?: string;
	clientReviewsCount?: number;
	clientJobsPosted?: number;
	clientPastHires?: number;
	clientPaymentVerificationStatus?: boolean;

	searchCategory?: string;
	searchCategoryId?: string;
	searchOccupation?: string;
	searchOccupationId?: string;
	searchJobType?: string;
	searchKeyword?: string;

	createdAt?: Date;
	updatedAt?: Date;
	isActive: boolean;
	isArchived: boolean;
}

export enum JobPostSourceEnum {
	UPWORK = 'upwork',
	WEB = 'web'
}

export enum JobPostStatusEnum {
	OPEN = 'open',
	APPLIED = 'applied',
	COMPLETED = 'completed',
	CLOSED = 'closed'
}

export enum JobPostTypeEnum {
	HOURLY = 'hourly',
	FIXED = 'fixed'
}

export enum JobSearchTabsEnum {
	ACTIONS = "ACTIONS",
	SEARCH = "SEARCH"
}

export interface IUpdateEmployeeJobPostAppliedResult {
	isRedirectRequired: boolean;
}
