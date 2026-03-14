import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { DisableDraftMode } from '@/components/disable-draft-mode'
import { Header } from '@/components/header'
import { SanityLive } from '@/sanity/lib/live'

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_24%),linear-gradient(180deg,#f8fafc,#ffffff_38%,#f8fafc)]">
      <Header />
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </section>
  )
}
