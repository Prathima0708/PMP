import firebase from './firebase';

const db = firebase.database().ref("/pacificmanpower");

const addJob = (job) => {
    return db.push(job);
};

const getJobs = () => {
    return db.once('value');
};

const updateJob = (key, job) => {
    return db.child(key).update(job);
};

const deleteJob = (key) => {
    return db.child(key).remove();
};

export { addJob, getJobs, updateJob, deleteJob };
