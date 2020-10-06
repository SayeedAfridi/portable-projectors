import firebase from '@firebase/app'
import '@firebase/firestore'

import getConfig from 'next/config'

const {
  publicRuntimeConfig: { firebaseConfig },
} = getConfig()

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export default app
