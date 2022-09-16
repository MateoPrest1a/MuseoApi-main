import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlide, IonSlides, IonCard, IonCardHeader, IonList, IonImg, IonThumbnail, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {

  const slideOpts = {
    initialSlide: 1, speed: 400
  };

  type Item = {
    src: string;
    text: string;
  };
  const items: Item[] = [{ src: 'https://pixabay.com/photos/silver-wattle-acacia-dealbata-7442792/', text: 'A picture of a tree' }];

  return(
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
        <ExploreContainer name="Exposiciones + Mapa del museo" />

      <IonTitle>Expositions from our Museum</IonTitle>
        <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
          <IonCard>
            <IonCardHeader>
              Hello This is Testing
            </IonCardHeader>
          </IonCard>
      </IonSlide>
      <IonSlide>
      <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={"https://pixabay.com/photos/silver-wattle-acacia-dealbata-7442792/"}/>
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>
      </IonSlide>
      <IonSlide>
        <h3>Expo 3</h3>
      </IonSlide>
    </IonSlides>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
