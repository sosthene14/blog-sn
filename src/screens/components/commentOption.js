import { useState,useEffect } from "react";

function CommentOption() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState("");
  const [userIds, setUserIds] = useState([]);

  const onClickHandler = () => {
    if (comment.trim() !== "" && userId.trim() !== "") {
      setComments((comments) => [...comments, comment]);
      setUserIds((userIds) => [...userIds, userId]);
      setUserId("");
      setComment(""); 
    }
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const onChangeHandlerUser = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div className="container-comment">
      <div className="row">
        <div className="col-6">
          <div>
            <div className="comment">
              {userIds.map((user, index) => (
                <div key={index} className="comment-container">
                  <span className="user-name">{user} : </span>
                  <div className="user-comments">
                    {comments
                      .filter((_, i) => i === index)
                      .map((comment, index) => (
                        <div key={index} className="user-comment">
                            {comment}
                        </div>
                     
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="pseudo"
            onChange={onChangeHandlerUser}
            value={userId}
          />
          <textarea
            type="text"
            className="input"
            placeholder="Write a comment"
            onChange={onChangeHandler}
            value={comment}
          ></textarea>
          <button className="primaryContained float-right" onClick={onClickHandler}>
            Ajouter un commentaire
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentOption;
