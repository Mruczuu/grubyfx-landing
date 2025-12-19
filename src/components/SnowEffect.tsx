'use client'
import Snowfall from 'react-snowfall'

const SnowEffect = () => {
  return (
    <Snowfall
      color="#ffffff"
      snowflakeCount={150}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
      speed={[0.5, 2]}
      wind={[-0.5, 1]}
      radius={[1, 4]}
    />
  )
}

export default SnowEffect

