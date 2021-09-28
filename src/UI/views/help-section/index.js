import { comunicateConNosotros, preguntasFrecuentes } from 'UI/assets';
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
                    image={preguntasFrecuentes}
                    text='Preguntas frecuentes'
                />
                <MenuButton 
                    isLink={true} 
                    link='/ayuda/contacto'
                    image={comunicateConNosotros}
                    text='Comunícate con nosotros'
                />
                <ChatButton />
            </StandarMainSectionContainer>
        </section>
    );
};
