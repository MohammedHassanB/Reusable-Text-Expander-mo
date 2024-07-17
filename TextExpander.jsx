import { useState } from "react";
export default function TextExpander({
  collapsedNumWords = 15,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className = "",
  children,
}) {
  const [open, setopen] = useState(expanded);
  const displayedText = open
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      {displayedText}
      <label
        style={buttonStyle}
        role="button"
        onClick={() => setopen((open) => !open)}
      >
        {open ? collapseButtonText : expandButtonText}
      </label>
    </div>
  );
}
