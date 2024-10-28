'use client'

import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Head from 'next/head'
import { PDFDocumentProxy } from 'pdfjs-dist'

interface BookData {
  bookName: string
  fileData: string
  fileType: string
  subject: String
}

const BookViewer: React.FC = () => {
  const { book_id: bookName } = useParams<{ book_id: string }>()
  const searchParams = useSearchParams()
  const subjectName = searchParams.get('subject_name')

  const [bookData, setBookData] = useState<BookData | null>(null)
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null)
  const [pageNum, setPageNum] = useState<number>(1)
  const [isRendering, setIsRendering] = useState<boolean>(false)
  const [pageCount, setPageCount] = useState<number>(0)
  const [scaleFactor] = useState<number>(4)

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/books/${bookName}?subject_name=${subjectName}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch book data')
        }
        const data = await response.json()
        setBookData(data)
        loadPdf(data.fileData, data.fileType)
      } catch (err) {
        console.error(err)
      }
    }

    if (bookName && subjectName) {
      fetchBookData()
    }
  }, [bookName, subjectName])

  const loadPdf = (fileData: string, fileType: string) => {
    const pdfData = `data:${fileType};base64,${fileData}`
    const pdfjsLib = (window as any).pdfjsLib

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js'

    pdfjsLib
      .getDocument({ url: pdfData })
      .promise.then((pdf: PDFDocumentProxy) => {
        setPdfDoc(pdf)
        setPageCount(pdf.numPages)
        renderPages(pageNum, pdf)
      })
      .catch((error: any) => {
        console.error('Error loading PDF:', error)
      })
  }

  const renderPages = (num: number, pdf: PDFDocumentProxy) => {
    if (isRendering || !pdf) return
    setIsRendering(true)
    const canvas1 = document.getElementById('canvas1') as HTMLCanvasElement
    const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement
    const containerWidth =
      document.getElementById('pageContainer')?.clientWidth || 800
    const containerHeight =
      document.getElementById('pageContainer')?.clientHeight || 600

    if (containerWidth > 1024) {
      num = num % 2 === 0 ? num - 1 : num
      renderPage(num, canvas1, pdf)
      renderPage(num + 1, canvas2, pdf)
      if (canvas2.parentElement) {
        canvas2.parentElement.style.display = 'flex'
      }
    } else {
      renderPage(num, canvas1, pdf)
      if (canvas2.parentElement) {
        canvas2.parentElement.style.display = 'none'
      }
    }
    setPageNum(num)
  }

  const renderPage = async (
    num: number,
    canvas: HTMLCanvasElement,
    pdf: PDFDocumentProxy
  ) => {
    if (num > pageCount) {
      canvas.style.display = 'none'
      return
    }
    canvas.style.display = 'block'

    const page = await pdf.getPage(num)
    const viewport = page.getViewport({ scale: 1 })
    const containerWidth =
      document.getElementById('pageContainer')?.clientWidth || 800
    const containerHeight =
      document.getElementById('pageContainer')?.clientHeight || 600
    const scale = Math.min(
      containerWidth / viewport.width,
      containerHeight / viewport.height
    )

    const scaledViewport = page.getViewport({ scale: scale * scaleFactor })
    canvas.height = scaledViewport.height
    canvas.width = scaledViewport.width
    const context = canvas.getContext('2d')

    if (context) {
      page
        .render({
          canvasContext: context,
          viewport: scaledViewport
        })
        .promise.then(() => {
          setIsRendering(false)
        })
    }
  }

  const handlePageNavigation = (direction: 'next' | 'prev') => {
    if (direction === 'next' && pageNum < pageCount && !isRendering) {
      setPageNum(prev => prev + 2)
    } else if (direction === 'prev' && pageNum > 1 && !isRendering) {
      setPageNum(prev => prev - 2)
    }
  }

  if (!bookData) return <p>Loading...</p>

  return (
    <div>
      <Head>
        <title>PDF Viewer - {bookData.bookName}</title>
      </Head>
      <div className='viewer-container'>
        <div id='pdfViewerDiv'>
          <div id='pdfHeader'>PDF Viewer</div>
          <div id='pageContainer'>
            <div id='canvas1Container' className='canvasContainer'>
              <canvas id='canvas1'></canvas>
            </div>
            <div id='canvas2Container' className='canvasContainer'>
              <canvas id='canvas2'></canvas>
            </div>
            <div className='page-number' id='pageNumber'>
              Page {pageNum} of {pageCount}
            </div>
            <button
              id='prev'
              className='btn'
              onClick={() => handlePageNavigation('prev')}
            >
              &#x25C0;
            </button>
            <button
              id='next'
              className='btn'
              onClick={() => handlePageNavigation('next')}
            >
              &#x25B6;
            </button>
          </div>
          <div className='seek-bar'>
            <label htmlFor='pageSlider' className='sr-only'>
              Page Slider
            </label>
            <input
              type='range'
              id='pageSlider'
              min='1'
              max={pageCount}
              value={pageNum}
              onChange={e => {
                const selectedPage = parseInt(e.target.value)
                setPageNum(selectedPage)
                if (pdfDoc) {
                  renderPages(selectedPage, pdfDoc)
                }
              }}
            />
            <div className='tooltip' id='tooltip'>
              Page {pageNum}
            </div>
          </div>
        </div>
      </div>
      <div className='book-description'>
        <div className='left-content'>
          <h1>{bookData.bookName}</h1>
        </div>
        <div className='right-content'>
          <h1>
            <span>🔥Trending</span>
          </h1>
        </div>
        <div className='review-section'>
          <legend>Leave a Review</legend>
          <textarea placeholder='Write your review here...'></textarea>
          <button>Submit Review</button>
        </div>
      </div>
    </div>
  )
}

export default BookViewer
