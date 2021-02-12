import { firebaseAuth, firebaseDb } from 'boot/firebase';

export function registerUser({}, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(res => {
            console.log(res);
            let userId = firebaseAuth.currentUser.uid;
            firebaseDb.ref('users/' + userId).set({
                name: payload.name,
                email: payload.email,
                online: true
            });
        })
    .catch(error => {
        console.log(error);
    });
}
export function loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then(res => {
            console.log(res);
           
        })
    .catch(error => {
        console.log(error);
    });
}
