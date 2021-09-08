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

// Importando estilos
import "./App.scss";

function App() {

  const { isLoading } = useApp();

  return (
    <Router>
      <Background>
        { isLoading && <LoadingScreen />}
        <Switch>
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
