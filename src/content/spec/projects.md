---
title: "Projects"
---

<style>
.project-card {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: var(--card-bg);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 1.5rem;
}
.project-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0,0,0,0.10);
}
.project-image-link {
  display: block !important;
  flex-shrink: 0;
  min-width: 240px;
  width: 240px;
  height: 160px;
  border-radius: 1rem;
  overflow: hidden;
  transition: none;
  background: none !important;
  text-decoration: none !important;
  border-bottom: none !important;
  padding: 0 !important;
  margin: 0 !important;
  line-height: 0 !important;
  font-size: 0 !important;
  box-decoration-break: unset !important;
  -webkit-box-decoration-break: unset !important;
}
.project-image-link:hover,
.project-image-link:active {
  transform: none !important;
  box-shadow: none !important;
  background: none !important;
  background-color: transparent !important;
  text-decoration: none !important;
  outline: none !important;
  border: none !important;
  border-bottom: none !important;
}
.project-image {
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  object-fit: cover;
  pointer-events: none;
  display: block;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}
.project-tags span {
  background: oklch(0.95 0.02 var(--hue, 250));
  color: oklch(0.45 0.10 var(--hue, 250));
  border-radius: 9999px;
  padding: 0.25em 1em;
  font-size: 0.9em;
  display: inline-block;
  font-weight: 500;
}
</style>

<div style="display: flex; flex-direction: column; gap: 2.5rem;">
  <!-- Project 1 -->
  <div class="project-card">
    <a class="project-image-link" href="https://abdelrahmanelsayed.tech" target="_blank" rel="noopener">
      <img class="project-image" src="https://images.unsplash.com/photo-1585007600263-71228e40c8d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="My personal website and blog." />
    </a>
    <div>
      <h2 style="margin: 0 0 0.2em 0;">abdelrahmanelsayed.tech</h2>
      <div style="margin-bottom: 0.5em; color: #444;">My personal website and blog.</div>
      <div class="project-tags">
        <span>Astro</span>
        <span>TypeScript</span>
        <span>TailwindCSS</span>
        <span>Svelte</span>
      </div>
    </div>
  </div>