'use client'

import {SidebarTrigger} from "../components/ui/sidebar";
import {Separator} from "../components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "../components/ui/breadcrumb";
import {CreateClientDialog} from "../dialogs/CreateClientDialog";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "../components/ui/table";
import Link from "next/link";
import {Badge} from "../components/ui/badge";
import {QueryClientProvider, useQuery} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import {ClientsResponse} from "@/types/Client";
import {UpdateClientDialog} from "../dialogs/UpdateClientDialog";


// react query client which is usually added in a client component in the layout
const queryClient = new QueryClient()

const ClientsTable = () => {

    const result = useQuery<ClientsResponse>({
        queryKey: ['clients'],
        queryFn: async () => {
            const response = await fetch('/api/clients')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })

    console.log(JSON.stringify(result.data));
    const data = result.data?.clients ?? []

    return <Table>
        {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
        <TableHeader>
            <TableRow>
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
            {data.length === 0 && (
                <TableRow>
                    <TableCell
                        colSpan={7}
                        className='h-24 text-center'
                    >
                        Keine Einträge gefunden.
                    </TableCell>
                </TableRow>
            )}
            {data.map((client, index) =>
                <TableRow key={index}>
                    <TableCell><Link href={`clients/${client.id}`}>{client.name}</Link></TableCell>
                    <TableCell><Badge variant={"secondary"}>aktiv</Badge></TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell className="text-right">{client.postcode}</TableCell>
                    <TableCell>{client.city}</TableCell>
                    <TableCell>{client.street}</TableCell>
                    <TableCell className="text-center"><UpdateClientDialog client={client}/></TableCell>
                </TableRow>
            )}

        </TableBody>
    </Table>
}

export const ClientsPage = () => {

    return <div className="flex flex-1 flex-col gap-4 p-4">
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
        <div className="flex justify-end">
            <CreateClientDialog/>
        </div>
        <QueryClientProvider client={queryClient}>
            <ClientsTable/>
        </QueryClientProvider>
    </div>
}
