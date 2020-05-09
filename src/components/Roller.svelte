<div>
  <label>
    Roll:
  <input placeholder="1d6" bind:value={input_text} />
  </label>
  <button on:click={buttonClicked}>Roll!</button>
  <ul>
      {#each results as { base, offset }}
        <li>
          <span class="roll-total">{base + offset}</span> (<span class="roll-base">{base}</span>
          +
          <span class="roll-modifier">{offset}</span>)
        </li>
      {/each}
  </ul>
</div>

<style>
</style>

<script>
import { APIServer } from '../lib/server';

export let results = []
export let input_text = "";
export const buttonClicked = (evt) => {
    console.log(`Rolling ${input_text}...`)
    console.log(results)
    fetch(APIServer.roll(input_text))
        .then(response => response.json())
        .then(data => results = results.concat(data))
}

</script>