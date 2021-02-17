import db from './firebase'

export async function browseCourses(allFilters) {
    const courses = []

    await db.collection('decks').where('languages', 'array-contains-any', allFilters).get().then((snapshot) => {
        snapshot.forEach((doc) => {
            courses.push({
                id: doc.data().id,
                name: doc.data().name
            })
        })
    })

    return courses
}

export async function getLanguages() {
    const languages = []

    await db.collection('languages').get().then((snapshot) => {
        snapshot.forEach((doc) => {
            languages.push({
                id: doc.id,
                name: doc.data().name
            })
        });
    })

    return languages
}