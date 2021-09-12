import { StandarMainSectionContainer, MenuButton, ChatButton } from 'UI/components';

import "./styles.scss";

export const Visits = () => {

    return (
        <section className="visits">
            <StandarMainSectionContainer title='Visitas' sectionSelected='visits'>
                <MenuButton 
                    isLink={true} 
                    link='/visitas/nueva-invitación' 
                    className='mb' 
                    icon='icon-add-guest' 
                    text='Agregar invitado'
                />
                <MenuButton 
                    isLink={true} 
                    link='/visitas/invitaciones-enviadas'
                    icon='icon-add-register' 
                    text='Invitaciones enviadas'
                />
                <ChatButton />
            </StandarMainSectionContainer>
        </section>
    );
};