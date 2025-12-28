// client/src/pages/Home.jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-sky-600 text-white py-24">
        <div className="container mx-auto text-center px-4 space-y-6">
          <h1 className="text-5xl font-bold">MediSync</h1>
          <p className="text-xl max-w-xl mx-auto">
            Track your medicines, get timely reminders, and monitor your health metrics easily—all in one app.
          </p>
          <div className="space-x-4 mt-6">
            <a
              href="/signup"
              className="px-6 py-3 bg-white text-sky-600 font-semibold rounded shadow hover:bg-slate-100 transition"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="px-6 py-3 border border-white rounded hover:bg-white hover:text-sky-600 transition"
            >
              Login
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded shadow p-6 text-center space-y-4">
            <img
              src="https://img.freepik.com/premium-vector/medicine-bottles-clip-art-vector-design-with-white-background_579306-9689.jpg"
              alt="Medicines"
              className="max-w-full h-40 mx-auto"
            />
            <h3 className="text-xl font-semibold">Medicine Tracker</h3>
            <p className="text-slate-600">
              Add, edit, and remove your medicines. Set dosage times for reminders.
            </p>
          </div>

          <div className="bg-white rounded shadow p-6 text-center space-y-4">
            <img
              src="https://media.istockphoto.com/id/836065660/vector/time-for-your-meds.jpg?s=612x612&w=0&k=20&c=AGBe3JnhdmdSPT2bbmW1bAQW5UZvo9lTnnIkCDHT7d8="
              alt="Reminders"
              className="max-w-full h-40 mx-auto"
            />
            <h3 className="text-xl font-semibold">Reminders</h3>
            <p className="text-slate-600">
              Receive notifications at the right time to take your medications.
            </p>
          </div>

          <div className="bg-white rounded shadow p-6 text-center space-y-4">
            <img
              src="../../assets/health_report.png"
              alt="Health Logs"
              className="max-w-full h-40 mx-auto"
            />
            <h3 className="text-xl font-semibold">Health Monitoring</h3>
            <p className="text-slate-600">
              Log your blood pressure and glucose levels. View charts to monitor trends.
            </p>
          </div>
        </div>
      </section>

      {/* About / Call to Action */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Why MediSync?</h2>
            <p className="text-slate-700">
              Staying on top of your medications and health logs has never been easier. MediSync helps you manage your routine, track your progress, and keep your health in check.
            </p>
            <a
              href="/signup"
              className="inline-block px-6 py-3 bg-sky-600 text-white font-semibold rounded shadow hover:bg-sky-700 transition"
            >
              Start Now
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/09/09/2016//1473133199879976200.jpg?itok=-UVz7HKl"
              alt="Health illustration"
              className="rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 text-center bg-sky-600 text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to manage your health?</h2>
        <a
          href="/signup"
          className="px-6 py-3 bg-white text-sky-600 font-semibold rounded shadow hover:bg-slate-100 transition"
        >
          Sign Up Now
        </a>
      </section>
    </div>
  );
}
