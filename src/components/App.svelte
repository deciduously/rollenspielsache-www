<script>
  import { onMount } from "svelte";
  import Clock from "./Clock.svelte";
  import Footer from "./Footer.svelte";
  import Info from "./Info.svelte";
  import Roller from "./Roller.svelte";
  import { APIServer } from "../lib/server";

  onMount(() => {
    // TODO catch a failiure and warn - mount a new element?
    fetch(APIServer.url() + "ping").then(data => console.log(data));
  });
</script>

<style>

</style>

<h1>Rollenspielsache Dashboard</h1>
<Roller />
<Info />
<Clock />
<Footer />
