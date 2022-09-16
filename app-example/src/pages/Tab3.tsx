import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tours</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tours</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Fechas visita guiada" />

      <IonTitle> Tour Dates </IonTitle>
        <IonDatetime
      minuteValues="0,15,30,45"
      dayValues="5,10,15,20,25,30">
        
    </IonDatetime>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
