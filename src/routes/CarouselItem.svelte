<figure>
    <slot name="image">
        <!-- <img loading="lazy" src="https://picsum.photos/seed/img/1280/720" alt=""> -->
    </slot>
    <figcaption>
        <slot name="caption" />
    </figcaption>
</figure>

<style lang="scss">
    figure {
        grid-row: 1;
        scroll-snap-align: center;
        
        margin: 0;
        
        display: grid;
        grid-template-areas: "stack";
        align-items: end;

        :global img {
            grid-area: stack;
            max-width: 100%;
        }

        figcaption {
            grid-area: stack;
            padding: 1rem;
            
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));

            :global a {
                color: #fff;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>