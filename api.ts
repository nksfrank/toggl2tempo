/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Account {
  /** The category of the `Account` */
  category?: Category;
  /** The contact of the `Account` */
  contact?: UserContact;
  customer?: Customer;
  /**
   * Is the `Account` a global account or not
   * @example false
   */
  global: boolean;
  /**
   * The id of the `Account`
   * @format int32
   * @example 7
   */
  id: number;
  /**
   * The key of the `Account`
   * @example "CLOUDBAY_DEVELOPMENT"
   */
  key: string;
  /** The lead of the `Account` */
  lead: AccountUser;
  links: Self;
  /**
   * The estimated budget for the month
   * @format int32
   * @example 600
   */
  monthlyBudget?: number;
  /**
   * The name of the `Account`
   * @example "Cloudbay: Development"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * The status of the `Account`
   * @example "OPEN"
   */
  status: "CLOSED" | "OPEN" | "ARCHIVED";
}

export interface AccountInput {
  /**
   * A set of characters that uniquely identify a category
   * @example "Jdev1"
   */
  categoryKey?: string;
  /**
   * 'accountId' of the contact, if the contact is a registered Jira user
   * @example "111aaaa2222bbbb3333cccc"
   */
  contactAccountId?: string;
  /**
   * A set of characters that uniquely identify a customer
   * @example "cloudbay1"
   */
  customerKey?: string;
  /**
   * Name of the contact, if the contact is not a registered Jira user
   * @example "John Brown"
   */
  externalContactName?: string;
  /** @example false */
  global?: boolean;
  /**
   * A set of character that uniquely identify the account
   * @pattern ^[A-Za-z0-9_.-]*$
   * @example "CLOUDBAY_DEVELOPMENT"
   */
  key: string;
  /**
   * 'accountId' of the lead on the account
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  leadAccountId: string;
  /**
   * @format int32
   * @min 0
   * @example 600
   */
  monthlyBudget?: number;
  /**
   * Name of the account
   * @example "Cloudbay: Development"
   */
  name: string;
  /**
   * The status of the account
   * @example "OPEN"
   */
  status: "CLOSED" | "OPEN" | "ARCHIVED";
}

