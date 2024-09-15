import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../TimeLine/Timeline.scss';

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
            <h2 className="vertical-timeline-element-title">Développeur intégrateur web</h2>
            <h3 className="vertical-timeline-element-subtitle">OpenClassrooms</h3>
            <p>
              \ HTML - CSS <br></br>
              \ Javascript <br></br>
              \ Gestion de projet <br></br>
              \ React <br></br>
              \ Optmisation SEO et performances du site <br></br>
              \ Acessibilité et référencement <br></br>
              \ Express et Node JS           
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Avril 2023"
            iconStyle={{ color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Stage à Des Sources Studio</h2>
            <h3 className="vertical-timeline-element-subtitle">Des Sources Studio à Toulon</h3>
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
            <h2 className="vertical-timeline-element-title">Stage aux Editions "La Gauloise"</h2>
            <h3 className="vertical-timeline-element-subtitle">Editions "La Gauloise" à Vence</h3>
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
            <h2 className="vertical-timeline-element-title">Licence de Psychologie</h2>
            <h3 className="vertical-timeline-element-subtitle">Toulouse, France</h3>
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