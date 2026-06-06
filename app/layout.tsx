import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceNudge – Automated Payment Reminders for Freelancers',
  description: 'Automatically send polite payment reminder emails on customizable schedules for overdue freelance invoices. Connect QuickBooks, FreshBooks, or Wave and get paid faster.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4dfcf964-63be-4ebb-b404-e35813cefa21"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
