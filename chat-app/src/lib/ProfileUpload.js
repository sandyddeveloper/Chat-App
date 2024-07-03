import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './Firebase'; // Ensure the correct path to your Firebase configuration

const profile = async (file) => {
    const date = new Date();
    const formattedDate = date.toISOString();
    const storageRef = ref(storage, `images/${formattedDate}_${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot) => {
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
                reject(`Something went wrong: ${error.code}`);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                    })
                    .catch((error) => {
                        reject(`Failed to get download URL: ${error.code}`);
                    });
            }
        );
    });
};

export { profile };
