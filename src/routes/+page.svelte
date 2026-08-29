<script lang="ts">
  import { PROJECTS } from '$lib/constants';
</script>

<main class="mx-auto mb-8 max-w-screen-sm px-4 pt-8 pb-24 sm:px-6 sm:pt-12 md:pt-28 md:pb-16">
  <div class="space-y-3 text-[13px] leading-relaxed sm:space-y-4 sm:text-[14px] md:space-y-6 md:text-[15px]">
    <!-- Header -->
    <div>
      <h1 class="font-serif text-2xl sm:text-3xl tracking-tight italic mb-2 sm:mb-4">John Syslo</h1>
      <p>
        I'm a <a class="prose-link" href="#about">student</a> who loves building things.
      </p>
    </div>

    <!-- Projects Section -->
    <div>
      <p class="font-medium text-white mb-2">Some things I've built:</p>
      <ul class="space-y-2 pl-1 sm:space-y-2.5">
        {#each PROJECTS as item}
          <li class="flex items-baseline gap-2">
            <span class="text-neutral-500 flex-shrink-0">-</span>
            <div class="flex flex-wrap items-baseline gap-x-1 sm:gap-x-2 min-w-0">
              <a class="prose-link font-medium text-white whitespace-nowrap" href={item.href}>
                {item.title}
              </a>
              <span class="text-neutral-400 text-[12px] sm:text-[13px] md:text-[14px] break-all">
                — {item.desc}
              </span>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <!-- About Section -->
    <div id="about">
      <p class="font-medium text-white mb-2">About</p>
      <p class="text-neutral-400">
        I'm a creative developer passionate about building elegant solutions. I work across web development, mobile, and engineering. Every project reflects a commitment to quality and thoughtful design.
      </p>
    </div>

    <!-- Skills -->
    <div>
      <p class="font-medium text-white mb-2">Skills</p>
      <p class="text-neutral-400">
        TypeScript, Svelte, React, Tailwind CSS, Python, and Design
      </p>
    </div>

    <!-- Contact Section -->
    <div id="contact">
      <p class="font-medium text-white mb-2 sm:mb-3">Let's work together</p>
      <p class="text-neutral-400 mb-2 sm:mb-3">
        Have a project or idea? I'd love to collaborate.
      </p>
      <div class="flex gap-2 sm:gap-3 flex-wrap">
        <a href="mailto:john@example.com" class="prose-link font-medium">
          Email
        </a>
        <span class="text-neutral-500">•</span>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="prose-link font-medium">
          LinkedIn
        </a>
        <span class="text-neutral-500">•</span>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="prose-link font-medium">
          GitHub
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div class="pt-6 sm:pt-8 border-t border-neutral-800 text-neutral-600 text-[11px] sm:text-[12px]">
      <p>© 2026 John Syslo. Handcrafted with care.</p>
    </div>
  </div>
</main>
