import { useState } from "react"

export default function Likebutton(){

    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [activeBtn, setActiveBtn] =  useState("none")
    
    const handleLikeClick = () => {
        if (activeBtn === "none"){
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            return;
        }
        if (activeBtn === "like"){
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
        }
        if (activeBtn === "dislike"){
            setLikeCount(likeCount + 1);
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("like");
        }
    };

    const handleDislikeClick = () => {
        if(activeBtn === "none"){
            setDislikeCount(dislikeCount + 1);
            setActiveBtn("dislke");
            return;
        }
        if (activeBtn === "dislike"){
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("none");
            return;
        }
        if (activeBtn === "like"){
        setDislikeCount(dislikeCount + 1);
        setLikeCount(likeCount - 1);
        setActiveBtn("dislike");
        }
    };
    return (
        <div className="btn-container">
            <button 
              className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
              onClick={handleLikeClick}>
              <span class="material-icons">thumb_up</span>
               {likeCount}
            </button>

            <button 
               className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
               onClick={handleDislikeClick}>
               <span class="material-icons">thumb_down</span>
                {dislikeCount}
            </button>
        </div>
    )
}