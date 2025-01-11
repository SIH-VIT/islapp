import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard, Folder, Note } from "./pages";

import "./index.css";
import Layout from "./layout";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="trash" element={<Dashboard />} />
				</Route>
				<Route path="/folders" element={<Layout />}>
					<Route path=":folder" element={<Folder />} />
				</Route>
				<Route path="/note" element={<Layout />}>
					<Route path=":note" element={<Note />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
