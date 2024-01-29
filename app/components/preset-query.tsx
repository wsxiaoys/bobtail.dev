import React, { FC, useMemo } from 'react'
import Link from 'next/link'
import { nanoid } from 'nanoid'

import { getSearchUrl } from '@/app/utils/get-search-url'

export const PresetQuery: FC<{ query: string }> = ({ query }) => {
  return (
    <Link
      prefetch={false}
      title={query}
      href={getSearchUrl(query)}
      className="inline-block w-full md:w-auto border border-zinc-200/50 text-ellipsis overflow-hidden items-center text-nowrap rounded-lg bg-zinc-100 hover:bg-zinc-200/80 hover:text-zinc-950 px-2 py-1 text-xs font-medium text-zinc-600"
    >
      {query}
    </Link>
  )
}
