export interface IconProps {
    type: string;
    color?: string;
    width?: number;
    height?: number;
}

export interface HomeTable {
    subject: string;
    targetAmount: number;
    targetDate?: Date;
    status: string;
    note?: string;
}

export interface ActivityList {
    id: number;
    pic?: string;
    subject: string;
    targetAmount: number;
    targetDate?: Date;
    status: string;
    currentAmount: number;
    updatedAt: string;
    note?: string;
}

export interface DetailsTable {
    id: number;
    deposited: number;
    createdOn: Date;
    isUpdate: boolean;
}