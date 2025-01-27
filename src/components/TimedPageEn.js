import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function TimedPageEn () {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    if (timeLeft === 0) {
      clearInterval(timer)
      navigate('/')
    }

    return () => clearInterval(timer)
  }, [timeLeft, navigate])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  let content
  if (pathname === '/timed-page-en') {
    content = 'English Timed Page'
  } else if (pathname === '/timed-page-es') {
    content = 'Spanish Timed Page'
  } else if (pathname === '/timed-page-creata') {
    content = 'Creata Timed Page'
  } else {
    content = 'Default Timed Page'
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> {/* Example Tailwind classes */}
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Timed Page</h1> {/* Example styling */}
      <p className="text-xl mb-8 text-gray-700">
        Time remaining: {minutes}:{seconds < 10 ? '0' : ''}{seconds}
        <div>{content}</div>
      </p>
      <script
        src="https://static.soulmachines.com/widget-snippet-1.12.0.min.js"
        data-sm-api-key={process.env.TALOS_AI_ENG_API_KEY}
      ></script>
    </div>
  )
}

export default TimedPageEn
