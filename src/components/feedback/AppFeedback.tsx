"use client";
import React, { FormEvent, useEffect, useState, useTransition } from 'react';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Button } from '../ui/button';
import { generateAppfeedback, getAppfeedback } from '@/lib/actions/feedback.actions';
import { ToastAction } from '../ui/toast';
import { toast } from '@/hooks/use-toast';
import { useUser } from '@clerk/nextjs';
import { LoaderCircle } from 'lucide-react';
import { FormError } from '../shared/FormError';
import { FormSuccess } from '../shared/FormSuccess';
import FeedBackLists from './FeedBackList';

export const AppFeedback = () => {
    const [value, setValue] = useState<Appfeedback>({
        quote: "",
        rating: 0,
    });

    const [updateFieldTrigger, setUpdateFieldTrigger] = useState<number>();

    const [feedBackList, setFeedBackList] = useState<AppfeedbackParams[] | []>([]);
    const [isLoading, startLoading] = useTransition();

    useEffect(() => {
        startLoading(() => {
            getAppfeedback()
                .then((data) => {
                    if (data?.success) {
                        setFeedBackList(data?.success);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching feedback:", error);
                });
        });
    }, [updateFieldTrigger]);

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const { user } = useUser();

    const userName = user?.username as string;
    const userImageUrl = user?.imageUrl as string;
    const userID = user?.id as string;

    const UpdateValue = (name: string, val: string | number) => {
        setValue({
            ...value,
            [name]: val,
        });
    };

    // Function to reset the form fields
    const resetForm = () => {
        setValue({
            quote: "",
            rating: 0,
        });
    };

    const onSubmit = (e: FormEvent<HTMLFormElement | HTMLInputElement>) => {
        e.preventDefault(); // Prevent the form from submitting and reloading the page

        const values = {
            name: userName,
            quote: value.quote,
            rating: value.rating,
            picture: userImageUrl,
            user_id: userID,
        };

        setError("");
        setSuccess("");
        startTransition(() => {
            generateAppfeedback(values)
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
                                <ToastAction altText="Dismiss">Dismiss</ToastAction>
                            )
                        });
                    }

                    if (data?.success) {
                        toast({
                            title: "Successfully Submit!!",
                            description: data.success,
                            duration: 2000,
                            action: (
                                <ToastAction altText="Close">Close</ToastAction>
                            ),
                        });
                        setUpdateFieldTrigger(Date.now());
                    }
                }).catch((error) => {
                    toast({
                        title: "Failed!!",
                        description: error.message,
                        duration: 2000,
                        variant: "destructive",
                        action: (
                            <ToastAction altText="Dismiss">Dismiss</ToastAction>
                        )
                    });
                })
                .finally(() => {
                    resetForm();
                });
        });
    };

    const ratingStyles = {
        itemShapes: RoundedStar,
        itemStrokeWidth: 2,
        activeFillColor: "#FE7D07",
        activeStrokeColor: '#FE7D07',
        inactiveFillColor: '#D3D3D3',
        inactiveStrokeColor: "#D3D3D3",
    };
    
    return (
        <section className='my-10 flex flex-col justify-center gap-10'>
            <form onSubmit={onSubmit}>
                <div className='flex justify-between items-center gap-2 my-3'>
                    <Label className='text-xl text-[#0F1838] font-medium' htmlFor='quote'>Quote</Label>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <Label className='text-xl text-[#0F1838] font-medium' htmlFor='rating'>Rating</Label>
                        <Rating
                            id='rating'
                            style={{ maxWidth: 150 }}
                            value={value.rating}
                            onChange={(e: number) => UpdateValue("rating", e)}
                            itemStyles={ratingStyles}
                            isDisabled={isPending}
                        />
                    </div>
                </div>

                <Textarea
                    id='quote'
                    value={value.quote} // Bind the Textarea value directly to the state
                    placeholder="This S.A.A.S Application is very Useful."
                    onChange={(e) => UpdateValue("quote", e.target.value)}
                    disabled={isPending}
                />

                {/* Error/Success Messages */}
                {error && <FormError message={error} />}
                {success && <FormSuccess message={success} />}

                <Button type='submit' size={"lg"} className='my-4' disabled={isPending}>
                    {isPending ?
                        <LoaderCircle className="animate-spin" />
                        : "Save"}
                </Button>
            </form>
            {
                isLoading ?
                    <div className='flex justify-center items-center'>
                        <LoaderCircle className='animate-spin text-primary' size={100} />
                    </div>
                    : <FeedBackLists feedBackList={feedBackList} />
            }
        </section>
    );
};
