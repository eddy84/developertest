import {PrivateLayout} from "@/components/PrivateLayout";
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

export default async function Page({params}: { params: { id: string } }) {
    const p = await params;
    const {id} = p;
    const idx = parseInt(id);
    const client = data.find((client) => client.id === idx);

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
                        <BreadcrumbSeparator className="hidden md:block"/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/clients/${client?.id}`}>{client?.name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>
        </div>
    </PrivateLayout>
}
