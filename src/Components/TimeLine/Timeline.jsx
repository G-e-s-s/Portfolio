import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../TimeLine/Timeline.css';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Mon parcours</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeur intégrateur web</h3>
            <h4 className="vertical-timeline-element-subtitle">OpenClassrooms</h4>
            <p>
              \ HTML - CSS <br></br>
              \ Javascript <br></br>
              \ Gestion de projet <br></br>
              \ React <br></br>
              \ Optimisation et débug <br></br>
              \ Backend            
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Avril 2023"
            iconStyle={{ color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Stage à Des Sources Studio</h3>
            <h4 className="vertical-timeline-element-subtitle">Des Sources Studio à Toulon</h4>
            <p>
              / Design graphique, utilisation de logiciel graphique.<br></br>
              / Réalisation du design et de l'identité visuelle d'un site web, graphisme web.<br></br>
              / Charte graphique et création de maquettes.<br></br>
              / Supports de communications digitaux (réseaux sociaux, site internet, …) et éditoriaux avec la suite Adobe (marque-page, affiches, …). <br></br>
              / Traitement d'images numériques et mise en pages.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mai - Juin 2022"
            iconStyle={{ color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Stage aux Editions "La Gauloise"</h3>
            <h4 className="vertical-timeline-element-subtitle">Editions "La Gauloise" à Vence</h4>
            <p>
            \ Correction et mise en page de manuscrits. <br></br>
            \ Recherche iconographique, élaboration et rédaction de 4ᵉ de couverture et d'argumentaires.<br></br>
            \ Préparations et participation aux événements.<br></br>
            \ Relations avec les auteurs et les points de vente. <br></br>
            \ Supports de communications digitaux (mailing, réseaux sociaux, site internet, …) et éditoriaux avec la suite Adobe (marque-page, brochures, …).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Licence de Psychologie</h3>
            <h4 className="vertical-timeline-element-subtitle">Toulouse, France</h4>
            <p>
              / Université Jean-Jaurès <br></br>
              / Diplômée en 2023
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;