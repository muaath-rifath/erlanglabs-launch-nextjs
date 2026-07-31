import { Metadata } from "next";
import SolutionPage from "@/app/components/SolutionPage";

export const metadata: Metadata = { title: "AI Customer Feedback Calls | ErlangLabs", description: "Use AI voice agents to collect customer feedback through natural phone conversations and turn open answers into structured insights.", alternates: { canonical: "https://www.erlanglabs.com/agents/customer-feedback" } };

export default function CustomerFeedbackPage() { return <SolutionPage variant="feedback" title="Turn conversations into customer insight." description="Ask customers what they think, follow up when the answer needs more context, and capture the themes your team can act on." problem="The score matters. The reason behind it is where the work begins." mechanism="Give your team more than a satisfaction rating. Each conversation captures the moment that shaped the customer’s view, the detail behind it, and a clear signal for what should happen next." fields={["The moment", "The reason", "Who it affects", "The next action"]} outcome="The customer is satisfied overall but needs a faster export flow and would like a notification when it is ready." />; }
