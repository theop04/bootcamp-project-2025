import { IComment } from "@/database/blogSchema";

type CommentProps = {
    comment: IComment;
}


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
        <div style={{
            backgroundColor: "var(--cg-white)",
            padding: "10px 15px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            marginBottom: "10px",
        }}>
            <h4 style={{ margin: "0 0 5px 0" }}>{comment.user}</h4>
            <p style={{ margin: "0 0 5px 0" }}>{comment.comment}</p>
            <span style={{ fontSize: "0.85rem", color: "#666" }}>
                {parseCommentTime(comment.time)}
            </span>
        </div>
    );
}

export default Comment;