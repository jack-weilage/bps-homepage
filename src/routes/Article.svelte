<script lang="ts">
    import Link from './Link.svelte'

    import type { DateTime } from 'luxon'

    export let href: string
    export let date: DateTime
</script>

<article>
    <time datetime={date.toISODate()}>{date.toFormat('MM/dd/yyyy')}</time>
    <Link {href} class="title">
        <slot name="title">
            <h3>Default Title</h3>
        </slot>
    </Link>
    <slot name="description">
        <p>Default Description</p>
    </slot>
    <Link {href} class="read-more">Read More »</Link>
</article>

<style lang="scss">
    article {
        margin: 1rem 0;

        :global {
            a.title {
                text-decoration: none;
                color: $brand-blue;

                &:hover {
                    text-decoration: underline;
                    color: #383838;
                }
                h3 {
                    margin: 0.5rem 0;
                    
                }
            }
            a.read-more {
                color: $brand-red;

                &:hover {
                    color: #383838;
                }
            }
        }
        p {
            margin: 0.5rem 0;
        }
    }
</style>