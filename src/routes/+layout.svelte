<script lang="ts">
    import IconSearch       from 'carbon-icons-svelte/lib/Search.svelte'
    import ArrowUp          from 'carbon-icons-svelte/lib/ChevronUp.svelte'

    import LogoFacebook     from 'carbon-icons-svelte/lib/LogoFacebook.svelte'
    import LogoTwitter      from 'carbon-icons-svelte/lib/LogoTwitter.svelte'
    import LogoFlickr       from 'carbon-icons-svelte/lib/LogoFlickr.svelte'
    import LogoInstagram    from 'carbon-icons-svelte/lib/LogoInstagram.svelte'

    import Link from './Link.svelte'
    import NavItem from './NavItem.svelte'
</script>

<header>
    <a href="#nav"      class="skip-to">Skip to Navigation</a>
    <a href="#content"  class="skip-to">Skip to Content</a>
    <div class="top-bar">
        <div class="welcomes">
            <a href="https://bellinghamschools.org/es/">Bienvenido</a>
            <a href="https://bellinghamschools.org/pa/">ਸੁਆਗਤ ਹੈ</a>
            <a href="https://bellinghamschools.org/vi/">Xin chào</a>
            <a href="https://bellinghamschools.org/ru/">добро пожаловать</a>
        </div>
        <div class="right">
            <Link href="https://facebook.com/bellinghamschools" title="Facebook">
                <LogoFacebook />
            </Link>
            <Link href="https://twitter.com/BhamSD" title="Twitter">
                <LogoTwitter />
            </Link>
            <Link href="https://www.flickr.com/photos/bellinghamschools" title="Flickr">
                <LogoFlickr />
            </Link>
            <Link href="https://instagram.com/bellinghamschools/" title="Instagram">
                <LogoInstagram />
            </Link>
            <Link class="staff-login" href="https://inside.bellinghamschools.org/Pages/default.aspx">Staff Login</Link>

            <form method="GET">
                <label for="lang-selector">Translate to:</label>
                <select name="lang" id="lang-selector">
                    <option value="en">English</option>
                    <option value="es">Espanol</option>
                </select>
                <button type="submit">Go</button>
            </form>
        </div>
    </div>
    <div class="branding">
        <a href="https://bellinghamschools.org" class="logo">
            <img src="/images/logo.bmp" alt="">
        </a>
        <div class="links">
            <Link href="https://www.parentsquare.com/signin">ParentSquare</Link>
            <Link href="https://www2.nwrdc.wa-k12.net/scripts/cgiip.exe/WService=wbellins71/seplog01.w">Skyward</Link>
            <Link href="https://bellinghamschools.org/families/calendars/">Calendar</Link>
            <Link href="https://bellinghamschools.org/forms/">Forms</Link>
            <Link href="https://portal.office.com/">Office 365</Link>
            <Link href="https://bellinghamschools.org/about/departments/human-resources/">Jobs</Link>
            <Link href="https://bellinghamschools.org/contact/">Contact</Link>
        </div>
    </div>
    <nav id="nav">
        <ul>
            <NavItem href="https://bellinghamschools.org/about/" title="About">
                <svelte:fragment slot="desc">
                    contents about
                </svelte:fragment>
                <svelte:fragment slot="items">
                    {#each { length: 20 } as _, i}
                        <li>{Math.random()}</li>
                    {/each}
                </svelte:fragment>
            </NavItem>
            <NavItem href="https://bellinghamschools.org/schools/" title="Schools">
                <svelte:fragment slot="desc">
                    contents schools
                </svelte:fragment>
            </NavItem>
            <NavItem href="https://bellinghamschools.org/programs/" title="Programs">
                <svelte:fragment slot="desc">
                    contents programs
                </svelte:fragment>
            </NavItem>
            <NavItem href="https://bellinghamschools.org/families/" title="Families">
                <svelte:fragment slot="desc">
                    contents families
                </svelte:fragment>
            </NavItem>
            <NavItem href="https://bellinghamschools.org/about/school-board/" title="School Board">
                <svelte:fragment slot="desc">
                    contents school board
                </svelte:fragment>
            </NavItem>
            <li class="nav-item">
                <a href="/">
                    <IconSearch />
                    Search
                </a>
            </li>
        </ul>
    </nav>
</header>

<slot />

<footer>
    <a href="#content" title="Scroll to top">
        <ArrowUp />
    </a>
    <div class="cta">
        <h3>Community members, sign up for district e-news.</h3>
        <p>District families recieve school and district news through student accounts.</p>
        <Link href="https://www.parentsquare.com/community_signups/a922c127-b6ed-41ec-b82b-c0c372110db4/new">Sign Up</Link>
    </div>
</footer>


<style lang="scss">
    header {
        // For an item to be sticky, its parent needs to either not display or be large enough to cover the space.
        // The header should stay at the top of the page, so `<header />` should be display: contents.
        display: contents;

        > a.skip-to {
            // Each skip-to link is hidden by moving it just out of view above. When it's focused, it appears, covering up a big chunk of the top of the page.
            z-index: 999;
            position: absolute;
            top: -100%;

            width: 100%;
            padding: 2rem;

            font-size: 1.5em;
            text-align: center;

            background-color: #fff;

            transition: top 0.25s ease-in-out;

            &:focus {
                top: 0%;
            }
        }
        > div.top-bar {
            //TODO: Mobile layout.
            display: grid;
            grid-template-columns: 1fr 1fr;

            font-size: 1.1rem;
            background-color: $grey;

            padding: 0.6rem 2rem;

            > div.welcomes {
                display: flex;
                align-items: center;

                > a {
                    color: $brand-red;
                    padding: 0 1em;

                    text-decoration: none;

                    &:hover {
                        color: #000;
                        text-decoration: underline;
                    }
                }
            }
            > div.right {
                display: flex;
                align-items: center;
                justify-content: flex-end;

                :global > a {
                    margin: 0 0.35em;
                    text-decoration: none;

                    &.staff-login {
                        font-size: 1rem;
                        margin: 0 2.25em;

                        color: #383838;

                        &:hover {
                            color: $brand-red;
                            text-decoration: underline;
                        }
                    }
                }
                form {
                    label {
                        font-size: 1rem;
                    }
                    select {
                        margin-left: 0.35em;
                        width: 7.5em;
                    }
                }
            }
            :global(svg) {
                width: 1em;
                height: 1em;
                vertical-align: sub;
                color: $brand-blue;
            }
        }
        > div.branding {
            //TODO: Mobile layout.
            display: grid;
            grid-template-areas: "logo links";

            @media screen and (max-width: 800px) {
                grid-template-areas: 
                    "logo ."
                    "links links";
            }

            padding: 1.25rem 2.75rem;

            > a {
                grid-area: logo;

                > img {
                    max-height: 7rem;
                }
            } 
            > div.links {
                grid-area: links;
                
                display: flex;
                flex-wrap: wrap;
                gap: 1em;
                align-items: center;
                justify-content: space-between;

                > :global a {
                    color: $brand-blue;
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        > nav {
            //TODO: Mobile layout.
            position: sticky;
            top: 0;
            
            > ul {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(5em, 1fr));

                list-style: none;
                margin: 0;
                padding: 0;

                color: #fff;
                background-color: $brand-red;

                > li.nav-item {
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

                        > :global(svg) {
                            width: 1em;
                            height: 1em;
                            vertical-align: sub;
                        }
                        &:focus, &:hover {
                            color: #89c7fb;
                            background-color: $brand-blue;

                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
    footer {
        color: #fff;
        background-color: $brand-blue;

        > a {
            position: fixed;
            display: block;

            padding: 0.5rem;
            background-color: rgba(0, 0, 0, 0.2);

            right: 1rem;
            bottom: 1rem;

            :global svg {
                color: #fff;
                width: 1.5rem;
                height: 1.5rem;
                vertical-align: sub;
            }
            &:hover {
                background-color: rgba(0, 0, 0, 0.5);
            }
        }
        > div.cta {
            padding: 3rem;
            
            color: #fff;
            background-color: $brand-red;

            text-align: center;

            > h3 {
                font-size: 1.5rem;
                margin-top: 0;
                margin-bottom: 0.25em;
            }
            > :global a {
                display: inline-block;

                font-size: 1.35rem;
                color: #fff;
                text-decoration: none;

                padding: 0.35em 1em;
                margin-top: 0.75em;

                border: 2px solid #fff;

                transition: color 0.15s linear, background-color 0.15s linear;

                &:hover {
                    color: $brand-blue;
                    background-color: white;
                }
            }
        }
    }
</style>