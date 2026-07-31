import { Metadata } from "next";
import SolutionPage from "@/app/components/SolutionPage";

export const metadata: Metadata = { title: "AI Lead Qualification Calls | Erlang Labs", description: "Use AI voice agents to qualify leads over the phone, collect budget and timeline, and create structured call outcomes for your sales team.", alternates: { canonical: "https://www.erlanglabs.com/agents/lead-qualification" } };

export default function LeadQualificationPage() { return <SolutionPage variant="qualification" title="Qualify every lead with a real conversation." description="Erlang Labs voice agents ask the questions that matter, understand a prospect’s answers, and turn the call into a structured record your team can review." problem="Speed matters, but a rushed checklist is not qualification." mechanism="Set the objective for the call, attach the context the agent needs, and define the fields you want to collect. The agent can keep the conversation natural while capturing the signal behind the answer." fields={["Intent", "Budget", "Timeline", "Next step"]} outcome="The prospect is actively evaluating a voice workflow and asked for a follow-up conversation." />; }
