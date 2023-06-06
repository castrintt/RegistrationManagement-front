import React from "react";

type Props = {
  extension: string;
  bytes: Uint8Array;
};

const ImageRender = ({ extension, bytes }: Props) => {
  const newUrlImage = URL.createObjectURL(new Blob([bytes]));
  return (
    <React.Fragment>
      {extension === "application/pdf" ? (
        <embed
          src={newUrlImage}
          type="application/pdf"
          width="100%"
          height="100%"
        ></embed>
      ) : (
        <img src={newUrlImage} alt="img" />
      )}
    </React.Fragment>
  );
};

export default ImageRender;
