import { StandarMainSectionContainer, MenuButton, ChatButton } from 'UI/components';

import "./styles.scss";

export const HelpSection = () => {

    return (
        <section className="help-section">
            <StandarMainSectionContainer title='ayuda'>
                <MenuButton 
                    isLink={true} 
                    link='/ayuda/preguntas-frecuentes' 
                    className='mb' 
                    icon='icon-faq' 
                    text='Preguntas frecuentes'
                />
                <MenuButton 
                    isLink={true} 
                    link='/ayuda/contacto'
                    icon='icon-contact' 
                    text='Comunícate con nosotros'
                />
                <ChatButton />
            </StandarMainSectionContainer>
        </section>
    );
};
