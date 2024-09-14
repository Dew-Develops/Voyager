<script>
    let url = "";

    function navigate() {
        window.electron.navigate(url);
    }

    let world = "World";
</script>

<main>
    <h1>Hello {world}</h1>

    <input type="text" bind:value={url} placeholder="Enter URL" />
    <button on:click={navigate}>Search</button>
</main>
