import { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css'; // make sure Tailwind is working

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    country: '',
  });

  const next = () => {
    if (step === 1 && !form.name) return alert('Name is required!');
    if (step === 2 && !form.email.includes('@')) return alert('Valid email required!');
    if (step === 3 && (isNaN(form.age) || form.age < 1)) return alert('Enter valid age!');
    setStep(step + 1);
  };

  const prev = () => setStep(step - 1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const submit = () => {
    alert(`🎉 Submitted: ${JSON.stringify(form, null, 2)}`);
    setStep(1);
    setForm({ name: '', email: '', age: '', country: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Step {step} of 4</h2>

        {step === 1 && (
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        )}

        {step === 2 && (
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        )}

        {step === 3 && (
          <input
            name="age"
            placeholder="Your Age"
            value={form.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        )}

        {step === 4 && (
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded">
              Back
            </button>
          )}
          {step < 4 && (
            <button onClick={next} className="px-4 py-2 bg-blue-600 text-white rounded">
              Next
            </button>
          )}
          {step === 4 && (
            <button onClick={submit} className="px-4 py-2 bg-green-600 text-white rounded">
              Submit
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

