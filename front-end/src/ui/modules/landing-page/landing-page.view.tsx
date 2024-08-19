//Views
import { HeaderView } from "./components/header/header.view"
import { HeroTopView } from "./components/hero-top/hero-top.view"
import { ProjectsView } from "./components/projects/projects.view"
import { SkillsView } from "./components/skills/skills.view"
import { ValuesView } from "./components/values/values.view"

export const LandingPageView = () => {
    return (
        <>
            <HeaderView />
            <HeroTopView />
            <SkillsView />
            <ProjectsView />
            <ValuesView />
        </>
    )
}