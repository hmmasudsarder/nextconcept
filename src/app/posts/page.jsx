import Link from "next/link";

const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data

}

const PostPage = async() => {
    const postData = await getPost();
    console.log(postData);
    return (
        <div>
            <h3 className="text-4xl">ALL POST</h3>
            <div className="grid grid-cols-4 gap-2">
                {postData.map(({title, body, id}) => (
                    <div className="border-2 p-8" key={id}>
                        <h2 className="text-xl">Title: {title}</h2>
                        <h1 className="text-lg">Description : {body}</h1>
                        <button><Link href={`/posts/${id}`} className="bg-yellow-300 px-4 py-2">See More</Link></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostPage;