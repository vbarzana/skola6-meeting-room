import React, { FC } from "react";
import {
  IonContent,
  IonPage,
  IonText,
  IonButton,
  IonIcon,
  IonImg,
} from "@ionic/react";
import { useDimensions } from "../../hooks/useDimensions";
import { logoGoogle } from "ionicons/icons";
import "./SignIn.css";
import { useSignIn } from "../../hooks/useSignIn";
const photoURL = "../../../assets/screenshots/meeting-room.jpg";

const SignIn: FC = () => {
  const { signInGoogle } = useSignIn();
  const { height } = useDimensions();

  return (
    <IonPage>
      <IonContent>
        <div
          className="column"
          style={{
            height: height,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="column"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "var(--ion-card-background)",
              padding: 32,
              borderRadius: 8,
              boxShadow: "rgb(0 0 0 / 12%) 0px 4px 16px",
            }}
          >
            <IonImg src={photoURL} className="row"/>
            <div
              className="row"
              style={{
                alignItems: "center",
              }}
            >
              <IonText color="dark">
                <span style={{ fontSize: 24, marginRight: 4 }}>Sign into</span>
              </IonText>
              <IonText color="primary">
                <span style={{ fontSize: 24, fontWeight: "bold" }}>
                  Skola 6 Meeting Room
                </span>
              </IonText>
            </div>
            <div className="column">
              <IonButton
                onClick={signInGoogle}
                style={{ marginBottom: 8 }}
                shape="round"
                fill="outline"
                color="primary"
              >
                <IonIcon icon={logoGoogle} style={{ marginRight: 8 }} />
                Sign In With Google
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
