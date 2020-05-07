<div>
  <label>
    Roll:
  <input placeholder="1d6" bind:value={input_text} />
  </label>
  <button on:click {buttonClicked}>Roll!</button>
  <ul>
      {#each results as { total, base, modifier }}
        <li>
          <span class="roll-total">{total}</span> (<span class="roll-base">{base}</span>
          +
          <span class="roll-modifier">{modifier}</span>)
        </li>
      {/each}
  </ul>
</div>

<style>
</style>

<script>
export let results = []
export let input_text = "";
export const buttonClicked = (_) => {
    console.log(`Rolling ${input}...`)
    fetch(endpoint + input)
        .then(response => response.json())
        .then(data => results.push(data))
}

</script>