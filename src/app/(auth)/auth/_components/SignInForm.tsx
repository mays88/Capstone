import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signInWithEmailAndPassword } from "../actions";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const FormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(1, {
        message: "Password is required.",
    }),
});

export default function SignInForm() {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });
    const router = useRouter();

    function onSubmit(data: z.infer<typeof FormSchema>) {
        startTransition(async () => {
            const result = await signInWithEmailAndPassword(data);
            const { error } = JSON.parse(result);

            if (error?.message) {
                toast({
                    variant: "destructive",
                    title: "You submitted the following values:",
                    description: (
                        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                            <code className="text-white">{error.message}</code>
                        </pre>
                    ),
                });
            } else {
                toast({
                    title: "You submitted the following values:",
                    description: (
                        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                            <code className="text-white">
                                Successfully Logged In!
                            </code>
                        </pre>
                    ),
                });
                router.push("/dashboard");
            }
        });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example@gmail.com"
                                    {...field}
                                    type="email"
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="password"
                                    {...field}
                                    type="password"
                                    onChange={field.onChange}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full flex gap-2">
                    SignIn
                    <AiOutlineLoading3Quarters
                        className={cn("animate-spin", { hidden: !isPending })}
                    />
                </Button>
            </form>
        </Form>
    );
}