export interface AccountLink {
  account: Self;
  /**
   * If the `AccountLink` is the default for the scope
   * @example true
   */
  default: boolean;
  /**
   * The id of the `AccountLink`
   * @format int32
   * @example 1
   */
  id: number;
  /** Link to the scope of the `AccountLink` */
  scope: AccountLinkScope;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface AccountLinkInput {
  /**
   * A set of character that uniquely identify an `Account`
   * @example "CLOUDBAY_DEVELOPMENT"
   */
  accountKey: string;
  /**
   * An optional boolean to indicate if the account link is the default for the project
   * @example true
   */
  default?: boolean;
  /**
   * The id of the scope
   * @format int32
   * @min 1
   * @example 100100
   */
  scopeId: number;
  /**
   * The type of scope the `Account` is linked to
   * @example "PROJECT"
   */
  scopeType: "PROJECT";
}

export interface AccountLinkResults {
  metadata: ResultsMetadata;
  results: AccountLink[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** Link to the scope of the `AccountLink` */
export interface AccountLinkScope {
  /**
   * The id of the `AccountLinkScope`
   * @format int64
   * @example 10012
   */
  id: number;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * The type of the `AccountLinkScope`
   * @example "PROJECT"
   */
  type: "PROJECT";
}

export interface AccountSearchInput {
  /**
   * An optional boolean to indicate if the account should be global or not
   * @example true
   */
  global?: boolean;
  /**
   * A list of `Account` ids
   * @example [1,2]
   */
  ids?: number[];
  /**
   * A list of `Account` keys
   * @example ["CLOUDBAY_DEVELOPMENT"]
   */
  keys?: string[];
  /**
   * A list of `Account` statuses
   * @example ["OPEN","ARCHIVED"]
   */
  statuses?: "OPEN" | "CLOSED" | "ARCHIVED";
}

/**
 * The lead of the `Account`
 * @example "The lead of the `Account`"
 */
export interface AccountUser {
  /**
   * A unique identifier of the user in Jira
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  accountId: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self?: string;
}

/** The category of the `Account` */
export interface Category {
  /**
   * The id of the `Category`
   * @format int32
   * @example 14
   */
  id: number;
  /**
   * The key of the `Category`
   * @example "300"
   */
  key: string;
  /**
   * The name of the `Category`
   * @example "Development"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /** The type of the `Category` */
  type?: CategoryType;
}

export interface CategoryInput {
  /**
   * A set of characters that uniquely identify the category
   * @example "CLOUDBAY_DEVELOPMENT"
   */
  key: string;
  /**
   * The name of the category
   * @example "Cloudbay: Development"
   */
  name: string;
  /**
   * The type of the category
   * @example "BILLABLE"
   */
  typeName?: "BILLABLE" | "CAPITALIZED" | "INTERNAL" | "OPERATIONAL";
}

export interface CategoryResults {
  metadata: ResultsMetadata;
  results: Category[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** The type of the `Category` */
export interface CategoryType {
  /**
   * The name of the `CategoryType`
   * @example "BILLABLE"
   */
  name: string;
}

export interface CategoryTypeResults {
  metadata: ResultsMetadata;
  results: CategoryType[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface CreateWorkAttributeInput {
  /**
   * The key of the `WorkAttribute`
   * @example "_Attr_1_"
   */
  key: string;
  /**
   * The name of the `WorkAttribute`
   * @example "Attr 1"
   */
  name: string;
  /**
   * Whether this `WorkAttribute` is required. If not provided, the default value is `false`
   * @example false
   */
  required?: boolean;
  /**
   * The type of the `WorkAttribute`
   * @example "STATIC_LIST"
   */
  type: "ACCOUNT" | "CHECKBOX" | "INPUT_FIELD" | "INPUT_NUMERIC" | "STATIC_LIST";
  /**
   * Only relevant when type is `STATIC_LIST`. These values are immutable. Their UI representation can be looked up in the `names` object below
   * @example ["Some Value"]
   */
  values?: string[];
}

export interface Customer {
  /**
   * The id of the `Customer`
   * @format int32
   * @example 234
   */
  id: number;
  /**
   * The key of the `Customer`
   * @example "CLOUDBAY_DEVELOPMENT"
   */
  key: string;
  /**
   * The name of the `Customer`
   * @example "Cloudbay: Development"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface CustomerInput {
  /**
   * The key of the `Customer`
   * @example "CLOUDBAY_DEVELOPMENT"
   */
  key: string;
  /**
   * The name of the `Customer`
   * @example "Cloudbay: Development"
   */
  name: string;
}

export interface DaySchedule {
  /**
   * The date of the schedule
   * @format date
   */
  date: string;
  /** The holiday linked to this schedule */
  holiday?: Holiday;
  /**
   * The amount of seconds required in this schedule
   * @format int64
   * @example 0
   */
  requiredSeconds: number;
  /** The type of schedule. */
  type: "WORKING_DAY" | "NON_WORKING_DAY" | "HOLIDAY" | "HOLIDAY_AND_NON_WORKING_DAY";
}

export interface DayScheduleResults {
  metadata: ResultsMetadata;
  results: DaySchedule[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** List of permission role access entity */
export interface Entity {
  /** @format int32 */
  id: number;
  self: string;
}

export interface GenericResource {
  /**
   * Timestamp (in UTC) of when this `Generic Resource` was created
   * @example "2022-02-22T15:09:00.000Z"
   */
  createdAt: string;
  /** The creator of the `Generic Resource` */
  createdBy: UserRefBean;
  /**
   * The id of the `Generic Resource`
   * @format int32
   * @example 7
   */
  id: number;
  /**
   * The name of the `Generic Resource`
   * @example "Backend Developer"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * Timestamp (in UTC) of when this `Generic Resource` was last updated
   * @example "2022-02-25T12:13:00.000Z"
   */
  updatedAt: string;
  /** The creator of the `Generic Resource` */
  updatedBy: UserRefBean;
}

export interface GenericResourceInput {
  /**
   * The name of the `Generic Resource`
   * @example "Backend Developer"
   */
  name: string;
}

/** A list of references to the the `Generic Resources` that are members of this team */
export interface GenericResourceReference {
  /**
   * The id of the `Generic Resource`
   * @format int32
   * @example 7
   */
  id: number;
  /**
   * The name of the `Generic Resource`
   * @example "Backend Developer"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface GenericResourceSearchInput {
  /**
   * A list of `Generic Resource` ids
   * @example [1,2]
   */
  ids?: number[];
  /**
   * Maximum number of results on each page
   * @format int32
   * @example 50
   */
  limit?: number;
  /**
   * Number of skipped results
   * @format int32
   * @example 0
   */
  offset?: number;
  /**
   * A query to be used for string matching against name of `Generic Resources`
   * @example "java"
   */
  query?: string;
}

export interface GenericResourceTeamMember {
  /**
   * Timestamp (in UTC) of when this `Generic Resource` was added to this team
   * @example "2022-02-22T15:09:00.000Z"
   */
  assignedToTeamAt: string;
  /** The creator of the `Generic Resource` */
  assignedToTeamBy: UserRefBean;
  /** A list of references to the the `Generic Resources` that are members of this team */
  member: GenericResourceReference;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /** A reference to the team this `Generic Resource Team Member` belongs to */
  team: TeamReference;
}

export interface GenericResourceTeamMemberInput {
  /**
   * The id of the `Generic Resource` itself
   * @format int32
   * @example 7
   */
  genericResourceId: number;
}

export interface GenericResourceTeamMembers {
  /**
   * Count of `Generic Resource Team Members` in this team
   * @format int32
   * @example 3
   */
  count: number;
  /** A list of references to the the `Generic Resources` that are members of this team */
  members: GenericResourceReference[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /** A reference to the team this `Generic Resource Team Member` belongs to */
  team: TeamReference;
}

export interface GlobalConfiguration {
  /**
   * Boolean to inform if it is possible to login on closed account
   * @example true
   */
  allowLoggingOnClosedAccount: boolean;
  /**
   * Shows if Timesheet approval periods are weekly or monthly.
   * @example "WEEK"
   */
  approvalPeriod: "WEEK" | "MONTH";
  /**
   * Shows the start day. 1 is monday, 7 is sunday.
   * @format int32
   * @example 1
   */
  approvalWeekStart: number;
  /**
   * The max hours a user can work
   * @format int32
   * @example 8
   */
  maxHoursPerDayPerUser?: number;
  /**
   * Shows how many days you can track time into the future.
   * @format int32
   * @example 90
   */
  numberOfDaysAllowedIntoFuture: number;
  /**
   * Boolean to inform if planning approval is enabled
   * @example true
   */
  planApprovalEnabled: boolean;
  /**
   * Shows if remaining estimate is required when tracking time.
   * @example true
   */
  remainingEstimateOptional: boolean;
  /**
   * Boolean to inform if start and end times should be used for logging time
   * @example false
   */
  startAndEndTimesEnabled: boolean;
  /**
   * Boolean to inform if start and end times should be used for planning time
   * @example true
   */
  startAndEndTimesForPlanningEnabled: boolean;
  /**
   * 1 is monday, 7 is sunday
   * @format int32
   * @example 1
   */
  weekStart: number;
  /**
   * Shows if description is required when tracking time.
   * @example true
   */
  worklogDescriptionOptional: boolean;
}

/** The holiday linked to this schedule */
export interface Holiday {
  /**
   * The date of the `Holiday`
   * @format date
   */
  date: string;
  /**
   * The description of the `Holiday`
   * @example "Holiday to celebrate all good things"
   */
  description?: string;
  /**
   * The duration in seconds of the `Holiday`
   * @format int64
   * @example 18000
   */
  durationSeconds: number;
  /**
   * The id of the `Holiday`
   * @format int32
   * @example 1
   */
  id: number;
  /**
   * The name of the `Holiday`
   * @example "National Holiday"
   */
  name: string;
  /**
   * The id of the `Holiday Scheme`
   * @format int32
   * @example 2
   */
  schemeId: number;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * The type of the `Holiday`
   * @example "FIXED"
   */
  type: "FIXED" | "FLOATING";
}

export interface HolidayInput {
  /**
   * The date of the `Holiday`
   * @format date
   */
  date: string;
  /**
   * The description of the `Holiday`
   * @example "Holiday to celebrate all good things"
   */
  description?: string;
  /**
   * The duration in seconds of the `Holiday`
   * @format int64
   * @min 1
   * @example 18000
   */
  durationSeconds: number;
  /**
   * The name of the `Holiday`
   * @example "National Holiday"
   */
  name: string;
  /**
   * The type of the `Holiday`
   * @example "FIXED"
   */
  type: "FIXED" | "FLOATING";
}

export interface HolidayResults {
  metadata: ResultsMetadata;
  results: Holiday[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface HolidayScheme {
  /**
   * Boolean to define if this is the default scheme
   * @example true
   */
  defaultScheme: boolean;
  /**
   * The description of the `Holiday Scheme`
   * @example "Default holiday scheme for all employees"
   */
  description?: string;
  /**
   * The id of the `Holiday Scheme`
   * @format int32
   * @example 1
   */
  id: number;
  /**
   * The amount of people working under this `Holiday Scheme`
   * @format int32
   * @example 67
   */
  memberCount: number;
  /**
   * The name of the `Holiday Scheme`
   * @example "Default Holiday Scheme"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface HolidaySchemeInputBean {
  /**
   * The description of the `Holiday Scheme`
   * @example "Default holiday scheme for all employees"
   */
  description?: string;
  /**
   * The name of the `Holiday Scheme`
   * @example "Default Holiday Scheme"
   */
  name: string;
}

export interface HolidaySchemeMembersInput {
  /**
   * A list of account ids
   * @maxItems 2147483647
   * @minItems 1
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  accountIds?: string[];
}

export interface HolidaySchemeResults {
  metadata: ResultsMetadata;
  results: HolidayScheme[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** The Issue associated to this worklog */
export interface Issue {
  /**
   * The id of the issue
   * @format int64
   * @example 124
   */
  id?: number;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface MembershipInput {
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  commitmentPercent?: number;
  /**
   * The start date of the `Membership`
   * @format date
   */
  from?: string;
  /**
   * The Role Id of the `Membership`
   * @format int32
   * @example 2
   */
  roleId?: number;
  /**
   * The end date of the `Membership`
   * @format date
   */
  to?: string;
}

export interface Pageable {
  metadata: PageableMetadata;
  results: Worklog[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableAccount {
  metadata: PageableMetadata;
  results: Account[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableAccountLink {
  metadata: PageableMetadata;
  results: AccountLink[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableBeanWithoutLinks {
  metadata?: PageableMetadataBeanWithoutLinks;
  results?: Plan[];
}

export interface PageableCustomer {
  metadata: PageableMetadata;
  results: Customer[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableGenericResourceWithoutSelfLink {
  metadata?: PageableMetadata;
  results?: GenericResource[];
}

export interface PageableMetadata {
  /**
   * The number of results returned on this page
   * @format int32
   * @example 1
   */
  count: number;
  /**
   * Maximum number of results on each page
   * @format int32
   * @example 50
   */
  limit: number;
  /**
   * A link to the next page of results, if applicable
   * @example "https://api.tempo.io/[...]"
   */
  next?: string;
  /**
   * Number of skipped results
   * @format int32
   */
  offset: number;
  /**
   * A link to the previous page of results, if applicable
   * @example "https://api.tempo.io/[...]"
   */
  previous?: string;
}

export interface PageableMetadataBeanWithoutLinks {
  /**
   * The number of results returned on this page
   * @format int32
   * @example 1
   */
  count: number;
  /**
   * Maximum number of results on each page
   * @format int32
   * @example 50
   */
  limit: number;
  /**
   * Number of skipped results
   * @format int32
   */
  offset: number;
}

export interface PageablePermissionRole {
  metadata: PageableMetadata;
  results: PermissionRole[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageablePlan {
  metadata: PageableMetadata;
  results: Plan[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageablePlanBeanWithoutLinks {
  metadata?: PageableMetadataBeanWithoutLinks;
  results?: Plan[];
}

export interface PageableSkill {
  metadata: PageableMetadata;
  results: Skill[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableTeam {
  metadata: PageableMetadata;
  results: Team[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableTeamLink {
  metadata: PageableMetadata;
  results: TeamLink[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableTempoToJiraWorklogId {
  metadata: PageableMetadata;
  results: TempoToJiraWorklogId[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableUser {
  metadata: PageableMetadata;
  results: User[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableWithoutSelfLink {
  metadata?: PageableMetadata;
  results?: GenericResource[];
}

export interface PageableWorkAttribute {
  metadata: PageableMetadata;
  results: WorkAttribute[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableWorkloadScheme {
  metadata: PageableMetadata;
  results: WorkloadScheme[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PageableWorklog {
  metadata: PageableMetadata;
  results: Worklog[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** List of the roles permissions */
export interface Permission {
  /**
   * The key of the `Permission`
   * @example "permissions.worklog.view"
   */
  key: string;
}

export interface PermissionRole {
  /** List of permission role access entity */
  accessEntities: Entity[];
  /**
   * The type of the permission role which can be `TEAM` or `Global`. `GLOBAL` permission roles don't have entities.
   * @example "TEAM"
   */
  accessType: "TEAM" | "GLOBAL";
  /**
   * Editable roles are manually created with updatable members.
   * @example false
   */
  editable: boolean;
  /**
   * The id of the permission role
   * @format int32
   * @example 6
   */
  id: number;
  /**
   * The name of the permission role
   * @example "The Role"
   */
  name: string;
  /** List of the roles permissions */
  permissions: Permission[];
  /** List of users */
  permittedUsers: User[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PermissionRoleInput {
  /**
   * A list of access entity ids
   * @example [1]
   */
  accessEntityIds?: number[];
  /**
   * The type of the `PermissionRole` which can be `TEAM` or `GLOBAL`. `GLOBAL` permission roles don't have entities.
   * @example "TEAM"
   */
  accessType: "TEAM" | "GLOBAL";
  /**
   * Name of the permission role
   * @example "The Role"
   */
  name: string;
  /**
   * A list of permission keys
   * @example ["permissions.worklog.view"]
   */
  permissionKeys?: string[];
  /**
   * A list of permitted account ids
   * @example "jira-account-id"
   */
  permittedAccountIds?: string[];
}

export interface Plan {
  /** Reference to Assignee of the `Plan`. */
  assignee?: PlanAssignee;
  /**
   * A description containing details of the `Plan`.
   * @example "I will do some tests on this task tomorrow"
   */
  description?: string;
  /**
   * The ending date of the `Plan`.
   * @example "2022-05-17T00:00:00.000Z"
   */
  endDate?: string;
  /**
   * The id of the `Plan`.
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Boolean value that informs whether non-working days are included in the `Plan`.
   * @example true
   */
  includeNonWorkingDays?: boolean;
  /** Reference to an approval linked to the `Plan`. */
  planApproval?: PlanApproval;
  /** Reference to `Plan Item` of the `Plan`. */
  planItem?: PlanItem;
  /**
   * The amount of seconds that will be invested daily in the `Plan`.
   * @format int64
   * @example 28800
   */
  plannedSecondsPerDay?: number;
  /** Includes the total planned time in scope and how it is broken down by days (and by periods if the `Plan` is a recurring plan).The daily and period breakdown of the plan is omitted by default when fetching multiple plans but can be included by specifying what breakdowns are desired. */
  plannedTime?: PlannedTime;
  /**
   * End date for recurrence of the `Plan`.
   * @example "2020-05-17T00:00:00.000Z"
   */
  recurrenceEndDate?: string;
  /**
   * Recurrence rule of the `Plan`.
   * @example "WEEKLY"
   */
  rule?: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * The starting date of the `Plan`.
   * @example "2022-05-17T00:00:00.000Z"
   */
  startDate?: string;
  /**
   * The start time of the `Plan`
   * @example "08:15"
   */
  startTime?: string;
  /**
   * The amount of seconds planned for on the entire `Plan` within the scope of the supplied `from` and `to` dates.
   * @format int64
   * @example 28800
   */
  totalPlannedSecondsInScope?: number;
}

/** Reference to an approval linked to the `Plan`. */
export interface PlanApproval {
  /** The author of this `worklog` */
  reviewer?: User;
  /**
   * The status of the `PlanApproval`.
   * @example "APPROVED"
   */
  status?: "APPROVED" | "REJECTED" | "REQUESTED";
}

/** Reference to an approval linked to the `Plan`. */
export interface PlanApprovalInput {
  /**
   * A unique identifier of the user in Jira who will review this `PlanApproval`.
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  reviewerId?: string;
  /**
   * The status of the `PlanApproval`.
   * @example "APPROVED"
   */
  status?: "APPROVED" | "REJECTED" | "REQUESTED";
}

/** Reference to Assignee of the `Plan`. */
export interface PlanAssignee {
  /**
   * The id of the `Assignee`.
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  id?: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * The type of the `Assignee`.
   * @example "USER"
   */
  type?: string;
}

/** List of days/periods that are included in this plan within the scope of the given date range. */
export interface PlanDay {
  /**
   * A date to represent a planned day for the `Plan`.
   * @example "2022-05-17T00:00:00.000Z"
   */
  date: string;
  /**
   * The amount of seconds that will be invested in the `Plan` for the planned date.
   * @format int64
   * @example 28800
   */
  plannedSeconds: number;
}

export interface PlanInput {
  /**
   * The id of the `Assignee` for the `Plan`.
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  assigneeId: string;
  /**
   * The type of the `Assignee` for the `Plan`.
   * @example "USER"
   */
  assigneeType: "USER" | "GENERIC";
  /**
   * A description containing details of the `Plan`.
   * @example "I will do some tests on this task tomorrow"
   */
  description?: string;
  /**
   * The ending date of the `Plan`.
   * @example "2022-05-17T00:00:00.000Z"
   */
  endDate: string;
  /**
   * Boolean value that informs whether non-working days are included in the `Plan`.
   * @example true
   */
  includeNonWorkingDays?: boolean;
  /** Reference to an approval linked to the `Plan`. */
  planApproval?: PlanApprovalInput;
  /**
   * The id of the `Plan Item` for the `Plan`.
   * @example "598"
   */
  planItemId: string;
  /**
   * The type of the `Plan Item` for the `Plan`.
   * @example "ISSUE"
   */
  planItemType: "ISSUE" | "PROJECT";
  /**
   * The amount of seconds that will be invested daily on the `Plan`.
   * @format int64
   * @min 1
   * @example 28800
   */
  plannedSecondsPerDay: number;
  /**
   * End date for the recurrence of the `Plan`.
   * @example "2020-05-17T00:00:00.000Z"
   */
  recurrenceEndDate?: string;
  /**
   * Recurrence rule of the `Plan`.
   * @example "WEEKLY"
   */
  rule?: "NEVER" | "WEEKLY" | "BI_WEEKLY" | "MONTHLY";
  /**
   * The starting date of the `Plan`.
   * @example "2022-05-17T00:00:00.000Z"
   */
  startDate: string;
  /**
   * The start time of the `Plan`.
   * @pattern ^([0-1]?[0-9]|2[0-3])(:[0-5][0-9])$
   * @example "08:15"
   */
  startTime?: string;
}

/** Reference to `Plan Item` of the `Plan`. */
export interface PlanItem {
  /**
   * The id of the Item
   * @example "598"
   */
  id: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * The type of the `Plan Item` for the `Plan`.
   * @example "ISSUE"
   */
  type: string;
}

/** A reference to the metadata of this object. */
export interface PlanMetadata {
  /**
   * A link to get this plan with all the days of the plan included.
   * @example "https://api.tempo.io/[...]"
   */
  all?: string;
}

/** List of days/periods that are included in this plan within the scope of the given date range. */
export interface PlanPeriod {
  /**
   * The starting date of the `Period`.
   * @example "2022-05-17T00:00:00.000Z"
   */
  from?: string;
  /**
   * Total planned seconds for the `Period`.
   * @format int64
   * @example 28800
   */
  plannedSeconds?: number;
  /**
   * The ending date of the `Period`.
   * @example "2022-05-17T00:00:00.000Z"
   */
  to?: string;
}

export interface PlanResults {
  metadata: ResultsMetadata;
  results: Plan[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface PlanSearchInput {
  /**
   * Ids of the user assignees you want to search plans for.
   * @example ["123456:01234567-89ab-cdef-0123-456789abcdef","123456:01234567-89ab-cdef-0123-456789abcdef"]
   */
  accountIds?: string[];
  /**
   * Types of the assignees you want to search plans for.
   * @example ["USER","GENERIC"]
   */
  assigneeTypes?: "USER" | "GENERIC";
  /**
   * Retrieve plans starting with this date.
   * @example "2022-05-17T00:00:00.000Z"
   */
  from: string;
  /**
   * Ids of the generic resources you want to search plans for.
   * @example ["1","2"]
   */
  genericResourceIds?: number[];
  /**
   * Maximum number of results on each page.
   * @format int32
   * @max 5000
   * @example 50
   */
  limit?: number;
  /**
   * Number of skipped results.
   * @format int32
   * @example 0
   */
  offset?: number;
  /**
   * Ids of the plans you want to search for.
   * @example ["1","2"]
   */
  planIds?: number[];
  /**
   * Ids of the items you want to search plans for.
   * @example ["10000","10001"]
   */
  planItemIds?: number[];
  /**
   * Types of the items you want to search plans for.
   * @example ["ISSUE","PROJECT"]
   */
  planItemTypes?: "ISSUE" | "PROJECT";
  /**
   * Defines how detailed you would like to see the breakdown of the planned time for each `Plan`.
   * @example ["DAILY","PERIOD"]
   */
  plannedTimeBreakdown?: "DAILY" | "PERIOD";
  /**
   * Retrieve plans that ends up to and including this date.
   * @example "2022-05-17T00:00:00.000Z"
   */
  to: string;
  /**
   * Retrieve plans that have been updated from this date.
   * @example "2022-05-17T00:00:00.000Z"
   */
  updatedFrom?: string;
}

/** Includes the total planned time in scope and how it is broken down by days (and by periods if the `Plan` is a recurring plan).The daily and period breakdown of the plan is omitted by default when fetching multiple plans but can be included by specifying what breakdowns are desired. */
export interface PlannedTime {
  /** Planned time of the `Plan` broken down by days. */
  days?: PlannedTimeValuesPlanDay;
  /** A reference to the metadata of this object. */
  metadata?: PlanMetadata;
  /** Planned time of the `Plan` broken down by periods. */
  periods?: PlannedTimeValuesPlanPeriod;
}

/** Planned time of the `Plan` broken down by days. */
export interface PlannedTimeValuesPlanDay {
  /**
   * The number of results returned.
   * @format int32
   * @example 1
   */
  count?: number;
  /** List of days/periods that are included in this plan within the scope of the given date range. */
  values?: PlanDay[];
}

/** Planned time of the `Plan` broken down by periods. */
export interface PlannedTimeValuesPlanPeriod {
  /**
   * The number of results returned.
   * @format int32
   * @example 1
   */
  count?: number;
  /** List of days/periods that are included in this plan within the scope of the given date range. */
  values?: PlanPeriod[];
}

export interface Program {
  /**
   * The id of the `Program`
   * @format int32
   * @example 100201
   */
  id: number;
  /** The author of this `worklog` */
  manager?: User;
  /**
   * The name of the `Program`
   * @example "Program: new Season"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /** A link to another Program */
  teams: SelfListTeamRef;
}

export interface ProgramInput {
  /**
   * The key of the Manager Account
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  managerAccountId?: string;
  /**
   * Name of the Program
   * @example "Program: new Season"
   */
  name: string;
  /**
   * The list of keys of Teams associated to the `Program`
   * @example [1,4,6,8]
   */
  teamIds?: number[];
}

/** Link to the program of this Team */
export interface ProgramReference {
  /**
   * The id of the `Program`
   * @format int32
   * @example 100201
   */
  id: number;
  /**
   * The name of the `Program`
   * @example "Program new Customer"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface ProgramResults {
  metadata: ResultsMetadata;
  results: Program[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface ResultsMetadata {
  /**
   * The number of results returned
   * @format int32
   * @example 1
   */
  count: number;
}

export interface Role {
  /**
   * Boolean value that informs if this is a default `Role`
   * @example true
   */
  default: boolean;
  /**
   * The id of the `Role`
   * @format int32
   * @example 126
   */
  id: number;
  /**
   * The name of the `Role`
   * @example "Developer"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface RoleInput {
  /**
   * The name of the `Role`
   * @example "Developer"
   */
  name: string;
}

/** The Role of the `Membership` */
export interface RoleReference {
  /**
   * The id of the `Role`
   * @format int32
   * @example 2
   */
  id: number;
  /**
   * The name of the `Role`
   * @example "Developer"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface RoleResults {
  metadata: ResultsMetadata;
  results: Role[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface Self {
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** A permanent link to this resource */
export interface SelfApiBean {
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** The collection of links pointing to this Team */
export interface SelfLink {
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** A link to another Program */
export interface SelfListTeamRef {
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /** A group of links referencing this resource */
  values?: TeamRef[];
}

/** The list of work attribute of this `Worklog` */
export interface SelfListWorkAttributeValue {
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /** A group of links referencing this resource */
  values?: WorkAttributeValue[];
}

/** The collection of members pointing to this Team */
export interface SelfMember {
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface Skill {
  /**
   * The id of the `Skill`
   * @format int32
   * @example 9
   */
  id: number;
  /**
   * The name of the `Skill`
   * @example "Java"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface SkillInput {
  /**
   * Name of the `Skill`
   * @example "Java"
   */
  name: string;
}

export interface SkillsAssignmentInput {
  /**
   * A set of characters that uniquely identify a resource
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef | 5"
   */
  assigneeId: string;
  /**
   * A string that identify the resource type
   * @example "USER"
   */
  assigneeType: "USER" | "GENERIC";
  /**
   * A list of `Skill` ids
   * @example [1,2,3,4,5]
   */
  skillIds?: number[];
}

export interface Team {
  /**
   * The id of the `Team`
   * @format int32
   * @example 123
   */
  id: number;
  /** Reference to the Leader of the `Team` */
  lead?: TeamLead;
  /** The collection of links pointing to this Team */
  links: SelfLink;
  /** The collection of members pointing to this Team */
  members: SelfMember;
  /**
   * The Team's name
   * @example "Team Alpha"
   */
  name: string;
  permissions: Self;
  /** Link to the program of this Team */
  program?: ProgramReference;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * Brief description of the `Team`
   * @example "Team created to solve the challenges in the company"
   */
  summary?: string;
}

export interface TeamInput {
  /**
   * The id of Lead Account related to the `Team`
   * @pattern ^[a-zA-Z0-9-:_.]*$
   */
  leadAccountId?: string;
  /** The `Team` name */
  name: string;
  /**
   * The id of program related to the `Team`
   * @format int32
   * @min 1
   * @example 132
   */
  programId?: number;
  /**
   * Determine if this entity could be public
   * @default true
   */
  public?: boolean;
  /**
   * The summary of the `Team`
   * @example "This team was created to help different areas of the company"
   */
  summary?: string;
}

/** Reference to the Leader of the `Team` */
export interface TeamLead {
  /**
   * A unique identifier of the user in Jira
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  accountId: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self?: string;
}

export interface TeamLink {
  /**
   * The id of the `Team Link`
   * @format int32
   * @example 100201
   */
  id: number;
  /** The team scope */
  scope: TeamLinkScope;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  team: Team;
}

export interface TeamLinkInput {
  /**
   * The id of the scope
   * @format int32
   * @min 1
   */
  scopeId: number;
  /** The type of scope of the `Team Link` */
  scopeType: "PROJECT";
  /**
   * The id of the `Team Link`
   * @format int32
   * @min 1
   */
  teamId: number;
}

export interface TeamLinkResults {
  metadata: ResultsMetadata;
  results: TeamLink[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** The team scope */
export interface TeamLinkScope {
  /**
   * The id of the `Team Link Scope`
   * @format int64
   * @example 100201
   */
  id: number;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /** The Team Link Type */
  type: "BOARD" | "PROJECT";
}

/** The user member of the `Membership` */
export interface TeamMember {
  /**
   * A unique identifier of the user in Jira
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  accountId: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self?: string;
}

export interface TeamMembership {
  /**
   * The commitment of the `Membership`
   * @format int32
   * @example 50
   */
  commitmentPercent?: number;
  /**
   * The start date of the `Membership`
   * @format date
   */
  from?: string;
  /**
   * The id of the `Membership`
   * @format int32
   * @example 2
   */
  id?: number;
  /** The user member of the `Membership` */
  member?: TeamMember;
  /** The Role of the `Membership` */
  role?: RoleReference;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /** The Team of the `Membership` */
  team?: TeamRef;
  /**
   * The end date of the `Membership`
   * @format date
   */
  to?: string;
}

export interface TeamMembershipInput {
  /**
   * The account id of the `Member`
   * @example "1111aaaa2222bbbb3333cccc"
   */
  accountId: string;
  /**
   * The percentage of the `Commitment`
   * @format int32
   * @min 0
   * @max 100
   * @example 50
   */
  commitmentPercent?: number;
  /**
   * The start date of the `Membership`
   * @format date
   */
  from?: string;
  /**
   * The role id of the `Member`
   * @format int32
   * @example 2
   */
  roleId?: number;
  /**
   * The id of the `Team`
   * @format int32
   * @example 1
   */
  teamId: number;
  /**
   * The end date of the `Membership`
   * @format date
   */
  to?: string;
}

export interface TeamMembershipResults {
  metadata: ResultsMetadata;
  results: TeamMembership[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** The Team of the `Membership` */
export interface TeamRef {
  /**
   * Id of the Team
   * @format int32
   * @example 12345
   */
  id: number;
  /**
   * Name of the Team
   * @example "Team new adventure"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface TeamRefResults {
  metadata: ResultsMetadata;
  results: TeamRef[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** A reference to the team this `Generic Resource Team Member` belongs to */
export interface TeamReference {
  /**
   * Id of the Team
   * @format int32
   * @example 12345
   */
  id: number;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface TempoToJiraWorklogId {
  /**
   * A unique identifier of the Worklog in Jira
   * @format int64
   * @example 12345
   */
  jiraWorklogId: number;
  /**
   * A unique identifier of the Worklog in Tempo
   * @format int64
   * @example 12345
   */
  tempoWorklogId: number;
}

export interface TempoWorklogIdList {
  /**
   * A list of Tempo Worklog ids you want to retrieve the respective Jira Worklog ids
   * @maxItems 2147483647
   * @minItems 1
   * @example [1,2,3,4,5]
   */
  tempoWorklogIds: number[];
}

export interface TimesheetApproval {
  /** The Available actions to apply on this timesheet */
  actions: TimesheetApprovalAvailableActions;
  period: TimesheetApprovalPeriod;
  /**
   * The mandatory seconds spent on this timesheet
   * @format int64
   * @example 633600
   */
  requiredSeconds: number;
  /** The reviewer of this timesheet */
  reviewer?: TimesheetApprovalReviewer;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /** The current status of this timesheet */
  status?: TimesheetApprovalStatus;
  /**
   * The total seconds spent on this timesheet
   * @format int64
   * @example 633600
   */
  timeSpentSeconds: number;
  /** The user owner of this timesheet */
  user: TimesheetApprovalUser;
  /** A permanent link to this resource */
  worklogs: SelfApiBean;
}

/** The person who is responsible for the current timesheet approval status */
export interface TimesheetApprovalActor {
  /**
   * A unique identifier of the user in Jira
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  accountId: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self?: string;
}

/** The Available actions to apply on this timesheet */
export interface TimesheetApprovalAvailableActions {
  /** A permanent link to this resource */
  approve?: SelfApiBean;
  /** A permanent link to this resource */
  reject?: SelfApiBean;
  /** A permanent link to this resource */
  reopen?: SelfApiBean;
  /** A permanent link to this resource */
  submit?: SelfApiBean;
}

export interface TimesheetApprovalInput {
  /**
   * The comment about timesheet to approval
   * @example "This is a generic comment about this timesheet."
   */
  comment?: string;
  /**
   * The Account id of the reviewer
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  reviewerAccountId?: string;
}

export interface TimesheetApprovalPeriod {
  /**
   * The period start date
   * @format date
   */
  from: string;
  /**
   * The period end date
   * @format date
   */
  to: string;
}

export interface TimesheetApprovalPeriodsBean {
  periods?: TimesheetApprovalPeriod[];
}

export interface TimesheetApprovalResults {
  metadata: ResultsMetadata;
  results: TimesheetApproval[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** The reviewer of this timesheet */
export interface TimesheetApprovalReviewer {
  /**
   * A unique identifier of the user in Jira
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  accountId: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self?: string;
}

/** The current status of this timesheet */
export interface TimesheetApprovalStatus {
  /** The person who is responsible for the current timesheet approval status */
  actor?: TimesheetApprovalActor;
  /**
   * The comment to request timesheet approval
   * @example "Hey, do it now!"
   */
  comment?: string;
  key?: "OPEN" | "IN_REVIEW" | "APPROVED";
  /**
   * The mandatory seconds spent on this timesheet
   * @format int64
   * @example 633600
   */
  requiredSecondsAtSubmit?: number;
  /**
   * The total seconds spent on this timesheet
   * @format int64
   * @example 633600
   */
  timeSpentSecondsAtSubmit?: number;
  /**
   * The last date time when this timesheet was modified
   * @example "2022-01-01T00:00:00.000Z"
   */
  updatedAt?: string;
}

/** The user owner of this timesheet */
export interface TimesheetApprovalUser {
  /**
   * A unique identifier of the user in Jira
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  accountId: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self?: string;
}

export interface UpdateWorkAttributeInput {
  /**
   * The name of the `WorkAttribute`
   * @example "Attr 1"
   */
  name: string;
  /**
   * Whether this `WorkAttribute` is required. If not provided, the default value is `false`
   * @example false
   */
  required?: boolean;
  /**
   * The type of the `WorkAttribute`
   * @example "STATIC_LIST"
   */
  type: "ACCOUNT" | "CHECKBOX" | "INPUT_FIELD" | "INPUT_NUMERIC" | "STATIC_LIST";
  /**
   * Only relevant when type is `STATIC_LIST`. These values are immutable. Their UI representation can be looked up in the `names` object below
   * @example ["Some Value"]
   */
  values?: string[];
}

/** The author of this `worklog` */
export interface User {
  /**
   * A unique identifier of the user in Jira
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  accountId: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self?: string;
}

/** The contact of the `Account` */
export interface UserContact {
  /**
   * A unique identifier of the user in Jira
   * @example "1111aaaa2222bbbb3333cccc"
   */
  accountId: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  type?: "USER" | "EXTERNAL";
}

/** The creator of the `Generic Resource` */
export interface UserRefBean {
  /**
   * A unique identifier of the user in Jira
   * @example "123456:01234567-89ab-cdef-0123-456789abcdef"
   */
  accountId?: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self?: string;
}

export interface UserResults {
  metadata: ResultsMetadata;
  results: User[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface WorkAttribute {
  /**
   * The key of the `WorkAttribute`
   * @example "_Attr_1_"
   */
  key: string;
  /**
   * The name of the `WorkAttribute`
   * @example "Attr 1"
   */
  name: string;
  /**
   * Only relevant when type is `STATIC_LIST`. Each `STATIC_LIST` entry has an immutable `value` which is stored with the worklog, and a `name` that is shown in the UI. The `name` can be changed.
   * @example {"SomeValue":"Some Value"}
   */
  names?: Record<string, string>;
  /**
   * Whether this `WorkAttribute` is required
   * @example false
   */
  required: boolean;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * The type of the `WorkAttribute`
   * @example "STATIC_LIST"
   */
  type: string;
  /**
   * Only relevant when type is `STATIC_LIST`. These values are immutable. Their UI representation can be looked up in the `names` object below
   * @example ["Some Value"]
   */
  values?: string[];
}

export interface WorkAttributeSearchInput {
  /**
   * Ids of the worklogs you want to search work attribute values for
   * @maxItems 500
   * @minItems 1
   * @example [1000,1001,1002]
   */
  tempoWorklogIds?: number[];
}

export interface WorkAttributeValue {
  /**
   * The key of the `WorkAttributeValue`
   * @example "_COLOR_"
   */
  key: string;
  /**
   * The value of the `WorkAttributeValue`
   * @example "green"
   */
  value?: string;
}

/** The list of work attribute of this `Worklog` */
export interface WorkAttributeValueInput {
  /**
   * The key of the `WorkAttributeValue`
   * @example "_COLOR_"
   */
  key: string;
  /**
   * The value of the `WorkAttributeValue`
   * @example "green"
   */
  value?: string;
}

export interface WorkAttributeValueResults {
  metadata: ResultsMetadata;
  results: WorkAttributeValue[];
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

export interface WorkAttributeValuesByWorklog {
  /**
   * Id of the Worklog
   * @format int64
   * @example 1
   */
  tempoWorklogId?: number;
  /** List of the Work Attribute Values */
  workAttributeValues?: WorkAttributeValue[];
}

export interface WorkAttributeValuesInput {
  /**
   * The list of work attribute
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  attributeValues: WorkAttributeValueInput[];
  /**
   * The worklog id in tempo app`
   * @format int64
   * @example 128
   */
  tempoWorklogId: number;
}

export interface WorkloadScheme {
  /** The list of days and their required hours in this `WorkloadScheme` */
  days: WorkloadSchemeDay[];
  /**
   * If this is the default `WorkloadScheme`
   * @example false
   */
  defaultScheme: boolean;
  /**
   * The description `WorkloadScheme`
   * @example "Employees working 50%"
   */
  description: string;
  /**
   * The id of the `WorkloadScheme`
   * @format int32
   * @example 1
   */
  id: number;
  /**
   * The number of members in this `WorkloadScheme`
   * @format int64
   * @example 100
   */
  memberCount: number;
  /**
   * The name of the `WorkloadScheme`
   * @example "Part-time Workload Scheme"
   */
  name: string;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
}

/** The list of days and their required hours in this `WorkloadScheme` */
export interface WorkloadSchemeDay {
  /**
   * The day of the week
   * @example "WEDNESDAY"
   */
  day: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  /**
   * The number of seconds required to be worked
   * @format int64
   * @example 14400
   */
  requiredSeconds: number;
}

/** The list of days and their required hours in the workload scheme. This list must be unique and contains all weekdays [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday] */
export interface WorkloadSchemeDayInput {
  /**
   * The day of the week
   * @example "WEDNESDAY"
   */
  day: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  /**
   * The number of seconds required to be worked
   * @format int64
   * @example 14400
   */
  requiredSeconds: number;
}

export interface WorkloadSchemeInput {
  /**
   * The list of days and their required hours in the workload scheme. This list must be unique and contains all weekdays [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
   * @maxItems 7
   * @minItems 7
   */
  days?: WorkloadSchemeDayInput[];
  /**
   * The description of the workload scheme
   * @example "Employees working 50%"
   */
  description?: string;
  /**
   * The name of the workload scheme
   * @example "Part-time Workload Scheme"
   */
  name: string;
}

export interface WorkloadSchemeMembersInput {
  /**
   * The list of account ids in the workload scheme
   * @maxItems 2147483647
   * @minItems 1
   * @example "['111aaaa2222bbbb3333cccc', '555dddd2222bbbb5656cccc']"
   */
  accountIds: string[];
}

export interface Worklog {
  /** The list of work attribute of this `Worklog` */
  attributes: SelfListWorkAttributeValue;
  /** The author of this `worklog` */
  author: User;
  /**
   * The amount of seconds billable
   * @format int64
   * @example 100201
   */
  billableSeconds?: number;
  /**
   * The date and time when this `Worklog` was created
   * @example "2017-02-06T16:41:41.000Z"
   */
  createdAt: string;
  /**
   * The description of the `Worklog`
   * @example "Investigating a problem with our external database system"
   */
  description?: string;
  /** The Issue associated to this worklog */
  issue: Issue;
  /**
   * A permanent link to this resource
   * @example "https://api.tempo.io/[...]"
   */
  self: string;
  /**
   * The start date of the `Worklog`
   * @format date
   */
  startDate: string;
  /**
   * The start time of the `Worklog`
   * @example "20:06:00"
   */
  startTime?: string;
  /**
   * The worklog Id in the tempo app
   * @format int64
   * @example 126
   */
  tempoWorklogId: number;
  /**
   * The total amount of time spent in seconds`
   * @format int64
   * @example 3600
   */
  timeSpentSeconds: number;
  /**
   * The last date and time when this `Worklog` was updated
   * @example "2017-02-06T16:41:41.000Z"
   */
  updatedAt: string;
}

export interface WorklogInput {
  /**
   * The list of work attribute of this `Worklog`
   * @uniqueItems true
   */
  attributes?: WorkAttributeValueInput[];
  /**
   * The Account id of the user author
   * @example "1111aaaa2222bbbb3333cccc"
   */
  authorAccountId: string;
  /**
   * The amount of seconds billable
   * @format int64
   * @example 100201
   */
  billableSeconds?: number;
  /**
   * The description of the `Worklog`
   * @example "Investigating a problem with our external database system"
   */
  description?: string;
  /**
   * The id of the issue associated to this worklog
   * @format int64
   * @min 1
   * @example 10001
   */
  issueId: number;
  /**
   * The total amount of estimated remaining seconds`
   * @format int64
   * @example 120
   */
  remainingEstimateSeconds?: number;
  /**
   * The start date of the `Worklog`
   * @format date
   */
  startDate: string;
  /**
   * The start time of the `Worklog`
   * @pattern ^([0-1]?[0-9]|2[0-3])(:[0-5][0-9])(:[0-5][0-9])$
   * @example "20:06:00"
   */
  startTime?: string;
  /**
   * The total amount of time spent in seconds`
   * @format int64
   * @min 1
   * @example 3600
   */
  timeSpentSeconds: number;
}

export interface WorklogSearchInput {
  /**
   * Ids of the authors you want to search worklogs for.
   * @example ["123456:01234567-89ab-cdef-0123-456789abcdef","123456:01234567-89ab-cdef-0123-456789abcdef"]
   */
  authorIds?: string[];
  /**
   * Retrieve worklogs starting with this date.
   * @example "2022-05-17T00:00:00.000Z"
   */
  from?: string;
  /**
   * Ids of the issues you want to search worklogs for
   * @example ["10000","100001"]
   */
  issueIds?: number[];
  /**
   * Ids of the projects you want to search worklogs for
   * @example ["1","2"]
   */
  projectIds?: number[];
  /**
   * Retrieve worklogs that ends up to and including this date.
   * @example "2022-05-17T00:00:00.000Z"
   */
  to?: string;
  /**
   * Retrieve worklogs that have been updated from this date
   * @example "2022-05-17T00:00:00.000Z"
   */
  updatedFrom?: string;
}

export interface WorklogUpdate {
  /**
   * The list of work attribute of this `Worklog`
   * @uniqueItems true
   */
  attributes?: WorkAttributeValueInput[];
  /**
   * The Account id of the user author
   * @example "1111aaaa2222bbbb3333cccc"
   */
  authorAccountId: string;
  /**
   * The amount of seconds billable
   * @format int64
   * @example 100201
   */
  billableSeconds?: number;
  /**
   * The description of the `Worklog`
   * @example "Investigating a problem with our external database system"
   */
  description?: string;
  /**
   * The total amount of estimated remaining seconds`
   * @format int64
   * @example 120
   */
  remainingEstimateSeconds?: number;
  /**
   * The start date of the `Worklog`
   * @format date
   */
  startDate: string;
  /**
   * The start time of the `Worklog`
   * @pattern ^([0-1]?[0-9]|2[0-3])(:[0-5][0-9])(:[0-5][0-9])$
   * @example "20:06:00"
   */
  startTime?: string;
  /**
   * The total amount of time spent in seconds`
   * @format int64
   * @min 1
   * @example 3600
   */
  timeSpentSeconds: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.tempo.io/4";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title REST API documentation
 * @version 4.0
 * @termsOfService https://www.tempo.io/terms-of-use
 * @baseUrl https://api.tempo.io/4
 *
 * <p>Base Path: https://api.tempo.io/4</p>
 * <div style="background-color: #E5F9FD;padding: 15px;margin: 20px 0;">
 *   This documentation is for <strong>version 4</strong> of the Tempo REST API, which is the latest version. To read documentation for version 3 of the Tempo REST API, <a href="https://apidocs.tempo.io/v3"><strong>click here</strong></a>
 * </div>
 *
 * We encourage you to join our developer community on Slack at [www.tempo.io/developers](https://www.tempo.io/developers), where you
 * can get support from our internal experts and share best practices with other developers building with Tempo.
 *
 * If you have feedback or requests, you can also reach us through our Customer Support Portal. You can find general product
 * information in the Tempo Help Center.
 *
 * Below are links to other Tempo APIs.
 * <ul>
 *   <li><a href="https://apidocs.tempo.io/audit">Audit API</a></li>
 *   <li><a href="https://apidocs.tempo.io/cost-tracker">Cost-Tracker API</a></li>
 *   <li><a href="https://apidocs.tempo.io/jira">Jira Links API</a></li>
 * </ul>
 *
 * ## Authentication
 * ### Using the REST API as an individual user
 *
 * You can use the REST API to interact with the data your permissions give you access to. To do so, you will need to
 * generate a Tempo OAuth 2.0 token.
 *
 * Go to **Tempo>Settings**, scroll down to **Data Access** and select **API integration**.
 *
 * Once you have a token, you need to use it inside the Authorization HTTP header. Ex:
 *
 * `curl -v -H "Authorization: Bearer $token" "https://api.tempo.io/4/worklogs?..."`<br><br>
 *
 * ### Using the REST API as an application developer
 *
 * If you are building apps with Tempo, and have the required Tempo administrator permissions, you can quickly
 * obtain the OAuth 2.0 credentials you need to retrieve an access token. Access tokens grant temporary, secure
 * access to Tempo, based on your current permissions.
 *
 * #### Obtain your credentials
 *
 * Go to **Tempo>Settings**, scroll down to **Data Access** and select **OAuth 2.0 authentication**.
 *
 * Enter a Redirect URI and specify the Client type and Authorization grant type.
 *
 * Once you click **Add**, your Client ID and Client secret are generated and you can retrieve your access token.<br><br>
 *
 * ### How to retrieve an access token for a user
 * #### Authorization grant type used is *authorization_code*
 * ##### Step 1
 * Obtain an authorization code against your Jira Cloud instance :
 *
 * `GET: https://{jira-cloud-instance-name}.atlassian.net/plugins/servlet/ac/io.tempo.jira/oauth-authorize/?client_id=$CLIENT_ID&redirect_uri=$REDIRECT_URI`
 *
 * Where *$CLIENT_ID* and *$REDIRECT_URI* match the one you generated in **Tempo > Settings > OAuth 2.0 Applications**
 *
 * You will be asked to *authorize* or *deny* access to your Tempo data. Granting access redirects you to the configured
 * *redirect URI* with a new query string parameter named *code* (this is the authorization code). Note that this authorization code
 * expires quickly.
 *
 * ![MyApp Request Access](myapp-request-access.png "MyApp Request Access")
 *
 * ##### Step 2
 * Obtain an access token from Tempo by providing the *authorization code* to:
 *
 * `POST: https://api.tempo.io/oauth/token/`
 *
 * sending the following parameters using the "application/x-www-form-urlencoded" format:
 * ```
 * grant_type = "authorization_code"
 * client_id = $CLIENT_ID
 * client_secret = $CLIENT_SECRET
 * redirect_uri = $REDIRECT_URI
 * code = $CODE
 * ```
 *
 * The response includes the access token itself, related information, and a refresh token.
 * ```JSON
 * {
 *   "access_token":"$ACCESS_TOKEN",
 *   "expires_in":5184000,
 *   "token_type":"Bearer",
 *   "scope":"read write",
 *   "refresh_token":"$REFRESH_TOKEN"
 * }
 * ```
 *
 * ##### Step 3
 * Provide this *access token* to any API requests using the *Authorization header* :
 *
 * `curl -H "Authorization: Bearer $ACCESS_TOKEN" "https://api.tempo.io/4/worklogs?from=2022-01-28&to=2022-02-03"`
 *
 * The access token will expire after the number of seconds specified in the **expires_in** field and will
 * no longer be usable.
 *
 * ### How to retrieve a new access token from the refresh token
 * The *access token* will eventually expire. You need to renew it using the previously received *refresh token*:
 *
 * `POST: https://api.tempo.io/oauth/token/`
 *
 * sending the following parameters using the "application/x-www-form-urlencoded" format:
 * ```
 * grant_type = "refresh_token"
 * client_id = $CLIENT_ID
 * client_secret = $CLIENT_SECRET
 * redirect_uri = $REDIRECT_URI
 * refresh_token = $REFRESH_TOKEN
 * ```
 *
 * The response will contain a new *access token* and a new *refresh token*. You'll need to utilize these
 * new tokens for future calls, as the previous ones will no longer be valid.
 *
 * ### How to revoke a token
 * You can revoke an existing *access token* at any time:
 *
 * `POST: https://api.tempo.io/oauth/revoke_token/`
 *
 * sending the following parameters using the "application/x-www-form-urlencoded" format:
 * ```
 * token_type_hint = "access_token"
 * client_id = $CLIENT_ID
 * client_secret = $CLIENT_SECRET
 * token = $ACCESS_TOKEN
 * ```
 *
 * You can also revoke an existing *refresh token*:
 *
 * `POST: https://api.tempo.io/oauth/revoke_token/`
 *
 * sending the following parameters using the "application/x-www-form-urlencoded" format:
 * ```
 * {
 *   token_type_hint = "refresh_token"
 *   client_id = $CLIENT_ID
 *   client_secret = $CLIENT_SECRET
 *   token = $REFRESH_TOKEN
 * }
 * ```
 *
 * ## API conventions
 * ### Identifying users
 * The Tempo REST API uses the Atlassian accountId to identify users. The accountId is an opaque identifier that
 * uniquely identifies the user.
 *
 * The accountId of the current user can found using the [Jira Myself API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-group-Myself).
 *
 * Information about a user, given the accountId, can be retrieved using the [Jira User API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-group-User).
 *
 * ### Dates
 * The API uses strings to represent dates. Dates are formatted as [ISO 8601 calendar dates](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) (YYYY-MM-DD).
 * For example, March 29th, 2019 is formatted as 2019-03-29.
 *
 * ### Delete requests
 * On success, delete requests return a response with status code [204 (No content)](https://httpstatuses.com/204).
 * No payload body is included in the response.
 *
 * ### Arrays
 * A few endpoints accept query parameters of type array. That is achieved by repeating the parameter multiple
 * times, e.g. to get worklogs from three projects:
 *
 * `.../worklogs?from=2020-01-01&to=2020-12-31&project=10100&project=10200&project=10300`
 *
 * ## Errors
 *
 * The API uses standard HTTP status codes to indicate the success or failure of the API call.
 *
 * Here are a list of different types of error responses
 *
 * Status code  | Description | Content type
 * ----------------|-------------|---------
 * 400 | Bad Request | application/json
 * 401 | Unauthorized | text/html
 * 403 | Forbidden | text/html
 * 404 | Not Found | application/json
 *
 * <br>
 *
 * The body of the JSON response will be in the following format:
 *
 * ```
 * {
 *   "errors": {
 *     "message": "Error details"
 *   }
 * }
 * ```
 *
 * An example of 400 error
 * ```
 *   {
 *     "errors": {
 *       "message": "'date' must be valid on the format: 'yyyy-MM-dd'"
 *     }
 *   }
 * ```
 *
 * An example of 404 error
 * ```
 *   {
 *     "errors": {
 *       "message": "Account 'xyz' not found"
 *     }
 *   }
 * ```
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  accountCategories = {
    /**
     * @description Retrieves a Category for the given id, or retrieves a list of all Categories if id is not provided. If the Category with the given id is not found, an empty list is returned
     *
     * @tags Account - Categories
     * @name GetCategories
     * @summary Retrieve Category / Retrieve all Categories
     * @request GET:/account-categories
     */
    getCategories: (
      query?: {
        /** @format int32 */
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryResults, any>({
        path: `/account-categories`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Category using the provided input and returns the newly created Category
     *
     * @tags Account - Categories
     * @name CreateCategory
     * @summary Create Category
     * @request POST:/account-categories
     */
    createCategory: (data: CategoryInput, params: RequestParams = {}) =>
      this.request<Category, void>({
        path: `/account-categories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the Category for the given key
     *
     * @tags Account - Categories
     * @name DeleteCategory
     * @summary Delete Category
     * @request DELETE:/account-categories/{key}
     */
    deleteCategory: (key: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/account-categories/${key}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Category for the given key
     *
     * @tags Account - Categories
     * @name GetCategoryByKey
     * @summary Retrieve Category
     * @request GET:/account-categories/{key}
     */
    getCategoryByKey: (key: string, params: RequestParams = {}) =>
      this.request<Category, void>({
        path: `/account-categories/${key}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the Category for the given key using the provided input and returns the updated Category
     *
     * @tags Account - Categories
     * @name UpdateCategory
     * @summary Update Category
     * @request PUT:/account-categories/{key}
     */
    updateCategory: (key: string, data: CategoryInput, params: RequestParams = {}) =>
      this.request<Category, void>({
        path: `/account-categories/${key}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  accountCategoryTypes = {
    /**
     * @description Retrieves a list of all Category Types
     *
     * @tags Account - Category-Types
     * @name GetTypes
     * @summary Retrieve Category Types
     * @request GET:/account-category-types
     */
    getTypes: (params: RequestParams = {}) =>
      this.request<CategoryTypeResults, any>({
        path: `/account-category-types`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  accountLinks = {
    /**
     * @description Creates a new Account Link using the provided input and returns the newly created Account Link
     *
     * @tags Account - Links
     * @name CreateLink
     * @summary Create Account Link
     * @request POST:/account-links
     */
    createLink: (data: AccountLinkInput, params: RequestParams = {}) =>
      this.request<AccountLink, void>({
        path: `/account-links`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves an existing Account Link for the given Project id
     *
     * @tags Account - Links
     * @name GetLinksByProject
     * @summary Retrieve Account Link by Project
     * @request GET:/account-links/project/{id}
     */
    getLinksByProject: (
      id: number,
      query?: {
        includeGlobalAccounts?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<AccountLinkResults, any>({
        path: `/account-links/project/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Account Link for the given id
     *
     * @tags Account - Links
     * @name DeleteLink
     * @summary Delete Account Link
     * @request DELETE:/account-links/{id}
     */
    deleteLink: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/account-links/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Account Link for the given id
     *
     * @tags Account - Links
     * @name GetLink
     * @summary Retrieve Account Link
     * @request GET:/account-links/{id}
     */
    getLink: (id: number, params: RequestParams = {}) =>
      this.request<AccountLink, void>({
        path: `/account-links/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  accounts = {
    /**
     * @description Retrieves a list of OPEN and CLOSED Accounts
     *
     * @tags Accounts
     * @name GetAccounts
     * @summary Retrieve Accounts
     * @request GET:/accounts
     */
    getAccounts: (
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableAccount, any>({
        path: `/accounts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Account using the provided input and returns the newly created Account
     *
     * @tags Accounts
     * @name CreateAccount
     * @summary Create new Account
     * @request POST:/accounts
     */
    createAccount: (data: AccountInput, params: RequestParams = {}) =>
      this.request<Account, void>({
        path: `/accounts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of existing Accounts that matches the given search parameters
     *
     * @tags Accounts
     * @name SearchAccounts
     * @summary Search Accounts
     * @request POST:/accounts/search
     */
    searchAccounts: (
      data: AccountSearchInput,
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableAccount, any>({
        path: `/accounts/search`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves an existing Account for the given id
     *
     * @tags Accounts
     * @name GetAccountById
     * @summary Retrieve Account
     * @request GET:/accounts/{id}
     */
    getAccountById: (id: number, params: RequestParams = {}) =>
      this.request<Account, any>({
        path: `/accounts/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Account for the given key
     *
     * @tags Accounts
     * @name DeleteAccount
     * @summary Delete Account
     * @request DELETE:/accounts/{key}
     */
    deleteAccount: (key: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/accounts/${key}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates an existing Account for the given key using the provided input and returns the updated Account
     *
     * @tags Accounts
     * @name UpdateAccount
     * @summary Update Account
     * @request PUT:/accounts/{key}
     */
    updateAccount: (key: string, data: AccountInput, params: RequestParams = {}) =>
      this.request<Account, any>({
        path: `/accounts/${key}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all existing links associated to the provided Account
     *
     * @tags Accounts
     * @name GetAccountLinks
     * @summary Retrieve Account links
     * @request GET:/accounts/{key}/links
     */
    getAccountLinks: (
      key: string,
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableAccountLink, any>({
        path: `/accounts/${key}/links`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  customers = {
    /**
     * @description Retrieves a list of all Customers
     *
     * @tags Customers
     * @name GetCustomers
     * @summary Retrieve all Customers
     * @request GET:/customers
     */
    getCustomers: (
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableCustomer, any>({
        path: `/customers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Customer using the provided input and returns the newly created Customer
     *
     * @tags Customers
     * @name CreateCustomer
     * @summary Create Customer
     * @request POST:/customers
     */
    createCustomer: (data: CustomerInput, params: RequestParams = {}) =>
      this.request<Customer, void>({
        path: `/customers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves an existing Customer for the given id
     *
     * @tags Customers
     * @name GetCustomerById
     * @summary Retrieve Customer
     * @request GET:/customers/{id}
     */
    getCustomerById: (id: number, params: RequestParams = {}) =>
      this.request<Customer, void>({
        path: `/customers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Accounts associated with the given Customer
     *
     * @tags Customers
     * @name GetCustomerAccounts
     * @summary Retrieve Accounts associated with the Customer
     * @request GET:/customers/{id}/accounts
     */
    getCustomerAccounts: (
      id: number,
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableAccount, void>({
        path: `/customers/${id}/accounts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the Customer with the given key
     *
     * @tags Customers
     * @name DeleteCustomer
     * @summary Delete Customer
     * @request DELETE:/customers/{key}
     */
    deleteCustomer: (key: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/customers/${key}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Updates the Customer with the given key using the provided input and returns the updated Customer
     *
     * @tags Customers
     * @name UpdateCustomer
     * @summary Update Customer
     * @request PUT:/customers/{key}
     */
    updateCustomer: (key: string, data: CustomerInput, params: RequestParams = {}) =>
      this.request<Customer, void>({
        path: `/customers/${key}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  genericResources = {
    /**
     * @description Creates a new Generic Resource using the provided input and returns the newly created Generic Resource
     *
     * @tags Generic Resources
     * @name CreateGenericResource
     * @summary Create Generic Resource
     * @request POST:/generic-resources
     */
    createGenericResource: (data: GenericResourceInput, params: RequestParams = {}) =>
      this.request<GenericResource, void>({
        path: `/generic-resources`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of existing Generic Resources that matches the search parameters
     *
     * @tags Generic Resources
     * @name SearchGenericResources
     * @summary Search Generic Resources
     * @request POST:/generic-resources/search
     */
    searchGenericResources: (data: GenericResourceSearchInput, params: RequestParams = {}) =>
      this.request<PageableGenericResourceWithoutSelfLink, any>({
        path: `/generic-resources/search`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Generic Resource for the given id
     *
     * @tags Generic Resources
     * @name DeleteGenericResource
     * @summary Delete Generic Resource
     * @request DELETE:/generic-resources/{id}
     */
    deleteGenericResource: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/generic-resources/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Generic Resource for the given id
     *
     * @tags Generic Resources
     * @name GetGenericResource
     * @summary Retrieve Generic Resource
     * @request GET:/generic-resources/{id}
     */
    getGenericResource: (id: number, params: RequestParams = {}) =>
      this.request<GenericResource, void>({
        path: `/generic-resources/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing Generic Resource for the given id using the provided input and returns the updated Generic Resource
     *
     * @tags Generic Resources
     * @name EditGenericResource
     * @summary Update Generic Resource
     * @request PUT:/generic-resources/{id}
     */
    editGenericResource: (id: number, data: GenericResourceInput, params: RequestParams = {}) =>
      this.request<GenericResource, void>({
        path: `/generic-resources/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  globalconfiguration = {
    /**
     * @description Retrieves the Global Configurations
     *
     * @tags Global Configurations
     * @name GetGlobalConfiguration
     * @summary Retrieve Global Configurations
     * @request GET:/globalconfiguration
     */
    getGlobalConfiguration: (params: RequestParams = {}) =>
      this.request<GlobalConfiguration, any>({
        path: `/globalconfiguration`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  holidaySchemes = {
    /**
     * @description List all holiday schemes
     *
     * @tags Holiday Schemes
     * @name GetHolidaySchemes
     * @summary Get holiday schemes
     * @request GET:/holiday-schemes
     */
    getHolidaySchemes: (params: RequestParams = {}) =>
      this.request<HolidaySchemeResults, any>({
        path: `/holiday-schemes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Add holiday scheme of a given input
     *
     * @tags Holiday Schemes
     * @name CreateHolidayScheme
     * @summary Add holiday scheme
     * @request POST:/holiday-schemes
     */
    createHolidayScheme: (data: HolidaySchemeInputBean, params: RequestParams = {}) =>
      this.request<HolidayScheme, void>({
        path: `/holiday-schemes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get an user scheme with the given id
     *
     * @tags Holiday Schemes
     * @name GetUserHolidayScheme
     * @summary Get user scheme
     * @request GET:/holiday-schemes/users/{accountId}
     */
    getUserHolidayScheme: (accountId: string, params: RequestParams = {}) =>
      this.request<HolidayScheme, any>({
        path: `/holiday-schemes/users/${accountId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a holiday scheme with the given id
     *
     * @tags Holiday Schemes
     * @name DeleteHolidayScheme
     * @summary Delete a holiday scheme
     * @request DELETE:/holiday-schemes/{schemeId}
     */
    deleteHolidayScheme: (schemeId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/holiday-schemes/${schemeId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Get Holiday scheme of a given scheme id
     *
     * @tags Holiday Schemes
     * @name GetHolidayScheme
     * @summary Get holiday scheme
     * @request GET:/holiday-schemes/{schemeId}
     */
    getHolidayScheme: (schemeId: string, params: RequestParams = {}) =>
      this.request<HolidayScheme, void>({
        path: `/holiday-schemes/${schemeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update a holiday scheme with the given id using the provided input
     *
     * @tags Holiday Schemes
     * @name UpdateHolidayScheme
     * @summary Update a holiday scheme
     * @request PUT:/holiday-schemes/{schemeId}
     */
    updateHolidayScheme: (schemeId: string, data: HolidaySchemeInputBean, params: RequestParams = {}) =>
      this.request<HolidayScheme, void>({
        path: `/holiday-schemes/${schemeId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Set the default holiday scheme
     *
     * @tags Holiday Schemes
     * @name SetDefaultScheme
     * @summary Set the default holiday scheme
     * @request PUT:/holiday-schemes/{schemeId}/default
     */
    setDefaultScheme: (schemeId: string, params: RequestParams = {}) =>
      this.request<HolidayScheme, void>({
        path: `/holiday-schemes/${schemeId}/default`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description List all holidays of a given scheme and year
     *
     * @tags Holiday Schemes
     * @name GetHolidays
     * @summary Get holidays
     * @request GET:/holiday-schemes/{schemeId}/holidays
     */
    getHolidays: (
      schemeId: string,
      query?: {
        /**
         * Year for holidays to be retrieved for. Returns holidays for current year if omitted.
         * @format int32
         */
        year?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<HolidayResults, void>({
        path: `/holiday-schemes/${schemeId}/holidays`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a holiday using the provided input
     *
     * @tags Holiday Schemes
     * @name CreateHoliday
     * @summary Add holiday
     * @request POST:/holiday-schemes/{schemeId}/holidays
     */
    createHoliday: (schemeId: string, data: HolidayInput, params: RequestParams = {}) =>
      this.request<Holiday, void>({
        path: `/holiday-schemes/${schemeId}/holidays`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List all floating holidays of a given scheme
     *
     * @tags Holiday Schemes
     * @name GetFloatingHolidays
     * @summary Get floating holidays
     * @request GET:/holiday-schemes/{schemeId}/holidays/floating
     */
    getFloatingHolidays: (schemeId: string, params: RequestParams = {}) =>
      this.request<HolidayResults, void>({
        path: `/holiday-schemes/${schemeId}/holidays/floating`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a holiday with the given id
     *
     * @tags Holiday Schemes
     * @name DeleteHoliday
     * @summary Delete holiday
     * @request DELETE:/holiday-schemes/{schemeId}/holidays/{holidayId}
     */
    deleteHoliday: (schemeId: string, holidayId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/holiday-schemes/${schemeId}/holidays/${holidayId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Get holiday information
     *
     * @tags Holiday Schemes
     * @name GetHoliday
     * @summary Get holiday
     * @request GET:/holiday-schemes/{schemeId}/holidays/{holidayId}
     */
    getHoliday: (schemeId: string, holidayId: string, params: RequestParams = {}) =>
      this.request<Holiday, void>({
        path: `/holiday-schemes/${schemeId}/holidays/${holidayId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update a holiday with the given id using the provided input
     *
     * @tags Holiday Schemes
     * @name UpdateHoliday
     * @summary Update a holiday
     * @request PUT:/holiday-schemes/{schemeId}/holidays/{holidayId}
     */
    updateHoliday: (schemeId: string, holidayId: string, data: HolidayInput, params: RequestParams = {}) =>
      this.request<Holiday, void>({
        path: `/holiday-schemes/${schemeId}/holidays/${holidayId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get holiday scheme members with the given id
     *
     * @tags Holiday Schemes
     * @name GetWorkloadSchemeMembers
     * @summary Get members in a holiday scheme
     * @request GET:/holiday-schemes/{schemeId}/members
     */
    getWorkloadSchemeMembers: (
      schemeId: string,
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableUser, void>({
        path: `/holiday-schemes/${schemeId}/members`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Assign a holiday scheme with the given id to members using the provided input
     *
     * @tags Holiday Schemes
     * @name SetWorkloadSchemeMembership
     * @summary Set holiday scheme to members
     * @request POST:/holiday-schemes/{schemeId}/members
     */
    setWorkloadSchemeMembership: (schemeId: string, data: HolidaySchemeMembersInput, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/holiday-schemes/${schemeId}/members`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  periods = {
    /**
     * @description Retrieves a list of all Periods for the given date range
     *
     * @tags Periods
     * @name GetPeriods
     * @summary Retrieve Periods
     * @request GET:/periods
     */
    getPeriods: (
      query: {
        /** The start date in format yyyy-mm-dd */
        from: string;
        /** The end date in format yyyy-mm-dd */
        to: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TimesheetApprovalPeriodsBean, any>({
        path: `/periods`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  permissionRoles = {
    /**
     * @description Retrieves a list of the Permission Roles for a given Team if ID is informed, or retrieves a list of all Permission Roles
     *
     * @tags Permission Roles
     * @name GetPermissionRoles
     * @summary Retrieve Permission Roles
     * @request GET:/permission-roles
     */
    getPermissionRoles: (
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
        /** An ID that uniquely identifies the Team for which you want to retrieve Permissions */
        teamId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageablePermissionRole, any>({
        path: `/permission-roles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new editable Permission Role using the provided input and returns the newly created Permission Role
     *
     * @tags Permission Roles
     * @name CreatePermissionGroup
     * @summary Create Permission Role
     * @request POST:/permission-roles
     */
    createPermissionGroup: (data: PermissionRoleInput, params: RequestParams = {}) =>
      this.request<PermissionRole, void>({
        path: `/permission-roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the Global Permission Roles
     *
     * @tags Permission Roles
     * @name GetGlobalPermissionRoles
     * @summary Retrieve Global Permission Roles
     * @request GET:/permission-roles/global
     */
    getGlobalPermissionRoles: (
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageablePermissionRole, any>({
        path: `/permission-roles/global`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an editable Permission Role.
     *
     * @tags Permission Roles
     * @name DeleteEditablePermissionGroup
     * @summary Delete Permission Role
     * @request DELETE:/permission-roles/{id}
     */
    deleteEditablePermissionGroup: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/permission-roles/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves a Permission Role for the given id
     *
     * @tags Permission Roles
     * @name GetPermissionRole
     * @summary Retrieve Permission Role
     * @request GET:/permission-roles/{id}
     */
    getPermissionRole: (id: string, params: RequestParams = {}) =>
      this.request<PermissionRole, void>({
        path: `/permission-roles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a Permission Role for the given id using the provided input and returns the updated Permission Role. Only editable roles can be updated.
     *
     * @tags Permission Roles
     * @name UpdatePermissionGroup
     * @summary Update Permission Role
     * @request PUT:/permission-roles/{id}
     */
    updatePermissionGroup: (id: number, data: PermissionRoleInput, params: RequestParams = {}) =>
      this.request<PermissionRole, void>({
        path: `/permission-roles/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  plans = {
    /**
     * @description Retrieves a list of existing Plans that matches the given search parameters
     *
     * @tags Plans
     * @name GetPlans
     * @summary Retrieve Plans
     * @request GET:/plans
     */
    getPlans: (
      query: {
        /** Ids of the user assignees you want to search plans for. */
        accountIds?: string[];
        /** Types of the assignees you want to search plans for. */
        assigneeTypes?: "USER" | "GENERIC";
        /** Retrieve plans starting with this date. */
        from: string;
        /** Ids of the generic resources you want to search plans for. */
        genericResourceIds?: number[];
        /**
         * Maximum number of results on each page.
         * @format int32
         * @max 5000
         */
        limit?: number;
        /**
         * Number of skipped results.
         * @format int32
         */
        offset?: number;
        /** Ids of the plans you want to search for. */
        planIds?: number[];
        /** Ids of the items you want to search plans for. */
        planItemIds?: number[];
        /** Types of the items you want to search plans for. */
        planItemTypes?: "ISSUE" | "PROJECT";
        /** Defines how detailed you would like to see the breakdown of the planned time for each `Plan`. */
        plannedTimeBreakdown?: "DAILY" | "PERIOD";
        /** Retrieve plans that ends up to and including this date. */
        to: string;
        /** Retrieve plans that have been updated from this date. */
        updatedFrom?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageablePlan, any>({
        path: `/plans`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Plan using the provided input and returns the newly created Plan
     *
     * @tags Plans
     * @name CreatePlan
     * @summary Create Plan
     * @request POST:/plans
     */
    createPlan: (data: PlanInput, params: RequestParams = {}) =>
      this.request<Plan, void>({
        path: `/plans`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of existing Plans for the given Generic Resource
     *
     * @tags Plans
     * @name GetPlansForGenericResource
     * @summary Retrieve Plans for Generic Resource
     * @request GET:/plans/generic-resource/{genericResourceId}
     */
    getPlansForGenericResource: (
      genericResourceId: number,
      query?: {
        /** Defines how detailed you would like to see the breakdown of the planned time for each plan.You can add one or both of these values as query params [DAILY, PERIOD] to see more detailed breakdown of planned time. */
        plannedTimeBreakdown?: string[];
        /** Retrieve plans starting with this date */
        from?: string;
        /** Retrieve plans that ends up to and including this date */
        to?: string;
        /** Retrieve plans that have been updated from this date */
        updatedFrom?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlanResults, any>({
        path: `/plans/generic-resource/${genericResourceId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of existing Plans that matches the given search parameters
     *
     * @tags Plans
     * @name SearchPlans
     * @summary Search Plans
     * @request POST:/plans/search
     */
    searchPlans: (data: PlanSearchInput, params: RequestParams = {}) =>
      this.request<PageablePlanBeanWithoutLinks, any>({
        path: `/plans/search`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Plans for the given User
     *
     * @tags Plans
     * @name GetPlansForUser
     * @summary Retrieve Plans for User
     * @request GET:/plans/user/{accountId}
     */
    getPlansForUser: (
      accountId: string,
      query?: {
        /** Defines how detailed you would like to see the breakdown of the planned time for each plan.You can add one or both of these values as query params [DAILY, PERIOD] to see more detailed breakdown of planned time. */
        plannedTimeBreakdown?: string[];
        /** Retrieve plans starting with this date */
        from?: string;
        /** Retrieve plans that ends up to and including this date */
        to?: string;
        /** Retrieve plans that have been updated from this date */
        updatedFrom?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlanResults, any>({
        path: `/plans/user/${accountId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Plan for the given id
     *
     * @tags Plans
     * @name DeletePlanById
     * @summary Delete Plan
     * @request DELETE:/plans/{id}
     */
    deletePlanById: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/plans/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Plan for the given id
     *
     * @tags Plans
     * @name GetPlanById
     * @summary Retrieve Plan
     * @request GET:/plans/{id}
     */
    getPlanById: (
      id: number,
      query?: {
        from?: string;
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Plan, void>({
        path: `/plans/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing Plan for the given id using the provided input and returns the updated Plan
     *
     * @tags Plans
     * @name UpdatePlan
     * @summary Update Plan
     * @request PUT:/plans/{id}
     */
    updatePlan: (id: number, data: PlanInput, params: RequestParams = {}) =>
      this.request<Plan, void>({
        path: `/plans/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  programs = {
    /**
     * @description Retrieves a list of all Programs
     *
     * @tags Program
     * @name GetPrograms
     * @summary Retrieve all Programs
     * @request GET:/programs
     */
    getPrograms: (params: RequestParams = {}) =>
      this.request<ProgramResults, any>({
        path: `/programs`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Program using the provided input and returns the newly created Program
     *
     * @tags Program
     * @name CreateProgram
     * @summary Create Program
     * @request POST:/programs
     */
    createProgram: (data: ProgramInput, params: RequestParams = {}) =>
      this.request<Program, void>({
        path: `/programs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Program for the given id
     *
     * @tags Program
     * @name DeleteProgram
     * @summary Delete Program
     * @request DELETE:/programs/{id}
     */
    deleteProgram: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/programs/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Program for the given id
     *
     * @tags Program
     * @name GetProgramById
     * @summary Retrieve Program
     * @request GET:/programs/{id}
     */
    getProgramById: (id: string, params: RequestParams = {}) =>
      this.request<Program, void>({
        path: `/programs/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing Program for the given id using the provided input and returns the updated Program
     *
     * @tags Program
     * @name UpdateProgram
     * @summary Update Program
     * @request PUT:/programs/{id}
     */
    updateProgram: (id: string, data: ProgramInput, params: RequestParams = {}) =>
      this.request<Program, void>({
        path: `/programs/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Teams associated with the given Program
     *
     * @tags Program
     * @name GetTeamsByProgramId
     * @summary Retrieve Teams associated with Program
     * @request GET:/programs/{id}/teams
     */
    getTeamsByProgramId: (id: string, params: RequestParams = {}) =>
      this.request<TeamRefResults, void>({
        path: `/programs/${id}/teams`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  roles = {
    /**
     * @description Retrieves a list of all Roles
     *
     * @tags Roles
     * @name GetAllRoles
     * @summary Retrieve Roles
     * @request GET:/roles
     */
    getAllRoles: (params: RequestParams = {}) =>
      this.request<RoleResults, any>({
        path: `/roles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Role and returns the newly created Role
     *
     * @tags Roles
     * @name CreateRole
     * @summary Create new Role
     * @request POST:/roles
     */
    createRole: (data: RoleInput, params: RequestParams = {}) =>
      this.request<Role, void>({
        path: `/roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the default Role
     *
     * @tags Roles
     * @name GetDefaultRole
     * @summary Retrieve default Role
     * @request GET:/roles/default
     */
    getDefaultRole: (params: RequestParams = {}) =>
      this.request<Role, any>({
        path: `/roles/default`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Role for the given id
     *
     * @tags Roles
     * @name DeleteRole
     * @summary Delete Role
     * @request DELETE:/roles/{id}
     */
    deleteRole: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/roles/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Role for the given id
     *
     * @tags Roles
     * @name GetRoleById
     * @summary Retrieve Role by id
     * @request GET:/roles/{id}
     */
    getRoleById: (id: string, params: RequestParams = {}) =>
      this.request<Role, void>({
        path: `/roles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing Role for the given id with the given parameters
     *
     * @tags Roles
     * @name UpdateRole
     * @summary Update Role
     * @request PUT:/roles/{id}
     */
    updateRole: (id: string, data: RoleInput, params: RequestParams = {}) =>
      this.request<Role, void>({
        path: `/roles/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  skillAssignments = {
    /**
     * @description Assigns a list of Skills for the given Resource using the provided input and returns a list of the Resource's assigned Skills. A Resource can have up to 5 Skills assigned.
     *
     * @tags Skill Assignments
     * @name AssignSkills
     * @summary Assign Skills for Resource
     * @request POST:/skill-assignments
     */
    assignSkills: (data: SkillsAssignmentInput, params: RequestParams = {}) =>
      this.request<Skill[], void>({
        path: `/skill-assignments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Replaces Skills for the given Resource using the provided input and returns a list of the Resource's assigned Skills. A Resource can have up to 5 skills assigned.
     *
     * @tags Skill Assignments
     * @name ReplaceSkillAssignments
     * @summary Replace skills for Resource
     * @request POST:/skill-assignments/replace
     */
    replaceSkillAssignments: (data: SkillsAssignmentInput, params: RequestParams = {}) =>
      this.request<Skill[], void>({
        path: `/skill-assignments/replace`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of Skill Assignments for the given Resource
     *
     * @tags Skill Assignments
     * @name GetSkillAssignments
     * @summary Retrieve Skill Assignments for Resource
     * @request GET:/skill-assignments/{assigneeId}/{assigneeType}
     */
    getSkillAssignments: (assigneeId: string, assigneeType: string, params: RequestParams = {}) =>
      this.request<Skill[], void>({
        path: `/skill-assignments/${assigneeId}/${assigneeType}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Skill for the given Resource
     *
     * @tags Skill Assignments
     * @name RemoveSkillAssignment
     * @summary Delete skill of the Resource
     * @request DELETE:/skill-assignments/{assigneeId}/{assigneeType}/{skillId}
     */
    removeSkillAssignment: (assigneeId: string, assigneeType: string, skillId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/skill-assignments/${assigneeId}/${assigneeType}/${skillId}`,
        method: "DELETE",
        ...params,
      }),
  };
  skills = {
    /**
     * @description Retrieves a list of existing Skills that matches the given search parameters
     *
     * @tags Skills
     * @name GetSkills
     * @summary Retrieve Skills
     * @request GET:/skills
     */
    getSkills: (
      query?: {
        /** Ids of the Skills you want to retrieve */
        id?: number[];
        /** A query to be used for string matching against name of Skills */
        query?: string;
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableSkill, any>({
        path: `/skills`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Skill using the provided input and returns the newly created Skill
     *
     * @tags Skills
     * @name CreateSkill
     * @summary Create Skill
     * @request POST:/skills
     */
    createSkill: (data: SkillInput, params: RequestParams = {}) =>
      this.request<Skill, void>({
        path: `/skills`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Skill for the given id
     *
     * @tags Skills
     * @name DeleteSkill
     * @summary Delete Skill
     * @request DELETE:/skills/{id}
     */
    deleteSkill: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/skills/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Skill for the given id
     *
     * @tags Skills
     * @name GetSkill
     * @summary Retrieve Skill
     * @request GET:/skills/{id}
     */
    getSkill: (id: number, params: RequestParams = {}) =>
      this.request<Skill, void>({
        path: `/skills/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing Skill for the given id using the provided input and returns the updated Skill
     *
     * @tags Skills
     * @name UpdateSkill
     * @summary Update Skill
     * @request PUT:/skills/{id}
     */
    updateSkill: (id: number, data: SkillInput, params: RequestParams = {}) =>
      this.request<Skill, void>({
        path: `/skills/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  teamLinks = {
    /**
     * @description Creates a new Team Link using the provided input and returns the newly created Team Link
     *
     * @tags Team Links
     * @name CreateTeamLink
     * @summary Create Team Link
     * @request POST:/team-links
     */
    createTeamLink: (data: TeamLinkInput, params: RequestParams = {}) =>
      this.request<TeamLink, void>({
        path: `/team-links`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves an existing Team Link for the given Project id
     *
     * @tags Team Links
     * @name GetTeamLinkByProjectId
     * @summary Retrieve Team Link by Project
     * @request GET:/team-links/project/{id}
     */
    getTeamLinkByProjectId: (id: number, params: RequestParams = {}) =>
      this.request<TeamLinkResults, any>({
        path: `/team-links/project/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Team Link for the given id
     *
     * @tags Team Links
     * @name DeleteTeamLink
     * @summary Delete Team Link
     * @request DELETE:/team-links/{linkId}
     */
    deleteTeamLink: (linkId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/team-links/${linkId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Team Link for the given id
     *
     * @tags Team Links
     * @name GetTeamLink
     * @summary Retrieve Team Link
     * @request GET:/team-links/{linkId}
     */
    getTeamLink: (linkId: string, params: RequestParams = {}) =>
      this.request<TeamLink, void>({
        path: `/team-links/${linkId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  teamMemberships = {
    /**
     * @description Creates a new Membership using the provided input and returns the newly created Membership
     *
     * @tags Team Memberships
     * @name CreateMembership
     * @summary Create Membership
     * @request POST:/team-memberships
     */
    createMembership: (data: TeamMembershipInput, params: RequestParams = {}) =>
      this.request<TeamMembership, void>({
        path: `/team-memberships`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all the Memberships for the given Team
     *
     * @tags Team Memberships
     * @name GetAllMemberships
     * @summary Retrieve Memberships for Team
     * @request GET:/team-memberships/team/{teamId}
     */
    getAllMemberships: (teamId: string, params: RequestParams = {}) =>
      this.request<TeamMembershipResults, void>({
        path: `/team-memberships/team/${teamId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Membership for the given id
     *
     * @tags Team Memberships
     * @name DeleteMembership
     * @summary Delete Membership
     * @request DELETE:/team-memberships/{id}
     */
    deleteMembership: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/team-memberships/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Membership for the given id
     *
     * @tags Team Memberships
     * @name GetMembership
     * @summary Retrieve Membership
     * @request GET:/team-memberships/{id}
     */
    getMembership: (id: string, params: RequestParams = {}) =>
      this.request<TeamMembership, void>({
        path: `/team-memberships/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing Membership using the provided input and returns the updated Membership
     *
     * @tags Team Memberships
     * @name UpdateMembership
     * @summary Update Membership
     * @request PUT:/team-memberships/{id}
     */
    updateMembership: (id: string, data: MembershipInput, params: RequestParams = {}) =>
      this.request<TeamMembership, void>({
        path: `/team-memberships/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  teams = {
    /**
     * @description Retrieves a list of all existing Teams
     *
     * @tags Team
     * @name GetTeams
     * @summary Retrieve Teams
     * @request GET:/teams
     */
    getTeams: (
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableTeam, any>({
        path: `/teams`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Team using the provided input and returns the newly created Team
     *
     * @tags Team
     * @name CreateTeam
     * @summary Create Team
     * @request POST:/teams
     */
    createTeam: (data: TeamInput, params: RequestParams = {}) =>
      this.request<Team, void>({
        path: `/teams`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the Team for the given id
     *
     * @tags Team
     * @name DeleteTeam
     * @summary Delete Team
     * @request DELETE:/teams/{id}
     */
    deleteTeam: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/teams/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Team for the given id
     *
     * @tags Team
     * @name GetTeamById
     * @summary Retrieve Team
     * @request GET:/teams/{id}
     */
    getTeamById: (id: string, params: RequestParams = {}) =>
      this.request<Team, void>({
        path: `/teams/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the Team for the given id using the provided input, and returns the updated Team
     *
     * @tags Team
     * @name UpdateTeam
     * @summary Update Team
     * @request PUT:/teams/{id}
     */
    updateTeam: (id: string, data: TeamInput, params: RequestParams = {}) =>
      this.request<Team, void>({
        path: `/teams/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all Links for the given Team
     *
     * @tags Team
     * @name GetTeamLinks
     * @summary Retrieve Links from Team
     * @request GET:/teams/{id}/links
     */
    getTeamLinks: (
      id: string,
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableTeamLink, void>({
        path: `/teams/${id}/links`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all Generic Resources that are members of the given Team
     *
     * @tags Generic Resource Team Members
     * @name GetResourcesInTeam
     * @summary Retrieve Generic Resources for Team
     * @request GET:/teams/{teamId}/generic-resources
     */
    getResourcesInTeam: (teamId: number, params: RequestParams = {}) =>
      this.request<GenericResourceTeamMembers, void>({
        path: `/teams/${teamId}/generic-resources`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Adds Generic Resource to the given Team
     *
     * @tags Generic Resource Team Members
     * @name AddResourceToTeam
     * @summary Add Generic Resource to Team
     * @request POST:/teams/{teamId}/generic-resources
     */
    addResourceToTeam: (teamId: number, data: GenericResourceTeamMemberInput, params: RequestParams = {}) =>
      this.request<GenericResourceTeamMember, void>({
        path: `/teams/${teamId}/generic-resources`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Generic Resource from the given Team
     *
     * @tags Generic Resource Team Members
     * @name RemoveGenericResourceFromTeam
     * @summary Delete Generic Resource from Team
     * @request DELETE:/teams/{teamId}/generic-resources/{resourceId}
     */
    removeGenericResourceFromTeam: (teamId: number, resourceId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/teams/${teamId}/generic-resources/${resourceId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Generic Resource from the given Team
     *
     * @tags Generic Resource Team Members
     * @name GetGenericResourceTeamMember
     * @summary Retrieve Generic Resource for Team
     * @request GET:/teams/{teamId}/generic-resources/{resourceId}
     */
    getGenericResourceTeamMember: (teamId: number, resourceId: number, params: RequestParams = {}) =>
      this.request<GenericResourceTeamMember, void>({
        path: `/teams/${teamId}/generic-resources/${resourceId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  timesheetApprovals = {
    /**
     * @description Retrieves the current Timesheet Approval for a Team in the given period
     *
     * @tags Timesheet Approvals
     * @name GetTimesheetApprovalForTeam
     * @summary Retrieve Timesheet Approval for Team
     * @request GET:/timesheet-approvals/team/{teamId}
     */
    getTimesheetApprovalForTeam: (
      teamId: string,
      query: {
        /** The Start Date in format yyyy-mm-dd */
        from: string;
        /** The End Date in format yyyy-mm-dd */
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TimesheetApprovalResults, void>({
        path: `/timesheet-approvals/team/${teamId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the current Timesheet approval for a User in the given period
     *
     * @tags Timesheet Approvals
     * @name GetTimesheetApprovalForUser
     * @summary Retrieve current Timesheet approval
     * @request GET:/timesheet-approvals/user/{accountId}
     */
    getTimesheetApprovalForUser: (
      accountId: string,
      query: {
        /** The Start Date in format yyyy-mm-dd */
        from: string;
        /** The End Date in format yyyy-mm-dd */
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TimesheetApproval, void>({
        path: `/timesheet-approvals/user/${accountId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Approves a Timesheet for the given User in the given period and returns the approved Timesheet
     *
     * @tags Timesheet Approvals
     * @name ApproveTimesheetForUser
     * @summary Approve Timesheet
     * @request POST:/timesheet-approvals/user/{accountId}/approve
     */
    approveTimesheetForUser: (
      accountId: string,
      query: {
        /** The Start Date in format yyyy-mm-dd */
        from: string;
        /** The End Date in format yyyy-mm-dd */
        to?: string;
      },
      data: TimesheetApprovalInput,
      params: RequestParams = {},
    ) =>
      this.request<TimesheetApproval, void>({
        path: `/timesheet-approvals/user/${accountId}/approve`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Rejects a Timesheet for the given User in the given period and returns the rejected Timesheet
     *
     * @tags Timesheet Approvals
     * @name RejectTimesheetForUser
     * @summary Reject Timesheet
     * @request POST:/timesheet-approvals/user/{accountId}/reject
     */
    rejectTimesheetForUser: (
      accountId: string,
      query: {
        /** The Start Date in format yyyy-mm-dd */
        from: string;
        /** The End Date in format yyyy-mm-dd */
        to?: string;
      },
      data: TimesheetApprovalInput,
      params: RequestParams = {},
    ) =>
      this.request<TimesheetApproval, void>({
        path: `/timesheet-approvals/user/${accountId}/reject`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Reopens a Timesheet for the given User in the given period and returns the reopened Timesheet
     *
     * @tags Timesheet Approvals
     * @name ReopenTimesheetForUser
     * @summary Reopen Timesheet
     * @request POST:/timesheet-approvals/user/{accountId}/reopen
     */
    reopenTimesheetForUser: (
      accountId: string,
      query: {
        /** The Start Date in format yyyy-mm-dd */
        from: string;
        /** The End Date in format yyyy-mm-dd */
        to?: string;
      },
      data: TimesheetApprovalInput,
      params: RequestParams = {},
    ) =>
      this.request<TimesheetApproval, void>({
        path: `/timesheet-approvals/user/${accountId}/reopen`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of the Timesheet reviewers for the given User
     *
     * @tags Timesheet Approvals
     * @name GetTimesheetReviewersForUser
     * @summary Retrieve Timesheet reviewers for User
     * @request GET:/timesheet-approvals/user/{accountId}/reviewers
     */
    getTimesheetReviewersForUser: (accountId: string, params: RequestParams = {}) =>
      this.request<UserResults, void>({
        path: `/timesheet-approvals/user/${accountId}/reviewers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Submits a Timesheet for the given User in the given period and returns the submitted Timesheet
     *
     * @tags Timesheet Approvals
     * @name SubmitTimesheetForUser
     * @summary Submit Timesheet
     * @request POST:/timesheet-approvals/user/{accountId}/submit
     */
    submitTimesheetForUser: (
      accountId: string,
      query: {
        /** The Start Date in format yyyy-mm-dd */
        from: string;
        /** The End Date in format yyyy-mm-dd */
        to?: string;
      },
      data: TimesheetApprovalInput,
      params: RequestParams = {},
    ) =>
      this.request<TimesheetApproval, void>({
        path: `/timesheet-approvals/user/${accountId}/submit`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all Timesheets waiting for approval
     *
     * @tags Timesheet Approvals
     * @name GetTimesheetApprovalsWaitingForApproval
     * @summary Retrieve Timesheets waiting for approval
     * @request GET:/timesheet-approvals/waiting
     */
    getTimesheetApprovalsWaitingForApproval: (params: RequestParams = {}) =>
      this.request<TimesheetApprovalResults, any>({
        path: `/timesheet-approvals/waiting`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  userSchedule = {
    /**
     * @description Retrieves the Schedule of the logged-in User
     *
     * @tags User Schedule
     * @name GetAuthenticatedUserSchedule
     * @summary Retrieve logged User Schedule
     * @request GET:/user-schedule
     */
    getAuthenticatedUserSchedule: (
      query: {
        /** The start date in format yyyy-mm-dd */
        from: string;
        /** The end date in format yyyy-mm-dd */
        to: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DayScheduleResults, any>({
        path: `/user-schedule`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves Schedule for the given User
     *
     * @tags User Schedule
     * @name GetUserSchedule
     * @summary Retrieve User Schedule
     * @request GET:/user-schedule/{accountId}
     */
    getUserSchedule: (
      accountId: string,
      query: {
        /** The start date in format yyyy-mm-dd */
        from: string;
        /** The end date in format yyyy-mm-dd */
        to: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DayScheduleResults, any>({
        path: `/user-schedule/${accountId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  workAttributes = {
    /**
     * @description Retrieves a list of all Work Attributes
     *
     * @tags Work Attributes
     * @name GetWorkAttributes
     * @summary Retrieve Work Attributes
     * @request GET:/work-attributes
     */
    getWorkAttributes: (
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableWorkAttribute, any>({
        path: `/work-attributes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Work Attribute using the provided input and returns the newly created Work Attribute
     *
     * @tags Work Attributes
     * @name CreateWorkAttributes
     * @summary Create Work Attribute
     * @request POST:/work-attributes
     */
    createWorkAttributes: (data: CreateWorkAttributeInput, params: RequestParams = {}) =>
      this.request<WorkAttribute, void>({
        path: `/work-attributes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Work Attribute for the given key
     *
     * @tags Work Attributes
     * @name DeleteWorkAttributeByKey
     * @summary Delete Work Attribute
     * @request DELETE:/work-attributes/{key}
     */
    deleteWorkAttributeByKey: (key: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/work-attributes/${key}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Work Attribute for the given key
     *
     * @tags Work Attributes
     * @name GetWorkAttributeByKey
     * @summary Retrieve Work Attribute
     * @request GET:/work-attributes/{key}
     */
    getWorkAttributeByKey: (key: string, params: RequestParams = {}) =>
      this.request<WorkAttribute, void>({
        path: `/work-attributes/${key}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing Work Attribute for the given key using the provided input and returns the updated Work Attribute
     *
     * @tags Work Attributes
     * @name UpdateWorkAttributeByKey
     * @summary Update Work Attribute
     * @request PUT:/work-attributes/{key}
     */
    updateWorkAttributeByKey: (key: string, data: UpdateWorkAttributeInput, params: RequestParams = {}) =>
      this.request<WorkAttribute, void>({
        path: `/work-attributes/${key}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  workloadSchemes = {
    /**
     * @description Retrieves a list of all Workload Schemes
     *
     * @tags Workload Schemes
     * @name GetWorkloadSchemes
     * @summary Retrieve Workload Schemes
     * @request GET:/workload-schemes
     */
    getWorkloadSchemes: (
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableWorkloadScheme, void>({
        path: `/workload-schemes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Workload Scheme using the provided input and returns the newly created Workload Scheme
     *
     * @tags Workload Schemes
     * @name CreateWorkloadScheme
     * @summary Create Workload Scheme
     * @request POST:/workload-schemes
     */
    createWorkloadScheme: (data: WorkloadSchemeInput, params: RequestParams = {}) =>
      this.request<WorkloadScheme, any>({
        path: `/workload-schemes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves an existing Workload Scheme for the given User
     *
     * @tags Workload Schemes
     * @name GetUserWorkloadScheme
     * @summary Retrieve Workload Scheme for User
     * @request GET:/workload-schemes/users/{accountId}
     */
    getUserWorkloadScheme: (accountId: string, params: RequestParams = {}) =>
      this.request<WorkloadScheme, void>({
        path: `/workload-schemes/users/${accountId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Workload Scheme for the given id
     *
     * @tags Workload Schemes
     * @name DeleteWorkloadScheme
     * @summary Delete Workload Scheme
     * @request DELETE:/workload-schemes/{id}
     */
    deleteWorkloadScheme: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/workload-schemes/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Workload Scheme for the given id
     *
     * @tags Workload Schemes
     * @name GetWorkloadSchemeById
     * @summary Retrieve Workload Scheme
     * @request GET:/workload-schemes/{id}
     */
    getWorkloadSchemeById: (id: string, params: RequestParams = {}) =>
      this.request<WorkloadScheme, void>({
        path: `/workload-schemes/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing Workload Scheme for the given id using the provided input and returns the updated Workload Scheme
     *
     * @tags Workload Schemes
     * @name UpdateWorkloadScheme
     * @summary Update Workload Scheme
     * @request PUT:/workload-schemes/{id}
     */
    updateWorkloadScheme: (id: string, data: WorkloadSchemeInput, params: RequestParams = {}) =>
      this.request<WorkloadScheme, void>({
        path: `/workload-schemes/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sets the given Workload Scheme as default
     *
     * @tags Workload Schemes
     * @name SetDefaultWorkloadScheme
     * @summary Set default Workload Scheme
     * @request PUT:/workload-schemes/{id}/default
     */
    setDefaultWorkloadScheme: (id: string, params: RequestParams = {}) =>
      this.request<WorkloadScheme, void>({
        path: `/workload-schemes/${id}/default`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all the Members for the given Workload Scheme
     *
     * @tags Workload Schemes
     * @name GetWorkloadSchemeMembers1
     * @summary Retrieve Members of Workload Scheme
     * @request GET:/workload-schemes/{id}/members
     */
    getWorkloadSchemeMembers1: (
      id: string,
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableUser, void>({
        path: `/workload-schemes/${id}/members`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a list of Users to the given Workload Scheme using the provided input
     *
     * @tags Workload Schemes
     * @name SetWorkloadSchemeForUsers
     * @summary Add Users to Workload Scheme
     * @request POST:/workload-schemes/{id}/members
     */
    setWorkloadSchemeForUsers: (id: string, data: WorkloadSchemeMembersInput, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/workload-schemes/${id}/members`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  worklogs = {
    /**
     * @description Retrieves a list of Worklogs that matches the given search parameters
     *
     * @tags Worklogs
     * @name GetWorklogs
     * @summary Retrieve Worklogs
     * @request GET:/worklogs
     */
    getWorklogs: (
      query?: {
        /** Retrieve only worklogs for the given project ids */
        projectId?: number[];
        /** Retrieve only worklogs for the given issue ids */
        issueId?: number[];
        /** Retrieve results starting with this date */
        from?: string;
        /** Retrieve results up to and including this date */
        to?: string;
        /** Retrieve results that have been updated from this date */
        updatedFrom?: string;
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
        /** Order results by the specified field. If no order is specified, results will by default be ordered by START_DATE_TIME and ID */
        orderBy?: "ID" | "START_DATE_TIME" | "UPDATED";
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableWorklog, void>({
        path: `/worklogs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new Worklog using the provided input and returns the newly created Worklog
     *
     * @tags Worklogs
     * @name CreateWorklog
     * @summary Create Worklog
     * @request POST:/worklogs
     */
    createWorklog: (data: WorklogInput, params: RequestParams = {}) =>
      this.request<Worklog, void>({
        path: `/worklogs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all Worklogs associated to the given Account key that matches the search parameters
     *
     * @tags Worklogs
     * @name GetWorklogsByAccount
     * @summary Search Worklogs associated to Account
     * @request GET:/worklogs/account/{accountKey}
     */
    getWorklogsByAccount: (
      accountKey: string,
      query?: {
        /** Retrieve results starting with this date */
        from?: string;
        /** Retrieve results up to and including this date */
        to?: string;
        /** Retrieve results that have been updated from this date */
        updatedFrom?: string;
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableWorklog, void>({
        path: `/worklogs/account/${accountKey}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all Worklogs associated to the given Issue id that matches the search parameters
     *
     * @tags Worklogs
     * @name GetWorklogsByIssueId
     * @summary Search Worklogs associated to Issue id
     * @request GET:/worklogs/issue/{issueId}
     */
    getWorklogsByIssueId: (
      issueId: number,
      query?: {
        /** Retrieve results starting with this date */
        from?: string;
        /** Retrieve results up to and including this date */
        to?: string;
        /** Retrieve results that have been updated from this date */
        updatedFrom?: string;
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableWorklog, void>({
        path: `/worklogs/issue/${issueId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all Worklogs associated to the given projectId that matches the search parameters
     *
     * @tags Worklogs
     * @name GetWorklogsByProjectId
     * @summary Retrieve Worklogs associated to projectId
     * @request GET:/worklogs/project/{projectId}
     */
    getWorklogsByProjectId: (
      projectId: number,
      query?: {
        /** Retrieve results starting with this date */
        from?: string;
        /** Retrieve results up to and including this date */
        to?: string;
        /** Retrieve results that have been updated from this date */
        updatedFrom?: string;
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableWorklog, void>({
        path: `/worklogs/project/${projectId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of existing Worklogs that matches the given search parameters
     *
     * @tags Worklogs
     * @name SearchWorklogs
     * @summary Search Worklogs
     * @request POST:/worklogs/search
     */
    searchWorklogs: (
      data: WorklogSearchInput,
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableWorklog, any>({
        path: `/worklogs/search`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a list of all Worklogs associated to the given Team id that matches the search parameters
     *
     * @tags Worklogs
     * @name GetWorklogsByTeam
     * @summary Search Worklogs associated to Team
     * @request GET:/worklogs/team/{teamId}
     */
    getWorklogsByTeam: (
      teamId: string,
      query?: {
        /** Retrieve results starting with this date */
        from?: string;
        /** Retrieve results up to and including this date */
        to?: string;
        /** Retrieve results that have been updated from this date */
        updatedFrom?: string;
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableWorklog, void>({
        path: `/worklogs/team/${teamId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of existing Jira Worklog ids that match the informed Tempo Worklog ids. If a Jira Worklog Id cannot be found, it will not be returned on the results
     *
     * @tags Worklogs
     * @name GetJiraWorklogIdsByTempoWorklogIds
     * @summary Retrieve Jira Worklog ids by Tempo Worklog ids
     * @request POST:/worklogs/tempo-to-jira
     */
    getJiraWorklogIdsByTempoWorklogIds: (
      data: TempoWorklogIdList,
      query?: {
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableTempoToJiraWorklogId, any>({
        path: `/worklogs/tempo-to-jira`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all Worklogs associated to the given User that matches the search parameters
     *
     * @tags Worklogs
     * @name GetWorklogsByUser
     * @summary Search Worklogs associated to User
     * @request GET:/worklogs/user/{accountId}
     */
    getWorklogsByUser: (
      accountId: string,
      query?: {
        /** Retrieve results starting with this date */
        from?: string;
        /** Retrieve results up to and including this date */
        to?: string;
        /** Retrieve results that have been updated from this date */
        updatedFrom?: string;
        /**
         * Skip over a number of elements by specifying an offset value for the query
         * @format int32
         * @default 0
         */
        offset?: number;
        /**
         * Limit the number of elements on the response
         * @format int32
         * @default 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageableWorklog, void>({
        path: `/worklogs/user/${accountId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Note: This API only supports creating new Work Attribute values. Work Attribute values can only be updated as part of the Worklog.
     *
     * @tags Worklogs
     * @name CreateWorkAttributeValuesForWorklogs
     * @summary Bulk create Work Attribute values for Worklogs
     * @request POST:/worklogs/work-attribute-values
     */
    createWorkAttributeValuesForWorklogs: (data: WorkAttributeValuesInput[], params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/worklogs/work-attribute-values`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Retrieves a list of existing Work Attribute values that matches the given worklog ids
     *
     * @tags Worklogs
     * @name SearchWorkAttributeValuesForWorklogs
     * @summary Search Work Attribute values
     * @request POST:/worklogs/work-attribute-values/search
     */
    searchWorkAttributeValuesForWorklogs: (data: WorkAttributeSearchInput, params: RequestParams = {}) =>
      this.request<WorkAttributeValuesByWorklog[], void>({
        path: `/worklogs/work-attribute-values/search`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing Worklog for the given id
     *
     * @tags Worklogs
     * @name DeleteWorklog
     * @summary Delete Worklog
     * @request DELETE:/worklogs/{id}
     */
    deleteWorklog: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/worklogs/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Retrieves an existing Worklog for the given id
     *
     * @tags Worklogs
     * @name GetWorklogById
     * @summary Retrieve Worklog
     * @request GET:/worklogs/{id}
     */
    getWorklogById: (id: string, params: RequestParams = {}) =>
      this.request<Worklog, void>({
        path: `/worklogs/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing Worklog for the given id using the provided input and returns the updated Worklog
     *
     * @tags Worklogs
     * @name UpdateWorklog
     * @summary Update Worklog
     * @request PUT:/worklogs/{id}
     */
    updateWorklog: (id: string, data: WorklogUpdate, params: RequestParams = {}) =>
      this.request<Worklog, void>({
        path: `/worklogs/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a list of all Work Attribute values for the given Worklog
     *
     * @tags Worklogs
     * @name GetWorkAttributeValuesForWorklog
     * @summary Retrieve Work Attribute values for Worklog
     * @request GET:/worklogs/{id}/work-attribute-values
     */
    getWorkAttributeValuesForWorklog: (id: string, params: RequestParams = {}) =>
      this.request<WorkAttributeValueResults, void>({
        path: `/worklogs/${id}/work-attribute-values`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves a specific Work Attribute value using the provided key, for the given Worklog
     *
     * @tags Worklogs
     * @name GetWorkAttributeValueForWorklog
     * @summary Retrieve Work Attribute value for Worklog
     * @request GET:/worklogs/{id}/work-attribute-values/{key}
     */
    getWorkAttributeValueForWorklog: (id: string, key: string, params: RequestParams = {}) =>
      this.request<WorkAttributeValue, void>({
        path: `/worklogs/${id}/work-attribute-values/${key}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
