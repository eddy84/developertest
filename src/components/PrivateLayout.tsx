import {SidebarProvider} from "./ui/sidebar";
import {AppSidebar} from "./app-sidebar";
import {ReactNode} from "react";

export const PrivateLayout = (props: { children: ReactNode }) => {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "250px",
                } as React.CSSProperties
            }
        >
            <AppSidebar/>
            {props.children}
        </SidebarProvider>
    );
}
