"use server";
import { Knock } from "@knocklabs/node";

const knock = new Knock(process.env.KNOCK_API_KEY as string);

export async function triggerWorkflow(message: string) {
  // Implement your server-side logic here
  console.log("Workflow triggered with message:", message);
  const workflow_run_id = await knock.workflows.trigger(
    process.env.KNOCK_WORKFLOW as string,
    {
      recipients: [
        {
          id: process.env.NEXT_PUBLIC_KNOCK_USER_ID as string,
          email: "jeff@knock.app",
        },
      ],
      actor: {
        id: process.env.NEXT_PUBLIC_KNOCK_USER_ID as string,
      },
      data: { message: message },
    }
  );
  console.log("Workflow run ID:", workflow_run_id);
  // You can add your actual workflow logic here
}
