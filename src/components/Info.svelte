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
        <a href={url} target="_blank" rel="noopener noreferrer">
          <code class="component-name">{name}</code>
        </a>
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
    name: 'rollenspielsache_svc',
    description: 'Backend web service',
    url: 'https://github.com/deciduously/rollenspielsache_svc'
},
{
    name: 'rollenspielsache-www',
    description: 'React frontend - this website!',
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