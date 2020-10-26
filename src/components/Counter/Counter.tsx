import React, { useState, useEffect, useRef } from 'react'
import ButtonEx from 'components/Button/Button'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)
  const initialTitleRef = useRef()

  useEffect(() => {
    document.title = checked
      ? `Total number of clicks: ${count}`
      : initialTitleRef.current
  }, [checked, count])

  return (
    <div>
      <span data-testid="count">
        Clicked {count} time{count === 1 ? '' : 's'}
      </span>
      <br />
      <ButtonEx handleClick={() => setCount(count + 1)} label="Increment" />
      <div>
        <input
          type="checkbox"
          id="checkbox-title"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="checkbox-title" ref={initialTitleRef}>
          Check to display count in document title
        </label>
      </div>
    </div>
  )
}

export default Counter
