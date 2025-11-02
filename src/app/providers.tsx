// app/providers.tsx
'use client'

import { useEffect } from "react"

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useAuth, useUser } from "@clerk/nextjs"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      defaults: '2025-05-24'
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PHProvider>
  )
}

export function PostHogAuthWrapper({ children }: { children: React.ReactNode }) {
  const userInf = useUser();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (userInf.user) {
      posthog.identify(userInf.user.id, {
        email: userInf.user.emailAddresses[0]?.emailAddress,
        name: userInf.user.fullName,
      })
    } else if (!isSignedIn) {
      posthog.reset();
    }
  }, [userInf.user, isSignedIn]);

  return children;
}
