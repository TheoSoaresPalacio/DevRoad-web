import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import { AchievementProvider } from "./contexts/AchievementContext";
import { StreakProvider } from "./contexts/StreakContext";
import AchievementNotification from "./components/AchievementNotification";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Achievements from "./pages/Achievements";
import ConceptDetail from "./pages/ConceptDetail";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/project/:id"} component={ProjectDetail} />
      <Route path={"/concept/:conceptId"} component={ConceptDetail} />
      <Route path={"/achievements"} component={Achievements} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <ProgressProvider>
          <StreakProvider>
            <AchievementProvider>
              <TooltipProvider>
                <Toaster />
                <Router />
                <AchievementNotification />
              </TooltipProvider>
            </AchievementProvider>
          </StreakProvider>
        </ProgressProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
