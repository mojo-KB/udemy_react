
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      {/*bg-gray-200 transition-all dark:bg-zinc-900 dark:text-white duration-700  */}
      <body className='bg-gray-200 transition-all duration-700'>
        <div className='max-w-6xl mx-auto'>{children}</div>
      </body>
    </html>
  )
}
