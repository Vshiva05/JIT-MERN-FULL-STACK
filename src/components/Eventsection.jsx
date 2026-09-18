.events-section {
  max-width: 1200px;
  margin: auto;
  padding: 70px 8%;
}

.section-label {
  margin: 0;
  color: #2563eb;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.events-section h2 {
  margin-top: 8px;
  color: #0f172a;
  font-size: 32px;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  gap: 22px;
  margin-top: 30px;
}

.event-card {
  display: flex;
  flex-direction: column;
  padding: 22px;
  border: 1px solid #dbeafe;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
}

.event-card h3 {
  margin: 10px 0;
  color: #0f172a;
}

.event-card p {
  line-height: 1.6;
  color: #475569;
}

.event-category {
  margin: 0;
  color: #2563eb !important;
  font-size: 14px;
  font-weight: bold;
}

.event-card button {
  margin-top: auto;
  padding: 10px 14px;
  border: none;
  border-radius: 6px;
  background-color: #2563eb;
  color: white;
  cursor: pointer;
}

.event-card button:hover {
  background-color: #1d4ed8;
}