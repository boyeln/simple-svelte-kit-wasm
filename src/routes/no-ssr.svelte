<h1>No SSR</h1>

<p>
    {#await import("$lib/wasm")}
        Loading...
    {:then {greet}}
        {greet("WASM")}
    {/await}
</p>
