<script context="module">
    /** @type {import('./__types/ssr').Load} */
    export async function load() {
        const { greet } = await import("$lib/wasm");
        return { props: { greet } };
    }
</script>

<script>
    /** @type {import("$lib/wasm").greet} */
    export let greet;
</script>

<h1>SSR</h1>

<p>{greet("WASM")}</p>
