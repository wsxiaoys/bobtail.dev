'use client'

import { useSearchParams } from 'next/navigation'

import { Result } from '@/app/components/result'
import { Search } from '@/app/components/search'
import { Title } from '@/app/components/title'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = decodeURIComponent(searchParams.get('q') || '')
  return (
    <div>
      <div>
        <div className="pointer-events-none w-full backdrop-filter"></div>
        <div className="px-4 md:px-8 pt-6 pb-24 h-full">
          <Title query={query}></Title>
          <Result query={query}></Result>
        </div>
      </div>

      <div className="fixed z-10 flex items-center justify-center bottom-6 px-4 md:px-8 w-full">
        <div className="w-full">
          <Search></Search>
        </div>
      </div>
    </div>
  )
}
