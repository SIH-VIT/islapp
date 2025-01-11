 

import * as React from "react"
import { Check, ChevronsUpDown, Snowflake } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

export function Switcher({
    versions,
    defaultVersion,
}: {
    versions: string[]
    defaultVersion: string
}) {
    const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion)

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground border-none"
                            tooltip="Switch Workplace"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                {/* <GalleryVerticalEnd className="size-4" /> */}
                                <span className="md:font-semibold">{selectedVersion[0]}</span>
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                {/* <span className="font-semibold">Workplace</span> */}
                                <span className="font-semibold">{selectedVersion}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width]"
                        align="start"
                    >
                        {versions.map((version) => (
                            <DropdownMenuItem
                                key={version}
                                onSelect={() => setSelectedVersion(version)}
                            >
                                {version}{" "}
                                {version === selectedVersion && <Check className="ml-auto" />}
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 p-2">
                            <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                                <Snowflake className="size-4" />
                            </div>
                            <div className="font-medium text-muted-foreground">Manage Workplaces</div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
