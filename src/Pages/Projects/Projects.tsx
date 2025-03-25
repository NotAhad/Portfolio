import NavBar from "../../Components/NavBar"
import { ProjectCard } from "../../Components/ProjectCard"

export const Projects = () => {
    return (
        <div>
            <NavBar/>
            <div className="flex justify-center mt-16 py-10 sm:mt-32">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(455px,1fr))] gap-y-6 w-[95%] justify-items-center">
                    <ProjectCard 
                        image={"/Project1.png"} 
                        title={"PORTFOLIO"}
                        description={"This site showcases my skills as a front-end web developer with a focus on clean design & seamless user interactions. It highlights my expertise in creating fully responsive & modern designs that adapt seamlessly across all devices. I integrated EmailJS into the contact form, enabling effortless backend-free email communication."}
                        language={"/ts.png"}
                        github={"https://github.com/NotAhad/Portfolio"}
                        />

                    <ProjectCard 
                        image={"/Project2.png"} 
                        title={"TASKLY"}
                        description={"A role-based task management web app with an admin dashboard for task creation and assignment & an intuitive employee interface for tracking tasks. Built with a modular component architecture, React Context API for state management & persistent authentication via local storage, along with accessibility best practices & form validation."}
                        language={"/js.png"}
                        github={"https://github.com/NotAhad/Taskly"}
                    />

                    <ProjectCard 
                        image={"/Project3.png"} 
                        title={"FLOWLANCE"}
                        description={"A sleek & aesthetic Freelancer Dashboard to help manage projects, clients & finances efficiently. Featuring interactive Chart.js visualizations, a Kanban board with a drag & drop interface that streamlines project tracking & Material UI for clean & structured data display in a table. All wrapped in a modern & responsive design."}
                        language={"/ts.png"}
                        github={"https://github.com/NotAhad/Flowlance"}
                    />

                    <ProjectCard 
                        image={"/Project4.png"} 
                        title={"POKÉOS"}
                        description={"A Pokémon web app integrating the Pokémon API for an optimized, accessible experience. Features include a dynamic Pokédex, a Pokémon comparison tool, a favorites tracker with persistent state & a guessing game. Utilizes memoization & debounced input handling. Designed with modular components and best practices in state management."}
                        language={"/ts.png"}
                        github={"https://github.com/NotAhad/PokeOS"}
                    />
                </div>
            </div>
        </div>
    )
}
