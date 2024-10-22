/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateUserParams = {
    clerkId: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
};

declare type UserParams = {
    id: number;
    clerkId: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
    createdAt: Date | null;
};

declare type InterviewParams = {
    id: number;
    createdAt: string | null;
    jsonMockResp: string;
    jobPosition: string;
    jobDesc: string;
    jobExperience: string;
    user_id: number | null;
    mockID: string;
}

declare interface InterviewQuestions {
    question: string;
    answer: string;
}

declare interface feedbackParams {
    interview_id: number | null;
    id: number;
    createdAt: string | null;
    user_id: number | null;
    feedback: string;
    question: string;
    correctAns: string;
    userAns: string;
    rating: string;
}

declare interface feedbackGenerateParams {
    mockInterviewID: string,
    question: string,
    correctAns: string,
    userAns: string,
    userID: string,
    createdAt: string | null,
}

declare interface feedback {
    rating: string,
    feedback: string,
}

declare type UpdateUserParams = {
    firstName: string;
    lastName: string;
    username: string;
    photo: string;
};

declare interface Appfeedback {
    rating: number,
    quote: string,
}

declare interface AppfeedbackGenerateParams {
    name: string,
    quote: string,
    rating: number,
    picture: string,
    user_id: string,
}

declare interface AppfeedbackParams {
    id?: number;
    createdAt?: string | null;
    name: string;
    user_id: number | null;
    rating: number;
    quote: string;
    picture: string | null;
}