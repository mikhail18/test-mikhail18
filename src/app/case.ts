export interface Case {
    CaseID: number;
    CaseNumber: string;
    CaseName: string;
    CaseCategoryID: number;
    ItemCount: number;
    Score: number;
    AssignedOn: string;
    WorkFlowPositionID: number;
    CreatedOn: string;
    CreatedByUserID: string;
    FollowUpFlag: number;
    SARTypeID: number;
    ItemAmount: number;
    ConfigurationName?: string;
    ClientCaseLabel1: number;
    ClientCaseLabel2: number;
    ClientCaseLabel3: string;
    ClientCaseLabel4: number;
    ClientCaseLabel6: number;
    CaseViewTabGroupID: number;
    CaseTypeID: number;
    LinkedCaseID: number;
    IsLocked: boolean;
}


