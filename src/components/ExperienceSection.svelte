<script lang="ts">
  interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    location: string;
    website?: string;
    description: string;
    technologies: string[];
  }

  const experiences: Experience[] = [
    {
      id: 'twl',
      title: 'Research Assistant',
      company: 'the Trade War Lab',
      period: '10/2025 - Present',
      location: 'Lawrence, KS',
      website: 'tradewarlab.com',
      description: 'Conducted qualitative analysis of trade policy impacts using the TIES framework and academic literature. Performed data entry, dataset preparation, and trained in R for statistical analysis. Contributed to U.S.-China Trade War research through dynamic simulation modeling and helped develop the online simulation platform using React and C#.',
      technologies: ['R', 'C#', 'React', 'Qualitative Analysis'],
    },
    {
      id: 'kuit',
      title: 'Student IT Technician',
      company: 'University of Kansas IT',
      period: '05/2025-11/2025',
      location: 'Lawrence, KS',
      description: 'Provided technical support across multiple channels (phone, email, chat, in-person), maintaining FERPA compliance and security standards. Created and tracked detailed service tickets to ensure efficient incident resolution and accountability.',
      technologies: ['Customer Service', 'Ticketing systems', 'Troubleshooting'],
    },
    {
      id: 'sardius',
      title: 'Software Engineering Intern',
      company: 'Sardius Media',
      period: '09/2023 - 05/2024',
      location: 'Kansas City, MO',
      website: 'sardius.media',
      description: 'Learned and implemented React, and contributed to brainstorming and planning sessions. Learned about general software engineering practices like version control and the Agile methodology.',
      technologies: ['Software Engineering', 'React'],
    }
  ];

  let expandedId: string | null = null;

  function toggleExpand(id: string) {
    expandedId = expandedId === id ? null : id;
  }
</script>

<section id="experience" class="w-full px-4 font-jetbrains mb-16">
  <div class="max-w-7xl mx-auto">
    <!-- Section Title -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
    </div>

    <!-- Experience Items -->
    <div class="space-y-6">
      {#each experiences as exp}
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <!-- Header (Always Visible) -->
          <button
            on:click={() => toggleExpand(exp.id)}
            class="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <div class="text-left flex-1">
              <h3 class="text-xl font-semibold text-gray-900">
                {exp.title} @ {exp.company}
              </h3>
              <p class="text-sm text-gray-500 mt-1">{exp.location}</p>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-gray-600 text-sm">{exp.period}</span>
              <svg 
                class="w-5 h-5 text-gray-600 transition-transform duration-300"
                class:rotate-180={expandedId === exp.id}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <!-- Expanded Content -->
          {#if expandedId === exp.id}
            <div class="px-6 pb-6 pt-2 border-t border-gray-100">
              <!-- Website Link -->
              {#if exp.website}
                <a 
                  href="https://{exp.website}" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 text-sm mb-4 black-dot-cursor"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"/>
                  </svg>
                  {exp.website}
                </a>
              {/if}

              <!-- Description -->
              <p class="text-gray-600 text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                {#each exp.technologies as tech}
                  <span class="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .rotate-180 {
    transform: rotate(0deg);
  }
</style>
