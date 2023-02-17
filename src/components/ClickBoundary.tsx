import React from "react";

interface PropType {
  children?: React.ReactNode;
}

function ClickBoundary({ children }: PropType) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
}

export default ClickBoundary;
