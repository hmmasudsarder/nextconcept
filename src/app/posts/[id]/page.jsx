
const getDetails = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data
}

const PostDetailsPage= async({params}) => {
    const {title, body} = await getDetails(params.id)
    console.log(params.id);
    return (
        <div>
            Details Page {title}
        </div>
    );
};

export default PostDetailsPage;