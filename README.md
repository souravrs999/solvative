This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# stopwatch-app

The Stopwatch Application should have the following features:

1) Start/Pause Button: Initiates or halts the stopwatch timer.
2) Stop Button: Stops the stopwatch timer.
3) Reset Button: Resets the stopwatch timer to zero.


- Functional Requirements:

  1) Start/Pause Button:
  
  Description: Users can start or pause the stopwatch timer by clicking on the Start/Pause button.

  Acceptance Criteria:
  Clicking on the Start button initiates the stopwatch timer.
  When the stopwatch is running, clicking on the Pause button halts the timer at the current elapsed time.
  Clicking on the Pause button again resumes the timer from the paused time.

  2) Stop Button:
  
  Description: Users can stop the stopwatch timer at any point.

  Acceptance Criteria:
  Clicking on the Stop button halts the stopwatch timer and displays the final elapsed time.
  The stopwatch timer resets to zero after stopping.
  
  3) Reset Button:
  
  Description: Users can reset the stopwatch timer to zero.

  Acceptance Criteria:
  Clicking on the Reset button resets the stopwatch timer to zero.
  This action clears any previous elapsed time.
   


- Non-Functional Requirements:

  -> The user interface should be intuitive and user-friendly.
  
  -> Button actions should be responsive and clearly visible.
  
  -> The application should be compatible with modern web browsers such as Google Chrome, Mozilla Firefox, and Safari.