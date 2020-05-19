import React, { useState, useRef, useEffect } from "react"
import FormWidget from "./FormWidget"

export default function FeedbackWidget() {
  const [wasVisible, setWasVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const triggerRef = useRef(null)

  const toggleWidget = (params) => {
    setWasVisible(isVisible)
    setIsVisible(!isVisible)
  }

  const handleSubmit = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if (wasVisible && !isVisible) {
      triggerRef.current.focus()
    }
  }, [isVisible, wasVisible])

  return (
    <>
      <button
        ref={triggerRef}
        className="feedback-trigger"
        aria-haspopup="true"
        aria-controls="feedback-widget"
        onClick={toggleWidget}
      >
        Rate This App
      </button>

      <FormWidget
        onSubmit={handleSubmit}
        onClose={toggleWidget}
        isVisible={isVisible}
      />
    </>
  )
}
