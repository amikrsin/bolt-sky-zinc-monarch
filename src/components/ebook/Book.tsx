import { useEffect, useState } from "react";
import { pages } from "@/data/pages";
import { useReader } from "@/lib/reader-store";
import { Altar, Contents, Cover, Intro, Kalash, Naivedya, Prep, Samagri } from "./front";
import {
  GaneshPuja,
  Khata,
  KuberPuja,
  LakshmiPuja,
  RitualOpen,
  SankalpPage,
} from "./rituals";
import {
  GaneshAarti,
  Kshama,
  LakshmiAarti,
  Notes,
  StotraA,
  StotraB,
  StotraC,
  StotraD,
} from "./scripture";

export function Book() {
  const scale = useReader((state) => state.scale);
  const toggleScale = useReader((state) => state.toggleScale);
  const [current, setCurrent] = useState(pages[0].id);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    void useReader.persist.rehydrate();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const line = Math.max(96, window.innerHeight * 0.33);
      let id = pages[0].id;
      for (const page of pages) {
        const node = document.getElementById(page.id);
        if (!node) continue;
        if (node.getBoundingClientRect().top <= line) id = page.id;
      }
      setCurrent(id);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const index = Math.max(
    0,
    pages.findIndex((page) => page.id === current),
  );

  function go(id: string) {
    setCurrent(id);
    setTocOpen(false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }

  function step(direction: -1 | 1) {
    const next = pages[index + direction];
    if (next) go(next.id);
  }

  const jumps = (
    <>
      {pages.map((page, pageIndex) => (
        <button
          key={page.id}
          type="button"
          className="jump rail-btn"
          data-on={page.id === current}
          onClick={() => go(page.id)}
        >
          {pageIndex + 1}. {page.short}
        </button>
      ))}
    </>
  );

  return (
    <div className="book" data-scale={scale}>
      <header className="topbar">
        <button type="button" className="text-btn menu-only" onClick={() => setTocOpen(true)}>
          सूची
        </button>
        <p className="brand">लक्ष्मी-गणेश दिवाली पूजा</p>
        <button type="button" className="text-btn" onClick={toggleScale}>
          {scale === "large" ? "सामान्य अक्षर" : "बड़े अक्षर"}
        </button>
        <button type="button" className="text-btn" onClick={() => window.print()}>
          छापें
        </button>
        <div className="progress" aria-hidden="true">
          <span style={{ width: `${((index + 1) / pages.length) * 100}%` }} />
        </div>
      </header>

      <aside className="toc-rail" aria-label="पृष्ठ">
        <h2>पृष्ठ</h2>
        {jumps}
      </aside>

      {tocOpen ? (
        <div className="drawer-back" onClick={() => setTocOpen(false)}>
          <div
            className="drawer"
            role="dialog"
            aria-label="विषय-सूची"
            onClick={(event) => event.stopPropagation()}
          >
            <header>
              <h2>विषय-सूची</h2>
              <button type="button" className="icon-btn" onClick={() => setTocOpen(false)}>
                बंद
              </button>
            </header>
            {jumps}
          </div>
        </div>
      ) : null}

      <main className="stage">
        <Cover />
        <Contents go={go} />
        <Intro />
        <Samagri />
        <Naivedya />
        <Prep />
        <Altar />
        <Kalash />
        <RitualOpen go={go} />
        <SankalpPage />
        <GaneshPuja />
        <LakshmiPuja />
        <KuberPuja />
        <Khata />
        <StotraA />
        <StotraB />
        <StotraC />
        <StotraD />
        <GaneshAarti />
        <LakshmiAarti />
        <Kshama />
        <Notes />
      </main>

      <nav className="bottombar" aria-label="पृष्ठ बदलें">
        <button type="button" className="text-btn" onClick={() => step(-1)} disabled={index === 0}>
          पिछला
        </button>
        <span className="folio-live">
          {index + 1} / {pages.length}
        </span>
        <button
          type="button"
          className="text-btn"
          onClick={() => step(1)}
          disabled={index === pages.length - 1}
        >
          अगला
        </button>
      </nav>
    </div>
  );
}
