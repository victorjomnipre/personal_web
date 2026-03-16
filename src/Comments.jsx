import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useTheme } from './context/ThemeContext';

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost/personal_web/src/backend';
const COMMENTS_API = `${API_BASE}/model.php`;

function formatDate(dateString) {
  if (!dateString) return '';
  try {
    const d = new Date(dateString);
    return d.toLocaleString();
  } catch {
    return dateString;
  }
}

 function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', message: '' });
  const { darkMode } = useTheme();

  // Only message is strictly required since name defaults to Anonymous
  const isValid = useMemo(() => {
    return form.message.trim().length > 0;
  }, [form]);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${COMMENTS_API}?action=list`);
      setComments(response.data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function submitComment(evt) {
    evt.preventDefault();
    if (!isValid) return;

    setError('');
    const payload = {
      name: form.name.trim() || 'Anonymous',
      message: form.message.trim(),
    };

    try {
      const response = await axios.post(`${COMMENTS_API}?action=create`, payload);
      setComments((prev) => [response.data.data, ...prev]);
      setForm({ name: '', message: '' });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="mt-16">
      <div className={`rounded-2xl border p-6 shadow-sm transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Leave a comment</h2>

        <form onSubmit={submitComment} className="space-y-4">
          <div>
            <label className={`block text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Name (Optional)</label>
            <input
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className={`mt-1 w-full rounded-md border px-3 py-2 transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
              placeholder="Anonymous"
            />
          </div>

          <div>
            <label className={`block text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Message *</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              rows={4}
              className={`mt-1 w-full rounded-md border px-3 py-2 transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
              placeholder="What's on your mind?"
            />
          </div>

          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

          <button
            type="submit"
            disabled={!isValid}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none disabled:opacity-50 transition-colors"
          >
            Post comment
          </button>
        </form>

        <div className="mt-10">
          <div className={`flex items-center justify-between border-b pb-4 transition-colors duration-300 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-xl font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent comments</h3>
            <span className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{loading ? 'Loading…' : `${comments.length} comment${comments.length === 1 ? '' : 's'}`}</span>
          </div>

          {comments.length === 0 && !loading && (
            <p className={`mt-6 text-center text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>No comments yet. Be the first to leave one!</p>
          )}

          <ul className="mt-6 space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className={`p-4 rounded-lg border transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
                <div className="flex justify-between items-start">
                  <p className={`text-sm font-bold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{comment.name}</p>
                  <span className={`text-xs transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{formatDate(comment.created_at)}</span>
                </div>
                <p className={`mt-3 whitespace-pre-line text-sm transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {comment.message}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Comments;