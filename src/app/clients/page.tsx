import {PrivateLayout} from "@/components/PrivateLayout";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

type Client = {
    id: number;
    name: string;
    email: string;
    street: string;
    postcode: string;
    city: string;
}
const data: Client[] = [
    {
        id: 1,
        name: 'Max Mustermann',
        email: 'max.mustermann@example.com',
        street: 'musterallee 12',
        postcode: '80331',
        city: 'München'
    },
    {
        id: 2,
        name: 'Heidi Sommer',
        email: 'heidi.sommer@example.com',
        street: 'Kurfüstendamm 12',
        postcode: '10115',
        city: 'Berlin'
    },
    {
        id: 3,
        name: 'Gertrud Röhrig',
        email: 'gertrud.roehrig@example.com',
        street: 'Kanalplatz 33',
        postcode: '50331',
        city: 'Düsseldorf'
    },
    {
        id: 4,
        name: 'Anneliese Müller',
        email: 'anneliese.mueller@example.com',
        street: 'Rheingraben 127',
        postcode: '30331',
        city: 'Karlsruhe'
    },
]

export default function () {
    return <PrivateLayout>
        <div className="flex flex-1 flex-col gap-4 p-4">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                <SidebarTrigger/>
                <Separator orientation="vertical" className="mr-2 h-4"/>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="/">
                                Developer Test
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block"/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/clients">Stammdaten</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[30px]">Id</TableHead>
                        <TableHead className="w-[180px]">Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>E-Mail</TableHead>
                        <TableHead className="w-[100px] text-right">PLZ</TableHead>
                        <TableHead className="w-[150px]">Stadt</TableHead>
                        <TableHead>Straße</TableHead>
                        <TableHead className="w-[80px] text-right">Aktionen</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((client, index) =>
                        <TableRow key={index}>
                            <TableCell className="font-medium">{client.id}</TableCell>
                            <TableCell><Link href={`clients/${client.id}`}>{client.name}</Link></TableCell>
                            <TableCell><Badge variant={"secondary"}>aktiv</Badge></TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell className="text-right">{client.postcode}</TableCell>
                            <TableCell>{client.city}</TableCell>
                            <TableCell>{client.street}</TableCell>
                            <TableCell className="text-center">[]</TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>
        </div>
    </PrivateLayout>
}
