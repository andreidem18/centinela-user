import { 
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ProtectedRoute } from "./auth";
import * as views from "./UI/views";
import { Background } from 'UI/components/background';
import { useApp } from 'hooks';
import { LoadingScreen } from 'UI/components';
import { InfoModal } from 'UI/modals';

// Importando estilos
import "./App.scss";

function App() {

  const { isLoading, infoModal } = useApp();

  return (
    <Router>
      <Background>
        { isLoading && <LoadingScreen />}
        { infoModal.type && <InfoModal type={infoModal.type} handleClose={infoModal.handleClose} autoClose={infoModal.autoClose} showingTime={infoModal.showingTime} action={infoModal.action} message={infoModal.message} title={infoModal.title} />}
        <Switch>
          {/* <ProtectedRoute path='/comentarios' exact>
            <views.SurveyDetail />
          </ProtectedRoute> */}
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
          <ProtectedRoute path="/visitas/codigo/:idInvitacion" exact>
            <views.QRScreen />
          </ProtectedRoute>
          <ProtectedRoute path="/visitas/invitaciones-enviadas" exact>
            <views.InvitationsSent />
          </ProtectedRoute>
          <ProtectedRoute path="/visitas/nueva-invitación/agregar-invitado">
            <views.AddGuest />
          </ProtectedRoute>
          <ProtectedRoute path="/visitas/nueva-invitación">
            <views.NewInvitation />
          </ProtectedRoute>
          <ProtectedRoute path="/visitas">
            <views.Visits />
          </ProtectedRoute>
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
      </Background>
    </Router>
  );
}

export default App;
