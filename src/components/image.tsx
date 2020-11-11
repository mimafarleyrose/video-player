import React from "react";

interface Props {
  src: string;
  className: string;
  visible: boolean;
}
export const Image = ({ src, className, visible }: Props) => {
  return (
    <img
      data-cy={className}
      className={`${className} ${visible ? "visible" : ""}`}
      src={process.env.PUBLIC_URL + src}
    />
  );
};
