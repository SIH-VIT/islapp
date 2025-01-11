import {
	ArchiveRestore,
	BookOpen,
	House,
	Send,
	Settings2,
	Star,
	Trash,
	Trash2,
	Video,
	Text,
	GraduationCap,
} from "lucide-react";

export const data = {
	versions: ["Personal", "ONE", "Work"],
	user: {
		name: "John Doe",
		email: "john@gmail.com",
		avatar: "https://api.dicebear.com/9.x/bottts/svg",
	},
	folders: [
		{
			title: "Transcriptions",
			url: "/folders/transcriptions",
			icon: Text,
			isActive: true,
			items: [
				{
					title: "All Transcriptions",
					url: "/note/all-transcriptions",
				},
				{
					title: "Starred Transcriptions",
					url: "/note/starred-transcriptions",
				},
			],
		},
		{
			title: "Videos",
			url: "/folders/videos",
			icon: Video,
			items: [
				{
					title: "All Videos",
					url: "/note/all-videos",
				},
				{
					title: "Starred Videos",
					url: "/note/starred-videos",
				},
			],
		},
		{
			title: "How to use",
			url: "/folders/how",
			icon: BookOpen,
			items: [
				{
					title: "Introduction",
					url: "/note/introduction",
				},
				{
					title: "Get Started",
					url: "/note/get-started",
				},
				{
					title: "Tutorials",
					url: "/note/tutorials",
				},
			],
		},
	],
	navSecondary: [
		{
			title: "Feedback",
			url: "/feedback",
			icon: Send,
		},
		{
			title: "Settings",
			url: "/settings",
			icon: Settings2,
		},
	],
	navMain: [
		{
			name: "Home",
			url: "/",
			icon: House,
			color: "text-primary",
			isActive: true,
		},
		{
			name: "Learn",
			url: "/learn",
			icon: GraduationCap,
			color: "text-green-500",
		},
		{
			name: "Starred",
			url: "/starred",
			icon: Star,
			color: "text-yellow-500",
		},
		{
			name: "Trash",
			url: "/trash",
			icon: Trash,
			color: "text-red-500",
			dropdown: true,
			dropdownMenu: [
				{
					title: "Restore Trash",
					url: "#",
					icon: ArchiveRestore,
					color: "text-muted-foreground",
				},
				{
					title: "Empty Trash",
					url: "#",
					icon: Trash2,
					color: "text-red-500",
				},
			],
		},
	],
};
