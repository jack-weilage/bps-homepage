<script lang="ts">
    import Article      from './Article.svelte';
    import Carousel     from './Carousel.svelte'
    import CarouselItem from './CarouselItem.svelte'
    import Link         from './Link.svelte'

    import { DateTime } from 'luxon'
</script>

<svelte:head>
    <title>Bellingham Public Schools</title>
</svelte:head>
<main id="content">
    <section id="news">
        <Carousel>
            <CarouselItem>
                <img slot="image" src="/images/carousel/1.bmp" alt="">
                <Link slot="caption" href="https://bellinghamschools.org/news/in-person-college-fair-returns-oct-6/">Read More »</Link>
            </CarouselItem>
            <CarouselItem>
                <img slot="image" src="/images/carousel/2.bmp" loading="lazy" alt="">
                <Link slot="caption" href="https://bellinghamschools.org/parentsquare/">Read More »</Link>
            </CarouselItem>
            <CarouselItem>
                <img slot="image" src="/images/carousel/3.bmp" loading="lazy" alt="">
                <Link slot="caption" href="https://bellinghamschools.org/families/school-day-information/bus-transportation/">Read More »</Link>
            </CarouselItem>
        </Carousel>
        <div class="news-aside">
            <h2>News</h2>
            <div class="articles">
                <Article href="https://bellinghamschools.org/news/in-person-college-fair-returns-oct-6/" date={DateTime.fromSQL('2022-09-21')}>
                    <h3 slot="title">In-person College Fair returns Oct. 6</h3>
                    <p slot="description">High school juniors and seniors in Bellingham…</p>
                </Article>
                <Article href="https://bellinghamschools.org/news/sehome-update/" date={DateTime.fromSQL('2022-09-20')}>
                    <h3 slot="title">Sehome Update</h3>
                    <p slot="description">A Message from Sehome Principal Sonia Cole…</p>
                </Article>
                <Article href="https://bellinghamschools.org/news/call-for-applications-for-instructional-materials-committee/" date={DateTime.fromSQL('2022-09-19')}>
                    <h3 slot="title">Call for applications for Instructional Materials Committee</h3>
                    <p slot="description">A Message from the Department of Teaching…</p>
                </Article>
            </div>
            <a href="https://bellinghamschools.org/news">View all News »</a>
        </div>
    </section>
    <section id="the-bellingham-promise">
        <h2>The Bellingham Promise</h2>
        <div class="col-3">
            <div class="col">
                <img src="/images/promise/1.bmp" alt="" loading="lazy">
                <p>
                    We, as a community, make a collective commitment to Bellingham’s children. 
                    We will <b>empower every child to discover and develop their passions</b>, 
                    contribute to their community, and achieve a fulfilling and productive life. 
                </p>
            </div>
            <div class="col">
                <img src="/images/promise/2.bmp" alt="" loading="lazy">
                <p>
                    We collectively commit that <b>our students are cared for and respected</b>, 
                    and that they will graduate from our schools prepared for success.
                </p>
            </div>
            <div class="col">
                <img src="/images/promise/3.bmp" alt="" loading="lazy">
                <p>
                    All students will be exceptional in their own way, with <b>strong character, a passion for learning</b>, 
                    and ready for the widest range of educational and vocational options to support a diversity of life choices.
                </p>
            </div>
        </div>
        <a href="https://bellinghamschools.org/about/the-bellingham-promise/" class="read-more">Read The Bellingham Promise »</a>
    </section>
    <section id="promise-stories">
        <h2>Promise Stories</h2>
        <div class="col-3">
            <div class="col">
                <img src="/images/promise-stories/ik596jns.bmp" alt="" loading="lazy">
                <time datetime="">10/10/2022</time>
                <h3>
                    <a href="https://promise.bellinghamschools.org/2022/10/10/students-get-hands-on-experience-for-high-demand-jobs-in-new-cte-courses/">
                        Students get hands-on experience for high demand jobs in new CTE courses
                    </a>
                </h3>
                <p>Two new courses are being offered this…</p>
                <a href="https://promise.bellinghamschools.org/2022/10/10/students-get-hands-on-experience-for-high-demand-jobs-in-new-cte-courses/">
                    Read More »
                </a>
            </div>
            <div class="col">
                <img src="/images/promise-stories/9rvl7udr.bmp" alt="" loading="lazy">
                <time datetime="">10/5/2022</time>
                <h3>
                    <a href="https://promise.bellinghamschools.org/2022/10/05/the-new-sunnyland-designed-for-flexible-learning-environments/">
                        The new Sunnyland designed for flexible learning environments
                    </a>
                </h3>
                <p>They newly rebuilt Sunnyland Elementary School opened…</p>
                <a href="https://promise.bellinghamschools.org/2022/10/05/the-new-sunnyland-designed-for-flexible-learning-environments/">
                    Read More »
                </a>
            </div>
            <div class="col">
                <img src="/images/promise-stories/i3hiu941.bmp" alt="" loading="lazy">
                <time datetime="">09/22/2022</time>
                <h3>
                    <a href="https://promise.bellinghamschools.org/2022/09/22/teacher-katie-owen-goes-to-world-track-meet/">
                        Teacher Katie Owen Goes to World Track Meet
                    </a>
                </h3>
                <p>It’s not every day you get to…</p>
                <a href="https://promise.bellinghamschools.org/2022/09/22/teacher-katie-owen-goes-to-world-track-meet/">
                    Read More »
                </a>
            </div>
        </div>
    </section>
    <section id="pillars">
        <div class="col-3">
            <div class="col">
                <a href="https://bellinghamschools.org/about/superintendent/project-free-education/">
                    <img src="/images/pillars/swg58b5a.bmp" alt="" loading="lazy">
                </a>
            </div>
            <div class="col">
                <a href="https://bellinghamschools.org/about/equity-diversity-and-inclusion/">
                    <img src="/images/pillars/jx8mk2cq.bmp" alt="" loading="lazy">
                </a>
            </div>
            <div class="col">
                <a href="http://www.bellinghamschoolsfoundation.org/">
                    <img src="/images/pillars/ukogohdq.bmp" alt="" loading="lazy">
                </a>
            </div>
        </div>
    </section>
