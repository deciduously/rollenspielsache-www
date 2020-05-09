<div class="info">
  <p>
    The Rollenspielsache is a set of modular tools for managing tabletop RPG
    sessions.
  </p>
  <p>Components:</p>
  <ul>
    {#each parts as { name, description, url }}
      <li>
      {#if url}
        <Link {url}>
          <code class="component-name">{name}</code>
        </Link>
      {:else}
        <code class="component-name">{name}</code>
      {/if}
      <span>- {description}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
.component-name {
  font-weight: bold;
}
</style>

<script>
import Link from "./Link";
export const parts = [{
    name: 'librollenspielsache',
    description: 'Rust crate with C-compatible API with core types and logic',
    url: 'https://github.com/deciduously/librollenspielsache'
},
{
    name: 'librollenspielsache-rb',
    description: 'Ruby wrapper gem',
    url: 'https://github.com/deciduously/librollenspielsache-rb'
},
{
    name: 'rollenspielsache-svc',
    description: 'Backend web service',
    url: 'https://github.com/deciduously/rollenspielsache-svc'
},
{
    name: 'rollenspielsache-www',
    description: 'Svelte.js frontend - this website!',
    url: 'https://github.com/deciduously/rollenspielsache-www'
},
{
    name: 'rollenspielsache-py',
    description: 'Python bindings (Planned)'
},
{
    name: 'rollenspielsache-bot',
    description: 'Discord bot (Planned)'
},
{
    name: 'rollenspielsache-ts',
    description: 'JS/TS bindings (Node) (Planned)'
},
{
    name: 'rollenspielsache-roll20',
    description: 'Roll20 integration (Planned)'
}
];
</script>