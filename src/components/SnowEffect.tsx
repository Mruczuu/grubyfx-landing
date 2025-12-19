'use client'
import Snowfall from 'react-snowfall'

const SnowEffect = () => {
  return (
    <Snowfall
      color="rgba(255, 255, 255, 0.4)"
      snowflakeCount={80}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      speed={[0.3, 1]}
      wind={[-0.3, 0.5]}
      radius={[0.5, 2.5]}
    />
  )
}

export default SnowEffect

