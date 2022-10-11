<script lang="ts">
    
</script>

<div class="wrapper">
    <div class="images">
        <slot />
    </div>
</div>

<style lang="scss">
    div.wrapper {
        width: 100%;

        display: grid;
        // grid-template-columns: [left] 2rem [images] 1fr [right] 2rem;
        grid-template-columns: [images] 1fr;
        align-items: start;
        
        div.images {
            grid-column: images;
            
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;

            display: grid;
            grid-auto-columns: 100%;
        }
    }
</style>