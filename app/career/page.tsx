import CareerForm from "@/components/CareerForm";

const JOBS = [
  { title: "Content Writer Intern", exp: "Minimum 1-2 Yrs Experience" },
  { title: "Junior Network Officer", exp: "Minimum 1-2 Yrs Experience" },
  { title: "Junior Off-Page SEO", exp: "Minimum 1-2 Yrs Experience" },
  { title: "BD Manager", exp: "Minimum 1-2 Yrs Experience" },
  { title: "Telesale Executive", exp: "Minimum 1-2 Yrs Experience" },
  { title: "Customer Success Specialist", exp: "Minimum 1-2 Yrs Experience" },
  { title: "Amazon Wholesale Specialist", exp: "Minimum 1-2 Yrs Experience" },
  { title: "Amazon Wholesale Expert", exp: "Minimum 1-2 Yrs Experience" },
  { title: "Operation Manager", exp: "Minimum 1-2 Yrs Experience" },
];

const PERKS = [
  { icon: "Sports", title: "Sports Activities" },
  { icon: "Pay", title: "Competitive Pay-scale" },
  { icon: "Training", title: "Professional Training & Certifications" },
  { icon: "Medical", title: "Medical Allowance" },
  { icon: "Awards", title: "Employee Recognition Awards" },
  { icon: "Bonus", title: "Quarterly/Annual Performance Bonus" },
  { icon: "Env", title: "Exciting Working Environment" },
  { icon: "Trips", title: "Recreational Trips" },
];

const HIRING_STEPS = [
  { step: "Apply", desc: "Through the jobs posted on our official website and social channels, you can send your updated resume mentioning the job role and why you are a fit for us." },
  { step: "Application Review", desc: "From the dozens of applications we receive, we shortlist the candidates through multiple algorithms that allow us to narrow our list to candidates better aligned with the job role." },
  { step: "Interview", desc: "We align you with multiple interviewers; each meant to gather insight on you based on different principles and values." },
  { step: "Onboard", desc: "After you have cleared the last interview set, our HR will align you through the onboarding process and make the transition seamless. Welcome Onboard!" },
];

export default function CareerPage() {
  return (
    <div>
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Be One of <span className="text-accent">Us</span>?
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We come together at Active Digital Solution intending to normalize workplace diversity and turn jobs into careers. Join hands with us to work hard, laugh a lot and learn non-stop.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Job Openings:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JOBS.map((job) => (
              <div
                key={job.title}
                className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent transition"
              >
                <h3 className="text-lg font-semibold text-accent mb-2">{job.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{job.exp}</p>
                <a href="#apply" className="text-accent hover:underline text-sm">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Perks and Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PERKS.map((p) => (
              <div
                key={p.title}
                className="bg-dark-bg border border-dark-border rounded-lg p-6 text-center"
              >
                <h3 className="font-semibold">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Life at Active Digital Solution</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            With an innovative approach to help our employees stay in touch with market trends and the existing practices, we offer lifelong learning opportunities through shared experiences and individual training. Our state-of-the-art facilities provide our team a comfortable environment to innovate solutions, thrive on challenges, and pursue their ideas for personal growth. We value our team as the reason for our success and ensure they are treated with respect and celebrated. Just like one family!
          </p>
          <h2 className="text-2xl font-bold mb-6">Are You Searching For A Job?</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Active Digital Solution is always searching for professionals willing to overcome new challenges while having fun. We provide our employees a unique opportunity to contribute to our growth and help our clients establish a flourishing business. We aim to attract spirited individuals with numerous growth opportunities and friendly practices at our organization.
          </p>
        </div>
      </section>

      <section className="py-16 bg-dark-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Our Hiring Process</h2>
          <div className="space-y-6 max-w-3xl">
            {HIRING_STEPS.map((item, i) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 font-bold text-accent">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-1">{item.step}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-20">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-2xl font-bold mb-6">Ready To Get Started?</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <CareerForm />
          </div>
        </div>
      </section>
    </div>
  );
}
