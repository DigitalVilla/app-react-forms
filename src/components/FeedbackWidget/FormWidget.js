import React, { useState, useRef, useEffect } from "react"
import RadioOption from "./RadioOption"

export default function FormWidget({ onSubmit, onClose, isVisible }) {
  const [optionChecked, setOptionChecked] = useState(2)
  const [comments, setComments] = useState("")
  const [isSubmited, setIsSubmited] = useState(false)
  const closeButtonRef = useRef(null)
  const dismissButton = useRef(null)

  useEffect(() => {
    if (isVisible) {
      closeButtonRef.current.focus()
    }
  }, [isVisible])

  useEffect(() => {
    if (isSubmited) {
      dismissButton.current.focus()
    }
  }, [isSubmited])

  const handleKeyDown = (e) => {
    const isEscape = e.keyCode === 27
    if (isEscape) {
      onClose()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOptionChecked(2)
    setComments("")
    setIsSubmited(true)
    onSubmit({
      rate: optionChecked,
      comments: comments.replace(/(<([^>]+)>)/gi, ""),
    })
  }

  const handleDismiss = () => {
    setIsSubmited(false)
    onClose()
  }

  const handleRadios = ({ target }) => setOptionChecked(parseInt(target.value))
  const handleComments = ({ target }) => setComments(target.value)

  return (
    <div
      className={`form-widget-container${isVisible ? " active" : ""}`}
      onKeyDown={handleKeyDown}
    >
      <form
        className={`form-widget${isSubmited ? " hidden" : ""}`}
        onSubmit={handleSubmit}
      >
        <button
          ref={closeButtonRef}
          className="close-button"
          type="button"
          onClick={onClose}
          aria-label="close widget"
        >
          X
        </button>
        <fieldset className="ratings">
          <legend>
            <h2 tabIndex="-1">Rate This App</h2>
          </legend>
          <div className="radio-container">
            <RadioOption
              emojiLabel="Frowning face"
              emoji="😕"
              ratingText="Poor"
              ratingValue="1"
              checked={optionChecked === 1}
              onChange={handleRadios}
            />
            <RadioOption
              emojiLabel="Neutral face"
              emoji="😐"
              ratingText="Fine"
              ratingValue="2"
              checked={optionChecked === 2}
              onChange={handleRadios}
            />
            <RadioOption
              emojiLabel="Smiling face"
              emoji="😃"
              ratingText="Great"
              ratingValue="3"
              checked={optionChecked === 3}
              onChange={handleRadios}
            />
          </div>
        </fieldset>
        <label className="textarea">
          Your comments (optional):
          <textarea
            value={comments}
            onChange={handleComments}
            placeholder="Tell us more"
          ></textarea>
        </label>
        <input type="submit" />
      </form>

      <div className="feedback-success" hidden={!isSubmited}>
        <h2 tabIndex="-1">Thanks for your feedback!</h2>
        <p>Your ratings and comments can help make this App even better.</p>
        <button ref={dismissButton} className="dismiss" onClick={handleDismiss}>
          Dismiss
        </button>
      </div>
    </div>
  )
}
