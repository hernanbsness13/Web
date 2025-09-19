import { useState } from 'react'

export default function DemoSurvey() {
  const [votes, setVotes] = useState({ yes: 5, maybe: 3, no: 2 })
  const [voted, setVoted] = useState(false)

  const total = votes.yes + votes.maybe + votes.no

  const handleVote = (option) => {
    if (voted) return
    setVotes({ ...votes, [option]: votes[option] + 1 })
    setVoted(true)
  }

  const getPercent = (count) => ((count / total) * 100).toFixed(0)

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold mb-4">¿Te gustaría probar RespondeYA para tu negocio?</h3>
      {!voted ? (
        <div className="space-x-2">
          <button onClick={() => handleVote('yes')} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Sí, claro</button>
          <button onClick={() => handleVote('maybe')} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Tal vez</button>
          <button onClick={() => handleVote('no')} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">No por ahora</button>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="font-semibold">Resultados:</p>
          <div>
            <p>Sí, claro ({getPercent(votes.yes)}%)</p>
            <div className="bg-gray-200 rounded h-4">
              <div className="bg-indigo-600 h-4 rounded" style={{ width: getPercent(votes.yes) + '%' }}></div>
            </div>
          </div>
          <div>
            <p>Tal vez ({getPercent(votes.maybe)}%)</p>
            <div className="bg-gray-200 rounded h-4">
              <div className="bg-yellow-500 h-4 rounded" style={{ width: getPercent(votes.maybe) + '%' }}></div>
            </div>
          </div>
          <div>
            <p>No por ahora ({getPercent(votes.no)}%)</p>
            <div className="bg-gray-200 rounded h-4">
              <div className="bg-red-500 h-4 rounded" style={{ width: getPercent(votes.no) + '%' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}