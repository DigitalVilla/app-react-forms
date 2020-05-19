import React from "react"

export default function RadioOption({
  emojiLabel,
  emoji,
  checked,
  ratingText,
  ratingValue,
  onChange,
}) {
  return (
    <label className={`feedback-otpion${checked ? " active" : ""}`}>
      <span className="emoji" aria-label={emojiLabel}>
        {emoji}
      </span>
      <span className="level">{ratingText}</span>
      <input
        type="radio"
        name="feedback"
        value={ratingValue}
        id={`rating${ratingValue}`}
        checked={checked}
        onChange={onChange}
      />
    </label>
  )
}
