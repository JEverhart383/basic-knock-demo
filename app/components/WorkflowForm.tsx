"use client";

import { useState } from "react";
import { triggerWorkflow } from "../actions/workflowActions";

export default function WorkflowForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await triggerWorkflow(message);
    setMessage(""); // Clear the textarea after submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message here"
        className="w-full p-2 border border-gray-300 rounded-md"
        rows={4}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Trigger Workflow
      </button>
    </form>
  );
}
