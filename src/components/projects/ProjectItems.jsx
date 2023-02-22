import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <p className="project__description">
                {item.description}
            </p>
            <a href={item.url} className='project-url'>{item.urlDisplay}</a>
            <div className='tech-container'>
            {item.tech.map((tech) =><p className='tech-item'> {tech}</p>)}
            </div>
           
        </div>
    );
}

export default ProjectItems;