import React, { FC } from 'react'
import { MessageSquareQuote } from 'lucide-react'

import { PresetQuery } from '@/app/components/preset-query'
import { Skeleton } from '@/app/components/skeleton'
import { Wrapper } from '@/app/components/wrapper'
import { Relate } from '@/app/interfaces/relate'

export const Relates: FC<{ relates: Relate[] | null }> = ({ relates }) => {
  return (
    <Wrapper
      title={
        <>
          <MessageSquareQuote></MessageSquareQuote> Related
        </>
      }
      content={
        <div className="flex gap-2 flex-col">
          {relates !== null ? (
            relates.length > 0 ? (
              relates.map(({ question }) => (
                <div>
                  <PresetQuery key={question} query={question}></PresetQuery>
                </div>
              ))
            ) : (
              <div className="text-sm">No related questions.</div>
            )
          ) : (
            <>
              <Skeleton className="w-full h-5 bg-zinc-200/80"></Skeleton>
              <Skeleton className="w-full h-5 bg-zinc-200/80"></Skeleton>
              <Skeleton className="w-full h-5 bg-zinc-200/80"></Skeleton>
            </>
          )}
        </div>
      }
    ></Wrapper>
  )
}
