import { registroDeReportes, reportarIncidente } from 'UI/assets';
import { StandarMainSectionContainer, MenuButton } from 'UI/components';
import { ChatButton } from 'UI/components';

import "./styles.scss";

export const Incidents = () => {

    return (
        <section className="incidents">
            <StandarMainSectionContainer title='Incidentes'>
                <MenuButton 
                    isLink={true} 
                    link='/incidentes/reportar-incidente' 
                    className='mb' 
                    image={reportarIncidente} 
                    text='Reportar incidente'
                />
                <MenuButton 
                    isLink={true}
                    link='/incidentes/reportes-generados'
                    image={registroDeReportes}
                    text='Registro de reportes'
                />
                <ChatButton />
            </StandarMainSectionContainer>
        </section>
    );
};
