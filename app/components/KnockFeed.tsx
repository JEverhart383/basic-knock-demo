"use client";
import {
  KnockProvider,
  KnockFeedProvider,
  NotificationFeed,
} from "@knocklabs/react";

import "@knocklabs/react/dist/index.css";

export default function KnockFeed() {
  return (
    <KnockProvider
      apiKey={process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY as string}
      userId={process.env.NEXT_PUBLIC_KNOCK_USER_ID as string}
    >
      <KnockFeedProvider
        feedId={process.env.NEXT_PUBLIC_KNOCK_FEED_ID as string}
      >
        <div className="flex justify-center items-center p-8 m-8">
          <div className="max-w-[500px] w-full">
            <NotificationFeed />
          </div>
        </div>
      </KnockFeedProvider>
    </KnockProvider>
  );
}
