export interface BreadCrumbsType {
    text:string,
    href?:string;
    onclick?: ()=> void;
}

export interface UserType{
    uid:string;
    email: string;
    name:string;
    label?:string;
}

export interface UserOption {
    uid: string;
    name: string;
    // Add other properties if necessary
  }
 
  export type MeetingJoinType = "anyone-can-join" | "video-conference" | "1-on-1";

export interface MeetingType{
    docId?: string;
    createdBy: string;
    invitedUsers: Array<string>;
    maxUsers: number;
    meetingDate: string;
    meetingId: string;
    meetingName: string;
    meetingType: MeetingJoinType;
    status: boolean;
}