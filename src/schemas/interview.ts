import * as z from "zod"

export const CreateInterviewSchema = z.object({
    jobPosition: z.string().min(1, "Job Position is required"),
    jobDescription: z.string().min(1, "Job Description is required"),
    jobExperience: z.string().min(1, "Job Experience is required"),
})
