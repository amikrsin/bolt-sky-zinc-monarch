import type { ReactNode } from "react";
import { folioOf } from "@/data/pages";
import { useReader } from "@/lib/reader-store";

export function Sheet({
  id,
  kicker,
  children,
  bare = false,
}: {
  id: string;
  kicker?: string;
  children: ReactNode;
  bare?: boolean;
}) {
  const folio = folioOf(id);
  return (
    <article id={id} className={bare ? "sheet sheet-bare" : "sheet"}>
      {!bare && (
        <header className="running">
          <span>सम्पूर्ण लक्ष्मी-गणेश दिवाली पूजा विधि</span>
          <span>{kicker}</span>
        </header>
      )}
      <div>{children}</div>
      {!bare && (
        <footer className="folio">
          <span>{folio}</span>
        </footer>
      )}
    </article>
  );
}

export function Rule() {
  return (
    <div className="rule" aria-hidden="true">
      <i />
    </div>
  );
}

export function Figure({
  src,
  alt,
  caption,
  portrait = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  portrait?: boolean;
}) {
  return (
    <figure className={portrait ? "figure portrait" : "figure"}>
      <img src={src} alt={alt} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function CheckItem({ id, children }: { id: string; children: string }) {
  const on = useReader((state) => Boolean(state.checks[id]));
  const toggle = useReader((state) => state.toggle);
  return (
    <label className="check">
      <input
        type="checkbox"
        checked={on}
        onChange={() => toggle(id)}
      />
      <span>{children}</span>
    </label>
  );
}

export function Mantra({
  lines,
  latin,
}: {
  lines: string[];
  latin?: string;
}) {
  return (
    <div className="mantra-block">
      <div className="mantra">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {latin ? <p className="latin">{latin}</p> : null}
    </div>
  );
}

export function Meaning({ children }: { children: string }) {
  return (
    <div className="meaning">
      <p className="slot-label">मंत्र का अर्थ</p>
      <p className="body">{children}</p>
    </div>
  );
}

export function Slot({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="slot">
      <p className="slot-label">{label}</p>
      {children}
    </div>
  );
}
