import Link from "next/link";

export default function TermsPage() {
  return (
    <div>
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms And Conditions</h1>
          <p className="text-gray-400">Active Digital Solution</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-gray-300">
          <p>- The estimated costs for a project are based on our understanding of your needs and the agreed timeline. Any modifications, including minor improvements, may lead to additional charges.</p>
          <p>- Accepting a quotation shows your agreement with Active Digital Solution&apos;s policies and terms. This acknowledgment can be given verbally, via email, through payment of the initial fee, or by signing the quote.</p>
          <p>- Clients must confirm that all necessary details are included in the citation and that we fully understand their expectations. Clear instructions and any additional conditions should be provided.</p>
          <p>- Any complicated elements related to the project should be specified in advance and included in the proposal to maintain precision. We work in good faith and rely on clients to provide complete and exact information at the time of quoting.</p>
          <p>- All necessary content and materials must be submitted within the first two weeks of the project. Unexpected delays in providing these items may extend the project timeline.</p>
          <p>- Our websites are tested on PCs with the latest versions of browsers including Chrome, Firefox, Safari. If testing on other browsers is required, please notify us in advance.</p>
          <p>- Projects that remain inactive for more than two months will require an administrative fee. Prior notice is required if you intend to put a project on hold.</p>
          <p>- Costs for SSL, Payment Gateway, Google AdWords, plugin licenses, and similar third-party services are not included in our quotations.</p>
          <p>- We do not take responsibility for open-source platforms like WordPress. Clients are responsible for keeping all components and third-party software up to date.</p>
          <p>- Unless explicitly stated, costs related to domain registration, renewal, or associated services are not included in the project evaluation.</p>
          <p>- Hosting charges are not part of our quotations. If needed, Active Digital Solution can arrange suitable hosting, for which a separate quotation will be sent.</p>
          <p>- After full payment of outstanding invoices, Active Digital Solution grants the client unrestricted rights to use, modify, allocate, or publish the visual design, written content, and images used in the website.</p>
          <p>- All communication and updates will be conducted via email. Clients must ensure we have their current email addresses for correspondence.</p>

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
