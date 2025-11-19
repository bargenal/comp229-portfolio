// Education page - displays my educational background and technical skills
import React, { useEffect, useState } from 'react';
import auth from './auth.js';

export default function Education(){
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ title: '', firstname: '', lastname: '', email: '', completion: '', description: ''});
    const [error, setError] = useState('');

    const load = () => {
        fetch('/api/qualifications')
          .then(res => res.json())
          .then(data => setItems(data))
          .catch(err => console.error(err));
    };

    useEffect(()=>{ load(); }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleCreate = async (e) => {
        e.preventDefault();
        setError('');
        try{
            const token = auth.getToken();
            const res = await fetch('/api/qualifications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify(form)
            });
            if (!res.ok) {
                const err = await res.json();
                setError(err.error || 'Create failed');
                return;
            }
            setForm({ title: '', firstname: '', lastname: '', email: '', completion: '', description: ''});
            load();
        }catch(err){ setError('Network error'); }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this qualification?')) return;
        try{
            const token = auth.getToken();
            const res = await fetch(`/api/qualifications/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
            if (res.ok) load();
        }catch(e){ console.error(e); }
    };

    const me = auth.isAuthenticated();
    const role = me && me.user ? me.user.role : null;

    return (
        <section className="section">
            <div className="section-container">
                <h2 className="about-title">Education</h2>

                {role === 'admin' && (
                    <div style={{ marginBottom: 20 }}>
                        <h3>Create Qualification</h3>
                        <form onSubmit={handleCreate}>
                            <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
                            <input name="firstname" placeholder="First name" value={form.firstname} onChange={handleChange} required />
                            <input name="lastname" placeholder="Last name" value={form.lastname} onChange={handleChange} required />
                            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                            <input name="completion" placeholder="Completion date (YYYY-MM-DD)" value={form.completion} onChange={handleChange} />
                            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
                            <button type="submit">Create</button>
                        </form>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                )}

                <div>
                    {items.map(i => (
                        <div key={i._id} style={{ marginBottom: 12 }}>
                            <h4>{i.title}</h4>
                            <div>By {i.firstname} {i.lastname} — {i.email} — {i.completion ? new Date(i.completion).toLocaleDateString() : ''}</div>
                            <p>{i.description}</p>
                            {role === 'admin' && <button onClick={()=>handleDelete(i._id)}>Delete</button>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
