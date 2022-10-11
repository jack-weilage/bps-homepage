<script lang="ts">
    import { page } from '$app/stores'

    export let href: string
    export let title: string

    import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte'
</script>

<li>
    <a {href} class:active={$page.url.pathname === href}>
        {title}
        <ChevronDown />
    </a>
    <div>
        <div class="description">
            <slot name="desc" />
        </div>
        <ul>
            <slot name="items" />
        </ul>
    </div>
</li>

<style lang="scss">
    li {
        &:not(:last-child) {
            border-right: 1px solid #fff;
        }
        > a {
            color: #fff;

            font-size: 1.25rem;
            font-weight: 600;
            text-decoration: none;

            display: block;
            padding: 1em;
            text-align: center;

            &.active {
                color: #89c7fb;
                background-color: $brand-blue;
            }
            > :global(svg) {
                width: 1em;
                height: 1em;
    
                vertical-align: sub;
            }
            //TODO: If one item is focused and another is hovered, both displays. This sucks.
            &:focus, &:hover {
                color: #89c7fb;
                background-color: $brand-blue;
                
                text-decoration: none;

                
                & + div {
                    display: grid;
                }
            }
        }
        > div {
            display: none;
            // By dividing the space up like this, we get one column for the description and one for the list.
            // The list column is then divided up into two new columns, creating 3 equally sized columns.
            grid-template-columns: 1fr 2fr;

            min-height: 30vh;
            padding: 1.5rem;
            
            position: absolute;
            left: 0;
            right: 0;

            background-color: rgba($brand-blue, 0.93);

            &:hover {
                display: grid;
            }

            > ul {
                font-size: 1.25em;
                list-style: none;
                columns: 2;

                > :global(li) {
                    padding: 0.25rem;
                }
            }
        }
    }
</style>