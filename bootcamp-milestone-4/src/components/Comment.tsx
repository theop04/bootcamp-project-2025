import { IComment } from "@/database/blogSchema";

type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	const d = new Date(time);

    return d.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
}

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
//     return (
//     <div style={{
//       borderBottom: "1px solid #ddd",
//       padding: "1rem 0"
//     }}>
//       <h4 style={{ marginBottom: 4 }}>{comment.user}</h4>
//       <p style={{ marginBottom: 6 }}>{comment.comment}</p>
//       <span style={{ fontSize: "0.8rem", color: "#666" }}>
//         {parseCommentTime(comment.time)}
//       </span>
//     </div>
//   );
}

export default Comment;