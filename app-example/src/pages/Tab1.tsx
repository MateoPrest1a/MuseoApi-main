import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSlide, IonSlides, IonButton, useIonToast  } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';




const Tab1: React.FC = () => {
  const slideOpts = {
    initialSlide: 1, speed: 400
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homescreen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Homescreen</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Pantalla de inicio + Info museo + Opciones de accesibilidad" />
      <IonCard>
      <IonCardHeader>
      <IonCardTitle>Testing Card Title</IonCardTitle>
      <IonCardSubtitle>Welcome to the Museum of Crafts and Arts!</IonCardSubtitle>
      </IonCardHeader>
      </IonCard>

      <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <h1>Expo 1</h1>
      </IonSlide>
      <IonSlide>
        <h1>Expo 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Expo 3</h1>
      </IonSlide>
    </IonSlides>

    <IonButton>Default</IonButton>        
      </IonContent>
    </IonPage>
    );
};

export default Tab1;
