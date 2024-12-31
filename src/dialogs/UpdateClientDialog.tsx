'use client'

import {Button} from "../components/ui/button";
import {Edit} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Client} from "@/types/Client";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { UpdateClientInput, updateClientInputSchema } from "@/schemas/UpdateClientInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useId, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Textarea } from "@/components/ui/textarea";


type UpdateClientDialogProps = {
    client: Client;
}


export const UpdateClientDialog = (props: UpdateClientDialogProps) => {
    const {toast} = useToast();
    const formId = useId();
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient()
    
    const form = useForm<UpdateClientInput>({
        defaultValues: props.client,
        resolver: zodResolver(updateClientInputSchema),
        shouldUnregister: true,
    });
    useEffect(() => {
        form.reset(props.client);
      }, [props.client]);
   
    const onSubmit = async (values: UpdateClientInput) => {


        const response = await fetch('/api/clients', {
            method: 'PUT',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        });

        if (response.status === 200) {
            const content = await response.json();
            toast({
                title: 'Nutzer wurde erfolgreich bearbeitet.'
            });

            await queryClient.invalidateQueries({queryKey: ['clients']})

            setOpen(false);

        } else {
            toast({
                title: 'Nutzer konnte nicht bearbeitet werden.',
                variant: "destructive"
            });
        }

    }

    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant="link"><Edit/></Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Nutzer bearbeiten</DialogTitle>
            <DialogDescription>
                Bearbeite den Nutzer.
            </DialogDescription>
            <div className="grid gap-4">

                <Form {...form}>
                    <form id={formId} onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <Input type="hidden" value={props.client.id}  {...form.register("userId")}/> 
                    
                        <FormField control={form.control} name="name" render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Max Mustermann" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                        <FormField name="email" render={({field}) => (
                            <FormItem>
                                <FormLabel>E-Mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="max.mustermann@example.com" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>

                        <FormField name="street" render={({field}) => (
                            <FormItem>
                                <FormLabel>Straße</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Musterstraße" {...field}/>
                                </FormControl>
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
                                    <FormMessage/>
                                </FormItem>
                            )}/>

                            <FormField name="city" render={({field}) => (
                                <FormItem className="col-span-2">
                                    <FormLabel>Stadt {updateClientInputSchema.shape.city.isOptional() &&
                                        <span className="text-destructive">*</span>}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Musterstadt" {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                        </div>
                        <FormField name="notes" render={({field}) => (
                            <FormItem>
                                <FormLabel>Notes {updateClientInputSchema.shape.notes.nullable() &&
                                    <span className="text-neutral-300">(fakultativ)</span>}</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Dieser Nutzer ist  ...." {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                    </form>
                </Form>
            </div>
            <DialogFooter>
                <Button form={formId} type="submit" disabled={!form.formState.isValid}>Edit</Button>
            </DialogFooter>
        </DialogHeader>
        </DialogContent>
    </Dialog>
}
