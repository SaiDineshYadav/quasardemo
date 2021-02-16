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
 
export function handleAuthStateChange({ commit }) {
    console.log('******************')
    firebaseAuth.onAuthStageChanged(user => {
        if (user) {
            let userId = firebaseAuth.currentUser.uid;
            firebaseDb.ref('users/' + userId).once('value', snapshot => {
                console.log(snapshot);
                let userDetails = snapshot.val();
                console.log(userDetails);
                commit('setUserDetails', {
                    name: userDetails.name,
                    email: userDetails.email,
                    userId: userId
                });
            });

        } else {
            commit('setUserDetails', {});
        }
    });
}
