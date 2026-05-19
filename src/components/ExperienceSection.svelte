<script lang="ts">
import { experiences } from "../data";

let expandedId: string | null = $state(null);

function toggleExpand(id: string) {
	expandedId = expandedId === id ? null : id;
}
</script>

<section id="experience" class="experience-section">
  <div class="section-header">
    <span class="section-title">Experience</span>
    <div class="section-line"></div>
    <span class="section-count">{experiences.length} roles</span>
  </div>

  <div class="experience-list">
    {#each experiences as exp}
      <button
        onclick={() => toggleExpand(exp.id)}
        aria-expanded={expandedId === exp.id}
        class="experience-item"
      >
        <div class="exp-row">
          <div class="exp-left">
            <span class="exp-company">{exp.company}</span>
            <span class="exp-role">{exp.title}</span>
          </div>
          <span class="exp-period">{exp.period}</span>
        </div>

        {#if expandedId === exp.id}
          <div class="exp-details">
            <p class="exp-description">{exp.description}</p>
            <div class="exp-techs">
              {#each exp.technologies as tech}
                <span class="exp-tech">{tech}</span>
              {/each}
            </div>
          </div>
        {/if}
      </button>
    {/each}
  </div>
</section>

<style>
  .experience-section {
    padding: 60px 40px;
    border-bottom: 1px solid #1a1a1a;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 40px;
  }
  .section-title {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--fg3);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .section-line {
    flex: 1;
    height: 1px;
    background: #1e1e1e;
  }
  .section-count {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--fg3);
  }

  .experience-list {
    display: flex;
    flex-direction: column;
  }

  .experience-item {
    display: block;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #1e1e1e;
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s;
  }
  .experience-item:first-child {
    border-top: 1px solid #1e1e1e;
  }
  .experience-item:hover {
    background: var(--bg2);
    padding-left: 12px;
    padding-right: 12px;
  }

  .exp-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
  }

  .exp-left {
    display: flex;
    align-items: baseline;
    gap: 16px;
  }

  .exp-company {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--fg);
  }

  .exp-role {
    font-family: var(--body);
    font-size: 13px;
    font-weight: 300;
    color: var(--fg2);
  }

  .exp-period {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--fg3);
    white-space: nowrap;
  }

  .exp-details {
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid #1a1a1a;
  }

  .exp-description {
    font-family: var(--body);
    font-size: 13px;
    font-weight: 300;
    color: var(--fg2);
    line-height: 1.6;
    margin-bottom: 12px;
  }

  .exp-techs {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .exp-tech {
    font-family: var(--mono);
    font-size: 9px;
    color: var(--fg3);
    border: 1px solid #222;
    padding: 2px 7px;
    letter-spacing: 0.04em;
  }
</style>
