import React from "react";

const PostCard = ({ postItem }) => {
  const { post, profile, avatar, name } = postItem;
  return (
    <div className="card bg-secondary text-white border-0 shadow mt-4 mb-3">
      <div className=" border-0 d-flex align-items-center">
        <img className="profile-img" src={profile} alt="" />
        <p>{name}</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">{post}</h5>
        <img className="img-fluid avatar-img" src={avatar} alt="" />
      </div>
    </div>
  );
};

export default PostCard;
