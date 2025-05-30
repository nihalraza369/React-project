import React, { useState } from 'react';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const StepOne = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1: Personal Info</h2>
      <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} className="mb-3 p-2 border w-full" />
      <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} className="mb-3 p-2 border w-full" />
      <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  );

  const StepTwo = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2: Address Info</h2>
      <input name="address" placeholder="Address" onChange={handleChange} value={formData.address} className="mb-3 p-2 border w-full" />
      <input name="city" placeholder="City" onChange={handleChange} value={formData.city} className="mb-3 p-2 border w-full" />
      <div className="flex gap-2">
        <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">Back</button>
        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );

  const StepThree = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3: Review</h2>
      <ul className="mb-4">
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">Back</button>
        <button onClick={() => alert("🎉 Form submitted!")} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </div>
  );
};

export default App;
