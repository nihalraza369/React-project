export default function ResumeForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4 p-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="border p-2 w-full rounded"
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Your Title"
        className="border p-2 w-full rounded"
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="Short Bio"
        rows={4}
        className="border p-2 w-full rounded"
        onChange={handleChange}
      />
    </div>
  );
}
