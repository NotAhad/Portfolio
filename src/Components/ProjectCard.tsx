interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    language: string;
    github: string;
  }
  
  export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, language, github }) => {
    return (
      <div>
        <div className="bg-[rgb(30,30,30)] p-4 rounded-lg w-[440px] border-[3px] border-[rgb(40,40,40)] flex flex-col gap-4">
          <div className="h-[225px] rounded-lg border-[3px] border-[rgb(40,40,40)]">
            <img src={image} alt="" className="h-full w-full rounded-lg" />
          </div>
  
          <div className="text-center">
            <h1 className="font-Tech text-[1.5rem]">{title}</h1>
            <p className="tracking-[0.1em]">{description}</p>
          </div>
  
          <div className="rounded-lg h-[50px] flex gap-4">
            <img src="public/react.png" alt="react" className="p-2 h-full min-w-[3.25rem]" />
            <img src={language} alt="language" className="p-2 h-full min-w-[3.25rem]" />
            <img src="public/tw.png" alt="tailwind" className="p-2 h-full min-w-[3.25rem]" />
          </div>
  
          <div className="flex gap-10">
            <button className="bg-[rgb(40,40,40)] h-[50px] w-1/2 rounded-lg cursor-pointer ">
              <a href={github} target="_blank" rel="noopener noreferrer" className="font-Tech text-[1.25rem] tracking-[0.1rem]">
                GITHUB
              </a>
            </button>
            <div className="bg-[rgb(40,40,40)] h-[50px] w-1/2 rounded-lg">
              Site
            </div>
          </div>
        </div>
      </div>
    );
  };
  