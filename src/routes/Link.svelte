<script lang="ts">
    import { page } from '$app/stores'

    export let href: string

    $: url = new URL(href)
    $: external = $page.url.host !== url.host
</script>

<a {href} target={external ? "_blank" : undefined} rel={external ? "noreferrer noopener" : undefined} {...$$restProps}>
    <slot />
</a>