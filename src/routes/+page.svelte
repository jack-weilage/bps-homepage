<script lang="ts">
    import Article      from './Article.svelte'
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
    <section id="the-bellingham-promise" class="sect">
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
    <section id="promise-stories" class="sect">
        <h2>Promise Stories</h2>
        <div class="col-3">
            <div class="col">
                <img src="/images/promise-stories/1.bmp" alt="" loading="lazy">
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
                <img src="/images/promise-stories/2.bmp" alt="" loading="lazy">
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
                <img src="/images/promise-stories/3.bmp" alt="" loading="lazy">
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
    <section id="pillars" class="sect">
        <div class="col-3">
            <a href="https://bellinghamschools.org/about/superintendent/project-free-education/" class="col">
                <img src="/images/pillars/1.bmp" alt="" loading="lazy">
                <span>
                    Project Free Education
                    <img src="/images/sketched-line.png" alt="">
                </span>
            </a>
            <a href="https://bellinghamschools.org/about/equity-diversity-and-inclusion/" class="col">
                <img src="/images/pillars/2.bmp" alt="" loading="lazy">
                <span>
                    Equity, Diversity and Inclusion
                    <img src="/images/sketched-line.png" alt="">
                </span>
            </a>
            <a href="http://www.bellinghamschoolsfoundation.org/" class="col">
                <img src="/images/pillars/3.bmp" alt="" loading="lazy">
                <span>
                    Bellingham Schools Foundation
                    <img src="/images/sketched-line.png" alt="">
                </span>
            </a>
        </div>
    </section>
    <section id="video" class="sect">
        <h2>Featured Video</h2>
        <div class="content">
            <div>
                <h3>2022 Bellingham Promise Awards</h3>
                <a href="https://bellinghamps.wistia.com/projects/hsw4p9nyuv">View All Videos »</a>
            </div>
            <img src="/images/video-preview/thumb.bmp" alt="">
        </div>
    </section>
</main>

<style lang="scss">
    #news {
        display: grid;
        grid-template-columns: [carousel] 3fr [news] 2fr;

        @media screen and (max-width: 800px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }

        .news-aside {
            padding: 1.75rem 2rem;  
        }
        h2 {
            color: $brand-light-blue;

            font-weight: 300;
            font-size: 2.5em;
            margin: 0;

            line-height: 1;
        }
        .articles {
            margin: 1.25rem 0;;
        }
        a {
            font-weight: bold;
            color: $brand-red;

            &:hover {
                color: #383838;
            }
        }
    }
    #promise-stories {
        grid-template-rows: [header] 8rem [main] 1fr [footer] 4rem;

        time {
            display: block;
            margin: 1.2rem 0;
        }
        h3 {
            margin: 0;

            a {
                color: #052f5a;
                text-decoration: none;
                
                &:hover {
                    color: #0b1117;
                    text-decoration: underline;
                }
            }
        }
        div.col > a {
            font-weight: bold;
            color: $brand-red;
        }
    }
    #pillars {
        grid-template-rows: [header] 6rem [main] 1fr [footer] 6rem;
        
        .col-3 {
            grid-row: main;

            .col {
                display: grid;
                grid-template-areas: "stack";
                align-items: center;

                text-decoration: none;

                img {
                    grid-area: stack;
                }
                span {
                    padding: 1rem;

                    color: #fff;
                    font-size: 2.6em;
                    font-weight: 300;
                    grid-area: stack;

                    line-height: 1.2;
                }
            }
        }
    }
    #video .content {
        display: grid;
        grid-template-columns: 1fr 2fr;

        h3 {
            margin-top: 0;
            color: $brand-blue;
        }
        a {
            color: $brand-red;

            &:hover {
                color: #0b1117;
            }
        }
    }

    section:nth-child(odd) {
        background-color: $light-grey;
    }
    .sect {
        display: grid;
        grid-template-rows: [header] 10rem [main] 1fr [footer] 10rem;
        align-items: center;

        padding: 0 2rem;

        h2 {
            color: $brand-light-blue;
            text-align: center;

            font-weight: 300;
            font-size: 2.5em;

            margin: 0;
        }
    }
    
    .col-3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;

        align-items: normal;

        @media screen and (max-width: 800px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;

            align-items: center;
        }

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