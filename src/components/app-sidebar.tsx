"use client"
import * as React from "react"
import {
    Aperture,
    ArchiveX,
    BookOpen,
    Bot,
    Command,
    File,
    Inbox,
    LayoutDashboard,
    Send,
    Settings2,
    SquareTerminal,
    Trash2, Users
} from "lucide-react"
import {NavUser} from "@/components/nav-user"
import {Label} from "@/components/ui/label"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarInput,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import {usePathname} from "next/navigation";
// This is sample data
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
}

const NavigationData = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
        isActive: true,
    },
    {
        title: "Stammdaten",
        url: "/clients",
        icon: Users,
        isActive: true,
    },
    {
        title: "Einstellungen",
        url: "/settings",
        icon: Settings2,
    },
];

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();

    console.log(pathname);
    const [activeItem, setActiveItem] = React.useState(NavigationData[0])
    return (
        <Sidebar
            collapsible="icon"
            {...props}
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                            <a href="#">
                                <div
                                    className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Aperture className="size-4"/>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">Developer Test</span>
                                    <span className="truncate text-xs">KiBotix GmbH</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="px-1.5 md:px-0">
                        <SidebarMenu>
                            {NavigationData.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        tooltip={{
                                            children: item.title,
                                            hidden: false,
                                        }}
                                        isActive={item.url == pathname}
                                        className="px-2.5 md:px-2"
                                        asChild
                                    >

                                        <a href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
        </Sidebar>
    )
}