</main>

<style lang="scss">
    main {
        section#news {
            padding: 0;

            display: grid;
            grid-template-columns: [carousel] 3fr [news] 2fr;
            grid-template-rows: 1fr;

            div.news-aside {
                grid-column: news;
                padding: 1.75rem 2rem;
                
                h2 {
                    margin: 0;

                    text-align: start;
                    line-height: 1;
                }
                div.articles {
                    margin: 1.25rem 0;
                }
                a {
                    font-weight: bold;

                    color: $brand-red;

                    &:hover {
                        color: #383838;
                    }
                }
            }
        }
        section#pillars {
            grid-template-rows: [header] 6rem [main] 1fr [footer] 6rem;
         
            div.col-3 {
                grid-row: main
            }
        }
        section {
            display: grid;
            grid-template-rows: [header] 10rem [main] 1fr [footer] 10rem;
            align-items: center;

            padding: 0 2rem;

            &:nth-child(odd) {
                background-color: $light-grey;
            }
            h2 {
                color: $brand-light-blue;
                text-align: center;

                font-weight: 300;
                font-size: 2.5em;

                margin: 0;
            }
        }
    }
    .col-3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;

        .col {
            text-align: center;
            color: #414042;

            b {
                color: $brand-blue;
            }
            p {
                padding: 0 1rem;
                font-size: 1.15em;
                line-height: 1.35;
            }
        }
        + a.read-more {
            display: block;

            width: max-content;
            text-align: center;

            font-size: 1.15em;
            color: $brand-red;
            font-weight: bold;

            margin: 2.5rem auto 4rem;
        }
    }
</style>