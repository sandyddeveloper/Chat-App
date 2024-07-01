import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './Firebase';

const profile = async (file) => {

    const date = new Date()//to pass the file name as date+filename for saving the profile pic in db..
    const storageRef = ref(storage, `images/${date + file.name} `);//i have declared that to storge the file name(profile pic)  as date+filename for saving the profile pic in db..

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject ) => {


        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject("Something went wromg .." + error.code);
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve('File available at', downloadURL);
                });
            }
        );
    })
}

export { profile };