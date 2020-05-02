import React from 'react'
import styled from 'styled-components'

const FloatLabelDOM = ({
  className,
  htmlFor,
  children,
  labelName,
  errorMessage,
}) => (
  <p className={className}>
    {children}
    <label htmlFor={htmlFor}>{labelName}</label>
    <span className="hintmessage">{errorMessage}</span>
  </p>
)

const PresentationalFloatLabel = styled(FloatLabelDOM)`
  display: flex;
  flex-direction: column;

  > label {
    display: block;
    transition-property: transform, color;
    transition-duration: var(--base-duration);
    transition-timing-function: var(--base-timing-function);
    transform: translateY(32px);
    transform-origin: 0 100%;
  }

  &:focus-within label {
    color: var(--primary-color);
    transform: translateY(0) scale(0.8);
  }

  > input:invalid ~ label {
    color: var(--error-color);
  }

  > textarea ~ label {
    padding-left: 8px;
  }

  > input:not(:placeholder-shown) ~ label,
  > textarea:not(:placeholder-shown) ~ label {
    transform: translateY(0) scale(0.8);
  }

  > input,
  > textarea {
    order: 2;
  }

  > .hintmessage {
    display: none;
    order: 3;
    margin-top: 4px;
    color: var(--error-color);
    font-size: 10px;
  }

  > input:invalid ~ .hintmessage {
    display: block;
  }
`

const ContainerFloatLabel = ({ presenter, ...props }) => presenter({ ...props })

const FloatLabel = (props) => (
  <ContainerFloatLabel
    presenter={(presenterProps) => (
      <PresentationalFloatLabel {...presenterProps} />
    )}
    {...props}
  />
)

export default FloatLabel
