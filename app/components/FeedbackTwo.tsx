// FeedbackTwo.tsx
import React, { useState } from 'react';
import { Divider, Button } from '@heroui/react';
import { Disclosure } from '@headlessui/react';
import { Send } from 'lucide-react';
import StarRating from './StarRating';

function FeedbackTwo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [overallRating, setOverallRating] = useState(0);
  const [devRating, setDevRating] = useState(0);
  const [designRating, setDesignRating] = useState(0);
  const [bugExperience, setBugExperience] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/feedbackextended', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          feedback,
          overallRating,
          devRating,
          designRating,
          bugExperience
        }),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      setSubmitted(true);
      setName('');
      setEmail('');
      setFeedback('');
      setOverallRating(0);
      setDevRating(0);
      setDesignRating(0);
      setBugExperience('');
    } catch (err) {
      console.error('Feedback error:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="p-8 pt-0 space-y-3 w-full">
      <h2 className="text-2xl font-bold">Feedback</h2>
      <span className='text-xs'> (Optional) Please give your honest feedback about the development and design of the website.</span>
      <br /><span className='text-xs'>Fill out the form below.</span>
      <Divider className="my-4" />

      <Disclosure>
        {({ open }) => (
          <div className="space-y-2">
            <Disclosure.Button className="w-full text-left px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition">
              <span className="font-medium">💬 Feedback Form</span>
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-md shadow space-y-3">
              {submitted ? (
                <p className="text-green-600 dark:text-green-400">Thanks for your feedback!</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">

                  {/* Name */}
                  <label className="block">
                    <span className="text-sm font-medium">Full Name </span>
                    <input required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full mt-1 p-2 rounded-md bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
                      placeholder="Your Name"
                    />
                  </label>

                  {/* Email */}
                  <label className="block">
                    <span className="text-sm font-medium">Email </span>
                    <input required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full mt-1 p-2 rounded-md bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
                      placeholder="Your Email"
                    />
                  </label>

                  {/* Overall Experience Rating */}
                  <label className="block">
                    <span className="text-sm font-medium">Overall Experience Rating</span>
                    <StarRating rating={overallRating} setRating={setOverallRating} />
                  </label>

                  {/* Developer Rating */}
                  <label className="block">
                    <span className="text-sm font-medium">Rating for Developer</span>
                    <StarRating rating={devRating} setRating={setDevRating} />
                  </label>

                  {/* Design Rating */}
                  <label className="block">
                    <span className="text-sm font-medium">Rating for Design</span>
                    <StarRating rating={designRating} setRating={setDesignRating} />
                  </label>

                  {/* Bug / Issue Experience */}
                  <label className="block">
                    <span className="text-sm font-medium">Did you experience any bugs or issues? (If yes, please describe)</span>
                    <textarea
                      value={bugExperience}
                      onChange={(e) => setBugExperience(e.target.value)}
                      className="w-full mt-1 p-2 rounded-md bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
                      rows={2}
                      placeholder="Describe any bugs/issues..."
                    />
                  </label>

                  {/* Feedback */}
                  <label className="block">
                    <span className="text-sm font-medium">Feedback</span>
                    <textarea required
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full mt-1 p-2 rounded-md bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700"
                      rows={4}
                      placeholder="Share your thoughts..."
                    />
                  </label>

                  <Button type="submit" color="danger" variant="solid">
                    <Send size={16} className="mr-2" />
                    Submit
                  </Button>

                </form>
              )}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default FeedbackTwo;
