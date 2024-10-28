// 'use client'
// import { FC } from 'react'
// import { useParams, useSearchParams } from 'next/navigation' // Correct imports

// const SubjectPage: FC = () => {
//   const params = useParams() // Extract route parameters
//   const subject_id = params.subject_id // Get the `subject_id` from the URL

//   const searchParams = useSearchParams() // Optional: Extract query parameters

//   return (
//     <div>
//       <h1>Subject Details</h1>
//       <p>Subject ID: {subject_id}</p>
//       {searchParams.has('filter') && (
//         <p>Filter: {searchParams.get('filter')}</p>
//       )}
//     </div>
//   )
// }

// export default SubjectPage

// --------------------------------

// 'use client'

// import { useParams } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import { FC } from 'react'

// interface Book {
//   _id: string
//   name: string
//   authors: string[]
//   rating: number
//   subject: string
// }

// const SubjectPage: FC = () => {
//   const { subject_name: subjectName } = useParams()
//   const [booksData, setBooksData] = useState<Book[]>([])
//   const [loading, setLoading] = useState<boolean>(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     if (subjectName) {
//       const fetchBooks = async () => {
//         try {
//           setLoading(true)
//           // Assuming the backend server runs on localhost:5000
//           const response = await fetch(
//             `http://localhost:5000/subjects/${subjectName}`
//           )

//           if (!response.ok) {
//             throw new Error('No books found for the specified subject.')
//           }

//           const data = await response.json()
//           setBooksData(data.booksData)
//         } catch (error: any) {
//           setError(error.message)
//         } finally {
//           setLoading(false)
//         }
//       }
//       fetchBooks()
//     }
//   }, [subjectName])

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>{error}</p>

//   return (
//     <div>
//       <h1>Books for Subject: {subjectName}</h1>
//       <div id='booksContainer'>
//         {booksData.length > 0 ? (
//           booksData.map(book => (
//             <div key={book._id} className='book-item'>
//               <h3>{book.name}</h3>
//               <p>
//                 <strong>Authors:</strong> {book.authors.join(', ')}
//               </p>
//               <p>
//                 <strong>Rating:</strong> {book.rating}
//               </p>
//               <p>
//                 <strong>Subject:</strong> {book.subject}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No books found for this subject.</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default SubjectPage

// --------------------------------------------

'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Book {
  _id: string
  name: string
  authors: string[]
  rating: number
  subject: string
  imageUrl?: string
}

const SubjectPage = () => {
  const { subject_name: subjectName } = useParams()
  const [booksData, setBooksData] = useState<Record<string, Book[]>>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `http://localhost:5000/subjects/${subjectName}`
        )

        if (!response.ok) {
          throw new Error('No books found for the specified subject.')
        }

        const data = await response.json()
        setBooksData(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (subjectName) {
      fetchBooks()
    }
  }, [subjectName])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='content'>
      <h1>Explore Books</h1>
      <p>Discover the best resources for your interview preparation</p>

      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search for books, authors, categories'
        />
      </div>

      <div className='tags'>
        <div>Java</div>
        <div>Python</div>
        <div>Aptitude</div>
        <div>Web Development</div>
        <div>Algorithms</div>
        <div>System Design</div>
      </div>

      {Object.keys(booksData).map(subject => (
        <div key={subject}>
          <h2>{subject} Books</h2>
          <div className='books'>
            {Array.isArray(booksData[subject]) &&
            booksData[subject].length > 0 ? (
              booksData[subject].map((book: Book) => (
                <div key={book._id} className='book'>
                  <Image
                    src={book.imageUrl ? book.imageUrl : '/sampleCover.jpg'}
                    alt={book.name}
                    width={150}
                    height={200}
                    placeholder='blur'
                    blurDataURL='/sampleCover.jpg' // Optional: Placeholder while loading
                    className='book-image'
                  />
                  <a
                    href={`/books/${book._id}?subject_name=${subjectName}`}
                    className='read-button toggle-read-button'
                  >
                    Read
                  </a>
                  <div className='book-info'>
                    <p className='title'>{book.name}</p>
                    <p className='author'>Authors: {book.authors.join(', ')}</p>
                    <p>Rating: {book.rating}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No books available for this subject.</p>
            )}
          </div>
        </div>
      ))}

      <div className='load-more'>
        <button>Load More</button>
      </div>

      <style jsx>{`
        .content {
          padding: 20px;
        }
        .search-bar input {
          width: 100%;
          padding: 10px;
          margin: 20px 0;
        }
        .tags {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .tags div {
          padding: 5px 10px;
          background-color: #f0f0f0;
          cursor: pointer;
        }
        .books {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .book {
          width: 200px;
          border: 1px solid #e0e0e0;
          padding: 15px;
          text-align: center;
        }
        .read-button {
          display: inline-block;
          margin-top: 10px;
          padding: 5px 10px;
          background-color: #0070f3;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
        .book-info {
          margin-top: 10px;
        }
        .load-more {
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  )
}

export default SubjectPage
