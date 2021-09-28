import { 
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ProtectedRoute } from "./auth";
import * as views from "./UI/views";
import { useApp } from 'hooks';
import { LoadingScreen } from 'UI/components';
import { InfoModal } from 'UI/modals';

// Importando estilos
import "./App.scss";

function App() {

  const { isLoading, infoModal } = useApp();

  return (
    <Router>
        { isLoading && <LoadingScreen />}
        { infoModal.type && <InfoModal type={infoModal.type} handleClose={infoModal.handleClose} autoClose={infoModal.autoClose} showingTime={infoModal.showingTime} action={infoModal.action} message={infoModal.message} link={infoModal.link} linkMessage={infoModal.linkMessage} title={infoModal.title} />}
        <Switch>
          <ProtectedRoute path='/comentarios/reportar-error' exact>
            <views.ReportError />
          </ProtectedRoute>
          <ProtectedRoute path='/comentarios/enviar-comentario' exact>
            <views.SendComment />
          </ProtectedRoute>
          <ProtectedRoute path='/comentarios' exact>
            <views.AppComments />
          </ProtectedRoute>
          <ProtectedRoute path='/encuestas/:id' exact>
            <views.SurveyDetail />
          </ProtectedRoute>
          <ProtectedRoute path='/encuestas' exact>
            <views.Surveys />
          </ProtectedRoute>
          <ProtectedRoute path='/eventos' exact>
            <views.Events />
          </ProtectedRoute>
          <ProtectedRoute path='/comunicados' exact>
            <views.Statements />
          </ProtectedRoute>
          <ProtectedRoute path='/ayuda/contacto' exact>
            <views.ContactUs />
          </ProtectedRoute>
          <ProtectedRoute path='/ayuda/preguntas-frecuentes' exact>
            <views.FrecuentlyAskedQuestions />
          </ProtectedRoute>
          <ProtectedRoute path='/ayuda' exact>
            <views.HelpSection />
          </ProtectedRoute>
          <ProtectedRoute path='/vehiculos' exact>
            <views.Vehicles />
          </ProtectedRoute>
          <ProtectedRoute path='/pagos/:id' exact>
            <views.Payments />
          </ProtectedRoute>
          <ProtectedRoute path='/pagos' exact>
            <views.Payments />
          </ProtectedRoute>
          <ProtectedRoute path='/incidentes/reportes-generados' exact>
            <views.GeneratedReports />
          </ProtectedRoute>
          <ProtectedRoute path="/incidentes/reportar-incidente" exact>
            <views.NewIncident />
          </ProtectedRoute>
          <ProtectedRoute path="/incidentes" exact>
            <views.Incidents />
          </ProtectedRoute>
          <Route path="/visitas/codigo/:code" exact>
            <views.QRScreen />
          </Route>
          <ProtectedRoute path="/visitas/invitaciones-enviadas/:id" exact>
            <views.InvitationsSent />
          </ProtectedRoute>
          <ProtectedRoute path="/visitas/invitaciones-enviadas" exact>
            <views.InvitationsSent />
          </ProtectedRoute>
          <ProtectedRoute path="/visitas/nueva-invitación">
            <views.NewInvitation />
          </ProtectedRoute>
          <ProtectedRoute path="/visitas">
            <views.Visits />
          </ProtectedRoute>
          <Route path="/recuperar-contraseña">
            <views.PasswordRecovery />
          </Route>
          <Route path="/perfiles">
            <views.SelectProfile />
          </Route>
          <Route path="/signup">
            <views.SignUp />
          </Route>
          <Route path="/login">
            <views.Login />
          </Route>
          <ProtectedRoute path="/">
            <views.Home />
          </ProtectedRoute>
        </Switch>
    </Router>
  );
}

export default App;
