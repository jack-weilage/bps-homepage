<script lang="ts">
    import { onDestroy, onMount } from 'svelte'
    //TODO: Add infinite scrolling.

    let images: HTMLDivElement
    let buttons: HTMLButtonElement[] = []
    let index = 0

    function on_scroll(ev: Event)
    {
        const el = ev.target as HTMLDivElement

        const scroll = el.scrollLeft
        const max = el.childElementCount - 1
        const width = el.clientWidth * max

        index = Math.round(scroll / width * max)
    }
    function navigate(i: number)
    {
        if (!images)
            return

        const length = images.childElementCount
        const index = i % length

        images.scrollTo({ left: images.clientWidth * index })
    }

    let interval: NodeJS.Timer
    onMount(() => {
            interval = setInterval(() => navigate(index + 1), 5000)
    })
    onDestroy(() => {
        clearInterval(interval)
    })
</script>

<div class="wrapper">
    <button type="button" aria-label="Last image"
        on:click={() => navigate(index - 1)}
    >&lt;</button>

    <div class="images" bind:this={images} on:scroll|self={on_scroll}>
        <slot />
    </div>
    <div class="buttons">
        {#each { length: images?.childElementCount } as _, i}
            <button type="button" class:active={index === i} aria-label="Jump to image {i + 1}"
                bind:this={buttons[i]}
                on:click={() => navigate(i)}
            ></button>
        {/each}
    </div>
    
    <button type="button" aria-label="Next image"
        on:click={() => navigate(index + 1)}
    >&gt;</button>
</div>

<style lang="scss">
    div.wrapper {
        width: 100%;
        height: fit-content;

        display: grid;
        grid-template-columns: [left] 2rem [images] 1fr [right] 2rem;
        // grid-template-columns: [images] 1fr;
        grid-template-rows: [content] 1fr;
        align-items: start;
        
        > button {
            height: 100%;
            outline: 0;
            border: 0;
        }
        .images {
            grid-column: images;
            grid-row: content;
            
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            scroll-padding: 0;

            display: grid;
            grid-auto-columns: 100%;
        }
        .buttons {
            grid-row: content;
            grid-column: images;

            // Place buttons at buttom of container.
            align-self: end;
            justify-self: center;

            //TODO: This currently displays slightly differently based on scrollbar type.
            margin-bottom: 1rem;

            button {
                border: 1px solid #000;
                outline: 0;

                width: 1rem;
                height: 1rem;
                border-radius: 50%;

                margin: 0 0.25rem;

                &.active {
                    background-color: red;
                }
            }
        }
    }
</style>