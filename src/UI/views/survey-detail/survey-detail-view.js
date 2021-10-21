import { MainLayout } from 'UI/components';
import { MultipleSelection, Opinion } from './components';

import "./styles.scss";

export const SurveyDetailView = ({ survey, comeback }) => {


    return (
        <section className="survey">
            <MainLayout title='Encuesta' comeback={comeback} bottomMenu={false}>
                <h4>{survey?.title}</h4>
                <div className="questions">
                    {
                        survey?.questions?.map((question, i) => (
                            question.type === 'multiple' ? (
                                <MultipleSelection question={question} key={question.id} number={i+1}/>
                            ) : (
                                <Opinion question={question} key={question.id} number={i+1}/>
                            )
                        ))
                    }
                </div> 
                {
                    !survey.questions[0].answer &&
                        <button className='btn-primary'>
                            Enviar
                        </button>
                }
            </MainLayout>
        </section>
    );
};