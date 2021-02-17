import db from './firebase'

export async function browseCourses(spokenLanguage, filters) {
    const courses = []

    if(filters.length) {
        await db.collection('decks').where('languages', 'array-contains-any', filters).get().then((snapshot) => {
            snapshot.forEach((doc) => {
                if(doc.data().languages.includes(spokenLanguage)) {
                    courses.push({
                        id: doc.data().id,
                        name: doc.data().name,
                        src: doc.data().src,
                    })
                }
            })
        }).catch(error => {
            console.log("Error fetching languages", error)
        })
    } else {
        await db.collection('decks').where('languages', 'array-contains', spokenLanguage).get().then((snapshot) => {
            snapshot.forEach((doc) => {
                courses.push({
                    id: doc.data().id,
                    name: doc.data().name,
                    src: doc.data().src
                })
            })
        }).catch(error => {
            console.log("Error fetching languages", error)
        })
    }

    return courses
}

export async function getLanguages() {
    const languages = []

    await db.collection('languages').orderBy('name').get().then((snapshot) => {
        snapshot.forEach((doc) => {
            languages.push({
                id: doc.id,
                name: doc.data().name
            })
        });
    }).catch(error => {
        console.log("Error fetching languages", error)
    })

    return languages
}