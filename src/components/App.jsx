import dataResume from './dataresume.json'

import { Info } from './info/info';
import {Project} from './projects/projects';
import {Works} from './works/works';
import { Educations } from './educatons/educatons';
import {Contacts} from './contacts/contacts';
import {Softskils} from './softskills/softskills';

export const App = () => {
  return (
    <>
      <Info
        key={dataResume.name.en}
        name={dataResume.name.en}
        profesional={dataResume.profesion.en}
        description={dataResume.description.en}
      />
      <Project
        key='experienceProject'
        experienceProject={dataResume.experienceProject.en}
      />
      <Works
        key='experienceWork'
        experienceWork={dataResume.experienceWork.en}
      />
      <Educations
        key='education'
        education={dataResume.education.en}
      />
      <Contacts
        key='contacts'
        contacts={dataResume.contacts.en}
      />
      <Softskils
        key='softskils'
        softskils={dataResume.skils.soft.en}
      />
    </>
  );
};
