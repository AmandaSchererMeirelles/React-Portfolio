import { useRouter } from 'next/router'
import data from "../../data.json";
import { ProjectImage } from '@/components/ProjectImage';

export default function Project() {
  const { query } = useRouter()

  const project = data.find(d => d.id === Number(query.id))

  return (
    <main>
    <h1>
      {project?.titulo}
         
    </h1>
    
    {project?.imagem &&  <ProjectImage img={project?.imagem} alt='imagem projeto'/>}
  

   
    </main>
  );
}
