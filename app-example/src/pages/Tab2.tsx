import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Exposiciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Exposiciones</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Mapa y Exposiciones aquí" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
