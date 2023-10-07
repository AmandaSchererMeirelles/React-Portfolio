import { ExternalLink } from '@/components/ExternalLink';
import { Profile } from '@/components/Profile';
import data from '../../data.json'

import styles from "./index.module.css";
import { ProjectImage } from '@/components/ProjectImage';
import { WorkExperience } from '@/components/WorkExperience';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Profile />
        <div className={styles.socialMedia}>
          <ExternalLink
            link="https://www.linkedin.com/in/amanda-scherer-meirelles-17a329294/"
            title="Linkedin" />
          <ExternalLink link="https://github.com/AmandaSchererMeirelles" title="GitHub" />
          <ExternalLink link="#" title="Instagram" />
        </div>
        
    <div className={styles.works}>

    <WorkExperience
          rule="Empreendedora e Estudante Crie TI"
          year="2023"
          company="Univates" />
    <WorkExperience
        rule="Gerente de almoxarifado"
        year="2020 á 2022"
        company="Wel Distriburidora Lajeado-RS" />
    

      <WorkExperience
        rule="Proprietária Trailer Lanches"
        year="2015 á 2019"
        company="Dog Haus Florianópolis-SC" />
      </div>
      </div>


      <div>
        {data.map((project) => {
          return (
            <Link key={project.id} href={`project/${project.id}`}>
              <ProjectImage img={project.imagem} alt={project.titulo} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
