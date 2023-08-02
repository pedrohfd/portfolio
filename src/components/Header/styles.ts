import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const SwitchTheme = styled.label`
  &.switch {
    display: block;
    --width-of-switch: 3.5rem;
    --height-of-switch: 2rem;
    --size-of-icon: 1.4rem;
    --slider-offset: 0.3rem;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
  }

  &.switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.neutral[900]};
    transition: 0.4s;
    border-radius: 30px;
  }

  span.slider:before {
    position: absolute;
    content: '';
    height: var(--size-of-icon, 1.4rem);
    width: var(--size-of-icon, 1.4rem);
    border-radius: 20px;
    left: var(--slider-offset, 0.3rem);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${colors.neutral[50]};
  }

  input:checked + .slider:before {
    left: calc(
      100% - (var(--size-of-icon, 1.4rem) + var(--slider-offset, 0.3rem))
    );
    background: ${colors.neutral[50]};
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
  }
  border: none;
  background: none;
`
