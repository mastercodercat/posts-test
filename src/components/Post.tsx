import { useState } from "react";
import clsx from "classnames";
import { Post as PostType } from "../utils/types";
import { Icon } from "./Icon";

interface PostProps {
  post: PostType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="border-b rounded-md px-4 py-2 max-w-[600px] mx-auto">
      <div className="flex justify-between items-center text-left cursor-pointer" onClick={handleClickOpen}>
        <span className="font-bold uppercase">{post.title}</span>
        <Icon icon={open ? "up" : "down"} />
      </div>
      <div
        className={clsx({
          "border-bottom rounded-md pt-4 transition-all": true,
          "h-[0px] overflow-hidden pt-0": !open,
        })}
      >
        {post.body}
      </div>
    </div>
  );
};
