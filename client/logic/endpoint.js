import { overwritingPosts } from './overwritingPosts.js'



export async function getPosts() {

    const userData = JSON.parse(localStorage.getItem('accessToken'))
    const userId = userData.userId
    const response = await fetch(`http://localhost:5000/api-post/get/${userId}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    const posts = await response.json()
    return posts
}


export async function createPost(value1, value2, userId) {
    
    await fetch('http://localhost:5000/api-post/create', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            taskName: value1,
            taskValue: value2,
            userId
        })
    })
}


export async function deletePost(id) {
    await fetch(`http://localhost:5000/api-post/delete/${id}`, {
        method: 'delete'
    })
    overwritingPosts()
}


export async function updateData(idUp, value1, value2) {
    await fetch('http://localhost:5000/api-post/update', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _id: idUp,
            taskName: value1,
            taskValue: value2
        })
    })
}


// export async function refresh() {
//     const response = await fetch('http://localhost:5000/api/refresh')
//     const userData = await response.json()
//     console.log(response);

//     console.log(userData);
//     console.log(userData.user.id);
    
//     return userData.user.id
    
// }












// export async function login(email, password) {
//     const response = await fetch('http://localhost:5000/api/login', {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             email,
//             password
//         })
//     })
//     console.log(response);
    
//     const userData = await response.json()
//     console.log(userData);
    
//     saveToken(userData)
//     return userData
// }

// export async function create(email, password) {
//     const response = await fetch('http://localhost:5000/api/registration', {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email,
//             password
//         })
//     })
//     console.log(response);
//     const userDataReg = await response.json()
//     console.log(userDataReg);
    
//     return userDataReg
// }





// function saveToken(userData) {
//     localStorage.setItem('accessToken', JSON.stringify(
//         {
//             accessToken: userData.accessToken,
//             expiresIn: userData.expiresIn,
//             userId: userData.user.id
            
//         }))
// }
