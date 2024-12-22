'use Client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";

export const CreateClientDialog = ()=> {
    return <Dialog>
        <DialogTrigger>
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
        </DialogContent>
    </Dialog>
}
