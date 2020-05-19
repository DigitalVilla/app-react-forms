import React from "react"

export const Submit = (props) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={`${props.baseClass}-submit ${props.className}`}
    >
      {props.text || "Submit"}
    </button>
  )
}

export const Buutton = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${props.baseClass}-button ${props.className}`}
    >
      {props.text || "Submit"}
    </button>
  )
}

export const RadioGroup = ({ baseClass, name, values, onChange, state }) => {
  return (
    <React.Fragment>
      {values.map((value, i) => (
        <Radio
          key={"rad-" + i}
          baseClass={baseClass}
          value={value}
          name={name}
          state={state}
          onChange={onChange}
          label={value}
        />
      ))}
    </React.Fragment>
  )
}

export const HoneyPot = (props) => {
  return (
    <div className={"screen" + (props.className || "")}>
      <label>
        {" "}
        Do not edit this field
        <input
          name={props.name}
          type="email"
          placeholder="Confirm Email"
          value={props.state[props.name]}
          onChange={props.onChange}
          required={props.required || true}
        />
      </label>
      <label>
        {" "}
        Keep this checkbox unchecked
        <input
          id="check-ctrl"
          type="checkbox"
          name={props.name + "Check"}
          onChange={props.onChange}
          checked={props.state[props.name + "Check"]}
        />
      </label>
    </div>
  )
}

export const Input = React.forwardRef((props, ref) => {
  const uid = `${props.baseClass}-${props.name}`

  return (
    <div className={`${props.baseClass}-input-container`}>
      <label
        htmlFor={uid}
        style={props.hideLabel ? srOnly : {}}
        className={`${props.baseClass}-label`}
      >
        {props.label || props.name}
      </label>
      <input
        ref={ref}
        id={uid}
        name={props.name}
        type={props.type || "text"}
        autoComplete="off"
        className={`${props.baseClass}-input type-${props.type || "text"}`}
        value={props.state[props.name] || ""}
        placeholder={props.placeholder || ""}
        required={props.required || false}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  )
})

export const TextArea = (props) => {
  return (
    <div className={`${props.baseClass}-textarea-container`}>
      <label
        htmlFor={props.name}
        style={props.hideLabel ? srOnly : {}}
        className={`${props.baseClass}-label`}
      >
        {props.label || props.name}
      </label>
      <textarea
        id={props.name}
        name={props.name}
        value={props.state[props.name] || ""}
        type={props.type || "text"}
        required={props.required || false}
        className={`${props.baseClass}-textarea`}
        placeholder={props.placeholder || ""}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  )
}

export const Select = (props) => {
  const hasOption = props.state[props.name]
    ? props.state[props.name].toLowerCase() !== props.name
    : false

  return (
    <div className={`${props.baseClass}-select-container`}>
      <label
        htmlFor={props.name}
        style={props.hideLabel ? srOnly : {}}
        className={props.baseClass + "-label"}
      >
        {props.label || props.name}
      </label>
      <select
        id={props.name}
        name={props.name}
        value={props.state[props.name]}
        onChange={props.onChange}
        required={props.required || false}
        className={`${props.baseClass}-select ${props.className}`}
      >
        {props.placeholder && <option value="">{props.placeholder}</option>}
        {props.options.map((opt, i) => (
          <option key={props.name + i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export const Radio = (props) => {
  return (
    <div className={`${props.baseClass}-radio-container`}>
      <label className={`${props.baseClass}-label`}>
        <input
          type="radio"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          checked={props.state[props.name] === props.value}
          className={`${props.baseClass}-radio`}
        />
        {props.label || props.name}
      </label>
    </div>
  )
}

export const Check = (props) => {
  return (
    <div className={`${props.baseClass}-checkbox-container`}>
      <label className={`${props.baseClass}-label`}>
        <input
          id="check-ctrl"
          type="checkbox"
          name={props.name}
          onChange={props.onChange}
          checked={props.state[props.name]}
          required={props.required || false}
          className={`${props.baseClass}-checkbox`}
        />
        {props.checkmark && <span className="checkmark"></span>}
        {props.label || props.name}
      </label>
    </div>
  )
}

const srOnly = {
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "inset(50%)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  overflow: "hidden",
  position: "absolute",
  padding: 0,
}
