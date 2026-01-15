import "./assets/styles/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppLayout } from "./layouts";
import { ThemeProvider } from "./components";
import { TaskEditorProvider } from "./contexts/taskEditor";
import { TasksProvider } from "./contexts/tasks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <TasksProvider>
        <TaskEditorProvider>
          <AppLayout />
        </TaskEditorProvider>
      </TasksProvider>
    </ThemeProvider>
  </StrictMode>
);
