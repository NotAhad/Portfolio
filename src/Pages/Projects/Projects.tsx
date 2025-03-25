import NavBar from "../../Components/NavBar"
import { ProjectCard } from "../../Components/ProjectCard"

export const Projects = () => {
    return (
        <div>
            <NavBar/>
            <div className="flex justify-center mt-16 py-10 sm:mt-32">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(455px,1fr))] gap-y-6 w-[90%] justify-items-center">
                    <ProjectCard 
                        image={"/public/Project1.png"} 
                        title={"PORTFOLIO"}
                        description={"This site showcases my skills as a front-end web developer with a focus on clean design & seamless user interactions. It highlights my expertise in creating fully responsive & modern designs that adapt seamlessly across all devices. I integrated EmailJS into the contact form, enabling effortless, backend-free email communication."}
                        language={"/public/ts.png"}
                        />

                    <ProjectCard 
                        image={"/public/Project2.png"} 
                        title={"TASKLY"}
                        description={"A dynamic & user-friendly role-based task management web application, where admins can efficiently create & assign tasks through a dedicated dashboard, while employees have a streamlined interface to track their assignments. Featuring custom-built employee data, local storage for persistence & a responsive design."}
                        language={"/public/js.png"}
                    />

                    <ProjectCard 
                        image={"/public/Project3.png"} 
                        title={"FLOWLANCE"}
                        description={"A sleek & aesthetic Freelancer Dashboard to help manage projects, clients, & finances efficiently. Featuring interactive Chart.js visualizations, a Kanban board with a drag & drop interface that streamlines project tracking & Material UI for clean & structured data display in a table. All wrapped in a modern & responsive design."}
                        language={"/public/ts.png"}
                    />

                    <ProjectCard 
                        image={"/public/Project4.png"} 
                        title={"POKÉOS"}
                        description={"An interactive web application which integrates the Pokémon API. Featuring a Pokédex to explore detailed Pokémon data, a comparison tool to pit Pokémon against each other, a page to track your favourites & a fun Pokémon guessing game. It's designed for seamless navigation & optimized performance, offering an intuitive & responsive experience."}
                        language={"/public/ts.png"}
                    />
                </div>
            </div>
        </div>
    )
}
