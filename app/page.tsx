import KnockFeed from "./components/KnockFeed";
import WorkflowForm from "./components/WorkflowForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-16">
      <h1 className="text-4xl font-bold mb-8">Basic Knock Demo</h1>
      <KnockFeed />
      <WorkflowForm />
    </div>
  );
}
