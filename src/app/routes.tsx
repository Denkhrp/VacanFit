import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { Onboarding } from "./components/Onboarding";
import { ProfileUpload } from "./components/ProfileUpload";
import { QuickSurvey } from "./components/QuickSurvey";
import { SkillGapMap } from "./components/SkillGapMap";
import { PersonalizedRoadmap } from "./components/PersonalizedRoadmap";
import { ProgressDashboard } from "./components/ProgressDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/profile-upload",
    Component: ProfileUpload,
  },
  {
    path: "/survey",
    Component: QuickSurvey,
  },
  {
    path: "/skill-gap",
    Component: SkillGapMap,
  },
  {
    path: "/roadmap",
    Component: PersonalizedRoadmap,
  },
  {
    path: "/dashboard",
    Component: ProgressDashboard,
  },
]);
