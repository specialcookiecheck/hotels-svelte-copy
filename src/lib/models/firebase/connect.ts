import pkg from "firebase-admin";
//import serviceAccount from "../../../../serviceaccount.json" assert { type: "json" }; // necessary to make Firebase work
//import { getAuth } from "firebase/auth";

const admin = pkg;

export let db;

// const serviceAccount = process.env.FIREBASE_CONFIG;


export function connectFirebase() {
  // initializeApp(process.env.FIREBASE_CONFIG); // process.env.FIREBASE_CONFIG

  const app = admin.initializeApp({
    //credential: admin.credential.cert(serviceAccount), //generates error needs to be fixed
  });

  //const auth = getAuth(app);

  // console.log(app);

  // const defaultApp = initializeApp(process.env.FIREBASE_CONFIG);

  db = app.firestore();
  db.settings({ ignoreUndefinedProperties: true })
  // console.log(db);
}
