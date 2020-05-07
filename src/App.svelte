<script>
  import { onMount } from "svelte";
  import Clock from "./components/Clock.svelte";
  import Footer from "./components/Footer.svelte";
  import Info from "./components/Info.svelte";
  import Roller from "./components/Roller.svelte";
  const HOST = "localhost";
  const PORT = 4567;
  const url = (host, port) => `http://${host}:${port}/`;
  const URL = url(HOST, PORT);

  onMount(() => {
    // TODO catch a failiure and warn - mount a new element?
    fetch(URL + "ping").then(data => console.log(data));
  });
</script>

<style>

</style>

<h1>Rollenspielsache Dashboard</h1>
<Roller />
<Info />
<Clock />
<Footer />
