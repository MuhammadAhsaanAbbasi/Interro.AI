"use client"
import React, { useState, useTransition } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateInterviewSchema } from '@/schemas/interview'
import { useUser } from '@clerk/nextjs'
import { FormError } from '../shared/FormError'
import { FormSuccess } from '../shared/FormSuccess'
import { generateinterview } from '@/lib/actions/interview.actions'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '../ui/toast'
import { useRouter } from 'next/navigation'


const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()

    const { toast } = useToast()
    const router = useRouter()
    const { user } = useUser();

    const userID = user?.id as string

    // Ensure userId is only added if the user is loaded
    const form = useForm<z.infer<typeof CreateInterviewSchema>>({
        resolver: zodResolver(CreateInterviewSchema),
        defaultValues: {
            jobPosition: "",
            jobDescription: "",
            jobExperience: "",
        },
    });

    // Simulate an async API call for interview submission
    const onSubmit = async (values: z.infer<typeof CreateInterviewSchema>) => {
        setError("")
        setSuccess("")
        startTransition(() => {
            generateinterview(values, userID)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                    if (data?.error) {
                        toast({
                            title: "Failed!!",
                            description: data.error,
                            duration: 2000,
                            variant: "destructive",
                            action: (
                                <ToastAction altText="Dismiss"  >Dismiss</ToastAction>
                            )
                        })
                        form.reset();
                        setOpenDialog(false)
                    }

                    if (data?.success) {
                        form.reset();
                        toast({
                            title: "Successfully Created!!",
                            description: data.success,
                            duration: 2000,
                            action: (
                                <ToastAction altText="Close">Close</ToastAction>
                            ),
                        })
                        setOpenDialog(false)
                        router.push(`/dashboard/interview/${data.res}`);
                    }
                })
        });
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 my-2 gap-5'>
            <div
                className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all border-dashed'
                onClick={() => setOpenDialog(true)}  // Open dialog on click
            >
                <h2 className='text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog
                open={openDialog}
                onOpenChange={setOpenDialog}  // Ensure the dialog can be closed/opened properly
            >
                <DialogContent className="max-w-2xl bg-secondary">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Tell us more about your job interview</DialogTitle>
                        <DialogDescription asChild>
                            <div>Add details about your job position/role, job description, and years of experience</div>
                        </DialogDescription>
                        <Form
                            {...form}
                        >
                            <form className="flex flex-col justify-center gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="jobPosition"
                                    render={({ field }) => (
                                        <FormItem className='mt-7 my-3'>
                                            <FormLabel htmlFor='position'>Job Role/Job Position</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    id='position'
                                                    disabled={isPending}
                                                    placeholder="Ex. Full Stack Developer"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="jobDescription"
                                    render={({ field }) => (
                                        <FormItem className='my-3'>
                                            <FormLabel htmlFor='description'>Job Description/Tech Stack (In Short)</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    id='description'
                                                    disabled={isPending}
                                                    placeholder="Ex. React, Angular, NodeJs, MySQL etc"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="jobExperience"
                                    render={({ field }) => (
                                        <FormItem className='my-3'>
                                            <FormLabel htmlFor='experience'>Years of Experience</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    id='experience'
                                                    disabled={isPending}
                                                    placeholder="Ex. 5"
                                                    type="number"
                                                    max="100"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Error/Success Messages */}
                                {error && <FormError message={error} />}
                                {success && <FormSuccess message={success} />}

                                <div className='flex gap-5 justify-end'>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={() => setOpenDialog(false)}
                                        disabled={isPending}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={isPending}  // Disable during submission
                                    >
                                        {isPending ? "Submitting..." : "Start Interview"}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview
