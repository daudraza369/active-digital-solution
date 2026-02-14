import Link from "next/link";

export default function CancellationPage() {
  return (
    <div>
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Cancellation And Refund Policy</h1>
          <p className="text-gray-400">Active Digital Solution</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-gray-300">
          <p>- Due to the nature of our work, refunds are not available.</p>
          <p>- Clients have the right to discontinue services at any time; however, if the contract is terminated within an ongoing month, no refunds will be issued. A written notice via email or text message is required for cancellation 15 days prior to the cancellation of service, or pay a cancellation fee equal to one month of service.</p>
          <p>- Refunds will not be granted if the client disregards Active Digital Solution&apos;s recommendations and approvals regarding SEO strategies (White Hat only).</p>
          <p>- No reimbursement will be given if the client hires another SEO agency during our contract period or independently implements SEO changes on their website or Google listings.</p>
          <p>- If the client does not provide the necessary website access for SEO implementation or if the website is inactive or malfunctioning, no refunds will be processed.</p>
          <p>- Once mock-up designs are approved and the project enters the testing phase, refunds will not be issued.</p>
          <p>- Cancellations for special event-based services coordinated by our sales team are not accepted. These require a minimum of 30 days notice for withdrawal.</p>
          <p>- Although SEO and other digital marketing services are non-refundable, clients may request cancellation with at least 15 days written notice.</p>
          <p>- Refunds will not be provided for projects that have been inactive or on hold for more than 30 days.</p>
          <p>- Customer understands and agrees that in the event the customer initiates a chargeback and/or merchant dispute with their issuing bank for the service they have received, we will make every effort to provide documentation to the issuing bank that the customer did receive all services.</p>

          <div className="mt-12 pt-8 border-t border-dark-border">
            <p>For questions, contact us at{" "}
              <a href="mailto:adam@activedigitalsolution.com" className="text-accent hover:underline">adam@activedigitalsolution.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
