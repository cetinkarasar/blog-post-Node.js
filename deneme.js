let blog = [
    { postname:"Post1", postId:1},
    {postname: "Post2", postId:2},
    {postname:"Post3", postId:3}
]

const listPosts = () => blog.map((post) => console.log(post.postname));

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        blog.push(newPost)
        resolve("Post eklendi")
        reject("Post eklenemedi")
    })
}

async function blogControl(post) {
    try {
        await addPost(post);
        listPosts()
    }
    catch(err) {
        console.log(err);
    }
    
}
blogControl({postname:"Newpost", postId:100});