'use client'

import {Button} from "../components/ui/button";
import {Edit, Plus} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Client} from "@/types/Client";

type UpdateClientDialogProps = {
    client: Client;
}

export const UpdateClientDialog = (props: UpdateClientDialogProps) => {
    return <Dialog>
        <DialogTrigger asChild>
            <Button variant="link"><Edit/></Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Nutzer bearbeiten</DialogTitle>
            <DialogDescription>
                Hier kannst du den Nutzer bearbeiten.
            </DialogDescription>
        </DialogHeader>
        </DialogContent>
    </Dialog>
}
