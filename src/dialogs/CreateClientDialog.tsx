'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {FormInput, Plus} from "lucide-react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {useId} from "react";

// type CreateClientInput = {
//     name: string;
//     email: string;
//     street: string;
//     postcode: string;
//     city: string;
//     note?: string;
// }

const formSchema = z.object({
    name: z.string().min(6),
    email: z.string().email(),
    street: z.string().min(3),
    postcode: z.string().min(4),
    city: z.string().min(3),
    note: z.string().max(2000).optional()
});

type CreateClientInput = z.infer<typeof formSchema>;

export const CreateClientDialog = () => {

    const formId = useId();
    const form = useForm<CreateClientInput>({
        defaultValues: {name: '', email: '',street: '', postcode: '', city: ''},
        resolver: zodResolver(formSchema)
    });

    const onSubmit = (values: CreateClientInput) => {

        form.reset({name: '', email: '',street: '', postcode: '', city: ''});
    }

    return <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline"><Plus/> Neuer Nutzer</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Neuen Nutzer anlegen</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">

                <Form {...form}>
                    <form id={formId} onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                        <FormField control={form.control} name="name" render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Max Mustermann" {...field}/>
                                </FormControl>
                                {/*<FormDescription>Diese ist der Benutzername</FormDescription>*/}
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField name="email" render={({field}) => (
                            <FormItem>
                                <FormLabel>E-Mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="max.mustermann@example.com" {...field}/>
                                </FormControl>
                                {/*<FormDescription>Diese ist der Benutzername</FormDescription>*/}
                                <FormMessage/>
                            </FormItem>
                        )}/>

                        <FormField name="street" render={({field}) => (
                            <FormItem>
                                <FormLabel>Straße</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Musterstraße" {...field}/>
                                </FormControl>
                                {/*<FormDescription>Diese ist der Benutzername</FormDescription>*/}
                                <FormMessage/>
                            </FormItem>
                        )}/>

                        <div className="grid grid-cols-3 gap-2">
                            <FormField name="postcode" render={({field}) => (
                                <FormItem className="col-span-1">
                                    <FormLabel>PLZ</FormLabel>
                                    <FormControl>
                                        <Input placeholder="PLZ eingeben" {...field}/>
                                    </FormControl>
                                    {/*<FormDescription>Diese ist der Benutzername</FormDescription>*/}
                                    <FormMessage/>
                                </FormItem>
                            )}/>

                            <FormField name="city" render={({field}) => (
                                <FormItem className="col-span-2">
                                    <FormLabel>Stadt {!formSchema.shape.city.isOptional() && <span className="text-destructive">*</span>}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Musterstadt" {...field}/>
                                    </FormControl>
                                    {/*<FormDescription>Diese ist der Benutzername</FormDescription>*/}
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                        </div>
                    </form>
                </Form>
            </div>
            <DialogFooter>
                <Button form={formId} type="submit" disabled={!form.formState.isValid}>Submit</Button>
            </DialogFooter>
        </DialogContent>

    </Dialog>
}
