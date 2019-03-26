import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
    this.database = app.database()
  }

  createUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

  signOut = () => this.auth.signOut()

  passwordReset = email => this.auth.sendPasswordResetEmail(email)

  passwordUpdate = password => this.auth.currentUser.updatePassword(password)

  updateProfile = options => this.auth.currentUser.updateProfile(options)

  sendEmailVerification = () => this.auth.currentUser.sendEmailVerification()

  addToOwnedList = (userID, gameID, cb) => this.database.ref('owned/' + userID).child(gameID).set(true, error => cb(error))
  
  getGameFromOwned = (userID, gameID) => {
    // this.database.ref('owned/').child('nftfmlUSJAS743Y7ZCIQfFKy5Yz1').on('value', snap => snap)
    const starCountRef = this.database.ref().child('owned/nftfmlUSJAS743Y7ZCIQfFKy5Yz1/456123')
    let snap;
    starCountRef.on('value', ss => console.log(ss))
  // return snap;    
  }
}

export default Firebase;